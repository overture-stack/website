---
title: Installing Maestro via Docker
---

This page will walk you through installing Maestro using Docker. Ensure you've completed all the applicable prerequisite steps before starting the installation.
# Installation Steps

1. **Setting Up Your Environment Variables:**

Based on your configuration, create an `.env.maestro` file with the necessary environment variables. Replace placeholders like `{{song.overture}}` with your actual values. Here's an example of the `.env.maestro` file:

```bash
# ---------------------------
# ELASTICSEARCH CONFIGURATION
# ---------------------------
# Specify the Elasticsearch server nodes
ES_CLUSTER_NODE_1={{http://localhost:9200}}

# ------------------------
# SONG REPOSITORIES (SONGs)
# ------------------------
# Details for the SONG repositories.

# --- Repository 1 ---
# Unique code (Must match song.serverId for Kafka integration).
REPO_1_CODE={{song.overture}}
# Domain where SONG exists for your setup.
REPO_1_URL={{https://song.domain.com}}
REPO_1_NAME={{local song}}
# Optional attributes.
REPO_1_STORAGE_TYPE={{S3}}
REPO_1_ORGANIZATION={{ICGC}}
REPO_1_COUNTRY={{CA}}

# --- Repository 2 ---
REPO_2_CODE={{song.overture1}}
REPO_2_URL={{http://localhost:8080}}
REPO_2_NAME={{local song}}
# Optional attributes.
REPO_2_STORAGE_TYPE={{S3}}
REPO_2_ORGANIZATION={{overture}}
REPO_2_COUNTRY={{LH}}

# Note: You can continue adding other SONG repositories as needed.

# ----------------
# KAFKA CONFIGURATION (OPTIONAL)
# ----------------
# Kafka brokers for binder.
KAFKA_BINDER_BROKERS={{localhost:9092}}
```

2. **Run Docker:**

Start the Maestro container using the docker run command, specifying the mounted `.env` file:

**For Linux (Recommended)**

```bash
docker run --env-file .env.maestro --network=host -d -p 11235:11235 ghcr.io/overture-stack/maestro-server:latest
```

**For Mac and Windows**

```bash
docker run --env-file .env.maestro -p 11235:11235 ghcr.io/overture-stack/maestro-server:latest
```

3. **Accessing Maestro:**

Maestro should now be running and accessible at http://localhost:11235.

# Configuration Overview

Before you proceed with the Maestro installation, be aware that there are several configurations for a Maestro server:

| Component |	Description |	Requirement |
|---|---|---|
| [Elasticsearch index mapping and client](/documentation/maestro/installation/configuration/elastic/) | Set the index mapping and configure connection parameters and error handling mechanisms. |	Required |
| [Kafka Brokers](/documentation/maestro/installation/configuration/kafka/) | Specify the location where you've deployed the Kafka broker for event-based indexing.	| Optional |
| [Slack Integration](/documentation/maestro/installation/configuration/slack/) | Send notifications through a Slack webhook integration.	| Optional |
| [Exclusion Rules](/documentation/maestro/installation/configuration/exclusion/) | Omit specific analyses from being indexed	| Optional |

For detailed information on configuration options and guidelines, including setting up your environment variables file, refer to our <a href="./configuration/" target="_blank" rel="noopener noreferrer">Configurations section</a>.