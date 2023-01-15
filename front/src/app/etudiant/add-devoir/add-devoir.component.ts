import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { data__listeDesMatieres } from 'src/app/_Services/data';
import { datahelp } from 'src/app/_Services/datahelp';

@Component({
  selector: 'app-add-devoir',
  templateUrl: './add-devoir.component.html',
  styleUrls: ['./add-devoir.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AddDevoirComponent{
  assignmentsForm!: FormGroup;
  nom = ""; // champ du formulaire
  dateDeRendu?:Date;
  auteur = "";
  remarque = "";
  note?: number;
  matiere = "";
  rendu = false;

  constructor(private router:Router) { }

  index: number | undefined;

  listeDesMatieres = data__listeDesMatieres;
  matierehelp = datahelp;



onClick(){

  return this.router.navigate(['detail-devoir']);
}

Dangular0(){

this.matierehelp[0] = this.listeDesMatieres[1];
console.log(this.matierehelp)
console.log(this.listeDesMatieres)
  return this.router.navigate(['detail-devoir']);
}
Dangular1(){

  this.matierehelp[0] = this.listeDesMatieres[2];
  console.log(this.matierehelp)
  console.log(this.listeDesMatieres)
    return this.router.navigate(['detail-devoir']);
  }
  Dangular2(){

    this.matierehelp[0] = this.listeDesMatieres[3];
    console.log(this.matierehelp)
    console.log(this.listeDesMatieres)
      return this.router.navigate(['detail-devoir']);
    }
    Dangular3(){

      this.matierehelp[0] = this.listeDesMatieres[4];
      console.log(this.matierehelp)
      console.log(this.listeDesMatieres)
        return this.router.navigate(['detail-devoir']);
      }
      Dangular4(){

        this.matierehelp[0] = this.listeDesMatieres[5];
        console.log(this.matierehelp)
        console.log(this.listeDesMatieres)
          return this.router.navigate(['detail-devoir']);
        }
        Dangular5(){

          this.matierehelp[0] = this.listeDesMatieres[6];
          console.log(this.matierehelp)
          console.log(this.listeDesMatieres)
            return this.router.navigate(['detail-devoir']);
          }
}

