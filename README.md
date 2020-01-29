# CMADSyslogDashboard

The idea is to create NMS (Network Management System) Product or Log Analysis Product 

-> configure devices to send syslog

-> application should receive syslog and write into RDBMS

-> provide dashboard to your admin
    -> all the syslogs received page by page [ 10 on each page] [ pagination on client or server -> your choice ]
    -> show statistics of severity of messages and the messages as well [ Duration : last 1 hour, 1 day, 1 week -> statistics like number of messages for each severity levels like debug, error, warning, trace, info, notice etc. ] 


Dashboard Design: https://github.com/Ruchika1706/CMADSyslogDashboard/blob/master/DashboardDesign.jpeg


REST API Design: https://github.com/Ruchika1706/CMADSyslogDashboard/blob/master/RESTAPIDesign


Architecture Diagram: https://github.com/Ruchika1706/CMADSyslogDashboard/blob/master/ArchitectureDiagram.jpg


Class Diagram: https://github.com/Ruchika1706/CMADSyslogDashboard/blob/master/ClassDiagram.jpg


