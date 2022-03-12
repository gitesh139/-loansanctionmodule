import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansanctionComponent } from './loansanction/loansanction.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ApprovedCustomerComponent } from './approved-customer/approved-customer.component';
import { RejectedCustomerComponent } from './rejected-customer/rejected-customer.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { FormsModule } from '@angular/forms';

const routing: Routes = [
  {path: "loansanction", component:LoansanctionComponent },
  {path: 'dashboard', component:DashboardComponent},
  {path:'customer_details', component:CustomerDetailsComponent},
  {path:'customerlist/:sid', component:CustomerlistComponent},
  {path:'sanctionletter/:sid', component:SanctionLetterComponent},
  {path: 'approved_customer', component:ApprovedCustomerComponent},
  {path:'rejected_customer', component:RejectedCustomerComponent},
  {path:'sanction_letter',component:SanctionLetterComponent},
  {path:'customerlist',component:CustomerlistComponent}
  
]; 

@NgModule({
  declarations: [LoansanctionComponent, CustomerDetailsComponent, ApprovedCustomerComponent, RejectedCustomerComponent, SanctionLetterComponent, DashboardComponent, CustomerlistComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),FormsModule
  ]
})
export class LoansanctionModule { }
