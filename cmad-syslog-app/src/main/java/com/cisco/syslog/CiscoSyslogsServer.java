package com.cisco.syslog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.cisco.syslog.service.SyslogService;

@SpringBootApplication
public class CiscoSyslogsServer {


	
	public static void main(String[] args) throws Exception {
		 ConfigurableApplicationContext applicationContext = SpringApplication.run(CiscoSyslogsServer.class, args);;

		SyslogService syslogService = (SyslogService) applicationContext.getBean("syslogServiceImpl");
		CiscoUDPServer server = new CiscoUDPServer(520);
        server.listen(syslogService);

	}
	
}
