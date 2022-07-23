import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {

  valorIncrementador1: number=10;
  valorIncrementador2: number=20;
 
  get getProgreso1(){
   return `${this.valorIncrementador1}%`;
  }

  get getProgreso2(){
    return `${this.valorIncrementador2}%`;
   }

   
}
