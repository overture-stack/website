---
title: Installing Maestro
---

# Dependencies

Before installing Maestro, the following software services needs to be installed and running:

| Service | Version | Requirement | Notes |
|---------|---------|-------------|-------------|
| [Elasticsearch](https://www.elastic.co/downloads/elasticsearch) | 7 or up | Required | For Maestro to build the index in |
| [Song](https://github.com/overture-stack/SONG/releases) | Latest | Required | See [here](/documentation/song/installation) for installation instructions | 
| [Apache Kafka](https://kafka.apache.org/downloads/) | Latest | Optional | Optionaly, only needed if you want to setup event-based indexing |


* **Required:** [Elasticsearch](https://www.elastic.co/downloads/elasticsearch) version 7 or up
* **Required:** [Song](https://github.com/overture-stack/SONG/releases) latest version
* **Optional** [Apache Kafka](https://kafka.apache.org/downloads/) latest version

Source Code
Source Code is hosted on Github.


Configurations
In the code repository, configurations are driven by: config/application.yml. Change the relevent sections to connect to Elasticsearch, SONG, Kafka based on your setup.

server:
  port: 11235

maestro:
  song:
    maxRetries: 3
    timeoutSec:
        study: 100 # some studies take really long, +30 secs, to be downloaded
        analysis: 5

  # elastic search server to connect to & client properties
  elasticsearch:
    # elasticsearch server nodes to send requests to
    clusterNodes:
      - http://localhost:9200
      - http://localhost:9201

    # the index name to store documents in (will be created if not existing)
    indexes:
      fileCentric:
          name: file_centric
          alias: file_centric

    # elasticsearch client properties
    client:
      # this is to control the number of documents per bulk request in elasticsearch
      docsPerBulkReqMax: 5000
      # max time to wait for a connection to be established
      connectionTimeout: 5000
      # max time to wait on idle connection (no data flow)
      socketTimeout: 10000
      # in case of failure this controls the retry attempts
      retry:
        # maximum number of retry attempts before throwing an error
        maxAttempts: 3
        # waiting between retries (ms)
        waitDurationMillis: 500

  # List of Genomic files repositories (SONGs)
  repositories:
    # these properties will be used in the document (see ../file_centric.json)
    - code: song.overture # must be unique & must match song.serverId if using kafka integration with song
      url: "http://localhost:8080"
      name: local song
      dataPath: /oicr.icgc/data
      metadataPath: /oicr.icgc.meta/metadata
      # optional
      storageType: S3
      organization: ICGC
      country: CA
    # you can other SONGs as needed
    - code: song.overture
      url: "http://localhost:8080"
      name: local song
      metadataPath: /oicr.icgc.meta/metadata
      # optional
      storageType: S3
      organization: overture
      country: LH

  # last resort fallback file system log in case of retries exhaustion.
  failureLog:
    enabled: true
    dir: ${user.home}/logs/maestro

  notifications:
    slack:
      # enable/disable slack notifications
      enabled: false
      # the types to trigger a notification to this channel (see NotificationName.java)
      notifiedOn:
        - ALL
      # slack workspace url
      url: https://hooks.slack.com/services/SECRET_TOKEN
      channel: maestro-alerts
      username: maestro
      maxDataLength: 1000
      # notifications has two parameters (TYPE [string], DATA[map])
      templates:
        error: ':bangbang: Error : ##TYPE##, Error Info: ```##DATA##```'
        warning: ':warning: ##TYPE## ```##DATA##```'
        info: ':information_source: ##TYPE## ```##DATA##```'

  # exclusion rules configs
  exclusionRules:
    byId:
      study:
        - "test123"
#      analysis:
#        - "analysisId"
#      file:
#        - 41ba4fb3-9428-50b5-af6c-d779cd59b04d
#      sample:
#        - "sampleId"
#      specimen:
#        - "specimenId"
#      donor:
#        - DO232991

# logging & monitoring
logging:
  level:
    root: INFO
    bio.overture: TRACE
    # very verbose class, only enable lower level when necessary
    bio.overture.maestro.domain.entities.indexing.rules.IDExclusionRule: INFO
    org.apache.kafka.clients: INFO

# spring boot actuator endpoints
management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    health:
      show_details: ALWAYS

spring:
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


Running Locally
Maestro has a Makefile for convenience if you can't use make you can check the make file for the commands.

Source Code (No Docker)
Provided that you have JDK11+ and all dependencies (see Dependencies) running and modified application.yaml based on your environment and needs, you can run the following command:

make run
Docker (Recommended for Local installations)
In this mode a docker-compose.yaml file will be used, it contains a dockerized version of elasticsearch and kafka see ./run/docker-compose/docker-compose.yaml. For SONG please check the SONG github repo here on how to run it with docker.

Docker image Repository: Dockerhub
starts maestro from a docker image along with all needed infrastructure

make docker-start
Kuberenets (Helm)
if you want to run in a Kubernetes cluster you can use the maestro helm chart

Chart Repository
prepare your values-override.yaml file based on your env, you can provide the app configs as env variables using the extraEnv key:

extraEnv:
  SERVER_PORT: "11235"
  MAESTRO_ELASTICSEARCH_CLUSTERNODES_0: "http://localhost:9200"
  SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS: "localhost:9092"
  # repos
  MAESTRO_REPOSITORIES_0_CODE: "song"
  MAESTRO_REPOSITORIES_0_URL: "https://song1:8080"
  MAESTRO_REPOSITORIES_0_NAME: "song1"
  MAESTRO_REPOSITORIES_0_ORGANIZATION: "ICGC"
  MAESTRO_REPOSITORIES_0_COUNTRY: "CA"
  MAESTRO_REPOSITORIES_1_CODE: "song2"
  MAESTRO_REPOSITORIES_1_URL: "http://song2:8080"
  MAESTRO_REPOSITORIES_1_NAME: "song2"
  MAESTRO_REPOSITORIES_1_ORGANIZATION: "overture"
  MAESTRO_REPOSITORIES_1_COUNTRY: "OICR"
  MAESTRO_FAILURELOG_DIR: "/app-log"
  # slack
  MAESTRO_NOTIFICATIONS_SLACK_ENABLED: "true"
  MAESTRO_NOTIFICATIONS_SLACK_URL: "secret"
  MAESTRO_NOTIFICATIONS_SLACK_CHANNEL: "maestro-argo-notif"
then add overture chart repository and install the chart:

helm repo add overture https://overture-stack.github.io/charts-server/
helm install -f values-override.yaml overture/maestro