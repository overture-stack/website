---
title: Running Song via Docker
---

Following the previous configuration steps, your `.env.song` file should look similar to the template below:

```bash
# ============================
# Database Configuration
# ============================

# PostgreSQL connection details
SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:5432/song?stringtype=unspecified
SPRING_DATASOURCE_USERNAME={{Postgres-Username}}
SPRING_DATASOURCE_PASSWORD={{Postgres-Password}}
# Flyway migration settings
SPRING_FLYWAY_ENABLED=true
SPRING_FLYWAY_LOCATIONS=classpath:flyway/sql,classpath:db/migration

# ============================
# Spring Run Profiles
# ============================

# Active profiles to determine app behavior & configs
SPRING_PROFILES_ACTIVE=secure,score-client-cred,kafka

# ============================
# Keycloak Integration
# ============================

AUTH_SERVER_INTROSPECTIONURI={{keycloak-host-url}}/realms/{{keycloak-realm}}/apikey/check_api_key/
AUTH_SERVER_CLIENTID={{song-client-ID}}
AUTH_SERVER_CLIENTSECRET={{song-client-secret}}
AUTH_SERVER_TOKENNAME={{API-key-name}}
AUTH_SERVER_PROVIDER=keycloak
AUTH_SERVER_KEYCLOAK_HOST={{keycloak-host-url}}
AUTH_SERVER_KEYCLOAK_REALM={{keycloak-realm}}
AUTH_SERVER_SCOPE_STUDY_PREFIX=PROGRAMDATA.
AUTH_SERVER_SCOPE_STUDY_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_SYSTEM=song.WRITE
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWKSETURI={{keycloak-host-url}}/realms/{{keycloak-realm}}/protocol/openid-connect/certs


# ============================
# Ego Integration
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
# ID Management configuration
# ============================

ID_USELOCAL=true

# ============================
# Schema Strictness Configuration
# ============================

SCHEMAS_ENFORCELATEST=true

# ============================
# Kafka Event Management Configuration
# ============================

SPRING_KAFKA_BOOTSTRAP-SERVERS={{Kakfa-server-URL}}
SPRING_KAFKA_TEMPLATE_DEFAULT-TOPIC=song-analysis
```

## Running Docker

Initiate the Song container using `docker run` and mount the `.env.song` file:

**For Linux (Recommended)**

```bash
docker run --name Song --env-file .env.song --network=host -d -p 8081:8081 ghcr.io/overture-stack/song-server:latest
```

**For Mac and Windows**

```bash
docker run --name Song --env-file .env.song -p 8081:8081 ghcr.io/overture-stack/song-server:latest
```

## Accessing Song

Song should now be running and accessible at `http://localhost:8080/swagger-ui.html#/`.
