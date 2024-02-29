---
title: Kafka with Zookeeper
---

# Kafka with ZooKeeper

Kafka and ZooKeeper are both integral components:

- **Kafka** acts as the backbone messaging system for Song. It enables asynchronous communication between various services. For instance, when new metadata is submitted, the results can be published to a Kafka topic, which other services such as the indexing service Maestro can consume and process. This decoupling of services allows them to operate independently but still collaborate effectively.

- **ZooKeeper** keeps Kafka running smoothly by providing a reliable way to track the status of Kafka brokers and manage their configurations.

Together, Kafka and ZooKeeper provide Song with a scalable infrastructure for handling large volumes of data and ensuring that all services can communicate efficiently and reliably. They enable Song to scale horizontally, adding more brokers or services as needed, without compromising performance or reliability.

## Installation

For more details on Kafka and ZooKeeper, including installation instructions, please refer to [the official Apache Kafka documentation](https://kafka.apache.org/documentation/). If you would like a quickstart resource we have provided a docker compose file below:

```yaml
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - 22181:2181
  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - 29092:29092
      - 9092:9092
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://host.docker.internal:9092,PLAINTEXT_HOST://localhost:29092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

# Environment Variable Setup

By default, Song is configured to output to a topic named `song-analysis`. If you have configured your Kafka instance with a different topic name, ensure that you update the corresponding environment variables accordingly.

```bash
# Kafka Configuration
export SPRING_PROFILES_ACTIVE=kafka
export SPRING_KAFKA_BOOTSTRAP-SERVERS=localhost:9092
export SPRING_KAFKA_TEMPLATE_DEFAULT-TOPIC=song-analysis
```

The `kafka` profile contains the necessary connection details to interact with a deployed Kafka instance. When this profile is activated, Song will automatically publish messages to Kafka upon the creation or modification of analyses, including notifications related to analysis publishing, unpublishing, and suppression events.
