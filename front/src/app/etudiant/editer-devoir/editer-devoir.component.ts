import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { datahelp } from 'src/app/_Services/datahelp';
import { SignupService } from 'src/app/_Services/signup.service';
import { TokenService } from 'src/app/_Services/token.service';
import { form1 } from 'src/app/_Services/datauser';
@Component({
  selector: 'app-editer-devoir',
  templateUrl: './editer-devoir.component.html',
  styleUrls: ['./editer-devoir.component.css']
})



export class EditerDevoirComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  index1!: number;
  matierehelp = datahelp;
  form2= form1;

  constructor(private authService: SignupService, private router: Router, private tokenservice : TokenService,){

  }



  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  valider (){
    this.router.navigate(['add-devoir']);

  }

}
