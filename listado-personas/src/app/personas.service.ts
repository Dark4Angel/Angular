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
        this.personas = personas;
    }


    obtenerPersonas(){
      return this.dataService.cargarPersonas();
    }


      agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre)
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas)
        .subscribe({
          next:(response) => {
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
          this.dataService.modificarPersona(index, this.personas)
        }

        eliminarPersona(index:number){
          this.personas.splice(index,1);
        }


}




