import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    //console.log(email);
    //console.log(password);
    //this.loginService.login(email, password);
  } 

}
