
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { EmailSender } from 'app/model/email-sender';
import { Sanctionletter } from 'app/model/sanctionletter';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoansanctionService {

  constructor(private httpclient:HttpClient) { }
  
  url1:string="http://localhost:9090/sanctionletterG";
  url2:string="http://localhost:9090/sanctionletterS";
  
  url3:string="http://localhost:9090/sendemailwithattch";
  //url4:string="http://localhost:9090/sendemailwithattch";

  getCustomerData():Observable<Sanctionletter[]>
   {
    return this.httpclient.get<Sanctionletter[]>(this.url1);
   }

  getCustomerSingleRecord(id:number):Observable<Sanctionletter>
   {
    return this.httpclient.get<Sanctionletter>(this.url2+"/"+id)
   }

  sendEmail(email:any):Observable<any>
   {
    return this.httpclient.post<any>(this.url3,email);
   }

  updateSanctionLetter(id:number,san:Sanctionletter):Observable<Sanctionletter>
  {
    return this.httpclient.patch<Sanctionletter>(this.url2+"/"+id,san);
  }
}
