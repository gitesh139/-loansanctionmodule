import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { RouterModule, Routes } from '@angular/router';

const routing: Routes = [
  {path: "credit", component:CreditmanagerComponent },
  
];

@NgModule({
  declarations: [CreditmanagerComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing)
  ]
})
export class CreditmanagerModule { }
