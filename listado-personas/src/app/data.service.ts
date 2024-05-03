import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { Observable, of } from 'rxjs';


@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    cargarPersonas(): Observable<Persona[]> {
        return this.httpClient.get<Persona[]>('https://listado-personas-e4eb9-default-rtdb.firebaseio.com/datos.json');
    }

    guardarPersonas(personas: Persona[]): Observable<any> {
        return this.httpClient.put('https://listado-personas-e4eb9-default-rtdb.firebaseio.com/datos.json', personas);
     
    }

    modificarPersona(index:number, persona: Persona): Observable<any>{
        console.log( "El indice es: " + index );
        
            console.log(persona)
      
        console.log( "La persona es: " + persona.toString() );

        let url: string;
        url = 'https://listado-personas-e4eb9-default-rtdb.firebaseio.com/datos/' + index + '.json';
        return this.httpClient.put( url, persona);
            
    }

    eliminarPersona(index:number){
        let url: string;
        url = 'https://listado-personas-e4eb9-default-rtdb.firebaseio.com/datos/' + (index) + '.json';
        console.log("url de eliminarPersona:" + url);
        this.httpClient.delete( url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Persona: " + response);
                },
                (error) => console.log("Error en eliminar Persona: " + error)
            );
    }

     /* modificarPersona(index:number, persona: Persona): Observable<any>  {
        let url: string;
        this.httpClient('https://listado-personas-e4eb9-default-rtdb.firebaseio.com/datos.json'+ index, persona);
        console.log("url de modificarPersona:" + url);
        this.httpClient.put( url, persona);
           
    }  */


/*     guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-e4eb9-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
        (response) => {
            console.log("resultado guardar Personas: " + response);
        },
            (error) => console.log("Error al guardar Personas: " + error)
        );
    } */

    
}

    



