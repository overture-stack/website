---
title: Indexing a Repository
--- 

It's possible to index an entire Song repository at once. This operation will index all analyses in all studies within the specified repository.

# Using cURL

To index a repository with cURL, from your command line. execute the following:

```shell
    curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache'
```

Where `repositoryCode` is the code of the Song repository you want to index.

# Using Swagger UI

To index a repository using the Swagger UI:

1. Go to `http://localhost:11235/maestro/api-docs`

2. Under **management-controller**, click the `POST /index/repository/{repositoryCode}` endpoint.

3. Click **Try it out**.

4. Enter the `repositoryCode` of the Song repository you want to index.

5. Click **Execute**. For example:

![Entity](../assets/index-repo2.png 'Index Repo')

If successful the command line or Swagger will indicate the repository has been indexed:

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
