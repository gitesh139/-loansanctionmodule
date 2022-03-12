package com.cjc.app.fl.main.serviceImpl;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailParseException;
import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cjc.app.fl.main.model.SanctionLetter;
import com.cjc.app.fl.main.repository.LoanRepository;
import com.cjc.app.fl.main.service.LoanService;
import com.cjc.app.fl.main.model.EmailSender;
@Service
public class LoanServiceImpl implements LoanService {

	@Autowired
	LoanRepository lr;

	@Override
	public void postdata(SanctionLetter sl) {
		
		 lr.save(sl);
	}

	@Override
	public Optional<SanctionLetter> getdata(int sid) {
	
		return lr.findById(sid);
	}
	 
	@Override
	public List<SanctionLetter> getallData()
	{
		return lr.findAll();
	}
	
	@Override
	public SanctionLetter updateSingleSanctionRecord(int sid, SanctionLetter s) {
		SanctionLetter st=lr.findBySid(sid);   //database
		st.setStatus(s.getStatus());   
		st.setRemarks(s.getRemarks());
		st.setLoan_amt_sanctioned(s.getLoan_amt_sanctioned());	
		st.setMonthly_emi_amount(s.getMonthly_emi_amount());
		st.setSanction_date(s.getSanction_date());
		return lr.save(st);
	} 
	//***********EMAIL SENDING*******************

	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendEmail(EmailSender e)
	{
	
		SimpleMailMessage mailMessage=new SimpleMailMessage();
		
		mailMessage.setFrom(e.getFromEmail());
		mailMessage.setTo(e.getToEmail());
		mailMessage.setSubject(e.getSubject());
		mailMessage.setText(e.getTextmsg());
		
		javaMailSender.send(mailMessage);
		System.out.println("Email Send successfully");
		
		
	}
	
	//***********EMAIL SENDING WITH ATTACHMENT*******************
	
	public String sendEmailAttachement(EmailSender eml) {
		  MimeMessage message=javaMailSender.createMimeMessage();
	  
	  try { 
		  MimeMessageHelper helper=new MimeMessageHelper(message,true);
		  
	  helper.setFrom(eml.getFromEmail());
	  helper.setTo(eml.getToEmail());
	  helper.setSubject(eml.getSubject()); 
	  helper.setText(eml.getTextmsg());
	  
	  FileSystemResource file=new FileSystemResource("F:\\Java\\Angular\\notes\\Child Routing.pdf");
	  helper.addAttachment(file.getFilename(), file); 
	  javaMailSender.send(message);
	  
	  } catch (MessagingException e) {
		  throw new MailParseException(e); }
	  
	  
	  
	  return "emailsend"; }



}
