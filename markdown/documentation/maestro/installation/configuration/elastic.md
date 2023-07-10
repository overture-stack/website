---
title: Configuring Elasticsearch
---

Maestro configurations for Elasticsearch are controlled from the `application.yml` file [located here](https://github.com/overture-stack/maestro/edit/master/maestro-app/src/main/resources/config/application.yml). 

The following is the relevant section for configuring Elasticsearch we will go through each section below:

```yaml
  # elastic search server to connect to & client properties
  elasticsearch:
    # elasticsearch server nodes to send requests to
    clusterNodes:
      - http://localhost:9200

    # the index name to store documents in (will be created if not existing)
    indexes:
      fileCentric:
          name: file_centric_1.0
          alias: file_centric
          enabled: true
      analysisCentric:
          name: analysis_centric_1.0
          alias: analysis_centric
          enabled: true

    # elasticsearch client properties
    client:
      basicAuth:
        enabled: false
        user: elastic
        password: dummy-pass
      trustSelfSignedCert: false
      # this is to control the number of documents per bulk request in elasticsearch
      docsPerBulkReqMax: 5000
      # max time to wait for a connection to be established
      connectionTimeout: 5000
      # max time to wait on idle connection (no data flow)
      socketTimeout: 10000
      # in case of failure this controls the retry attempts
      retry:
        # maximum number of retry attempts before throwing an error
        maxAttempts: 3
        # waiting between retries (ms)
        waitDurationMillis: 500
```

# Configuring Index Mappings

By default, Maestro enables and supports two Elasticsearch index mappings, `file_centric` and `analysis_centric`.

You can disable whichever index you do not need in the `indexes` section by setting the `enabled` property to `false`.

```yaml
# the index name to store documents in (will be created if not existing)
indexes:
  fileCentric:
      name: file_centric_1.0
      alias: file_centric
      enabled: true
  analysisCentric:
      name: analysis_centric_1.0
      alias: analysis_centric
      enabled: true
```

The default mappings can be found in the Maestro GitHub repository here:

- [`file_centric`](https://github.com/overture-stack/maestro/blob/master/maestro-app/src/main/resources/file_centric.json)
- [`analysis_centric`](https://github.com/overture-stack/maestro/blob/master/maestro-app/src/main/resources/analysis_centric.json)

# Configuring the Elasticsearch Client

Maestro uses the `elasticsearch-rest-high-level-client` provided by Elastic. For more infromation see [Elastics official JAVA high level REST client documentation](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html).

The table below summarizes the client configurations shown in the subsequent code block:

| Property | Description |
|--|--|
| `basicAuth` -> `enabled` | Enables the configuration of the Elasticsearch client |
| `basicAuth` -> `user` | The username that the Elasticsearch client will use to authenticate with the server. Only used if `enabled` = `true`. |
| `trustSelfSignedCert` | Enables the client to accept self-signed certificates |

The remaining properties are used to tune the batch indexing, connection timeouts and retries, etc.

```yaml
# elasticsearch client properties
client:
  basicAuth:
    enabled: false
    user: elastic
    password: dummy-pass
  trustSelfSignedCert: false
  # this is to control the number of documents per bulk request in elasticsearch
  docsPerBulkReqMax: 5000
  # max time to wait for a connection to be established
  connectionTimeout: 5000
  # max time to wait on idle connection (no data flow)
  socketTimeout: 10000
  # in case of failure this controls the retry attempts
  retry:
    # maximum number of retry attempts before throwing an error
    maxAttempts: 3
    # waiting between retries (ms)
    waitDurationMillis: 500
```

