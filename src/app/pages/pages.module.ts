import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';



import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module'; 
import { ComponentsModule } from '../components/components.module';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [

    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    GraficaComponent,
    
  ], exports:[
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule, SharedModule,
    RouterModule,
    FormsModule,

    ComponentsModule
  ]
})
export class PagesModule { }
