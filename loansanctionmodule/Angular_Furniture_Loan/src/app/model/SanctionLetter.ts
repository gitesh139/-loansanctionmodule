import { Customer } from "./Customer";

export class Sanctionletter {
   sid:number;
   sanction_date:string;
   applicant_name:string;
   contact_details:number;
   loan_amt_sanctioned:number;
   interest_type:string;
   rate_Of_interest:number;
   loan_tenure:number;
   monthly_emi_amount:number;
   mode_Of_payment:string;
   remarks:string;
   terms_condition:string;
   status:string;
   processing_fee:string;
   customer:Customer;

}

