---
title: Indexing a Study
--- 

The most common way to index is usually by study. This operation will index all analyses in the specific study provided.

# Using cURL

To index a study with cURL, from your command line, execute the following:

```shell
    curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>`/study/`<studyId>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache' \
```

Where:
- `repositoryCode` is the code representing the Song repository that the study belongs to
- `studyId` is the ID of the study you want to index

## Using Swagger UI

To index a study using the Swagger UI:

1. Go to `http://localhost:11235/maestro/api-docs`

2. Under **management-controller**, click the `POST /index/repository/{repositoryCode}/study/{studyId}` endpoint.

3. Click **Try it out**.

4. Enter your `studyId`, and `repositoryCode`.

6. Click **Execute**. For example:

![Entity](../assets/index-study.png 'Index Study')

If successful the command line or Swagger will indicate the study has been indexed:

```shell
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
