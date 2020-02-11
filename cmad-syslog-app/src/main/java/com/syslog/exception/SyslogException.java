package com.syslog.exception;

@SuppressWarnings("serial")
public class SyslogException extends Exception {
	
	public SyslogException(String errorMessage, Throwable err) {
	    super(errorMessage, err);
	}

}
