---
title: Downloading Data
---

# Indexing Methods

Once Maestro is installed, configured, and running, it is now available to receive requests and index data into Elasticsearch.

If Maestro is enabled to use event-driven indexing with Kafka, then it will listen for specific messages from the [configured Kafka topics](/documentation/maestro/installation/configuration#configuring-kafka-topics).  Otherwise, without Kafka, Maestro can receive requests over the HTTP JSON API.

Maestro has several ways to index data, described in the following sub-sections.

## Maestro API

Maestro provides an API based on the [OpenAPI specification](https://swagger.io/specification/) (formerly known as the Swagger specification) which allows users (manually) and applications (programmatically) to interact with its core functionality.

One major benefit of Swagger-based APIs is that they also provide easy-to-use, interactive API documentation via a web interface.  Users can manually interact with the API by issuing cURL commands via their terminal.  Administrators with access to the Swagger UI can also interact with the API via the web interface.

On a local deployment, the Maestro Swagger UI can be accessed at `http://localhost:11235/maestro/api-docs`:

![Entity](../assets/swagger.png 'Swagger UI')

The following are examples of how to index data at different entity levels using the API.  Recall that Maestro can index data flexibly at either the repository, study, or individual analysis levels.

## Indexing by Repository

It is possible to index an entire Song repository at once.  This operation will index all analyses in all studies in the specified repository.

### Using cURL

To index a repository with cURL, from your command line. execute the following:

```shell
    curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache'
```

Where `repositoryCode` is the code representing the Song repository you want to index.

### Using Swagger UI

To index a repository using the Swagger UI:

1. Go to `http://localhost:11235/maestro/api-docs`

2. Under **management-controller**, click the `POST /index/repository/{repositoryCode}` endpoint.

3. Click **Try it out**.

4. In `repositoryCode`, enter the code of the Song repository you want to index.

5. Click **Execute**. For example:

![Entity](../assets/index-repo2.png 'Index Repo')

### Verify Repository Indexed

If successful, either the cURL command or the Swagger UI will return a successful response indicating the repository has been indexed.  For example:

```
[
  {
    "indexName": "file_centric_1",
    "failureData": {
      "failingIds": {}
    },
    "successful": true
  }
]
```

## Indexing by Study

The most common way to index is usually by study. This operation will index all analyses in the specific study provided.

### Using cURL

To index a study with cURL, from your command line, execute the following:

```shell
    curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>`/study/`<studyId>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache' \
```

Where:
* `repositoryCode` is the code representing the Song repository that the study belongs to
* `studyId` is the ID of the study you want to index

### Using Swagger UI

To index a study using the Swagger UI:

1. Go to `http://localhost:11235/maestro/api-docs`

2. Under **management-controller**, click the `POST /index/repository/{repositoryCode}/study/{studyId}` endpoint.

3. Click **Try it out**.

4. In `studyId`, enter the ID fo the study you want to index.

5. In `repositoryCode`, enter the code of the Song repository that the study belongs to.

6. Click **Execute**. For example:

![Entity](../assets/index-study.png 'Index Study')

### Verify Study Indexed

If successful, either the cURL command or the Swagger UI will return a successful response indicating the study has been indexed.  For example:

```
[
  {
    "indexName": "file_centric_1",
    "failureData": {
      "failingIds": {}
    },
    "successful": true
  }
]
```

## Indexing by Analysis

Lastly, you can also index data from an individual analysis within a study.

### Using cURL

To index an individual analysis with cURL, from your command line, execute the following:

```shell
    curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>`/study/`<studyId>`/analysis/`<analysisId>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache' \
```

Where:
* `repositoryCode` is the code representing the Song repository that the study belongs to
* `studyId` is the ID of the study that the analysis belongs to
* `analysisId` is the ID of the analysis you want to index

### Using Swagger UI

To index a study using the Swagger UI:

1. Go to `http://localhost:11235/maestro/api-docs`

2. Under **management-controller**, click the `POST /index/repository/{repositoryCode}/study/{studyId}/analysis/{analysisId}` endpoint.

3. Click **Try it out**.

4. In `analysisId`, enter the ID of the analysis you want to index.

5. In `studyId`, enter the ID fo the study that the analysis belongs to.

6. In `repositoryCode`, enter the code of the Song repository that the study belongs to.

7. Click **Execute**. For example:

![Entity](../assets/index-analysis.png 'Index Analysis')

### Verify Analysis Indexed

If successful, either the cURL command or the Swagger UI will return a successful response indicating the analysis has been indexed.  For example:

```
[
  {
    "indexName": "file_centric_1",
    "failureData": {
      "failingIds": {}
    },
    "successful": true
  }
]
```

# Handling Index Mapping Changes

By default, Maestro builds the Elasticsearch index based on a default index mapping that is pre-defined.  The name of this default mapping is set in the configuration file, `application.yml`.

While this mapping is not configurable in runtime, there may be use cases where an administrator will need to change the mapping to meet their business needs.

For example, as mentioned earlier, Song supports [dynamic schemas](/documentation/song/user-guide/schema/), which can be used to extend the base scheme with additional useful fields.

In such a scenario, it is the administrator's responsibility to modify the mapping that Maestro uses as input.  This process requires a proper migration process to be followed.

The guidelines for such a process are as follows:

1. Originally, an Elasticsearch index has been created initially using the base mapping, either manually by Maestro itself.


2. Maestro runs initially and starts indexing analyses from Song based on the original mapping.


3. Via Song, the administrator introduces new analysis types with new fields (dynamic schema).


4. Maestro will continue operating and indexing these new documents, but the new fields will not yet be indexed.


5. The administrator updates the existing index mapping to account for the new analysis types and new fields.


6. The administrator must re-index the data based on the new mapping.  This can be done by either triggering Maestro by supplying the updated mapping in the configuration input, OR, can be done directly to Elasticsearch by using the Elasticsearch API.


7.  Make sure to switch your Elasticsearch aliases to point to the new or updated index instead of the old one.


8.  Once all of this is complete, the data will be migrated and Maestro will continue indexing based on the new mapping.