import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
 
  resultadoPadre: number; 


  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;

  }
  
 /*  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  mayor: number = 0; */


    
  } 


  /* MayorDeTres(): void {
    if (this.num1 >= this.num2 && this.num1 >= this.num3) {
    this.mayor= this.num1
    } else if (this.num2>= this.num1 && this.num2 >= this.num3) {
    this.mayor = this.num2
    } else {
      this.mayor = this.num3
    }
    } */
    
    
    




