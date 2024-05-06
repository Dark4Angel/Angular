import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataService } from "./data.service";
import { response } from "express";
import { error } from "console";

@Injectable()
export class PersonasService{
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();
      
    constructor(private loggingService: LoggingService,
        private dataService: DataService
    ){}


    setPersonas(personas: Persona[]){
      if (personas != null ) {
        this.personas = personas;
      }
        
    }


    obtenerPersonas(){
      return this.dataService.cargarPersonas();
    }

    agregarPersona(persona: Persona){
      console.log("agregarPersona 1")
      this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre)
      console.log("agregarPersona 2")
      console.log(persona)
      console.log(this.personas)
      this.personas.push(persona);
      console.log("agregarPersona 3")
      this.dataService.guardarPersonas(this.personas)
      
      .subscribe({
        
        
        next:(response) => {
          console.log("agregarPersona 4")
          console.log(response);
          //Aqui otras acciones del servicio.
        },
        error: (err) => console.error(err)
        
      });
      
    }

      encontrarPersona(index: number){
          let persona: Persona = this.personas[index];
          return persona;
        }

      modificarPersona(index:number, persona: Persona){
          let persona1 = this.personas[index];

          persona1.nombre = persona.nombre;
          persona1.apellido = persona.apellido;
          this.dataService.modificarPersona(index, persona1)
          .subscribe({
            next: (res) => {
              console.log(res);
              //this.message = res.message ? res.message : 'This tutorial was updated successfully!';
            },
            error: (e) => console.error(e)
            

          })
        }

        eliminarPersona(index:number){
          this.personas.splice(index,1);
          this.dataService.eliminarPersona(index);
          this.modificarPersonas();
          
          
        }

        modificarPersonas(){
          if(this.personas != null)
              //Guarda todas las personas nuevamente para regenerar indicess
              this.dataService.guardarPersonas(this.personas);
        
      }

}




