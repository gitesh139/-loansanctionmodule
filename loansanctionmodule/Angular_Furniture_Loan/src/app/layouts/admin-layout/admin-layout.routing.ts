import { DashboardComponent } from './../../module/mastermodule/dashboard/dashboard.component';
import { AddStudentComponent } from './../../module/mastermodule/add-student/add-student.component';
import { Routes } from '@angular/router';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    
    { path: 'icons',          component: AddStudentComponent }
];
