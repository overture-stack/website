---
title: Event Connection Configuration
---

This documentation assumes that you have already installed Kafka on your system.  For help installing Kafka, please refer to [their documentation](https://kafka.apache.org/quickstart).

## Configuration Example 
Using the configurations file at `song-server-[version]/conf/application.yml`, set the correct values.  By default, song is configured to output to a topic called `song-analysis`. If you configure your Kafka with a different name, make sure to adjust this configuration to your topic name. 

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