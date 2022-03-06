import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  myForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    adress: new FormControl(''),
    job: new FormControl(''),
  });
  onSubmit(){
    console.log(this.myForm.value);
  }
  ngOnInit(): void {
  }

}
