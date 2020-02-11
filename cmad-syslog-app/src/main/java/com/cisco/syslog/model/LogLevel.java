package com.cisco.syslog.model;

public enum LogLevel {
	EMERGENCY(0),ALERT(1),CRITICAL(2),ERROR(3),WARNING(4),NOTICE(5),INFO(6),DEBUG(7);
	 private int id; // Could be other data type besides int
	 private int getId(){
		 return id;
	 }
     private LogLevel(int id) {
         this.id = id;
     }

     public static LogLevel fromId(int id) {
             for (LogLevel type : values()) {
                 if (type.getId() == id) {
                     return type;
                 }
             }
             return null;
         }
  }


