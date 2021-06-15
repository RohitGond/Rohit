import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,} from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  hide = true;
  username: any;
  password: any;


  textFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
//    validateEmail(email: any) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
storeData(){
  localStorage.setItem("username", this.username);
 localStorage.setItem("password", this.password);
 
}
  constructor() { }
  
  ngOnInit(): void {
  }

}
