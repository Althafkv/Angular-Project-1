import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { FormsComponent } from './forms/forms.component';
import { HelppComponent } from './helpp/helpp.component';
import { LocationComponent } from './location/location.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path:'table', component:TableComponent
  },
  {
    path:'chart', component:ChartComponent
  },
  {
    path:'form', component:FormsComponent
  },
  {
    path:'help', component:HelppComponent
  },
  {
    path:'location', component:LocationComponent
  },
  {
    path:'settings', component:SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
