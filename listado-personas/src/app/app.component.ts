import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import * as firebase from 'firebase/app';

import { PersonasService } from './personas.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private loginService:LoginService) { }


  ngOnInit(): void {
  /*  firebase.initializeApp({
    apiKey: "AIzaSyC7QzXwCGSfvjEd62RCGF9F0DDsI31u88w",
    authDomain: "listado-personas-e4eb9.firebaseapp.com",
    }) */
  }



  isAutenticado(){
      return this.loginService.isAutenticado();
  }
 

  salir(){
      this.loginService.logout();
    }
    
  }

 