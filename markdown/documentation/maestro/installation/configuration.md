---
title: Configuring Maestro
---

During the initial [installation](/documentation/maestro/installation/installation) and setup of Maestro, certain mandatory configurations had to be provided before the service could start.

However in this section, we describe some optional configurations that you may wish to use.

# Configuring Kafka Topics

If you have setup Maestro to integrate with Kafka, then you must configure specific Kafka topics that Maestro will listen for in order to trigger indexing operations.

By default, the configuration file contains a setup for a basic Kafka integration with Song and Maestro.  We will verify that this configuration section is correct.  If modifications or correctinos are required, you can update the file then restart the service.

For example:

1. From your command line, switch to the `config` directory and locate the `application.yml` file:

```shell
cd maestro/maestro-app/src/main/resources/config
```

2. Open the file, locate the `spring` -> `cloud` -> `stream` -> `bindings`  section verify the following:

| Property | Description |
|----------|-------------|
| `input` -> `destination` | This topic listens for on-demand request messages instead of requests coming over the JSON web API. This value must match the topic you have configured in Kafka itself. In typical deployments, you can create a topic in Kafka called `maestro_index_request` and set the value in the config file here. |
| `input` -> `group` | Name of the topic group you have configured in Kafka for the `input` -> `destination` topic.  This value must match the group you have configured in Kakfa itself.  In typical deployments, you can create a group called `requestsConsumerGrp` in Kafka and set the value in the config file here.
| `songInput` -> `destination` | This topic specifically listens for updates to Song analyses. This value must match the topic you have configured in Kafka itself. In typical deployments, you can create a topic in Kafka called `song-analysis` and set the value in the config file here. |
| `songInput` -> `group` | Name of the topic group you have configured in Kafka for the `songInput` -> `destination` topic.  This value must match the group you have configured in Kakfa itself.  In typical deployments, you can create a group called `songConsumerGrp` in Kafka and set the value in the config file here. |

```
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

```

3. If necessary, make any modifications or corrections, save the file, then restart the Maestro service.

# Configuring Slack Notifications

If you want to integrate with Slack to send you notifications about errors during the indexing process, you can update the application configuration file then restart the service.

To configure Slack:

1. From your command line, switch to the `config` directory and locate the `application.yml` file:

```shell
cd maestro/maestro-app/src/main/resources/config
```

2. Open the file, locate the `notifications` -> `slack` section and configure the following:

| Property | Description |
|----------|-------------|
| `enabled` | Set to `true` to enable Slack integration |
| `url` | URL to your Slack authentication token.  For details see the official Slack [documentation](https://slack.com/intl/en-ca/help/articles/215770388-Create-and-regenerate-API-tokens). |
| `channel` | Name of the Slack channel where you want notifications to be sent |
| `username` | Username required to access the channel |

```
notifications:
    slack:
      enabled: false
      # the types to trigger a notification to this channel (see NotificationName.java)
      notifiedOn:
        - ALL
      url: https://hooks.slack.com/services/SECRET_TOKEN
      channel: maestro-alerts
      username: maestro
      maxDataLength: 1000
      # notifications has two parameters (TYPE [string], DATA[map])
      templates:
        error: ':bangbang: Error : ##TYPE##, Error Info: ```##DATA##```'
        warning: ':warning: ##TYPE## ```##DATA##```'
        info: ':information_source: ##TYPE## ```##DATA##```'
```

3. Save the file.


4. Optionally, if you are running [Maestro with Kubernetes], you must similarly modify your `values-override.yml` file.  Locate the `slack` section and modify the following:

| Property | Description |
|----------|-------------|
| `MAESTRO_NOTIFICATIONS_SLACK_ENABLED` | Set to `true` to enable Slack integration |
| `MAESTRO_NOTIFICATIONS_SLACK_URL` | URL to your Slack authentication token.  For details see the official Slack [documentation](https://slack.com/intl/en-ca/help/articles/215770388-Create-and-regenerate-API-tokens). |
| `MAESTRO_NOTIFICATIONS_SLACK_URL` | Name of the Slack channel where you want notifications to be sent |
```
  # slack
  MAESTRO_NOTIFICATIONS_SLACK_ENABLED: "true"
  MAESTRO_NOTIFICATIONS_SLACK_URL: "secret"
  MAESTRO_NOTIFICATIONS_SLACK_CHANNEL: "maestro-argo-notif"
  ```

  5. Restart the Maestro service.

# Configuring Exclusion Rules

In certain use cases, specific data records may need to excluded from indexing.  For example, prior to a major data release, some records may need to be excluded for business, data integrity, legal reasons, etc.

In the context of Song, Maestro supports this by providing configurable exclusion rules that omit specific analyses from being indexed based on metadata tags found in Song.  Specific analyses can be excluded by these identifiers: 

* Study ID
* Analysis ID
* File ID
* Sample ID
* Specimen ID
* Donor ID

If you need to add exclusion rules before indexing, you can update the application configuration file then restart the service.

To configure exclusion rules:

1. From your command line, switch to the `config` directory and locate the `application.yml` file:

```shell
cd maestro/maestro-app/src/main/resources/config
```

2. Open the file, locate the `exclusionRules` section and configure the following properties:

* `studyId`
* `analysis`
* `file`
* `sample`
* `specimen`
* `donor`

Each property is a comma-separated list of IDs you want to excluse from indexing for that particular entity.  For example:

```
  # exclusion rules configs
  exclusionRules:
    byId:
      studyId:
        - TEST-STUDY
#      analysis:
#        - 531had59-235f-315j-3918-gjaea93ga90j
#      file:
#        - 41ba4fb3-9428-50b5-af6c-d779cd59b04d
#      sample:
#        - a6381313-gaj3-eaif-95jd-nahnba9gn112
#      specimen:
#        - j928shgh-bme9-gka7-vac8-ga239sdaig98
#      donor:
#        - DO232991
```

6. Restart the Maestro service.