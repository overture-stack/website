---
title: Installing Score Via Docker
---

This page will walk you through installing Score using Docker. Ensure you've completed all the applicable prerequisite steps before starting the installation.

# Configuration Overview

Before you proceed with the Score installation, be aware that there are several configurations for a Score server:

| Component          | Description                                                | Requirement |
|--------------------|------------------------------------------------------------|-------------|
| [Run Profiles](/documentation/score/installation/configuration/profiles)       | Define how your Score server operates.                     | Required    |
| [Song](/documentation/score/installation/configuration/song)              | Connect Score with your Song server.                       | Required    |
| [Object Storage](/documentation/score/installation/configuration/object-storage)     | Integrate your object storage provider with Score.         | Required    |
| [HashiCorp's Vault](/documentation/score/installation/configuration/bootstrap)  | Configure HashiCorp Vault to manage and protect your keys. | Optional    |

For detailed information on [configuration](/documentation/score/installation/configuration/) options and guidelines, including setting up your environment variables file, see our section on Configurations section.

# Installation Steps

1. **Setting up your environment variables:**

Based on your configuration, create an `.env.score` file with the necessary environment variables. Replace placeholders like `{{ego-host-url}}` with your actual values. Here's an example of the `.env.score` file:

```bash
# ============================
# Spring Run Profiles (Required)
# ============================

# Active profiles to determine app behavior & configs
SPRING_PROFILES_ACTIVE=prod,aws,secure

# Server configuration
SERVER_PORT=8087
SERVER_SSL_ENABLED=false

# Logging
LOGGING_LEVEL_ORG_SPRINGFRAMEWORK_WEB=INFO
LOGGING_LEVEL_BIO_OVERTURE_SCORE_SERVER=INFO
LOGGING_LEVEL_ROOT=INFO

# ============================
# Server Authentication integration (Required)
# ============================
AUTH_SERVER_URL=http://host.docker.internal:9082/o/check_api_key/
AUTH_SERVER_TOKENNAME={{API-Key}}
AUTH_SERVER_CLIENTID=score
AUTH_SERVER_CLIENTSECRET=abc123
AUTH_SERVER_SCOPE_STUDY_PREFIX=score.
AUTH_SERVER_SCOPE_UPLOAD_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_DOWNLOAD_SUFFIX=.READ
AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM=score.READ
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM=score.WRITE


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

<Warning>This environment variable file is subject to change depending on your deployment scenario, details can be found within [the configuration section](/documentation/score/installation/configuration/)</Warning>

2. **Run Docker:**

Following the [configuration](/documentation/score/installation/configuration/) of your environment variables, start the Score container using the `docker run` command, specifying your mounted `.env.score` file:

**For Linux (Recommended)**

```bash
docker run --env-file .env.score --network=host -d -p 8087:8087  ghcr.io/overture-stack/score-server:latest
```

**For Mac and Windows**

```bash
docker run --env-file .env.score -d -p 8087:8087  ghcr.io/overture-stack/score-server:latest
```

3. **Accessing Score:**

Score should now be running with the swagger-ui accessible from: `http://localhost:8087/swagger-ui.html#/`

To facilitate interactions between your local machine and the Score server we recommend [setting up the Score Client](/documentation/score/user-guide/client-setup/).
