import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { Sanctionletter } from 'app/model/sanctionletter';
import { LoansanctionService } from 'app/module/shared/loansanction.service';




@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private loanService:LoansanctionService) { }
  
  customerlist:Sanctionletter[];

  ngOnInit(): void {
      this.loanService.getCustomerData().subscribe(data=>{
        this.customerlist=data;
        console.log("-------------------------");
        console.log(this.customerlist);
      })      
  }

}

