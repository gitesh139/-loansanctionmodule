import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoansanctionService } from 'app/module/shared/loansanction.service';
import { Sanctionletter } from 'app/model/sanctionletter';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EmailSender } from 'app/model/email-sender';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent implements OnInit {

  email:any={
    toEmail: '',
    subject: '',
    textmsg: '',
    

  }

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

     //GENERATE SANCTION LETTER

    public openPDF(): void {
      let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('angular-demo.pdf');
      });
  }
    
  
  //EMAIL SENDING
  sendmail()
  {
    
     this.email=
    {
         
      toEmail:this.loanSanctionObj.customer.email,
      subject:"Loan Sanction Letter",
      textmsg:"Your Loan Sanction Has Been Approved And Sending Loan Sanction Letter With Attachment"
    }
    this.common.sendEmail(this.email).subscribe();
    
  }

  CalculateTotalAmmount()
  {
    this.loanSanctionObj.loan_amt_sanctioned=((this.loanSanctionObj.customer.loanAmount*this.loanSanctionObj.loan_tenure)*(this.loanSanctionObj.rate_Of_interest/100));
  }

  CalculateEMI()
  {
    this.loanSanctionObj.monthly_emi_amount=(this.loanSanctionObj.loan_amt_sanctioned/(this.loanSanctionObj.loan_tenure*12));
  }

  updateData(loanSanctionObj:Sanctionletter)
  {
    console.log(loanSanctionObj);
    this.common.updateSanctionLetter(loanSanctionObj.sid,loanSanctionObj).subscribe();
  }
 
}
