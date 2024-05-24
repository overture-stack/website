---
title: Deployment Guide
---

# Authorization Service Setup

The Keycloak authorization service will be set up first as it will be brokering authorization tokens that will allow Overture services to communicate securely.

## Setting up your database

1. **Create a new network in docker:** All services interacting with databases will be connected to the custom network `db-network`. This setup ensures isolated communication between services that require database access, specifically Song, Score, and Maestro.

```bash
docker network create db-network
```

2. **Run PostgreSQL:** Use the following command to pull and run the PostgreSQL docker container:

```bash
docker run --name keycloak-db --network db-network  -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=keycloakDb -v./keycloak-db-data:/var/lib/postgresql/data -d postgres
```

This command runs a postgres image named `keycloak-db` on the `db-network` with the username `admin`, password `admin123` and a database within it called `keycloakDb`.


<Note title="Persistent Volumes"> It also includes a defined persistent volume `-v./keycloak-db-data:/var/lib/postgresql/data `. This volume will be a folder generated at runtime to serve as persistent storage. Meaning the data in your database will persist regardless of the container's status, in this case, located in the root of the directory where you run the container.</Note>

3. **Run PgAdmin4 (optional):** PgAdmin4 is an open-source, web-based tool that provides a convenient and user-friendly interface for managing PostgreSQL databases. Use the following command to pull and run the PgAdmin4 docker container:

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

Click **Save** and from the left-hand server drop-down, you can now view the connected database(s).

## Setting up Keycloak

1. **Generate a certificate**

This command generates a self-signed certificate for secure communication within the Keycloak environment. 

```bash
keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore server.keystore
```

<Note title="KeyCloak Configurations">This guide covers a generalized deployment example running on your local machine. If you are looking for specific information for deploying Keycloak on a server we recommended seeing [Keycloaks official server documentation](https://www.keycloak.org/guides#server). Should you require assistance with deployments tailored to your specific needs, please feel free to reach out to us for consultation at contact@overture.bio.</Note>

2. **Download the Overture API Key Provider and Realm configuration files**

- **Download the [Overture API Key Provider](https://github.com/oicr-softeng/keycloak-apikeys/releases/download/1.0.1/keycloak-apikeys-1.0.1.jar)**.
   - This file is for extending Keycloak's functionality to support API key authentication.
- **Download the [realm.json]**
   - This file contains pre-configurated settings for realms in Keycloak.
- **Download the [users.json]**
   - This file contains pre-configured user configurations for realms in Keycloak.


3. **Run Keycloak**

To deploy Keycloak, execute the following command. Make sure to run it from the same directory where you have gathered the necessary files mentioned above.

```bash
docker run --name keycloak -d -p 8443:8443 \
-e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin123 -e KC_HOSTNAME=localhost \
-v ./server.keystore:/opt/keycloak/conf/server.keystore \
-v ./keycloak-apikeys-1.0.1.jar:/opt/keycloak/providers/keycloak-apikeys.jar \
-v ./myrealm-realm.json:/opt/keycloak/data/import/myrealm-realm.json \
-v ./myrealm-users-0.json:/opt/keycloak/data/import/myrealm-users-0.json \
--network db-network \
quay.io/keycloak/keycloak:22.0 start --import-realm \
--db=postgres \
--db-url=jdbc:postgresql://keycloak-db:5432/keycloakDb --db-username=admin --db-password=admin123 \
--https-key-store-file=/opt/keycloak/conf/server.keystore --https-key-store-password=password
```

Once running you should be able to access the Keycloak admin console from `https://localhost:8443/admin`

<Warning>**Note:** If using a self-signed certificate as described above, your browser will likely give you a warning. Select **Advanced** and, depending on your browser, click the button to accept the risk and continue.
</Warning>

### Command Breakdown:

Refer to the table below for a breakdown of some of the keycloak speicific options used in the docker run command above:

| Name                                         | Command Snippet                                       | Description                                                                                                                                                         |
|----------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Port                                         | `-p 8443:8443`                               | Maps port 8443 on the host machine to port 8443 on the container, allowing access to Keycloak's HTTPS interface.                                                    |
| Keystore                                     | `-v ./server.keystore:/opt/keycloak/conf/server.keystore` | Mounts the `server.keystore` file from the host machine to `/opt/keycloak/conf/server.keystore` in the container.                                       |
| API Key Provider                             | `-v ./keycloak-apikeys-1.0.1.jar:/opt/keycloak/providers/keycloak-apikeys.jar` | Mounts the `keycloak-apikeys-1.0.1.jar` file from the host machine to `/opt/keycloak/providers/keycloak-apikeys.jar` in the container. |
| Realm.json                                       | `-v ./myrealm-realm.json:/opt/keycloak/data/import/myrealm-realm.json` | Mounts the `myrealm-realm.json` file from the host machine to `/opt/keycloak/data/import/myrealm-realm.json` in the container.                        |
| Users.json                                       | `-v ./myrealm-users-0.json:/opt/keycloak/data/import/myrealm-users-0.json` | Mounts the `myrealm-users-0.json` file from the host machine to `/opt/keycloak/data/import/myrealm-users-0.json` in the container.                        |
| Network                                      | `--network db-network`                       | Connects the container to the `db-network`.                                                                                                                         |
| Image                                        | `quay.io/keycloak/keycloak:22.0`             | Specifies the Keycloak Docker image with the tag `22.0`.                                                                                                             |
| Start Command                                | `start --import-realm`                       | Starts Keycloak and imports the specified realm configuration.                                                                                                      |
| Database                                     | `--db=postgres`                              | Specifies PostgreSQL as the database backend.                                                                                                                       |
| Database URL                                 | `--db-url=jdbc:postgresql://keycloak-db:5432/keycloakDb` | Sets the URL of the PostgreSQL database to `jdbc:postgresql://keycloak-db:5432/keycloakDb`. Here, `keycloak-db` refers to the PostgreSQL database container. |
| HTTPS Key Store File                         | `--https-key-store-file=/opt/keycloak/conf/server.keystore` | Specifies the location of the HTTPS key store file within the container.                                                                                            |
| HTTPS Key Store Password                     | `--https-key-store-password=password`        | Sets the password for the HTTPS key store file to "password".                                                                                                       |


With Keycloak successfully deployed, you are now prepared to proceed with deploying our file management and storage services, Song and Score.