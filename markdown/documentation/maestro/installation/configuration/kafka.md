---
title: Configuring Kafka Topics
---

If you have set up Maestro to integrate with Kafka, you must configure specific Kafka topics for Maestro to listen to, in order to trigger indexing operations. All Maestro configurations for Kafka topics can be made within the `env.maestro` file. 

To configure the Kafka topics, open your `env.maestro` file and add the following configurations. Ensure you replace the placeholders `{{}}` with the appropriate values specific to your setup.

```bash
# ---------------------------
# SPRING CONFIGURATION
# ---------------------------

# Specifies whether to use legacy processing.
SPRING_CONFIG_USE_LEGACY_PROCESSING=true

# Name of the application.
SPRING_APPLICATION_NAME=maestro

# Define the output ansi settings.
SPRING_OUTPUT_ANSI_ENABLED=ALWAYS

# ---------------------------
# KAFKA CONFIGURATION
# ---------------------------

# Enables Kafka integration with Song (leave empty or remove to disable Kafka).
SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS={{BROKER_HOST_PORT}}

# Define consumer properties for Song input.
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_SONG_INPUT_CONSUMER_ENABLE_DLQ=true
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_SONG_INPUT_CONSUMER_DLQ_NAME={{DLQ_NAME_FOR_SONG_INPUT}}
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_SONG_INPUT_CONSUMER_AUTO_COMMIT_ON_ERROR=true
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_SONG_INPUT_CONSUMER_AUTO_COMMIT_OFFSET=true

# Define consumer properties for general input.
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_INPUT_CONSUMER_ENABLE_DLQ=true
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_INPUT_CONSUMER_DLQ_NAME={{DLQ_NAME_FOR_GENERAL_INPUT}}
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_INPUT_CONSUMER_AUTO_COMMIT_ON_ERROR=true
SPRING_CLOUD_STREAM_KAFKA_BINDINGS_INPUT_CONSUMER_AUTO_COMMIT_OFFSET=true

# Bindings for the input.
# We don't specify content type because @StreamListener will handle that.
SPRING_CLOUD_STREAM_BINDINGS_INPUT_DESTINATION={{INPUT_DESTINATION_NAME}}
SPRING_CLOUD_STREAM_BINDINGS_INPUT_GROUP={{INPUT_GROUP_NAME}}
SPRING_CLOUD_STREAM_BINDINGS_INPUT_CONSUMER_MAX_ATTEMPTS=1

# Bindings for Song input.
SPRING_CLOUD_STREAM_BINDINGS_SONG_INPUT_DESTINATION={{SONG_INPUT_DESTINATION_NAME}}
SPRING_CLOUD_STREAM_BINDINGS_SONG_INPUT_GROUP={{SONG_INPUT_GROUP_NAME}}
SPRING_CLOUD_STREAM_BINDINGS_SONG_INPUT_CONSUMER_MAX_ATTEMPTS=1
```

A summary of the `bindings`, `input`, and `songInput` properties are outlined in the table below:

| Property | Description |
|--|--|
| `input` > `destination` | This topic listens for on-demand request messages, instead of requests received over the JSON web API. The value here should match the topic you've configured in Kafka. Typically, you would create a Kafka topic named `maestro_index_request` and then reference it in this configuration. |
| `input` > `group` | This represents the Kafka consumer group name for the `input` channel topic. You can either use the default value or modify it based on your needs. |
| `songInput` > `destination` | This topic is dedicated to listening for updates related to Song analyses. Its value must align with the topic you've set up in Kafka. Commonly, a Kafka topic named `song-analysis` is created and then referenced in this setting. |
| `songInput` > `group` | This is the Kafka consumer group name for the `songInput` channel topic. Ensure it matches the topic you've configured in the previous step.|

For an in-depth understanding of these configurations, you can refer to the [Spring Cloud Streams Documentation](https://docs.spring.io/spring-cloud-stream/docs/3.0.10.RELEASE/reference/html/spring-cloud-stream.html#_configuration_options).

To activate these configurations, make sure to save the changes to the file and then restart the Maestro service.

