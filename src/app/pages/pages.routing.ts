import { Routes, RouterModule } from "@angular/router"
import { NgModule } from '@angular/core';
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes =[
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica', component: GraficaComponent },
          { path: 'account-settings', component: AccountSettingsComponent },
          { path: 'promesas', component: PromesasComponent },
          { path: 'rxjs', component: RxjsComponent },
  
        ],
      },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule{}