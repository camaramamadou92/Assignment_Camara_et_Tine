import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import { Matiere } from '../matiere';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-devoir.component.html',
  styleUrls: ['./add-devoir.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // associées au champs input du formulaire
  nomDevoir = '';
  dateDeRendu!: Date;
  auteur = '';
  noteFloat = '';
  EnsembleDeMatiere!: Matiere[];
  photoDeMatiere!: string;
  matiere!: string;
  photoDeIntervenant!: string;
  remarque!: string;

  constructor(
    private assignmentService: AssignmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.EnsembleDeMatiere = Object.values(Matiere);
  }

  onSubmit() {
    console.log('nom de devoir = ' + this.nomDevoir);
    console.log('date de rendu = ' + this.dateDeRendu);
    console.log('auteur = ' + this.auteur);
    console.log('NOTE STRING = ' + this.noteFloat);
    console.log('nom de la matiere = ' + this.matiere);
    console.log('lien de l image= ' + this.photoDeMatiere);

    const a = new Assignment();
    a.id = Math.round(Math.random() * 100000);
    a.nom = this.nomDevoir;
    a.dateDeRendu = this.dateDeRendu;
    a.rendu = false;
    a.auteur = this.auteur;
    a.noteFloat = this.noteFloat;
    a.noteFinal = Number(this.noteFloat);
    a.matiere = this.matiere;
    a.photoDeMatiere = this.photoDeMatiere;
    a.photoDeIntervenant = this.photoDeIntervenant;
    a.remarque = this.remarque;

    this.assignmentService.ajoutAssignment(a).subscribe((reponse) => {
      console.log(reponse.message);
      // maintenant il faut qu'on affiche la liste !!!
      this.router.navigate(['/home']);
    });
  }
}
