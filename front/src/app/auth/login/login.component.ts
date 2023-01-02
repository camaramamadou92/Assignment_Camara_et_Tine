import { CanActivate } from '@angular/router';
import { ICredentials } from './../../_interfaces/credentials';
import { AuthService } from './../../_Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GuardGuard } from 'src/app/_help/guard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  form : any ={
    email: null,
    password: null
  }

  constructor(){}

    ngOnInit(): void {}

    onSubmit(){

           const email1=this.form.email;
           const pass=this.form.password;
           console.log(this.form);

  }

}
