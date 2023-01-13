import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-devoir',
  templateUrl: './add-devoir.component.html',
  styleUrls: ['./add-devoir.component.css']
})
export class AddDevoirComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);


  form : any ={
    email: null,
    password: null
  }
  nomDevoir = "";
  dateDeRendu!:Date;
  email: any;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {}
  onClick(){}

}
