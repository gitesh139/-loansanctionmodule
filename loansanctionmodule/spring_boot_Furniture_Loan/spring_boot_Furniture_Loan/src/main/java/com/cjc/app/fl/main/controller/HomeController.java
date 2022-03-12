package com.cjc.app.fl.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cjc.app.fl.main.model.SanctionLetter;
import com.cjc.app.fl.main.service.LoanService;
import com.cjc.app.fl.main.controller.exception.DataNotReceived;
import com.cjc.app.fl.main.model.EmailSender;

@CrossOrigin("*")
@RestController
public class HomeController {

	@Autowired
	LoanService ls;
	
	@PostMapping("/sanctionletter")
	public void postData(@RequestBody SanctionLetter  sl)
	{
		
	ls.postdata(sl);
		
	}
	
//	@GetMapping("/sanctionletterS/{sid}")
//	public Optional<SanctionLetter> getData(@PathVariable int sid)
//	{
//		return ls.getdata(sid);
//	}
	
//	@GetMapping("/sanctionletterG")
//	public List<SanctionLetter> Getdata()
//	{
//		return ls.getallData();
//	}
	
//	@PatchMapping("/sanctionletterS/{sid}")
//	public SanctionLetter updateSingleData(@PathVariable int sid,@RequestBody SanctionLetter s)
//	{
//		SanctionLetter st=ls.updateSingleSanctionRecord(sid,s);
//		return st;		
//	}
	
	//***********EMAIL SENDING*******************
//	@Autowired
//	EmailSenderService ess;

	@Value("${spring.mail.username}")
	private String fromEmail;
	
	@PostMapping(value = "/sendemail")// http://localhost:2233/sendemail
	public String EmailSend(@RequestBody EmailSender eml) {
		eml.setFromEmail(fromEmail);
		try {
			ls.sendEmail(eml);
			return "Emailsend";
		}
		catch (Exception e) {
			e.printStackTrace();
			return "Email can not sent";
		}
		
	}
	@PostMapping(value = "/sendemailwithattch") 
	  public String sendEmailAttachement(@RequestBody EmailSender eml)
	  {
	  eml.setFromEmail(fromEmail); 
	  
	  return ls.sendEmailAttachement(eml); 
	  }
	
	//***********EXCEPTION HANDLING*******************	
	
     //**** FOR GET DATA********
//	@GetMapping("/sanctionletterS/{sid}")
//	public Optional<SanctionLetter> getData(@PathVariable int sid)
//	{
//	
//		try
//		{
//			Optional<SanctionLetter> s=ls.getdata(sid);   
//			System.out.println(s.get().getApplicant_name());
//			return s;
//			
//		}
//		catch(RuntimeException e)
//		{
//			
//			throw new DataNotReceived("No data Available");
//		}
//		
//	}
//	
//	@ExceptionHandler(DataNotReceived.class)
//	  public String DataNotReceivedExceptionHandler(DataNotReceived e)
//	  {
//		  return e.getMessage();
//	  }
	
	
	//***********STATUS CODES*******************	
	
	@GetMapping("/sanctionletterG")
	public ResponseEntity<List<SanctionLetter>> Getdata()
	{
		return new ResponseEntity<List<SanctionLetter>>(ls.getallData(),HttpStatus.OK);
	}
	
	@PatchMapping("/sanctionletterS/{sid}")
	public ResponseEntity<SanctionLetter> updateSingleData(@PathVariable int sid,@RequestBody SanctionLetter s)
	{
		
		return new ResponseEntity<SanctionLetter>(ls.updateSingleSanctionRecord(sid,s),HttpStatus.OK);		
	}
	
	@GetMapping("/sanctionletterS/{sid}")
	public ResponseEntity<Optional<SanctionLetter>> getData(@PathVariable int sid)
	{
	
		try
		{
			Optional<SanctionLetter> s=ls.getdata(sid);   
			System.out.println(s.get().getApplicant_name());
			return new ResponseEntity<Optional<SanctionLetter>>(s,HttpStatus.OK);
			
		}
		catch(RuntimeException e)
		{
			
			throw new DataNotReceived("No data Available");
		}
		
	}
	
	@ExceptionHandler(DataNotReceived.class)
	  public ResponseEntity<String> DataNotReceivedExceptionHandler(DataNotReceived e)
	  {
		  return new ResponseEntity<String>(e.getMessage(),HttpStatus.NOT_FOUND);
	  }
}
