---
title: Installing Ego
---

Ensure you have completed all the necessary <a href="/documentation/ego/installation/prerequisites/" target="_blank" rel="noopener noreferrer">prerequisite steps</a> before installing Ego.

# Installing Ego Via Docker

Follow the steps below to install Ego using Docker:

1. **Set up your environment variables** 

Based on your configuration, create an `.env.ego` file with the necessary environment variables. Replace placeholders found in `{{brackets}}` with your values. 

Here's an example of the `.env.ego` file with a description of each variable in the table below:

```ENV
# Active Profiles (only auth needed)
SPRING_PROFILES_ACTIVE=auth

# Google OAuth Credentials
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTID={{Client-ID}}
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTSECRET={{Client-Secret}}
SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_REDIRECTURI=http://localhost:8081/oauth/code/google

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

DEFAULT_USER_FIRST_USER_AS_ADMIN=true
DEFAULT_USER_TYPE=USER
DEFAULT_USER_STATUS=APPROVED
```


| Variable                                                         | Description                                                |
|------------------------------------------------------------------|------------------------------------------------------------|
| `SPRING_PROFILES_ACTIVE`                                         | Specifies active Spring profiles, by default it will be set to `auth`.  |
| `SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTID`     | Client ID for Google OAuth credentials.                  |
| `SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENTSECRET` | Client Secret for Google OAuth credentials.     |
| `SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_REDIRECTURI`  | The redirect URI for google authentication, update the base URL according to your setup environment. |
| `SPRING_DATASOURCE_URL`                                          | URL for the database connection, with placeholders for host and database name (ex. `5432/egoDb`). |
| `SPRING_DATASOURCE_USERNAME`                                     | Username for the database connection (ex. `postgres`).                      |
| `SPRING_DATASOURCE_PASSWORD`                                     | Password for the database connection (ex. `abc123`).                      |
| `INITIALIZATION_ENABLED` & `INITIALIZATION_APPLICATIONS`         | These variables are for the later initialization of the Ego Admin UI and can be left as is for now or updated according to your setup environment.    |
| `DEFAULT_USER`                                                   | By default, new users do not have ADMIN roles and therefore cannot modify Ego or use the Ego Admin UI. To allow the first user to log in as an ADMIN user, we include the `DEFAULT_USER_FIRST_USER_AS_ADMIN`, `DEFAULT_USER_TYPE`, and `DEFAULT_USER_STATUS` fields.  |

<Warning>Modify the `...GOOGLE_CLIENTID` and `...GOOGLE_CLIENTSECRET` variables to configure them for different OAuth services. To do this, create separate variables for each OAuth service you intend to use with Ego, such as `GITHUB`, `ORCID`, or `LINKEDIN`. Replace 'GOOGLE' in the variable names with the respective service name and update the values accordingly.</Warning>

2. **Docker Run**

Start the Ego container using the `docker run` command, specifying the mounted `.env.ego` file:

**For Linux (Recommended)**

```bash
docker run --name ego --env-file .env.ego --network=host -d -p 8081:8081 ghcr.io/overture-stack/ego:edge
```

**For Mac and Windows**

Note: Running Ego through docker with an ARM64 (Apple Silicon) processor can be unstable and is currently not recommended.

```bash
docker run --name ego --env-file .env.ego -d -p 8081:8081 ghcr.io/overture-stack/ego:edge
```

3. **Accessing Ego**

If successful you should see the following message:

```bash
[main] INFO  b.o.e.AuthorizationServiceMain - Started AuthorizationServiceMain in ... seconds (JVM running for ...)
```

Ego's Swagger UI should now be running and accessible at `http://localhost:8081/swagger-ui.html`

# Admin-UI setup

To install and integrate the Ego Admin-UI using Docker, follow these steps:

1. **Set up your environment variables** 

Create an `.env.egoui` file with the necessary environment variables. Here's an example of the `.env.egoui` file:

```bash
REACT_APP_API=http://localhost:8081
REACT_APP_EGO_CLIENT_ID=ego-ui
```

2. **Run Docker**

Start the Ego-UI container using the `docker run` command, specifying the mounted `.env.egoui` file:

```bash
docker run --name egoUI --env-file .env.egoui -p 3501:8080 ghcr.io/overture-stack/ego-ui:edge
```

3. **Log into the Ego-UI**

After executing the Docker command, the Ego Admin-UI will be operational and can be accessed at the following URL: `http://localhost:3501.` Login immediately, as this action will initialize your status as an Admin within Ego.

4. **Disable First User Authorization**

As a final step, we recommend disabling the automatic initialization of the first application and user. To do this, update the `DEFAULT_USER_FIRST_USER_AS_ADMIN` setting to `false` in the .env.ego file.

