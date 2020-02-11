package com.cisco.syslog.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import com.cisco.syslog.model.Statistics;
import com.cisco.syslog.model.Syslog;

@Component
public interface SyslogService {
	 public abstract void storeSyslog();
	 public abstract List<Statistics> getLogStats(Date fromDate, Date toDate);
	 public abstract List<Syslog> getLogsByPeriod(Date fromDate, Date toDate);
	 public abstract void processSyslogs(String logMessage);
	 public Date convertStringToDate(String dateStr,SimpleDateFormat dateFormat,boolean isYearPresent);

}
