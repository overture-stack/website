---
title: Deployment Guide
---

# Authorization Service Setup

Keycloak will be set up first as it will be brokering authorization tokens that will allow Overture services to communicate securely.

## Setting up the Keycloak database

1. **Create a new network in docker:** All services interacting with databases will be connected to the custom network `db-network`. This setup ensures isolated communication between services that require database access, specifically Song, Score, and Maestro.

```bash
docker network create db-network
```

2. **Run PostgreSQL:** Use the following command to pull and run the PostgreSQL docker container

```bash
docker run --name keycloak-db --network db-network  -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=keycloakDb -v./keycloak-db-data:/var/lib/postgresql/data -d postgres
```

This command runs a postgres image named `keycloak-db` on the `db-network` with the username `admin`, password `admin123` and a database within it called `keycloakDb`.


<Note title="Persistent Volumes"> It also includes a defined persistent volume `-v./keycloak-db-data:/var/lib/postgresql/data `. This volume will be a folder generated at runtime to serve as persistent storage. Meaning the data in your database will persist regardless of the container's status, in this case, located in the root of the directory where you run the container.</Note>

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

   - The **[Realm.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/keycloakConfigs/myrealm-realm.json)**, containing pre-configurated settings for our Overture Keycloak realm.

   - The **[Users.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/keycloakConfigs/myrealm-users-0.json)**, containing pre-configured user information to populate the realm.


2. **Run Keycloak:** To deploy Keycloak, execute the following command. Make sure to run it from the same directory where you have gathered the necessary files mentioned above.

```bash
docker run --name keycloak -d -p 8180:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin123 \
  -e KC_HOSTNAME=localhost \
  -e KC_HEALTH_ENABLED=true \
  -v ./keycloakConfigs/keycloak-apikeys-1.0.1.jar:/opt/keycloak/providers/keycloak-apikeys.jar \
  -v ./keycloakConfigs/myrealm-realm.json:/opt/keycloak/data/import/myrealm-realm.json \
  -v ./keycloakConfigs/myrealm-users-0.json:/opt/keycloak/data/import/myrealm-users-0.json \
  --network db-network \
  quay.io/keycloak/keycloak:22.0 start-dev \
  --hostname-port=8180 \
  --import-realm \
  --db=postgres \
  --db-url=jdbc:postgresql://keycloak-db:5432/keycloakDb \
  --db-username=admin \
  --db-password=admin123
```

Once running you should be able to access the Keycloak admin console from `http://localhost:8180/admin`

<details>
  <summary><b>For more details, click here</b></summary>

<br></br>

- **Local Port Mapping:** The `-p 8180:8080` option maps port `8180` on the host machine to port `8080` inside the Docker container. This is crucial as port `8080` is the default port Keycloak listens on, but it's often occupied by other services. By mapping it to port 8180 on the host, we are ensuring that Keycloak remains accessible without interfering with other services running on the same machine.


- **Configuration Files:** The `-v` options mount the local directories containing the Keycloak configuration files (`realm.json`, `users.json`, and the `API key provider JAR`) to the corresponding paths inside the container. This ensures that Keycloak starts with the desired realm configuration and user definitions, as well as the extended functionality provided by the API key provider.


- **Custom Network:** The `--network db-network` option connects the Keycloak container to a custom Docker network named` db-network`. This is particularly useful if when running other services, such as a PostgreSQL database, in separate containers and want them to communicate seamlessly. It facilitates secure and efficient communication between containers without exposing unnecessary ports to the outside world.


- **Base Image:** `quay.io/keycloak/keycloak:22.0` specifies the Docker image to use, which is version 22.0 of Keycloak from Quay.io. This image includes Keycloak and all its dependencies, optimized for performance and security.


- **Start Command:** The `start-dev` argument passed to the container instructs Keycloak to start in development mode. This mode is suitable for our example deployment. A production deployment is largely the same with exception to requring a SSL certificate on startup. 


- **Realm Import:** The `--import-realm` flag tells Keycloak to import the realm configuration from the specified JSON file upon startup. This is essential for setting up realms with predefined roles, users, and other settings without requiring manual configurations.


- **Database Connection:** The database-related flags (`--db`, `--db-url`, `--db-username`, `--db-password`) configure Keycloak to connect to the PostgreSQL database. These settings are critical for persisting user data, sessions, and other operational data securely and reliably.

</details>

<br></br>

<Note title="Server Deployments">If you are looking for information on deploying Keycloak on a server we recommended seeing [Keycloaks official server documentation](https://www.keycloak.org/guides#server). Should you require assistance with deployments tailored to your specific needs, please feel free to reach out to us for consultation at contact@overture.bio.</Note>
