import { LoginService } from './../../_Services/login.service';
import { CanActivate } from '@angular/router';
import { ICredentials } from './../../_interfaces/credentials';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GuardGuard } from 'src/app/_help/guard.guard';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_Services/token.service';

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

  constructor(
     private tokenservice : TokenService,
     private authservice : LoginService){}

    ngOnInit(): void {}

onSubmit(){

                console.log(this.form)
                this.authservice.login(this.form).subscribe(
                  data => {
                    console.log(data.access_token)
                    this.tokenservice.saveToken(data.access_token)
                  },
                  err => console.log(err)
                )
}

}
