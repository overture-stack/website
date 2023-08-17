---
title: Event Connection Configuration
---

This documentation assumes that you have already installed Kafka on your system.  For help installing Kafka, please refer to [the official Kafka documentation](https://kafka.apache.org/quickstart).

## Configuration 

Using the configurations file located at `song-server-[version]/conf/application.yml`, set your desired values.  By default, song is configured to output to a topic called `song-analysis`. If you configure your Kafka with a different name, make sure to adjust accordingly. 

```yaml
spring:
  profiles:
    active: "kafka"
...

spring:
  profiles: kafka
  kafka:
    bootstrap-servers: localhost:9092
    template:
      default-topic: song-analysis
```