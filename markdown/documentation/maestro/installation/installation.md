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

# Installation

Follow these steps to install and setup Maestro.

## Download Source

From your command line terminal, clone the Maestro repository:

```shell
$ git@github.com:overture-stack/maestro.git
```

## Enable Indexing

First, we must make sure that indexing is enabled in the configuration file.  Although by default this setting is enabled, it is good practice to check.

1. Switch to the `config` directory and locate the `application.yml` file:

```shell
cd maestro/maestro-app/src/main/resources/config
```

2. Open the file and verify the following:

* `disableIndexing` = `false` - This ensures Maestro indexing functionality will run
* `disableEventIndexing` = `false` - This is only needed if you are using Kafka for event-based indexing

## Configure Connections

Next, we must configure the connections to the Elasticsearch, Song, and Kafka services installed as part our prerequisite setup.

1. Switch to the `config` directory and locate the `application.yml` file:

```shell
cd maestro/maestro-app/src/main/resources/config
```

2. Open the file, locate the `elasticsearch` --> `clusterNodes` section and edit the value to point to the URL where your Elasticsearch instance is hosted:

```
# elastic search server to connect to & client properties
  elasticsearch:
    # elasticsearch server nodes to send requests to
    clusterNodes:
      - http://localhost:9200
```

3. Locate the `repositories` section.  This is where you will specify each Song repository that Maestro will connect with.  Add a block for each repository you wish to configure.  For each repository, the following mandatory values must be provided:

| Property | Description |
|----------|-------------|
| `code` | This is a unique ID to represent the Song server.  If you are integrating with Kafka, then this must match the `song.serverId` that you have deployed. |
| `url` | URL where you have deployed the Song server |
| `name` | Set to `local song` |

```
# List of Genomic files repositories (SONGs)
  repositories:
    # these properties will be used in the document (see ../file_centric.json)
    - code: song.overture # must be unique & must match song.serverId if using kafka integration with song
      url: https://song.domain.com # Change this to a valid domain where the song exists in your setup
      name: local song
      # optional
      storageType: S3
      organization: ICGC
      country: CA
    # you can other SONGs as needed
    - code: song.overture1
      url: http://localhost:8080
      name: local song
      # optional
      storageType: S3
      organization: overture
      country: LH
```

4. Optionally, if you are using Kafka for event-based indexing, locate the `kafka` --> `binders` --> `brokers` block and set the `brokers` value to the location where you have deployed the Kafka broker:

```
      kafka:
        binder:
          brokers: localhost:9092
```

5. Save the file.

# Run the Service

## Running Locally

To run the Maestro service locally, a `Makefile` is provided for your convenience.  However, if you are unable to use make, you may examine the `Makefile` contents for the raw commands.

**Running from Docker (Recommended for Local Installations)**

It is highly recommended that for local installations, you run Maestro from Docker.

In this mode a `docker-compose.yml` file is provided that contains a Dockerized version of Elastidsearh and Kafka.  You can examine this file at `./run/docker-compose/docker-compose.yml`.  To run Song with Docker, please refer to our [Song documentation](/documentation/song).

For reference, the Docker image for Maestro can be found on Docker Hub [here](https://hub.docker.com/r/overture/maestro).

To start Maestro from a Docker image with all needed infrastructure, execute:

```
make docker-start
```

**Running from Source (No Docker)**

Source Code (No Docker)
Provided that you have JDK11+ and all dependencies (see Dependencies) running and modified application.yaml based on your environment and needs, you can run the following command:

make run

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