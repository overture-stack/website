---
title: Installing Ego
---

Ensure you have completed all the necessary <a href="/documentation/ego/installation/prerequisites/" target="_blank" rel="noopener noreferrer">prerequisite steps</a> before installing Ego.

# Installing Ego Via Docker

Follow the steps below to install Ego using Docker:

1. **Set up your `.env` file:**

Create an `.env.ego` file with the necessary environment variables. Here's an example of the `.env` file:

```bash
# Active Profiles (only auth needed)
SPRING_PROFILES_ACTIVE=auth

# Google OAuth Credentials
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTID={{Client-ID}}
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTSECRET={{Client-Secret}}

# Database Connection variables
SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:{{Postgres-Host(ex.5432)}/{{DB-Name}}
SPRING_DATASOURCE_USERNAME={{Ego-Db-Username}}
SPRING_DATASOURCE_PASSWORD={{Ego-Db-Password}}

# Ego Admin UI variables

INITIALIZATION_ENABLED=true
INITIALIZATION_APPLICATIONS_0_NAME=Ego UI
INITIALIZATION_APPLICATIONS_0_TYPE=CLIENT
INITIALIZATION_APPLICATIONS_0_CLIENTID=ego-ui
INITIALIZATION_APPLICATIONS_0_CLIENTSECRET=anything
INITIALIZATION_APPLICATIONS_0_REDIRECTURI=http://localhost:3501
INITIALIZATION_APPLICATIONS_0_DESCRIPTION=initial app for ego ui
```

2. **Docker Run:**

Start the Ego container using the `docker run` command, specifying the mounted `.env.ego` file:

**For Linux (Recommended)**

```bash
docker run --env-file .env.ego --network=host -d -p 8081:8081 ghcr.io/overture-stack/ego:edge
```

**For Mac and Windows**

Note: Running Ego through docker with an ARM64 (Apple Silicon) processor can be unstable and is currently not recommended.

```bash
docker run --env-file .env.ego -p 8081:8081 ghcr.io/overture-stack/ego:edge
```

3. **Accessing Ego:**

Ego's Swagger UI should now be running and accessible at `http://localhost:8081/swagger-ui.html`

# Admin-UI setup

To install and integrate the Ego Admin-UI using Docker, follow these steps:

1. **Set up your `.env` file:**

Create an `.env.egoui` file with the necessary environment variables. Here's an example of the `.env` file:

```bash
REACT_APP_API=http://localhost:8081
REACT_APP_EGO_CLIENT_ID=ego-ui
```

<Note title="Organizing your .env files">We recommned naming your enviorment variable files `.env.ego` and `.env.egoui`</Note>

2. **Docker Run:**

Start the Ego-UI container using the `docker run` command, specifying the mounted `.env.egoui` file:

```bash
docker run --env-file .env.egoui -p 3501:8080 ghcr.io/overture-stack/ego-ui:edge
```

3. **Accessing Ego-UI:**

The Ego Admin-UI should now be running and accessible at `http://localhost:3501`.

# Auth Setup

Now that Ego and Ego UI is up and running, we want to configure the first user and application that can use Ego for authorization.

## First User

By default, users do not have the `ADMIN` role and therefore cannot modify Ego or use the Ego Admin UI. To allow the first user to log in as an `ADMIN` user, update the `firstUserAsAdmin`, `type`, and `status` configurations your `.env.ego` file as follows:

```bash
# Default values available for creation of entities
DEFAULT_USER_FIRST_USER_AS_ADMIN=true
DEFAULT_USER_TYPE=USER
DEFAULT_USER_STATUS=APPROVED
```

Now that you have updated your Ego .env file with the necessary configurations, restart the Ego container to apply the changes:

```bash
docker restart <container-id>
```

Once the container is restarted, you can try logging in via the Ego UI.
## Cleanup

Assuming everything is working properly, the Ego database is properly configured, and the first user and application are functioning, we recommend disabling the initialization of the first application and user. This means updating the `firstUserAsAdmin` and `initialization.enabled` configurations back to false in the `.env.ego `file.

Additionally, if you prefer to manage migrations yourself and not have Ego automatically apply them when you update Ego, you may disable the Flyway migration setting (`FLYWAY_ENABLED`) by setting it to false in the `.env.ego` file.
