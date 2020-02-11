package com.cisco.syslog.model;

import java.util.Date;

import javax.persistence.*;

@Entity
public class Syslog {
	@Id
	@GeneratedValue
	private Integer Id;
	@Enumerated(EnumType.ORDINAL)
	private LogLevel logLevel;
	@Temporal(TemporalType.TIMESTAMP)
	private Date timeStamp;
	private String hostName;
	private String sourceType;
	private String message;
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public LogLevel getLogLevel() {
		return logLevel;
	}
	public void setLogLevel(LogLevel logLevel) {
		this.logLevel = logLevel;
	}
	
	public Date getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getHostName() {
		return hostName;
	}
	public void setHostName(String hostName) {
		this.hostName = hostName;
	}
	public String getSourceType() {
		return sourceType;
	}
	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

}
