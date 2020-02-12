FROM  maven:3.6.1-jdk-8-slim
WORKDIR /app
COPY .  .
RUN mvn package && \
    mv target/cmad-syslog-app-0.0.1-SNAPSHOT.jar /run/syslog-app.jar && \
    rm -rf /app/*
CMD java  -jar /run/syslog-app.jar