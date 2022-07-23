import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 35;
  @Input() btnClass: string = "btn-primary";
  @Output('valor') valor:EventEmitter<number> =new EventEmitter<any>();

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number){
    if( this.progreso >=100 && valor>=0){
      this.valor.emit(100);
    return this.progreso=100;  
    }

    if( this.progreso <=0 && valor<0){
      this.valor.emit(0);
      return this.progreso=0;  
      }

      this.valor.emit(this.progreso);
    return this.progreso = this.progreso + valor;
    
  }

  onChange(valorNuevo:number){

    if(valorNuevo >= 100){
      this.progreso = 100;
    } else if (valorNuevo<= 0){
      this.progreso=0;
    }else {
      this.progreso =valorNuevo;
    }
    
  }

}
