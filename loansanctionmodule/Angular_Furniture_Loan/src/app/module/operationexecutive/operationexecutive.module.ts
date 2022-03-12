import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewequiryComponent } from './viewequiry/viewequiry.component';
import { ViewcusstomerComponent } from './viewcusstomer/viewcusstomer.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';


const oerouting: Routes = [
  {path: 'oedash', component: DashboardComponent},
  {path:'oeenq',component:ViewequiryComponent},
  {path:'oecustomer',component:ViewcusstomerComponent},
  {path:'cibil',component:CibilscoreComponent}
  
];
@NgModule({
  declarations: [DashboardComponent, ViewequiryComponent, ViewcusstomerComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting)
  ]
})
export class OperationexecutiveModule { }
