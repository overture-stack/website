---
title: Installing Score Via Docker
---

This guide details the steps to install Score using Docker. Before beginning, ensure you have completed all relevant prerequisite steps.

## Configuration Overview

Prior to installing Score, it's important to understand the different configuration aspects required for a Score server:

| Component          | Description                                                | Requirement |
|--------------------|------------------------------------------------------------|-------------|
| [Song Server](/documentation/score/installation/configuration/song)              | Links Score with your Song server.                        | Required    |
| [Object Storage](/documentation/score/installation/configuration/object-storage)     | Integrates your object storage provider with Score.       | Required    |
| [OAuth Provider](/documentation/score/installation/configuration/authentication)       | Define your Authentication and Authorization service (Ego or Keycloak)             | Required    |
| [HashiCorp's Vault](/documentation/score/installation/configuration/bootstrap)  | Manage and secure keys using HashiCorp Vault.            | Optional    |

For comprehensive details on configuration options and setup guidelines, including environment variable file creation, refer to the subsequent [Configurations section](/documentation/score/installation/configuration/).

## Installation Steps

1. **Setting up your environment variables:**

   Create an `.env.score` file with required environment variables based on your configuration. Replace placeholders with actual values. Example `.env.score` file structure:


   <Warning>**Note:** The environment variable file may vary based on your deployment scenario. For more details, visit the [configuration section](/documentation/score/installation/configuration/).</Warning>

```bash
# ============================
# Spring Run Profiles (Required)
# ============================

# Active profiles to determine app behaviour & configs
SPRING_PROFILES_ACTIVE=collaboratory,prod,secure

# Server configuration
SERVER_PORT=8087
SERVER_SSL_ENABLED=false

# ============================
# Server Authentication integration (Required)
# ============================
AUTH_SERVER_URL=http://localhost/realms/myrealm/apikey/check_api_key/
AUTH_SERVER_TOKENNAME=apiKey
AUTH_SERVER_CLIENTID=score
AUTH_SERVER_CLIENTSECRET=scoresecret
AUTH_SERVER_PROVIDER=keycloak
AUTH_SERVER_KEYCLOAK_HOST=http://localhost
AUTH_SERVER_KEYCLOAK_REALM=myrealm
AUTH_SERVER_SCOPE_STUDY_PREFIX=score.
AUTH_SERVER_SCOPE_UPLOAD_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_DOWNLOAD_SUFFIX=.READ
AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM=score.WRITE
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM=score.READ
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWKSETURI=http://localhost/realms/myrealm/protocol/openid-connect/certs

# ============================
# Song Integration (Required)
# ============================
METADATA_URL=http://host.docker.internal:8080

# ============================
# Storage Integration (Required)
# ============================
S3_ENDPOINT=http://host.docker.internal:8085
S3_ACCESSKEY=minio
S3_SECRETKEY=minio123
S3_SIGV4ENABLED=true
OBJECT_SENTINEL=heliograph
BUCKET_NAME_OBJECT=oicr.icgc.test
BUCKET_NAME_STATE=oicr.icgc.test
COLLABORATORY_DATA_DIRECTORY=data
UPLOAD_PARTSIZE=1073741824
UPLOAD_CONNECTION_TIMEOUT=1200000
```

2. **Run Docker:**

After configuring your environment variables, initiate the Score container using `docker run` and mount the `.env.score file`:

**For Linux (Recommended)**

```bash
docker run --env-file .env.score --network=host -d -p 8087:8087  ghcr.io/overture-stack/score-server:latest
```

**For Mac and Windows**

```bash
docker run --env-file .env.score -d -p 8087:8087  ghcr.io/overture-stack/score-server:latest
```

<Note title="Running with Keycloak">If you are running Score with Keycloak you will need to use the `docker run` command with the following container `ghcr.io/overture-stack/score-server:47f006ce`</Note>

3. **Accessing Score:**

Score should now be running with the swagger-ui accessible from: `http://localhost:8087/swagger-ui.html#/`

To facilitate interactions between your local machine and the Score server we recommend [setting up the Score Client](/documentation/score/user-guide/client-setup/).
