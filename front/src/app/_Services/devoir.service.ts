import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { Assignment } from '../etudiant/layout-home/devoir-model';
import { LoggingService } from '../_Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class DevoirService {

  constructor() { }
}

export class AssignmentsService {
  assignments:Assignment[] = [];

  constructor(private loggingService:LoggingService,
              private http:HttpClient) { }

  url = "http://localhost:8010/api/assignments";
   //url = "mongodb+srv://admin:admin@cluster0.offqs94.mongodb.net/assignments?retryWrites=true&w=majority";

  getAssignments():Observable<Assignment[]> {
    // return of(this.assignments);

    return this.http.get<Assignment[]>(this.url);
  }

  getAssignmentsPagine(page:number, limit:number):Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}&limit=${limit}`);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    //let assignment = this.assignments.find(elem => elem.id === id);

    //return of(assignment);

    return this.http.get<Assignment>(this.url + "/" + id);
  }

  addAssignment(assignment:Assignment):Observable<any>{
    //this.assignments.push(assignment);

    this.loggingService.log(assignment.nom, "ajouté");

    //return of(`Assignment ${assignment.nom} ajouté`);

    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    // pour le moment rien de spécial à faire
    // mais plus tard -> requête PUT sur un web service
    // pour mettre à jour une BD distante...

    //return of(`Assignment ${assignment.nom} modifié`);
    return this.http.put<Assignment>(this.url, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {

    //const pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos, 1);

    //return of(`Assignment ${assignment.nom} supprimé`);
    return this.http.delete(this.url + "/" + assignment._id);
  }

  // version naive qui ne renvoie rien
  // on en peut pas savoir quand tous les add auront été faits


}
