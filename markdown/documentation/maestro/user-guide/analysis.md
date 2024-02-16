---
title: Indexing an Analysis
--- 

# Using cURL

To index individual analyses with cURL, execute the following from your command line:

```shell
    curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>`/study/`<studyId>`/analysis/`<analysisId>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache' \
```

Where:

- `repositoryCode` is the code representing the Song repository that the study belongs to
- `studyId` is the ID of the study that the analysis belongs to
- `analysisId` is the ID of the analysis you want to index

## Using Swagger UI

To index a study using the Swagger UI:

1. Go to `http://localhost:11235/maestro/api-docs`

2. Under **management-controller**, select the `POST /index/repository/{repositoryCode}/study/{studyId}/analysis/{analysisId}` endpoint.

3. Click **Try it out**.

4. Enter your `analysisId`, `studyId`, and `repositoryCode`.

7. Click **Execute**.

![Entity](../assets/index-analysis.png 'Index Analysis')

If successful the command line or Swagger will indicate the analysis has been indexed:

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