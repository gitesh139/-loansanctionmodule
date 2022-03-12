package com.cjc.app.fl.main.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class SanctionLetter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	private String sanction_date;
	private String applicant_name;
	private double contact_details; 
	private double loan_amt_sanctioned;
	private String interest_type;
	private int rate_Of_interest;
	private int loan_tenure;
	private double monthly_emi_amount;
	private String mode_Of_payment; 
	private String remarks;
	private String terms_condition;
	private String status;
	private String processing_fee;
	@OneToOne(cascade = CascadeType.ALL)
	private Customer customer;
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getSanction_date() {
		return sanction_date;
	}
	public void setSanction_date(String sanction_date) {
		this.sanction_date = sanction_date;
	}
	public String getApplicant_name() {
		return applicant_name;
	}
	public void setApplicant_name(String applicant_name) {
		this.applicant_name = applicant_name;
	}
	public double getContact_details() {
		return contact_details;
	}
	public void setContact_details(double contact_details) {
		this.contact_details = contact_details;
	}
	public double getLoan_amt_sanctioned() {
		return loan_amt_sanctioned;
	}
	public void setLoan_amt_sanctioned(double loan_amt_sanctioned) {
		this.loan_amt_sanctioned = loan_amt_sanctioned;
	}
	public String getInterest_type() {
		return interest_type;
	}
	public void setInterest_type(String interest_type) {
		this.interest_type = interest_type;
	}
	public int getRate_Of_interest() {
		return rate_Of_interest;
	}
	public void setRate_Of_interest(int rate_Of_interest) {
		this.rate_Of_interest = rate_Of_interest;
	}
	public int getLoan_tenure() {
		return loan_tenure;
	}
	public void setLoan_tenure(int loan_tenure) {
		this.loan_tenure = loan_tenure;
	}
	public double getMonthly_emi_amount() {
		return monthly_emi_amount;
	}
	public void setMonthly_emi_amount(double monthly_emi_amount) {
		this.monthly_emi_amount = monthly_emi_amount;
	}
	public String getMode_Of_payment() {
		return mode_Of_payment;
	}
	public void setMode_Of_payment(String mode_Of_payment) {
		this.mode_Of_payment = mode_Of_payment;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getTerms_condition() {
		return terms_condition;
	}
	public void setTerms_condition(String terms_condition) {
		this.terms_condition = terms_condition;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getProcessing_fee() {
		return processing_fee;
	}
	public void setProcessing_fee(String processing_fee) {
		this.processing_fee = processing_fee;
	}
	
	
}
