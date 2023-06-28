---
title: Installing Ego
---

# Installation

Before installing Ego, make sure you have completed all the applicable [prerequisite steps](/documentation/ego/installation/prerequisites/).

## Docker Installation

To install Ego using Docker, follow these steps:

1. Create an `.env` file with the necessary environment variables. Here's an example of the `.env` file:

```bash
# Active Profiles (only auth needed)
SPRING_PROFILES_ACTIVE=auth

# Google login stuff
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTID={{Insert-Client-ID}}
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTSECRET={{Insert-Client-Secret}}

# Database Connection
SPRING_DATASOURCE_URL=jdbc:postgresql://{{postgres db host - default is localhost:5432}}/{{postgres db name}}?stringtype=unspecified
SPRING_DATASOURCE_USERNAME={{Insert-Ego-Db-Username}}
SPRING_DATASOURCE_PASSWORD={{Insert-Ego-Db-Password}}
```

2. Start the Ego container using the `docker run` command, specifying the mounted `.env` file:

```bash
docker run --env-file .env -p 8081:8081 ghcr.io/overture-stack/ego:edge
```

3. Ego should now be running and accessible at `http://localhost:8081`.

## Ego Admin-UI setup

To install and integrate the Ego Admin-UI using Docker, follow these steps:

1. Create an `.env` file with the necessary environment variables. Here's an example of the `.env` file:

```bash
REACT_APP_API: http://localhost:8081
REACT_APP_EGO_CLIENT_ID: ego-ui 
```

2. Start the Ego-UI container using the `docker run` command, specifying the mounted `.env` file:

```bash
docker run --env-file .env -p 3501:3501 docker pull ghcr.io/overture-stack/ego-ui:edge
```

3. The Ego Admin-UI should now be running and accessible at `http://localhost:3501`.

## Auth Setup

Now that Ego is up and running, we want to configure the first user and application that can use Ego for authorization.

### First User

By default, users do not have the `ADMIN` role and therefore cannot modify Ego or use the Ego Admin UI. To allow the first user to log in as an `ADMIN` user, update the `firstUserAsAdmin`, `type`, and `status` configurations in the `.env` file as follows:

```plaintext
# Default values available for creation of entities
DEFAULT_USER_FIRST_USER_AS_ADMIN=true
DEFAULT_USER_TYPE=USER
DEFAULT_USER_STATUS=APPROVED
```

Now that you have updated the .env file with the necessary configurations, restart the Ego container to apply the changes:

```bash
docker restart <container-id>
```

Once the container is restarted, you can try logging in via the Ego UI.

### Cleanup

Assuming everything is working properly, the Ego database is properly configured, and the first user and application are functioning, we recommend disabling the initialization of the first application and user. This means updating the `firstUserAsAdmin` and `initialization.enabled` configurations back to false in the `.env `file.

Additionally, if you prefer to manage migrations yourself and not have Ego automatically apply them when you update Ego, you may disable the Flyway migration setting (`FLYWAY_ENABLED`) by setting it to false in the `.env` file.
