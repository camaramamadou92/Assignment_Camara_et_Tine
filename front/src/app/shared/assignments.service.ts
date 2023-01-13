import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { bdInitialAssignments } from './data';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  assignments: Assignment[] = [];

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  url = 'http://localhost:8010/api/assignments';
  //url = 'https://angular-api-assignment.herokuapp.com/api/assignments';

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url);
  }

  getAssignmentsPagine(page: number, limit: number): Observable<Assignment> {
    return this.http.get<Assignment>(this.url);
  }

  getAssignment(id: number): Observable<Assignment | undefined> {
    return this.http.get<Assignment>(this.url + '/' + id);
  }

  ajoutAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment.nom, 'ajouté');
    return this.http.post<Assignment>(this.url, assignment);
  }

  majAssignment(assignment: Assignment): Observable<any> {
    return this.http.put<Assignment>(this.url, assignment);
  }

  supprimerAssignment(assignment: Assignment): Observable<any> {
    return this.http.delete(this.url + '/' + assignment._id);
  }

  // version naive qui ne renvoie rien
  // on en peut pas savoir quand tous les add auront été faits
  peuplerBD() {
    bdInitialAssignments.forEach((assignment) => {
      const a = new Assignment();

      a.nom = assignment.nom;
      a.dateDeRendu = new Date(assignment.dateDeRendu);
      a.rendu = assignment.rendu;
      a.id = assignment.id;

      this.ajoutAssignment(a).subscribe((reponse) => {
        console.log(assignment.nom + ' ajouter dans la BD');
      });
    });
  }


  peuplerBDAvecForkJoin(): Observable<any> {
    const tabT: any = [];
    bdInitialAssignments.forEach((a) => {
      const t = new Assignment();
      t.id = a.id;
      t.nom = a.nom;
      t.dateDeRendu = new Date(a.dateDeRendu);
      t.rendu = a.rendu;
      tabT.push(this.ajoutAssignment(t));
    });
    return forkJoin(tabT); 
  }
}
