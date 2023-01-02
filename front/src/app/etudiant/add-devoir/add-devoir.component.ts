import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-devoir',
  templateUrl: './add-devoir.component.html',
  styleUrls: ['./add-devoir.component.css']
})
export class AddDevoirComponent implements OnInit {

  form : any ={
    email: null,
    password: null
  }
  nomDevoir = "";
  dateDeRendu!:Date;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {}
  

}
