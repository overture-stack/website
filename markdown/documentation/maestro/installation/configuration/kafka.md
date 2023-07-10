---
title: Configuring Kafka Topics
---

If you have set up Maestro to integrate with Kafka, then you must configure specific Kafka topics that Maestro will listen for to trigger indexing operations. The configuration file is set up by default for a basic Song and Maestro Kafka integration. If modifications are made, you will need to restart the service.

As mentioned previously, all Maestro configurations for Kafka topics can be accessed from the `application.yml` file [located here](https://github.com/overture-stack/maestro/edit/master/maestro-app/src/main/resources/config/application.yml).

Locate the following section of your `application.yml` file:

```yaml
spring:
  config:
    useLegacyProcessing: true
  application:
    name: maestro
  output.ansi.enabled: ALWAYS
  cloud:
    stream:
      # kafka integration with song (remove this key to disable kafka)
      kafka:
        binder:
          brokers: localhost:9092
        bindings:
          songInput:
            consumer:
              enableDlq: true
              dlqName: maestro_song_analysis_dlq
              autoCommitOnError: true
              autoCommitOffset: true
          input:
            consumer:
              enableDlq: true
              dlqName: maestro_index_requests_dlq
              autoCommitOnError: true
              autoCommitOffset: true
      bindings:
        input:
          # we don't specify content type because @StreamListener will handle that
          destination: maestro_index_requests
          group: requestsConsumerGrp
          consumer:
            maxAttempts: 1
        songInput:
          destination: song-analysis
          group: songConsumerGrp
          consumer:
            maxAttempts: 1
```

A summary of the latter `bindings` > `input` properties is outlined in the table below:

| Property | Description |
|--|--|
| `input` > `destination` | The `input` > `destination` topic listens for on-demand request messages instead of requests coming over the JSON web API. The value must match the topic you have configured in Kafka. In typical deployments, you will create a topic in Kafka called `maestro_index_request` and reference it here. |
| `input` > `group` | `group` is the Kafka consumer group name for the input channel topic that you configured above.  You can use the default or change the value. |
| `songInput` > `destination` | The `songInput` > `destination` topic specifically listens for updates to Song analyses. The `destination` value must match the topic you have configured in Kafka. In typical deployments, you will create a topic in Kafka called `song-analysis` and reference it here. |
| `songInput` > `group` | The `songInput` > `group` is the Kafka consumer group name for the `songInput` channel topic that you configured above.|

For more details on these configurations, see the [Spring cloud streams documentation](https://docs.spring.io/spring-cloud-stream/docs/3.0.10.RELEASE/reference/html/spring-cloud-stream.html#_configuration_options).

For configurations to take effect you will need to save the file, and restart the Maestro service.
