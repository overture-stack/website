---
title: Deployment Guide
---

# Data Portal Setup

Setting up your data portal involves configuring and running Elasticsearch, Maestro, Arranger and Stage. Below are the steps and breakdowns to ensure a smooth setup process.

## Setting up Elasticsearch

1. **Run Elasticsearch:** Use the following command to pull and run the Elasticsearch docker container

```bash
docker run -d --name elasticsearch \
  -p 9200:9200 \
  -e discovery.type=single-node \
  -e cluster.name=workflow.elasticsearch \
  -e ES_JAVA_OPTS="-Xms512m -Xmx2048m" \
  -e ELASTIC_PASSWORD=myelasticpassword \
  -e xpack.security.enabled=true \
  -e MANAGE_INDEX_TEMPLATES=true \
  -e NETWORK_HOST=http://localhost:9200 \
  docker.elastic.co/elasticsearch/elasticsearch:7.17.1
```

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>
<br></br>

- `-p 9200:9200` maps port 9200 of the host to port 9200 of the container


- `-e discovery.type=single-node` configures Elasticsearch to run in single-node mode, this bypasses the need for cluster discovery and formation protocols, making Elasticsearch start up as a standalone node, ideal for development, testing, or small-scale deployments where clustering is not necessary


- `-e cluster.name=workflow.elasticsearch` names the Elasticsearch cluster, this is good practice in case you choose to run multiple clusters or nodes in the future


- `-e ES_JAVA_OPTS=-Xms512m -Xmx2048m` sets the initial and maximum heap size for the Java Virtual Machine (JVM) running Elasticsearch. `-Xms512m` sets the initial heap size to 512 MB.
`-Xmx2048m` sets the maximum heap size to 2048 MB (2 GB). Properly setting these values ensures that Elasticsearch has enough memory to handle its operations efficiently, but not so much that it starves other processes on the host machine.


- `-e xpack.security.enabled=true` activates security features such as authentication, authorization, encryption, and audit logging


- `-e MANAGE_INDEX_TEMPLATES=true` ensures Elasticsearch manages index templates, when true, the system expects to manage the index templates as part of its operations. In the next step we will create a client services to set up the default configurations for new indices


- `-e ELASTIC_PASSWORD=myelasticpassword` Sets the password for the elastic user

---
</details>
<br></br>

2. **Supply an index template:** Create a folder titled `elasticsearchConfigs`


   - Download and place the following **[quickstart_index_template.json](https://raw.githubusercontent.com/overture-stack/composer/develop/configurationFiles/elasticsearchConfigs/quickstart_index_template.json)** within your `elasticsearchConfigs` folder. This file specifies settings, mappings, and configurations that will be applied automatically to new indices that match the template's pattern


<Note title="Learn More">If you'd like to learn more about creating an index mapping for your own data see our [administration guide on configuring the index mapping](/documentation/guides/administration/indexmapping/).</Note>

3. **Initialize your index:** Run the following scripts to set up your Elasticsearch cluster

Update Elasticsearch with your index template using the following `curl` commmand:

```bash
curl -u elastic:myelasticpassword -X PUT 'http://localhost:9200/_template/index_template' -H 'Content-Type: application/json' -d ./elasticsearchConfigs/quickstart_index_template.json 
```

Create a new alias in Elasticsearch using the following `curl` command:

```bash
curl -u elastic:myelasticpassword -X PUT 'http://localhost:9200/overture-quickstart-index'
```

If successful you should be able to view the updated index in your browser from `http://localhost:9200/overture-quickstart-index` with the username `elastic` and password `myelasticpassword`.

<Note title="How this works">Any index alias that starts with `overture-` will use the mapping of the index template we initially provided. This is defined on [line two of our `quickstart_index_template`](https://github.com/overture-stack/composer/blob/develop/configurationFiles/elasticsearchConfigs/quickstart_index_template.json#L2).</Note>

## Running Maestro

1. **Create a env file:** Create a file named `.env.maestro` with the following content:

```bash
# ==============================
# Maestro Environment Variables
# ==============================

# Maestro Variables
MAESTRO_FAILURELOG_ENABLED=true
MAESTRO_FAILURELOG_DIR=app/logs/maestro
MAESTRO_LOGGING_LEVEL_ROOT=INFO
MAESTRO_NOTIFICATIONS_SLACK_ENABLED=false
# Song Variables
MAESTRO_REPOSITORIES_0_CODE=song.overture
MAESTRO_REPOSITORIES_0_URL=http://song:8080
MAESTRO_REPOSITORIES_0_NAME=Overture
MAESTRO_REPOSITORIES_0_ORGANIZATION=Overture
MAESTRO_REPOSITORIES_0_COUNTRY=CA
# Elasticsearch Variables
MAESTRO_ELASTICSEARCH_CLUSTER_NODES=http://elasticsearch:9200
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_USER=elastic
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_PASSWORD=myelasticpassword
MAESTRO_ELASTICSEARCH_CLIENT_TRUSTSELFSIGNCERT=true
MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ENABLED=false
MAESTRO_ELASTICSEARCH_INDEXES_FILECENTRIC_ENABLED=true
MAESTRO_ELASTICSEARCH_INDEXES_FILECENTRIC_NAME=overture-quickstart-index
MAESTRO_ELASTICSEARCH_INDEXES_FILECENTRIC_ALIAS=file_centric
MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_ENABLED=true
MANAGEMENT_HEALTH_ELASTICSEARCH_ENABLED=false
# Spring Variables
SPRING_MVC_ASYNC_REQUESTTIMEOUT=-1
SPRINGDOC_SWAGGERUI_PATH=/swagger-api
# Kafka Variables
SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS=kafka:9092
SPRING_CLOUD_STREAM_BINDINGS_SONGINPUT_DESTINATION=song-analysis
```

<br></br>

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>

  <br></br>

### Maestro Variables

- `MAESTRO_FAILURELOG_ENABLED` enables or disables failure logging. When set to `true`, Maestro logs any failures that occur, which is useful for debugging and monitoring purposes


- `MAESTRO_FAILURELOG_DIR` sets the directory path where failure logs are stored. The value should be `app/logs/maestro` or another path of your choosing


- `MAESTRO_LOGGING_LEVEL_ROOT` sets the root logging level for Maestro. The value can be `INFO`, `DEBUG` or `WARN`. It determines the level of detail included in logs, where `INFO` is standard and `DEBUG` provides more detailed information


- `MAESTRO_NOTIFICATIONS_SLACK_ENABLED` enables or disables Slack notifications. When set to `true`, Maestro can send notifications to a Slack channel

#### Song Variables

- `MAESTRO_REPOSITORIES_0_CODE` sets the code identifier for the repository. The value here is `song.overture`, serving as a unique identifier used within Maestro to reference the repository


- `MAESTRO_REPOSITORIES_0_URL` is the URL of the metadata repository. The value is `http://song:8080`, specifying the endpoint where Maestro can connect to the Song repository


- `MAESTRO_REPOSITORIES_0_NAME` defines the display name for the repository. The value is `Overture`, providing a human-readable name for the repository used in logs and interfaces


- `MAESTRO_REPOSITORIES_0_ORGANIZATION` defines the name of the organization that owns the repository


- `MAESTRO_REPOSITORIES_0_COUNTRY` defines  the country code for the repository's location. The value is `CA` (Canada), indicating the country associated with the repository

#### Elasticsearch Variables

- `MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ENABLED` set to `true` specifing that analysis-centric indices are to be expected


- `MAESTRO_ELASTICSEARCH_INDEXES_FILECENTRIC_ENABLED` set to `false` specifing to Maestro that file-centric indices are not to be expected


- `MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_ENABLED` enables basic authentication for the Elasticsearch client


- `MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_NAME` is the name of the analysis-centric Elasticsearch index. The value is `analysis-composer-index`, aligned with our previously created index


- `MAESTRO_ELASTICSEARCH_INDEXES_ANALYSISCENTRIC_ALIAS` is the alias for the analysis-centric Elasticsearch index


- `MAESTRO_ELASTICSEARCH_CLUSTER_NODES` points to the address of the Elasticsearch cluster node(s). The value is `elasticsearch:9200`, specifying the Elasticsearch node that Maestro will interact with


- `MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_USER`, `MAESTRO_ELASTICSEARCH_CLIENT_BASICAUTH_PASSWORD` is the username and password for Elasticsearch


- `MANAGEMENT_HEALTH_ELASTICSEARCH_ENABLED`: Enables or disables Elasticsearch health checks. The value can be `false` (disabled) or `true` (enabled), controlling whether health checks for Elasticsearch are performed.


- `MANAGEMENT_SECURITY_ENABLED`: Enables or disables security management. The value can be `false` (disabled) or `true` (enabled), controlling whether security features are enabled.

#### Spring Variables

- `SPRING_MVC_ASYNC_REQUESTTIMEOUT` is `-1` (no timeout), this setting determines how long asynchronous requests are allowed to run before timing out


- `SPRINGDOC_SWAGGERUI_PATH` is `/swagger-api`, specifying the URL path where the Swagger UI can be accessed (`localhost:11235/swagger-api`).


#### Kafka Variables

- `SPRING_CLOUD_STREAM_KAFKA_BINDER_BROKERS` defines the address of the Kafka broker(s). The value is set to `kafka:9092`, specifying the Kafka instance we set up earlier

- `SPRING_CLOUD_STREAM_BINDINGS_SONGINPUT_DESTINATION` is the destination topic for the Song input binding. The value is `song-analysis`, pointing to the Kafka topic we configured earlier

<br></br>

---
</details>
<br></br>

2. **Run Maestro:** Use the docker run command with the `--env-file` option:

```bash
docker run --env-file .env.maestro \
    --name maestro \
    --platform linux/amd64 \
    -p 11235:11235 \
    ghcr.io/overture-stack/maestro:4.3.0

```

## Running Arranger

1. **Create a env file:** Create a file named `.env.arranger` with the following content:

```bash
# ==============================
# Arranger Environment Variables
# ==============================

# Arranger Variables
ENABLE_LOGS=false
# Elasticsearch Variables
ES_HOST=http://elasticsearch:9200
ES_USER=elastic
ES_PASS=myelasticpassword
# Stage Variables
REACT_APP_BASE_URL=http://stage:3000
REACT_APP_ARRANGER_ADMIN_ROOT=http://arranger-server:5050/graphql
```

2. **Create a folder titled `arrangerConfigs` and place the following configuration files within it:**


   - The **[base.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/base.json)**, containing the base configuration for the Arranger server
   - The **[extended.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/extended.json)**, containing all possible fields inputted into arranger
   - The **[facets.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/facets.json)**,  defines the facets found within the facet panel of the data exploration page in Stage
   - The **[matchbox.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/matchbox.json)**, containing matchbox configuration settings
   - The **[table.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/arrangerConfigs/table.json)**, defines the formatting of the tables found on the data exploration page in Stage


3. **Run Arranger:** Use the docker run command with your `.env.arranger` file:

```bash
docker run --env-file .env.arranger \
    --name arranger-server \
    -p 5050:5050 \
    -v ./arrangerConfigs/base.json:/app/modules/server/configs/base.json \
    -v ./arrangerConfigs/extended.json:/app/modules/server/configs/extended.json \
    -v ./arrangerConfigs/facets.json:/app/modules/server/configs/facets.json \
    -v ./arrangerConfigs/matchbox.json:/app/modules/server/configs/matchbox.json \
    -v ./arrangerConfigs/table.json:/app/modules/server/configs/table.json \
    ghcr.io/overture-stack/arranger-server:3.0.0-beta.33
```

Make sure to confirm the `./arrangerConfigs/` path aligns with the actual paths to your Arranger-Server configuration files, update your command or folder structure accordingly.

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>
<br></br>

### When creating the .env.arranger file:

- `ES_HOST` is the URL of your Elasticsearch instance


- `ES_USER` and `ES_PASS` are the credentials for accessing Elasticsearch


- `REACT_APP_BASE_URL` is the base URL for your front-end application, in this case Stage, which we will set up next


- `REACT_APP_ARRANGER_ADMIN_ROOT` is the URL for the Arranger GraphQL endpoint

### When running Arranger:

- `-p 5050:5050` maps port 5050 of the host to port 5050 of the container.


- `-v ./arrangerConfigs/...:/app/modules/server/configs/...` mounts configuration files into the container
    - `base.json` contains the base configuration for the Arranger server
    - `extended.json` contains all possible fields inputted into arranger
    - `facets.json` defines the facets found within the facet panel of the data exploration page in Stage
    - `table.json` defines the formatting of the tables found on the data exploration page in Stage
    - `matchbox.json` contains matchbox configuration settings


---
</details>
<br></br>

<Note title= "Configuring Arranger">If you want to lean more about configuring Arranger see our administration guide on [customizing the search portal](/documentation/guides/administration/portalcustomization/).</Note>

## Setting up Stage

1. **Create a env file:** Create a file named `.env.stage` with the following content:

```bash
# ==============================
# Stage Environment Variables
# ==============================

# Stage Variables
NEXTAUTH_URL=http://localhost:3000/api/auth
NEXT_PUBLIC_LAB_NAME=Overture QuickStart Portal
NEXT_PUBLIC_ADMIN_EMAIL=contact@overture.bio
NEXT_PUBLIC_DEBUG=true
NEXT_PUBLIC_SHOW_MOBILE_WARNING=true
# Keycloak Variables
NEXT_PUBLIC_AUTH_PROVIDER=keycloak
ACCESSTOKEN_ENCRYPTION_SECRET=super_secret
SESSION_ENCRYPTION_SECRET=this_is_a_super_secret_secret
NEXT_PUBLIC_KEYCLOAK_HOST=http://keycloak:8080
NEXT_PUBLIC_KEYCLOAK_REALM=myrealm
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=webclient
KEYCLOAK_CLIENT_SECRET=ikksyrYaKX07acf4hpGrpKWcUGaFkEdM
NEXT_PUBLIC_KEYCLOAK_PERMISSION_AUDIENCE=dms
# Score Variables
NEXT_PUBLIC_SCORE_API_URL=http://score:8087
# Arranger Variables
NEXT_PUBLIC_ARRANGER_DOCUMENT_TYPE=file
NEXT_PUBLIC_ARRANGER_INDEX=file_centric
NEXT_PUBLIC_ARRANGER_API_URL=http://arranger-server:5050
NEXT_PUBLIC_ARRANGER_MANIFEST_COLUMNS=repositories.code, object_id, analysis.analysis_id, study_id, file_type, file.name, file.size, file.md5sum, file.index_file.object_id, donors.donor_id, donors.specimens.samples.sample_id
```

<details>
  <summary><b>Click here for a detailed breakdown</b></summary>
<br></br>

#### Stage Variables

- `NEXTAUTH_URL` specifies the base URL for NextAuth.js, which handles authentication in Next.js applications. This setting is used to configure the authentication flow, including where to redirect users after successful authentication.

- `NEXT_PUBLIC_LAB_NAME` is the name that will be displayed in the top left of the portal interface. Feel free to get creative here

- `NEXT_PUBLIC_ADMIN_EMAIL` is the email address of the administrator or support contact. This setting updates the help link found by default in the footer navigation of the portal interface

#### Keycloak Variables

- `NEXT_PUBLIC_AUTH_PROVIDER` specifies the authentication provider, in this case, Keycloak


- `ACCESSTOKEN_ENCRYPTION_SECRET` defines the secret used to encrypt access tokens, enhancing security by preventing easy decoding of intercepted tokens


- `SESSION_ENCRYPTION_SECRET` specifies the secret used to encrypt session cookies, protecting sensitive information stored in the cookie from unauthorized access


- `NEXT_PUBLIC_KEYCLOAK_HOST`  specifies the URL where the Keycloak server is hosted `https://localhost:8443` while `NEXT_PUBLIC_KEYCLOAK_REALM` defines the realm in Keycloak that contains the users and roles for our application


- `NEXT_PUBLIC_KEYCLOAK_CLIENT_ID` and client secret `KEYCLOAK_CLIENT_SECRET` are assigned to the application by Keycloak, linking the application to its configuration within Keycloak


- `NEXT_PUBLIC_KEYCLOAK_PERMISSION_AUDIENCE` specifies the audience for the permission claims in the access token, restricting the scope of access granted to the token

#### Score Variables

- `NEXT_PUBLIC_SCORE_API_URL` is the URL of the Score API, which the application uses to communicate with the Score service

#### Arranger Variables

- `NEXT_PUBLIC_ARRANGER_DOCUMENT_TYPE` indexes can be either file centric or analysis (participant) centric, the document type variable specifies which of these configurations is true


- `NEXT_PUBLIC_ARRANGER_INDEX` defines the index used by the Arranger service


- `NEXT_PUBLIC_ARRANGER_API_URL` is the URL of the Arranger graphQL API, by default Arrangers API is mapped to port 5050 


- `NEXT_PUBLIC_ARRANGER_MANIFEST_COLUMNS` lists the columns to be included in the manifest generated for download with Score

---

</details>
<br></br>

2. **Run Stage:** Use the docker run command with your `.env.stage` file:

```bash
docker run --env-file .env.stage \
    --name stage \
    -p 3000:3000 \
    ghcr.io/overture-stack/stage:3ede4e2
```

The front-end portal will now be available in your browser at `localhost:3000`

## Retrieving and updating access tokens

Now that we have our platform setup we will need to generate an API key to enable secure communication between Song and Score. 

API Keys are brokered by Keycloak and accessible when logged in to the Stage UI `localhost:3000/login`.

**1. Login through the Stage UI** by selecting login from the top right. 

Default credentials were pre-configured when we imported our **[Users.json](https://github.com/overture-stack/composer/blob/develop/configurationFiles/keycloakConfigs/myrealm-users-0.json)** file into Keycloak, our default admin account credentials are **username** `admin` and **password** `admin123`.

**2. Generate a new API token** by selecting **Profile and Token** from your user dropdown menu at the top right of the Stage UI and selecting **Generate New Token**. 

![Accessing an API Key](../submission/assets/apikeys.png 'Accessing an API Key')

**3. Update the `SCORE_ACCESSTOKEN` variable within your `.env.song`** and once updated, remove the existing Song container and re-run Song with your updated `.env.song`

```bash
docker run -d \
  --name song \
  --platform linux/amd64 \
  -p 8080:8080 \
  --env-file .env.song \
  ghcr.io/overture-stack/song-server:438c2c42
```

<Note title="Next Steps">Now that you have the end-to-end portal setup we recommend you check out our [administration guide on updating the data model](/documentation/guides/administration/modelling/).</Note>