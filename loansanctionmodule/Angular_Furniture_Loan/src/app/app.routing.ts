import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { AbcModule } from './module/abc/abc.module';
import { LoansanctionModule } from './module/loansanction/loansanction.module';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path:"log",component:LoginComponent
  }
,
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'admin', loadChildren: () => MastermoduleModule},
      {path: 'emp', loadChildren: () => EmployeeModule},
      {path:'operation',loadChildren:()=>OperationexecutiveModule},
      {path:'cr',loadChildren:()=>LoansanctionModule},
      {path:'relation',loadChildren:()=>RelationexecutiveModule},
      {path:'ab',loadChildren:()=>AbcModule}
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



