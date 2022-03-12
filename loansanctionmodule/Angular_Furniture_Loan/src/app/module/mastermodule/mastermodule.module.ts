import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';

const adminrouting: Routes = [
  {path: 'adminbash', component: DashboardComponent},
  {path: 'city', component: AddStudentComponent}
];

@NgModule({
  declarations: [DashboardComponent, AddStudentComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminrouting),FormsModule
  ]
})
export class MastermoduleModule { }
