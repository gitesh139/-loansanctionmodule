import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sanctionletter } from 'app/model/sanctionletter';
import { LoansanctionService } from 'app/module/shared/loansanction.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private common:LoansanctionService,private location:Location) { }

  loanSanctionObj:Sanctionletter;
  ngOnInit(): void {
      // Observable
  this.routes.paramMap.subscribe(param1=>{
    this.common.getCustomerSingleRecord(parseInt(param1.get('sid'))).subscribe(data=>{
      this.loanSanctionObj=data;
    })
    })
    }
   
   getback() {
    this.location.back();
  }

}
