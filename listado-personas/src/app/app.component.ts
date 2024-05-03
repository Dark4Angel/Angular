import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import * as firebase from 'firebase/app';
//import { LoggingService } from './LoggingService.service';
//import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
    //new Persona('Juan','Perez'), 
    //new Persona('Laura', 'Juarez'),
    //new Persona('Karla', 'Lara')

  constructor() { }

  /* constructor(private loggingService:LoggingService,
  private personasService: PersonasService) { } */

  ngOnInit(): void {
/*     firebase.initializeApp({
    apiKey: "AIzaSyC7QzXwCGSfvjEd62RCGF9F0DDsI31u88w",
    authDomain: "listado-personas-e4eb9.firebaseapp.com",
    }) */
    }
    //this.personas = this.personasService.personas;
    
  }

 // (personaCreada)= "personaAgregada($event)"
  //personaAgregada(persona: Persona){
   // this.personasService.agregarPersona(persona);



    //this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona:" + persona.nombre);
    //this.personas.push(persona);

  //personaAgregada(persona: Persona){
    //this.personas.push(persona);

  /* nombreInput:string = '';
  apellidoInput:string = '';


agregarPersona(){
  let persona1 = new Persona(this.nombreInput, this.apellidoInput);
  this.personas.push( persona1 );
} */



