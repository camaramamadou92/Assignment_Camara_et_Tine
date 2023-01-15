import { AddDevoirComponent } from './../add-devoir/add-devoir.component';
import { Component, OnInit } from '@angular/core';
import { data__listeDesMatieres } from 'src/app/_Services/data';
import { datahelp } from 'src/app/_Services/datahelp';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detail-devoir',
  templateUrl: './detail-devoir.component.html',
  styleUrls: ['./detail-devoir.component.css'],
  providers: [AddDevoirComponent]
})
export class DetailDevoirComponent  {
  constructor(private router:Router) { }

  //listeDesMatieres = data__listeDesMatieres;
  index1!: number;
  matierehelp = datahelp;

  rendre(){

    return this.router.navigate(['editer-devoir'])

  }
  }
