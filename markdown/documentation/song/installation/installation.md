---
title: Installing Song Via Docker 
---

This page will walk you through installing Song using Docker. Ensure you've completed all the applicable [prerequisite steps](./prerequisites.md) before starting the installation.

## Configuration Overview

Before you proceed with the Song installation, be aware that there are several configurations for a Song server:

| Component                                                    | Description                                | Requirement |
|--------------------------------------------------------------|--------------------------------------------|-------------|
| [Run Profiles](/documentation/song/installation/configurations/profiles/)                 | Define how the Song server operates.       | Required    |
| [Score Integration](/documentation/song/installation/configurations/score)               | Connect Song with the Score server.        | Required    | 
| [Ego Integration (Secure Profile)](/documentation/song/installation/configurations/profiles/#secure-profile)                   | Set up authentication and authorization.   | Required    | 
| [ID Management](/documentation/song/installation/configurations/id/)                      | Define how to manage unique identifiers for data.        | Required    | 
| [Schema Strictness](/documentation/song/installation/configurations/schema/)              | Define how strictly schemas should be followed. | Required | 
| [Kafka Event Management](/documentation/song/installation/configurations/kafka/)         | Manage real-time data streaming events.    | Optional    |

For detailed information on configuration options and guidelines, including setting up your environment variables file, see our section on [Configurations](/documentation/song/installation/configuration/) section. 

## Installation Steps

1. **Setting Up Your Environment Variables**: 

Based on your configuration, create an `.env` file with the necessary environment variables. Replace placeholders like `{{ego-host-url}}` with your actual values. Here's an example of the `.env` file:

```bash

# ============================
# Database Configuration (Required)
# ============================

# PostgreSQL JDBC connection details
SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:5432/song?stringtype=unspecified
SPRING_DATASOURCE_USERNAME={{Postgres-Username}}
SPRING_DATASOURCE_PASSWORD={{Postgres-Password}}
# Flyway migration settings
SPRING_FLYWAY_ENABLED=true
SPRING_FLYWAY_LOCATIONS=classpath:flyway/sql,classpath:db/migration

# ============================
# Spring Run Profiles (Required)
# ============================

# Active profiles to determine app behavior & configs
SPRING_PROFILES_ACTIVE=secure,score-client-cred

# ============================
# Ego Integration (Required)
# ============================

AUTH_SERVER_URL={{ego-host-url}}/o/check_api_key/
AUTH_SERVER_CLIENTID={{song-client-ID}}
AUTH_SERVER_CLIENTSECRET={{song-client-secret}}
AUTH_SERVER_TOKENNAME={{API-key}}
AUTH_SERVER_SCOPE_STUDY_PREFIX=song.
AUTH_SERVER_SCOPE_STUDY_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_SYSTEM=song.WRITE
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_PUBLIC_KEY_LOCATION={{ego-host-url}}/oauth/token/public_key

# ============================
# Score Integration (Required)
# ============================

SCORE_URL=http://host.docker.internal:8082
SCORE_CLIENTCREDENTIALS_ID={{adminId}}
SCORE_CLIENTCREDENTIALS_SECRET={{adminSecret}}
SCORE_CLIENTCREDENTIALS_TOKENURL={{ego-host-url}}/oauth/token
SCORE_CLIENTCREDENTIALS_SYSTEMSCOPE=score.WRITE

# ============================
# ID Management configuration (Required)
# ============================

ID_USELOCAL=true

# ============================
# Schema Strictness Configuration (Required)
# ============================

SCHEMAS_ENFORCELATEST=true

# ============================
# Kafka Event Management Configuration (Optional)
# Required as an active spring profile variable
# ex. SPRING_PROFILES_ACTIVE=secure,score-client-cred,kafka
# ============================

# SPRING_KAFKA_BOOTSTRAP-SERVERS={{Kakfa-server-URL}}
# SPRING_KAFKA_TEMPLATE_DEFAULT-TOPIC=song-analysis

```

2. **Docker Run:** 

Start the Song container using the `docker run` command, specifying the mounted `.env` file:

**For Linux (Recommended)**
```bash
docker run --env-file .env --network=host -d -p 8080:8080 ghcr.io/overture-stack/song-server:latest
```

**For Mac and Windows**

```bash
docker run --env-file .env host.docker.internal -p 8080:8080 ghcr.io/overture-stack/song-server:latest
```

3. **Accessing Song:** 

Song should now be running and accessible at `http://localhost:8080`.