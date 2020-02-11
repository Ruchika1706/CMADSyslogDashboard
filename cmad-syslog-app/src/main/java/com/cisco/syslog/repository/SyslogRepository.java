package com.cisco.syslog.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cisco.syslog.model.Statistics;
import com.cisco.syslog.model.Syslog;

@Repository
public interface SyslogRepository extends JpaRepository<Syslog, Integer> {
	
	@Query(value = "SELECT * FROM glarimy.syslog WHERE time_stamp BETWEEN  :fromDate AND :toDate", nativeQuery = true)
	public List<Syslog> getSyslogsBytimeStamp(@Param("fromDate") Date fromDate,@Param("toDate") Date toDate);
	
	@Query(value = "SELECT log_level, count(log_level) from glarimy.syslog where time_stamp between :fromDate AND :toDate group by log_level order by log_level;", nativeQuery = true)
	public List<Object[]> getSyslogStatsBytimeStamp(@Param("fromDate") Date fromDate,@Param("toDate") Date toDate);
	
	

}
