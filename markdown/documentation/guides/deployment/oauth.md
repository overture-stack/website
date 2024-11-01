---
title: Deployment Guide
---

# Authorization Service Setup

Keycloak will be set up first to broker authorization tokens, enabling secure communication for Overture services.

## Setting up the Keycloak database

1. **Run PostgreSQL:** Use the following command to pull and run the PostgreSQL docker container

```bash
docker run --name keycloak-db \
 -e POSTGRES_USER=admin \
 -e POSTGRES_PASSWORD=admin123 \
 -e POSTGRES_DB=keycloakDb \
 -v ./persistentStorage/keycloak-db-data:/var/lib/postgresql/data \
 -d postgres:14
```

This command runs a postgres image named `keycloak-db` with the username `admin`, password `admin123` and a database within it called `keycloakDb`.


<Note title="Persistent Volumes"> It also includes a defined persistent volume `-v./persistentStorage/keycloak-db-data:/var/lib/postgresql/data `. This volume will be a folder generated at runtime that will serve as local persistent storage within your directory. Meaning the data in your database is backed up outside of docker.</Note>

<!-- 3. **Run PgAdmin4 (optional):** PgAdmin4 is an open-source, web-based tool that provides a convenient and user-friendly interface for managing PostgreSQL databases. Use the following command to pull and run the PgAdmin4 docker container:

```bash
docker run --name pgadmin --network db-network -e PGADMIN_DEFAULT_EMAIL=admin@example.com -e PGADMIN_DEFAULT_PASSWORD=admin123 -p 5051:80 -d dpage/pgadmin4:latest
```

This command spins up a PgAdmin4 container accessible from `http://localhost:5051/`. Once running you can login using the credentials `admin@example.com` and the password `admin123`.

4. **Connect your database to PgAdmin4 (optional)** 

Once logged in, select **Add New Server** name your server and then **select the connection tab**, based on our instructions, input the following:

| Field              | Value                  |
| ------------------ | ---------------------- |
| Host name/address: | `keycloak-db`          |
| Port:              | `5432`                 |
| Username:          | `admin`                |
| Password:          | `admin123`             |

Click **Save** and from the left-hand server drop-down, you can now view the connected database(s). -->

## Setting up Keycloak

1. **Create a folder titled `keycloakConfigs` and place the following configuration files within it:**

   - The **[Overture API Key Provider](https://github.com/oicr-softeng/keycloak-apikeys/releases/download/1.0.1/keycloak-apikeys-1.0.1.jar)**, for extending Keycloak's functionality to support API key authentication.

   - The **[Realm.json](https://github.com/overture-stack/conductor/blob/develop/configurationFiles/keycloakConfigs/myrealm-realm.json)**, containing pre-configurated settings for our Overture Keycloak realm.

   - The **[Users.json](https://github.com/overture-stack/conductor/blob/develop/configurationFiles/keycloakConfigs/myrealm-users-0.json)**, containing pre-configured user information to populate the realm.


2. **Run Keycloak:** To deploy Keycloak, execute the following command. Make sure to run it in the directory containing the files mentioned above.

```bash
docker run -d --name keycloak \
  -p 8180:8080 \
  -e KC_DB=postgres \
  -e KC_DB_USERNAME=admin \
  -e KC_DB_PASSWORD=admin123 \
  -e KC_DB_URL=jdbc:postgresql://keycloak-db:5432/keycloakDb \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin123 \
  -e KC_HOSTNAME=localhost \
  -e KC_HEALTH_ENABLED=true \
  -v ./configurationFiles/keycloakConfigs/keycloak-apikeys-1.0.1.jar:/opt/keycloak/providers/keycloak-apikeys.jar \
  -v ./configurationFiles/keycloakConfigs/myrealm-realm.json:/opt/keycloak/data/import/myrealm-realm.json \
  -v ./configurationFiles/keycloakConfigs/myrealm-users-0.json:/opt/keycloak/data/import/myrealm-users-0.json \
  quay.io/keycloak/keycloak:22.0 \
  start-dev --import-realm --hostname-port=8180
```

Once running, you will be able to access the Keycloak admin console from `http://localhost:8180/admin`

<details>
  <summary><b>For more details, click here</b></summary>

<br></br>

- **Local Port Mapping:** The `-p 8180:8080` option maps port `8180` on the host machine to port `8080` inside the Docker container. This is crucial as port `8080` is the default port Keycloak listens on, but it's often occupied by other services. By mapping it to port 8180 on the host, we are ensuring that Keycloak remains accessible without interfering with other services running on the same machine.


- **Configuration Files:** The `-v` options mount the local directories containing the Keycloak configuration files (`realm.json`, `users.json`, and the `API key provider JAR`) to the corresponding paths inside the container. This ensures that Keycloak starts with the desired realm configuration and user definitions, as well as the extended functionality provided by the API key provider.


- **Base Image:** `quay.io/keycloak/keycloak:22.0` specifies the Docker image to use, which is version 22.0 of Keycloak from Quay.io. This image includes Keycloak and all its dependencies, optimized for performance and security.


- **Start Command:** The `start-dev` argument passed to the container instructs Keycloak to start in development mode. This mode is suitable for our example deployment. A production deployment is largely the same with exception to requring a SSL certificate on startup. 


- **Realm Import:** The `--import-realm` flag tells Keycloak to import the realm configuration from the specified JSON file upon startup. This is essential for setting up realms with predefined roles, users, and other settings without requiring manual configurations.


- **Database Connection:** The database-related flags (`--db`, `--db-url`, `--db-username`, `--db-password`) configure Keycloak to connect to the PostgreSQL database. These settings are critical for persisting user data, sessions, and other operational data securely and reliably.

---
</details>

<br></br>

<Note title="Server Deployments">If you are looking for information on deploying Keycloak on a server, we recommend seeing [Keycloaks official server documentation](https://www.keycloak.org/guides#server). Should you require assistance with deployments tailored to your specific needs, please feel free to reach out to us for consultation at contact@overture.bio.</Note>
