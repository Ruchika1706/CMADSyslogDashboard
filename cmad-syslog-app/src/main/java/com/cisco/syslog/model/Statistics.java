package com.cisco.syslog.model;

public class Statistics {
	private LogLevel logLevel;
	private Integer count;
//	private Integer errorCount;
//	private Integer warnCount;
//	private Integer noticeCount;
//	private Integer debugCount;
//	private Integer infoCount;
//	private Integer traceCount;
//	public Integer getFatalCount() {
//		return fatalCount;
//	}
//	public void setFatalCount(Integer fatalCount) {
//		this.fatalCount = fatalCount;
//	}
//	public Integer getErrorCount() {
//		return errorCount;
//	}
//	public void setErrorCount(Integer errorCount) {
//		this.errorCount = errorCount;
//	}
//	public Integer getWarnCount() {
//		return warnCount;
//	}
//	public void setWarnCount(Integer warnCount) {
//		this.warnCount = warnCount;
//	}
//	public Integer getNoticeCount() {
//		return noticeCount;
//	}
//	public void setNoticeCount(Integer noticeCount) {
//		this.noticeCount = noticeCount;
//	}
//	public Integer getDebugCount() {
//		return debugCount;
//	}
//	public void setDebugCount(Integer debugCount) {
//		this.debugCount = debugCount;
//	}
//	public Integer getInfoCount() {
//		return infoCount;
//	}
//	public void setInfoCount(Integer infoCount) {
//		this.infoCount = infoCount;
//	}
//	public Integer getTraceCount() {
//		return traceCount;
//	}
//	public void setTraceCount(Integer traceCount) {
//		this.traceCount = traceCount;
//	}
	public LogLevel getLogLevel() {
		return logLevel;
	}
	public String getLogLevelStr() {
		return logLevel.name();
	}
	public Statistics(LogLevel logLevel, Integer count) {
		super();
		this.logLevel = logLevel;
		this.count = count;
	}
	public void setLogLevel(LogLevel logLevel) {
		this.logLevel = logLevel;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
}
