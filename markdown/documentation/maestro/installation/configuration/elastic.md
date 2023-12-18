---
title: Configuring Elasticsearch
---
# Configuring Index Mappings

Maestro provides default support for two Elasticsearch index mappings:  `file_centric` and `analysis_centric`.

You can disable whichever index you do not need in the `indexes` section by setting the `enabled` property to `false`.

```bash

# ---------------------------
# ELASTICSEARCH INDEX MAPPINGS
# ---------------------------

# Index name to store documents in (will be created if not existing)
FILECENTRIC_NAME=file_centric_1.0
FILECENTRIC_ALIAS=file_centric
FILECENTRIC_ENABLED=true

ANALYSISCENTRIC_NAME=analysis_centric_1.0
ANALYSISCENTRIC_ALIAS=analysis_centric
ANALYSISCENTRIC_ENABLED=true
```

The default mappings can be found in the Maestro GitHub repository here:

- <a href="https://github.com/overture-stack/maestro/blob/master/maestro-app/src/main/resources/file_centric.json" target="_blank" rel="noopener noreferrer">file_centric mapping</a>
- <a href="https://github.com/overture-stack/maestro/blob/master/maestro-app/src/main/resources/analysis_centric.json" target="_blank" rel="noopener noreferrer">analysis_centric mapping </a> 

# Configuring the Elasticsearch Client

Maestro uses the `elasticsearch-rest-high-level-client` provided by Elastic. For in-depth details about this client, you can refer to the <a href="https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html" target="_blank" rel="noopener noreferrer">official JAVA high-level REST client documentation by Elastic. </a>.

The table below breaks down the client configurations illustrated in the code section that follows:

| Property | Description |
|--|--|
| `basicAuth` -> `enabled` | Determines whether to enable basic authentication for the Elasticsearch client |
| `basicAuth` -> `user` | The username that the Elasticsearch client will use to authenticate with the server. Only used if  `basicAuth` -> `enabled` is set to `true`.|
| `trustSelfSignedCert` | 	Dictates if the client should trust self-signed certificates. Useful for testing and development environments. |

The following configurations are specifically designed to optimize indexing performance, establish connection parameters, and ensure robust error-handling mechanisms:

```bash
# ---------------------------
# ELASTICSEARCH CLIENT PROPERTIES
# ---------------------------

# Basic authentication settings
CLIENT_BASICAUTH_ENABLED=false
CLIENT_BASICAUTH_USER=elastic
CLIENT_BASICAUTH_PASSWORD=dummy-pass

# Trust self-signed certificate setting
CLIENT_TRUSTSELFSIGNEDCERT=false

# Control the number of documents per bulk request in Elasticsearch
CLIENT_DOCSPERBULKREQMAX=5000

# Maximum time to wait for a connection to be established
CLIENT_CONNECTIONTIMEOUT=5000

# Maximum time to wait on idle connection (no data flow)
CLIENT_SOCKETTIMEOUT=10000

# Retry settings in case of failure
# Maximum number of retry attempts before throwing an error
CLIENT_RETRY_MAXATTEMPTS=3
# Waiting between retries (in milliseconds)
CLIENT_RETRY_WAITDURATIONMILLIS=500
```

