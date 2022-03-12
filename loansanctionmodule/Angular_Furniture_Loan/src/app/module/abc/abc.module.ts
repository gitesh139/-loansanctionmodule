import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';


const routing: Routes = [
  {path: 'abcdash', component:DashbordComponent }
 
  
];

@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing)
  ]
})
export class AbcModule { }
