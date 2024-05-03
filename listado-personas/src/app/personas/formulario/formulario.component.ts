import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  //providers: [LoggingService]
})
export class FormularioComponent implements OnInit {

//@Output() personaCreada = new EventEmitter<Persona>();
nombreInput:string = '';
apellidoInput:string = '';
index: number;
modoEdicion:number;

//@ViewChild('nombreInput') nombreInput: ElementRef
//@ViewChild('apellidoInput') apellidoInput: ElementRef

constructor(private loggingService:LoggingService,
  private personasService:PersonasService,
  private router: Router,
  private route: ActivatedRoute) { 
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
  );
  }


ngOnInit(): void {
  this.index = this.route.snapshot.params['id'];
  this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

  if(this.modoEdicion != null && this.modoEdicion === 1){
    let persona: Persona = this.personasService.encontrarPersona(this.index);
    this.nombreInput = persona.nombre;
    this.apellidoInput = persona.apellido;
    }
  }



  guardarPersona(){
    console.log("guardarPersona 0" )
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    console.log("guardarPersona 1" )
    if(this.modoEdicion != null && this.modoEdicion === 1){
      console.log("guardarPersona 2" )
      this.personasService.modificarPersona(this.index, persona1);
      console.log("guardarPersona 3" )
    }else{
      console.log("guardarPersona 4" )
      this.personasService.agregarPersona(persona1);
      console.log("guardarPersona 5" )
    } 
    console.log("guardarPersona 6" )
    this.router.navigate(['personas']);
    console.log("guardarPersona 7" )

  }   

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(["personas"]);
  }

}





       
         







