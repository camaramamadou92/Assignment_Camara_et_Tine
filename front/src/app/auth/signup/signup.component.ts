import { SignupService } from '../../_Services/signup.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  aide =false;
  form : any ={
    id : Math.floor(Math.random()*100000000000000000),
    email: null,
    password: null,
    name: null,


  }

  constructor(private authService: SignupService, private router: Router, private tokenservice : TokenService,){

  }

    ngOnInit(): void {}

    onSubmit(){

           this.router.navigate(['add-devoir']);
           console.log(this.form);
           this.authService.signup(this.form).subscribe(
            (data:any) => console.log(data),
            (err: any) => console.log(err)
          )



  }

}
