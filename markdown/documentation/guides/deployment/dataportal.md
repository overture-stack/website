---
title: Deployment Guide
---

# Data Portal Setup

Setting up your data portal involves configuring and running Elasticsearch, Maestro, Arranger and Stage. Below are the steps and detailed breakdowns to ensure a smooth setup process.

## Elasticsearch

1. **Run Elasticsearch:** Use the following command to pull and run the Elasticsearch docker container

```bash
docker run --env-file .env.elasticsearch \
    --name elasticsearch \
    -p 9200:9200 \
    -e ES_JAVA_OPTS=-Xms512m -Xmx2048m \
    -e ELASTIC_PASSWORD=myelasticpassword \
    -e MANAGE_INDEX_TEMPLATES=true \
    -e discovery.type=single-node   \
    -e cluster.name=workflow.elasticsearch \
    -e xpack.security.enabled=true \ 
    --network index-network \
    docker.elastic.co/elasticsearch/elasticsearch:8.13.4
```

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>
<br></br>

- `-p 9200:9200` maps port 9200 of the host to port 9200 of the container


- `-e ES_JAVA_OPTS=-Xms512m -Xmx2048m` sets the initial and maximum heap size for the Java Virtual Machine (JVM) running Elasticsearch. `-Xms512m` sets the initial heap size to 512 MB.
`-Xmx2048m` sets the maximum heap size to 2048 MB (2 GB). Properly setting these values ensures that Elasticsearch has enough memory to handle its operations efficiently, but not so much that it starves other processes on the host machine.


- `-e ELASTIC_PASSWORD=myelasticpassword` Sets the password for the elastic user


- `-e MANAGE_INDEX_TEMPLATES=true` ensures Elasticsearch manages index templates, when true, the system expects to manage the index templates as part of its operations. In the next step we will create a client services to set up the default configurations for new indices


- `-e discovery.type=single-node` configures Elasticsearch to run in single-node mode, this bypasses the need for cluster discovery and formation protocols, making Elasticsearch start up as a standalone node, ideal for development, testing, or small-scale deployments where clustering is not necessary


- `-e cluster.name=workflow.elasticsearch` Names the Elasticsearch cluster, this is good practice in case you choose to run multiple clusters or nodes in the future


- `-e xpack.security.enabled=true` activates security features such as authentication, authorization, encryption, and audit logging

</details>
<br></br>

2. **Create a folder titled `elasticsearchConfigs` and place the following configuration files within it:**


   - The **[composer_component_template.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/elasticsearchConfigs/composer_component_template.json)** contains common configurations, such as mappings, settings, or aliases, that can be shared across multiple index templates.
   - The **[composer_index_template.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/elasticsearchConfigs/composer_index_template.json)** specifies settings, mappings, and configurations that will be applied automatically to new indices that match the template's pattern

3. **Initialize an index:** Run the following image to set up index templates and create an new index:

```bash
docker run \
    --name index-setup \
    --network index-network \
    -p 9201:9201 \
    -v ./elasticsearchConfigs/composer_index_template.json:/usr/share/elasticsearch/config/composer_index_template.json \
    -v ./elasticsearchConfigs/composer_component_template.json:/usr/share/elasticsearch/config/composer_component_template.json \
    alpine sh -c "apk --no-cache add curl && sleep 30 && curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/_component_template/component_template' -H 'Content-Type: application/json' -d @/usr/share/elasticsearch/config/composer_component_template.json && curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/_index_template/index_template' -H 'Content-Type: application/json' -d @/usr/share/elasticsearch/config/composer_index_template.json && curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/analysis-composer-index' -H 'Content-Type: application/json' -d '{\"aliases\": {\"analysis_centric\": {\"is_write_index\": true}}}' && echo 'Templates and index created successfully.'"
```

Adjust the command as necessary, if your volumes paths differ.

<details>
  <summary><b>Click here for a breakdown of the command</b></summary>
<br></br>

### 1. Installs `curl` using `apk`

```bash
apk --no-cache add curl
```

- `apk` is the package manager for Alpine Linux, the default os of this container image
- `--no-cache` prevents the caching of the index, saving disk space and time
- `add curl` Installs the curl utility, which is used for making HTTP requests

### 2. Waits for 30 seconds

```bash
sleep 30
```

- If you have configured your docker resources appropriatly this iensures that Elasticsearch has enough time to start up before making any requests

### 3. Uploads the component template:

```bash
curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/_component_template/component_template' -H 'Content-Type: application/json' -d @/usr/share/elasticsearch/config/composer_component_template.json
```

- `-u elastic:myelasticpassword` uses the elastic user with the specified eariler
- `-X PUT` specifies the HTTP method PUT, which is used to create or update a resource.
- `'http://elasticsearch:9200/_component_template/component_template'` is the endpoint to create or update a component template in Elasticsearch.
- `-H 'Content-Type: application/json'` sets the Content-Type header to application/json
- `-d @/usr/share/elasticsearch/config/composer_component_template.json` sends the data from the composer_component_template.json file as the request body

### 4. Uploads the index template:

```bash
curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/_index_template/index_template' -H 'Content-Type: application/json' -d @/usr/share/elasticsearch/config/composer_index_template.json
```

- Similar to the previous curl command, but this one uploads the index template instead of the component template
- The endpoint is `'_index_template/index_template'`
- The data file is `composer_index_template.json`

### 5. Creates an index with an alias:

```bash
curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/analysis-composer-index' -H 'Content-Type: application/json' -d '{"aliases": {"analysis_centric": {"is_write_index": true}}}'
```
- Similar to the previous curl commands, but this one creates an index with the
- `'http://elasticsearch:9200/analysis-composer-index'` is the endpoint to create or update an index named analysis-composer-index. The use of templates (both component and index) ensures that any new indices created that match the wildcard pattern `analysis-*` will automatically adhere to the defined structure and settings in these templates.
- `-d '{"aliases": {"analysis_centric": {"is_write_index": true}}}'` sends a JSON object as the request body, which creates an alias named analysis_centric and sets it as the write index

### 6. Prints success message:

- `echo 'Templates and index created successfully.'` prints a nice confirmation message to the terminal

</details>
<br></br>

## Maestro

1. **Create a env file:** Create a file named `.env.maestro` with the following content:


<details>

  <summary><b>Click here for the .env.maestro template</b></summary>
<br></br>

```bash
# ==============================
# Maestro Environment Variables
# ==============================

# Maestro Variables
MAESTRO_FAILURELOG_ENABLED= true
MAESTRO_FAILURELOG_DIR= app/logs/maestro
MAESTRO_LOGGING_LEVEL_ROOT= INFO
MAESTRO_NOTIFICATIONS_SLACK_ENABLED= false
# Song Variables
MAESTRO_REPOSITORIES_0_CODE= song.overture
MAESTRO_REPOSITORIES_0_URL= song:8080
MAESTRO_REPOSITORIES_0_NAME= "Song Repository"
MAESTRO_REPOSITORIES_0_ORGANIZATION= Overture
MAESTRO_REPOSITORIES_0_COUNTRY= CA
# Elasticsearch Variables
MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ENABLED= true
MAESTRO_ELASTICSEARCH_INDEXES_FILECENTRIC_ENABLED= false
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_ENABLED= true
MAESTRO_ELASTICSEARCH_CLUSTER_NODES= elasticsearch:9200
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_USER= elastic
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_PASSWORD= myelasticpassword
MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_NAME= analysis-composer-index
MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ALIAS= analysis_centric
MANAGEMENT_HEALTH_ELASTICSEARCH_ENABLED= false
MANAGEMENT_SECURITY_ENABLED= false
# Kafka Variables
SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS= kafka:9092
SPRING_CLOUD_STREAM_BINDINGS_SONGINPUT_DESTINATION= song-analysis
# Spring Variables
SPRING_MVC_ASYNC_REQUESTTIMEOUT= -1
SPRINGDOC_SWAGGERUI_PATH= /swagger-api
```

</details>

<br></br>

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>

  <br></br>

### Maestro Variables

- `MAESTRO_FAILURELOG_ENABLED` enables or disables failure logging. When set to `true`, Maestro logs any failures that occur, which is useful for debugging and monitoring purposes


- `MAESTRO_FAILURELOG_DIR` sets the directory path where failure logs are stored. The value should be `app/logs/maestro` or another path of your choosing


- `MAESTRO_LOGGING_LEVEL_ROOT` sets the root logging level for Maestro. The value can be `INFO`, `DEBUG`, `WARN`, etc. It determines the level of detail included in logs, where `INFO` is standard and `DEBUG` provides more detailed information


- `MAESTRO_NOTIFICATIONS_SLACK_ENABLED` enables or disables Slack notifications. When set to `true`, Maestro can send notifications to a Slack channel

#### Song Variables

- `MAESTRO_REPOSITORIES_0_CODE` sets the code identifier for the repository. The value here is `song.overture`, serving as a unique identifier used within Maestro to reference the repository


- `MAESTRO_REPOSITORIES_0_URL` is the URL of the metadata repository. The value is `song:8080`, specifying the endpoint where Maestro can connect to the Song repository


- `MAESTRO_REPOSITORIES_0_NAME` defines the display name for the repository. The value is `"Song Repository"`, providing a human-readable name for the repository used in logs and interfaces


- `MAESTRO_REPOSITORIES_0_ORGANIZATION`: defines the name of the organization that owns the repository


- `MAESTRO_REPOSITORIES_0_COUNTRY` defines  the country code for the repository's location. The value is `CA` (Canada), indicating the country associated with the repository

#### Elasticsearch Variables

- `MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ENABLED` set to `true` specifing that analysis-centric index are to be expected


- `MAESTRO_ELASTICSEARCH_INDEXES_FILECENTRIC_ENABLED` set to `false` specifing to Maestro that file-centric index are not to be expected


- `MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_ENABLED` enables basic authentication for the Elasticsearch client


- `MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_NAME` is the name of the analysis-centric Elasticsearch index. The value is `analysis-composer-index`, aligned with our previously created index


- `MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ALIAS` is the alias for the analysis-centric Elasticsearch index


- `MAESTRO_ELASTICSEARCH_CLUSTER_NODES` points to the address of the Elasticsearch cluster node(s). The value is `elasticsearch:9200`, specifying the Elasticsearch node that Maestro will interact with


- `MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_USER`, `MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_PASSWORD` is the username and password for Elasticsearch


- `MANAGEMENT_HEALTH_ELASTICSEARCH_ENABLED`: Enables or disables Elasticsearch health checks. The value can be `false` (disabled) or `true` (enabled), controlling whether health checks for Elasticsearch are performed.


- `MANAGEMENT_SECURITY_ENABLED`: Enables or disables security management. The value can be `false` (disabled) or `true` (enabled), controlling whether security features are enabled.

#### Kafka Variables

- `SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS` defines the address of the Kafka broker(s). The value is set ti `kafka:9092`, specifying the Kafka instance we set up earlier

- `SPRING_CLOUD_STREAM_BINDINGS_SONGINPUT_DESTINATION` is the destination topic for the Song input binding. The value is `song-analysis`, pointing to the Kafka topic we configured earlier

#### Spring Variables

- `SPRING_MVC_ASYNC_REQUESTTIMEOUT` is `-1` (no timeout), this setting determins how long asynchronous requests are allowed to run before timing out


- `SPRINGDOC_SWAGGERUI_PATH` is `/swagger-api`, specifying the URL path where the Swagger UI can be accessed (`localhost:11235/swagger-api`).


<br></br>
</details>
<br></br>

2. **Run Maestro:** Use the docker run command with the `--env-file` option:

```bash
docker run --env-file .env.maestro \
    --name maestro \
    --platform linux/amd64 \
    -p 11235:11235 \
    --network db-network \
    --network index-network \
    ghcr.io/overture-stack/maestro:4.4.0-snapshot-07a3a41

```

## Arranger

1. **Create a env file:** Create a file named `.env.arranger` with the following content:

```bash
# ==============================
# Arranger Environment Variables
# ==============================

# Elasticsearch Variables
ES_HOST=http://elasticsearch:9200
ES_USER=elastic
ES_PASS=myelasticpassword
# Stage Variables
REACT_APP_BASE_URL=http://localhost:3000
REACT_APP_ARRANGER_ADMIN_ROOT=http://localhost:5050/graphql
```

2. **Create a folder titled `arrangerConfigs` and place the following configuration files within it:**


   - The **[base.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/base.json)**, containing the base configuration for the Arranger server
   - The **[extended.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/extended.json)**, containing all possible fields inputted into arranger
   - The **[facets.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/facets.json)**,  defines the facets found within the facet panel of the data exploration page in Stage
   - The **[matchbox.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/matchbox.json)**, containing matchbox configuration settings
   - The **[table.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/table.json)**, defines the formattoing of the tables found on the data exploration page in Stage


3. **Run Arranger:** Use the docker run command with the `--env-file` option:

```bash
docker run --env-file .env.arranger-server \
    --name arranger-server \
    -p 5050:5050 \
    --network index-network \
    -v ./arrangerConfigs/base.json:/app/modules/server/configs/base.json \
    -v ./arrangerConfigs/extended.json:/app/modules/server/configs/extended.json \
    -v ./arrangerConfigs/facets.json:/app/modules/server/configs/facets.json \
    -v ./arrangerConfigs/matchbox.json:/app/modules/server/configs/matchbox.json \
    -v ./arrangerConfigs/table.json:/app/modules/server/configs/table.json \
    ghcr.io/overture-stack/arranger-server:0b57cf15
```

Make sure to confirm the `./arrangerConfigs/` path aligns with the actual paths to your Arranger-Server configuration files, update your command or folder structure accordingly.

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>
<br></br>

### When creating the .env.arranger file:

- `ES_HOST` is thehe URL of your Elasticsearch instance


- `ES_USER` and `ES_PASS` are the credentials for accessing Elasticsearch


- `REACT_APP_BASE_URL` is the base URL for your front-end application, in this case Stage, which we will set up next


- `REACT_APP_ARRANGER_ADMIN_ROOT` is the URL for the Arranger GraphQL endpoint

### When running Arranger:

- `-p 5050:5050` maps port 5050 of the host to port 5050 of the container.


- `--network index-network` connects the container to the index-network Docker network

- `-v ./arrangerConfigs/...:/app/modules/server/configs/...` mounts configuration files into the container
    - `base.json` contains the base configuration for the Arranger server
    - `extended.json` contains all possible fields inputted into arranger
    - `facets.json` defines the facets found within the facet panel of the data exploration page in Stage
    - `table.json` defines the formattoing of the tables found on the data exploration page in Stage
    - `matchbox.json` Contains matchbox configuration settings

</details>
<br></br>

<Note title= "Call to action for arranger configuration">To be updated once admin guide on customizing the search portal is completed</Note>

## Stage


1. **Create a env file:** Create a file named `.env.stage` with the following content:


<details>
  <summary><b>Click here for the .env.stage template</b></summary>
<br></br>

```bash
# ==============================
# Stage Environment Variables
# ==============================

# Keycloak Variables
NEXT_PUBLIC_AUTH_PROVIDER=keycloak
ACCESSTOKEN_ENCRYPTION_SECRET=super_secret
SESSION_ENCRYPTION_SECRET=this_is_a_super_secret_secret
NEXT_PUBLIC_KEYCLOAK_HOST=https://localhost:8180 
NEXT_PUBLIC_KEYCLOAK_REALM=myrealm
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=webclient
KEYCLOAK_CLIENT_SECRET=ikksyrYaKX07acf4hpGrpKWcUGaFkEdM
NEXT_PUBLIC_KEYCLOAK_PERMISSION_AUDIENCE=song
# Score Variables
NEXT_PUBLIC_SCORE_API_URL=score:8087
# Arranger Variables
NEXT_PUBLIC_ARRANGER_DOCUMENT_TYPE=analysis
NEXT_PUBLIC_ARRANGER_INDEX=analysis-composer-index
NEXT_PUBLIC_ARRANGER_API_URL=http://localhost:5050
NEXT_PUBLIC_ARRANGER_MANIFEST_COLUMNS=repositories.code, analysis.analysis_id, object_id, file.index_file.file_type, file.index_file.name, file.index_file.size, file.index_file.md5sum, file.index_file.object_id, donors.donor_id, donors.specimens.samples.sample_id, study_id
# Stage Variables
NEXTAUTH_URL=http://localhost:3000/api/auth
NEXT_PUBLIC_LAB_NAME=Overture Deployment Guide Portal
NEXT_PUBLIC_ADMIN_EMAIL=contact@overture.bio
```
</details>
<br></br>

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>
<br></br>

#### Keycloak Variables

- `NEXT_PUBLIC_AUTH_PROVIDER` specifies the authentication provider, in this case, Keycloak


- `NEXT_PUBLIC_KEYCLOAK_HOST`  specifies the URL where the Keycloak server is hosted `https://localhost:8443` while `NEXT_PUBLIC_KEYCLOAK_REALM` defines the realm in Keycloak that contains the users and roles for our application


- `NEXT_PUBLIC_KEYCLOAK_CLIENT_ID` and client secret `KEYCLOAK_CLIENT_SECRET` are assigned to the application by Keycloak, linking the application to its configuration within Keycloak


- `NEXT_PUBLIC_KEYCLOAK_PERMISSION_AUDIENCE` specifies the audience for the permission claims in the access token, restricting the scope of access granted to the token


- `ACCESSTOKEN_ENCRYPTION_SECRET` defines the secret used to encrypt access tokens, enhancing security by preventing easy decoding of intercepted tokens.


- `SESSION_ENCRYPTION_SECRET` specifies the secret used to encrypt session cookies, protecting sensitive information stored in the cookie from unauthorized access.

#### Score Variables

- `NEXT_PUBLIC_SCORE_API_URL` is the URL of the Score API, which the application uses to communicate with the Score service

#### Arranger Variables

- `NEXT_PUBLIC_ARRANGER_DOCUMENT_TYPE` indexes can be either file centric or analysis/donor centric, the document type variable specifies which of these configurations is true


- `NEXT_PUBLIC_ARRANGER_INDEX` defines the index used by the Arranger service


- `NEXT_PUBLIC_ARRANGER_API_URL` is the URL of the Arranger graphQL API, by deafault Arrangers API is mapped to port 5050 


- `NEXT_PUBLIC_ARRANGER_MANIFEST_COLUMNS` lists the columns to be included in the manifest generated for download with Score. For more information on data download see our data retrieval guide

#### Stage Variables

- `NEXTAUTH_URL` specifies the base URL for NextAuth.js, which handles authentication in Next.js applications. This setting is used to configure the authentication flow, including where to redirect users after successful authentication.

- `NEXT_PUBLIC_LAB_NAME` is the name that will be displayed in the top left of the portal interface. Feel free to get creative here

- `NEXT_PUBLIC_ADMIN_EMAIL` is the email address of the administrator or support contact. This setting updates the help link found by default in the footer navigation of the portal interface

</details>
<br></br>

2. **Run Stage:** Use the docker run command with the `--env-file` option:

```bash
docker run --env-file .env.stage \
    --name stage \
    -p 3000:3000 \
    --network db-network \
    --network index-network \
    ghcr.io/overture-stack/stage:53f5215
```

This setup will run the `stage` container with the specified environment variables. Adjust configurations as necessary.