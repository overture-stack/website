---
title: Installing Maestro via Docker
---

This page will walk you through installing Maestro using Docker. Ensure you've completed all the applicable prerequisite steps before starting the installation.
# Installation Steps

1. **Setting Up Your Environment Variables:**

Based on your configuration, create a `.env.maestro` file with the necessary environment variables. Here's an example of a completed `.env.maestro` file:

```bash
# ============================
# Server configuration
# ============================

LOGGING_LEVEL_ROOT=DEBUG
SERVER_PORT=11235
SPRING_MVC_ASYNC_REQUESTTIMEOUT=-1
MAESTRO_FAILURELOG_DIR=/app/app-data
MAESTRO_NOTIFICATIONS_SLACK_ENABLED=false

# ============================
# Elasticseach Integration (Required)
# ============================

MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_ENABLED=true
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_PASSWORD=
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_USER=elastic
MAESTRO_ELASTICSEARCH_CLIENT_CONNECTIONTIMEOUT=300000
MAESTRO_ELASTICSEARCH_CLIENT_SOCKETTIMEOUT=300000
MAESTRO_ELASTICSEARCH_CLIENT_TRUSTSELFSIGNEDCERT=true
MAESTRO_ELASTICSEARCH_CLUSTERNODES_0=http://host.docker.internal:9200
MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ENABLED=false
MAESTRO_ELASTICSEARCH_INDEXES_FILE_CENTRIC_NAME=file_centric_1.0

# ============================
# Song Integration (Required)
# ============================

MAESTRO_REPOSITORIES_0_CODE=song.collab
MAESTRO_REPOSITORIES_0_COUNTRY=CA
MAESTRO_REPOSITORIES_0_NAME=local song
MAESTRO_REPOSITORIES_0_ORGANIZATION=overture
MAESTRO_REPOSITORIES_0_URL=http://host.docker.internal:8080
MAESTRO_SONG_PAGELIMIT=50
MAESTRO_SONG_TIMEOUTSEC_ANALYSIS=3600
MAESTRO_SONG_TIMEOUTSEC_STUDY=3600

# ============================
# Kafka Event Management Configuration
# ============================

SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS=host.docker.internal:9092
SPRING_CLOUD_STREAM_BINDINGS_SONGINPUT_DESTINATION=song_analysis
```

2. **Run Docker:**

Start the Maestro container using the docker run command, specifying the mounted `.env.maestro` file:

**For Linux (Recommended)**

```bash
docker run --env-file .env.maestro --network=host -d -p 11235:11235 ghcr.io/overture-stack/maestro-server:edge
```

**For Mac and Windows**

```bash
docker run --env-file .env.maestro -p 11235:11235 --name maestro ghcr.io/overture-stack/maestro:edge
```

3. **Accessing Maestro:**

Maestro should now be running and accessible at `http://localhost:11235/api-docs`.

# Configuration Overview

Before you proceed with the Maestro installation, be aware that there are several configurations for a Maestro server:

| Component |	Description |	Requirement |
|---|---|---|
| [Elasticsearch index mapping and client](/documentation/maestro/installation/configuration/elastic/) | Set the index mapping and configure connection parameters and error handling mechanisms. |	Required |
| [Kafka Brokers](/documentation/maestro/installation/configuration/kafka/) | Specify the location where you've deployed the Kafka broker for event-based indexing.	| Required |
| [Slack Integration](/documentation/maestro/installation/configuration/slack/) | Send notifications through a Slack webhook integration.	| Optional |
| [Exclusion Rules](/documentation/maestro/installation/configuration/exclusion/) | Omit specific analyses from being indexed	| Optional |

For detailed information on configuration options and guidelines, including setting up your environment variables file, refer to our [configuration section](/documentation/maestro/installation/configuration/),