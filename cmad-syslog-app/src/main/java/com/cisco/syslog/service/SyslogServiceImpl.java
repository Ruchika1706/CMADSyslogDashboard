package com.cisco.syslog.service;

import java.lang.reflect.Array;
import java.math.BigInteger;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cisco.syslog.model.LogLevel;
import com.cisco.syslog.model.Statistics;
import com.cisco.syslog.model.Syslog;
import com.cisco.syslog.repository.SyslogRepository;

@Service
public class SyslogServiceImpl implements SyslogService{
	@Autowired
	SyslogRepository repository;
	private static String MONTH_REGEX="(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)";
	private Pattern timeStampPattern = Pattern.compile(MONTH_REGEX+"\\s+\\d{1,2}\\s+[0-9]+:[0-9]+:[0-9]+.\\d{3}");
	private static String syslog_regex = "(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\\s+\\d{1,2}\\s+[0-9]+:[0-9]+:[0-9]+.\\d{3}:\\s+(%[a-zA-Z_-]+\\d-[a-zA-Z_]+:.*)";

	Logger log = Logger.getLogger(SyslogServiceImpl.class);
	@Override
	public void storeSyslog() {
		// TODO Auto-generated method stub

	}

	

	@Override
	public List<Syslog> getLogsByPeriod(Date fromDate, Date toDate) {
		return repository.getSyslogsBytimeStamp(fromDate, toDate);

	}

	@Override
	public void processSyslogs(String logMessage) {	
		boolean isSyslog = Pattern.matches(syslog_regex, logMessage);
		if(!isSyslog){
			log.info("DROPPING : SYSLOG FORMAT IS INVALID");
			return;
		}

		Matcher m = timeStampPattern.matcher(logMessage.trim());
		String  timeStamp=null;
		String subString=null;
		
		while (m.find()) {
			timeStamp = m.group();
			subString=logMessage.substring(m.end());
		}
		
		Syslog syslog = new  Syslog();
		String[] tmpLog=subString.split(":",3);
		for (int i=0;i<tmpLog.length;i++){
	        System.out.println(tmpLog[i]+"\n");
	    }

		String[] facil_level = tmpLog[1].split("-");
		syslog.setHostName("127.0.0.1");
		syslog.setSourceType(facil_level[0]);

		syslog.setLogLevel(LogLevel.fromId(Integer.parseInt(facil_level[1])));
		SimpleDateFormat datetimeFormatter1 = new SimpleDateFormat(
                "MMMdd HH:mm:ss.SSSS yyyy");
		Date timeSamp = convertStringToDate(timeStamp,datetimeFormatter1,false);
		syslog.setTimeStamp(timeSamp);
		syslog.setMessage(tmpLog[2]);
		log.info(syslog.getMessage());
		repository.save(syslog);

	}

	public Date convertStringToDate(String timeStamp,SimpleDateFormat dateFormat,boolean isYearPresent) {		
		
		Date lFromDate1=null;
		try {
			if(!isYearPresent){
				int currentYear = Calendar.getInstance ().get(Calendar.YEAR);
				System.out.println("\n"+Calendar.getInstance ().get(Calendar.YEAR));
				lFromDate1 = dateFormat.parse(timeStamp+ " " +currentYear);
			}else{
				lFromDate1 = dateFormat.parse(timeStamp);
			}

		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lFromDate1;
	}



	@Override
	public List<Statistics> getLogStats(Date fromDate, Date toDate) {
		
		List<Object[]> entries = new ArrayList<Object[]>();
        
        entries = repository.getSyslogStatsBytimeStamp(fromDate, toDate);

        

        return entries.stream().map( e -> new Statistics(
        		LogLevel.fromId((Integer)Array.get(e, 0)),
                        ((BigInteger) Array.get(e, 1)).intValue()))
                .collect(Collectors.toList());
		
	}

}
