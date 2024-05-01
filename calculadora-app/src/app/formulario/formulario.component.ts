import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent{


  operandoA: number 
  operandoB: number

   
    
  @Output() resultadoSuma = new EventEmitter<number>

  
      
  sumar(): void{
   //this.resultado = this.operandoA + this.operandoB;
   let resultado = this.operandoA + this.operandoB;
   this.resultadoSuma.emit(resultado);
    
  } 

} 



