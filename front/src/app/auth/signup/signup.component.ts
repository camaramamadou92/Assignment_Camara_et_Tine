import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{


  form : any ={
    id : Math.floor(Math.random()*100000000000000000),
    email: null,
    password: null,
    name: null,

  }

  constructor(private http: HttpClient){

  }

    ngOnInit(): void {}

    onSubmit(){

           console.log(this.form);
           this.http.post('http://localhost:8010/api/assignments', this.form).subscribe(
            data => console.log(data),
            err => console.log(err)
          )

  }

}
