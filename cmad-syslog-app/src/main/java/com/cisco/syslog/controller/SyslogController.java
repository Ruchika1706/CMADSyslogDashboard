package com.cisco.syslog.controller;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cisco.syslog.model.Statistics;
import com.cisco.syslog.model.Syslog;
import com.cisco.syslog.service.SyslogService;

@CrossOrigin
@RestController
public class SyslogController {
	@Autowired
	private SyslogService syslogService;

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "/syslog", method = RequestMethod.GET)
	public ResponseEntity<List<Syslog>> getSyslogs(@RequestParam(name = "fromDate") String fromDate,
			@RequestParam(name = "toDate") String toDate) {
		try {
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			java.sql.Timestamp startDate = new java.sql.Timestamp(
					syslogService.convertStringToDate(fromDate, dateFormat, true).getTime());
			java.sql.Timestamp endDate = new java.sql.Timestamp(
					syslogService.convertStringToDate(toDate, dateFormat, true).getTime());
			List<Syslog> syslogList = syslogService.getLogsByPeriod(startDate, endDate);
			for (Syslog syslog : syslogList) {
				syslog.setDateTimeStr(syslog.getTimeStamp().toString());
			}
			return new ResponseEntity<List<Syslog>>(syslogList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<List<Syslog>>(Collections.EMPTY_LIST, HttpStatus.BAD_REQUEST);

		}

	}

	@SuppressWarnings("unchecked")
	@RequestMapping(path = "/stats", method = RequestMethod.GET)
	public ResponseEntity<Map<String, Integer>> getStats(@RequestParam(name = "fromDate") String fromDate,
			@RequestParam(name = "toDate") String toDate) {
		try {
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			java.sql.Timestamp startDate = new java.sql.Timestamp(
					syslogService.convertStringToDate(fromDate, dateFormat, true).getTime());
			java.sql.Timestamp endDate = new java.sql.Timestamp(
					syslogService.convertStringToDate(toDate, dateFormat, true).getTime());
			List<Statistics> stats = syslogService.getLogStats(startDate, endDate);
			Map<String, Integer> countsByLevel = stats.stream()
					.collect(Collectors.toMap(Statistics::getLogLevelStr, Statistics::getCount));

			return new ResponseEntity<Map<String, Integer>>(countsByLevel, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Map<String, Integer>>(Collections.EMPTY_MAP, HttpStatus.BAD_REQUEST);
		}

	}

}
