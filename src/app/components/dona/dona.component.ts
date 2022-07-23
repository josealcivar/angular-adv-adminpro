import { Component, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo:string="vtas";

  @Input('labels') doughnutChartLabels: string[] = [ 'Labels1', 'Labels2', 'Labels3' ];
  @Input('data')  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] ,
      backgroundColor:['#6857E6','#009FEE','#F02059']
    },
    ]
  };
   
 

  public doughnutChartType: ChartType = 'doughnut';
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
 
  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

}
