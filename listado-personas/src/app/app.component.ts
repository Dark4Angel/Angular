import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];


  constructor() { }


  ngOnInit(): void {

  }


  }


