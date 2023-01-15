import { SignupService } from '../../_Services/signup.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_Services/token.service';
import { form1 } from 'src/app/_Services/datauser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
 form2 = form1;
  aide =false;
  form : any ={
    id : Math.floor(Math.random()*100000000000000000),
    email: null,
    password: null,
    name: null,
    date: null,
  }

  constructor(private authService: SignupService, private router: Router, private tokenservice : TokenService,){

  }

    ngOnInit(): void {}

    onSubmit(){

            this.form2=this.form;
            console.log(this.form2);
            this.authService.signup(this.form2).subscribe(
              (data:any) => console.log(data),
              (err: any) => console.log(err)
            )
          this.router.navigate(['add-devoir']);



  }

}
