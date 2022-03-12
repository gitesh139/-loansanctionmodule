package com.cjc.app.fl.main.controller.exception;

  public class DataNotReceived extends RuntimeException
{
    public DataNotReceived(String msg)
  {
	super(msg);  
  }
}
