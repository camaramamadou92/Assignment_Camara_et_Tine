import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../etudiant.module';


@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent {
  searchText!: string;
  filteredAssignments!: Etudiant[];
  assignments!: Etudiant[];

  constructor(
   
    private http: HttpClient) {
      this.assignments = [];
     }
  search() {
    // effectuer la recherche en utilisant la variable searchText
    // utilisez la méthode filter() pour filtrer les assignments qui contiennent le texte de recherche
  this.assignments = this.assignments.filter(assignment => {
    return assignment.nom.toLowerCase().includes(this.searchText.toLowerCase());
  });
  //l'adresse du serveur
  this.http.get<Etudiant[]>('http://localhost:8010/api/assignments?search=' + this.searchText)
    .subscribe(data => {
      this.filteredAssignments = data;
    });
  }
  
}
