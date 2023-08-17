---
title: Installing Song Via Docker 
---

This page will walk you through installing Song using Docker. Ensure you've completed all the applicable [prerequisite steps](./prerequisites.md) before starting the installation.

## Configuration Overview

Before you proceed with the Song installation, be aware that there are several configurations for a Song server:

| Component                                                    | Description                                | Requirement |
|--------------------------------------------------------------|--------------------------------------------|-------------|
| [Run Profiles](./configurations/profiles.md)                 | Define how the Song server operates.       | Required    |
| [Score Integration](./configurations/score.md)               | Connect Song with the Score server.        | Required    | 
| [Ego Integration](./configurations/ego.md)                   | Set up authentication and authorization.   | Required    | 
| [ID Management](./configurations/id.md)                      | Define how to manage unique identifiers for data.        | Required    | 
| [Schema Strictness](./configurations/schema.md)              | Define how strictly schemas should be followed. | Required | 
| [Kafka Event Management](./configurations/kafka.md)         | Manage real-time data streaming events.    | Optional    |


For detailed information on configuration options and guidelines, see the [Configuration](/documentation/song/installation/configuration/) section.

## Installation Steps

1. **Set Up Your Environment Variables**: 

Based on your configuration, create an `.env` file with the necessary environment variables. Replace placeholders like `{{ego-host-url}}` with your actual values. Here's an example of the `.env` file:


```bash
# ============================
# Ego Authentication Credentials
# ============================
AUTH_SERVER_URL={{ego-host-url}}/api/o/check_api_key/
AUTH_SERVER_CLIENTID={{song-client-ID}}
AUTH_SERVER_CLIENTSECRET={{song-client-secret}}
AUTH_SERVER_TOKENNAME={{API-key}}
AUTH_SERVER_SCOPE_STUDY_PREFIX=song.
AUTH_SERVER_SCOPE_STUDY_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_SYSTEM=song.WRITE
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_PUBLIC_KEY_LOCATION={{ego-host-url}}/api/oauth/token/public_key

# ============================
# Score Service Credentials
# ============================
SCORE_URL=http://host.docker.internal:8082
SCORE_CLIENTCREDENTIALS_ID={{adminId}}
SCORE_CLIENTCREDENTIALS_SECRET={{adminSecret}}
SCORE_CLIENTCREDENTIALS_TOKENURL={{ego-host-url}}/api/oauth/token
SCORE_CLIENTCREDENTIALS_SYSTEMSCOPE=score.WRITE

# ============================
# Database Configuration
# ============================
# PostgreSQL JDBC connection details
SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:5432/song?stringtype=unspecified
SPRING_DATASOURCE_USERNAME={{Postgres-Username}}
SPRING_DATASOURCE_PASSWORD={{Postgres-Password}}

# Flyway migration settings
SPRING_FLYWAY_ENABLED=true
SPRING_FLYWAY_LOCATIONS=classpath:flyway/sql,classpath:db/migration

# ============================
# Spring Configuration
# ============================
# Active profiles to determine app behavior & configs
SPRING_PROFILES_ACTIVE=secure,score-client-cred,default


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