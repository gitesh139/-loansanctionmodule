package com.cjc.app.fl.main.service;

import java.util.List;
import java.util.Optional;

import com.cjc.app.fl.main.model.EmailSender;
import com.cjc.app.fl.main.model.SanctionLetter;

public interface LoanService {

	public void postdata(SanctionLetter sl);

	public Optional<SanctionLetter> getdata(int sid);

	//**************EMAIL SENDING*********************
	public void sendEmail(EmailSender eml);

	public String sendEmailAttachement(EmailSender eml);

	public List<SanctionLetter> getallData();

	public SanctionLetter updateSingleSanctionRecord(int sid, SanctionLetter s);
	
	

}
