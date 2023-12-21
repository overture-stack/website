---
title: Prerequisites 
---

Before installing Maestro, ensure that the following software services are installed and running:


1. **Docker Engine**
    - [Official Docker Engine download & installation instructions](https://docs.docker.com/engine/install/)


2. **Elasticsearch & Apache Kafka**
    - Elasticsearch is a search and analytics engine, and Apache Kafka is a distributed streaming platform. Both are essential for processing and indexing data in Maestro.
    - Instructions for a quick setup are provided below.


4. **Song**
    - [See Song's installation instructions for more details](/documentation/song/installation)


## Elasticsearch and Kafka Quickstart

Maestro uses Kafka for efficient data processing from incoming Song servers and Elasticsearch for indexing this data. Follow these steps to set up both services:

1. **Create a docker-compose file**

Make a `docker-compose.yml` with the following information:

```yaml
version: '2'
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
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.12
    ports:
      - 9200:9200
    environment:
      - discovery.type=single-node
      - cluster.name=maestro.elasticsearch
      - "ES_JAVA_OPTS=-Xms512m -Xmx2048m"
```

2. **Run the docker-compose**

After saving the docker-compose.yml file, execute the following command in the same directory:

```bash
docker-compose up
```

