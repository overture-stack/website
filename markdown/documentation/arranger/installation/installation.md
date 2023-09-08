---
title: Installation
---

Before installing Arranger, please ensure that you have Docker installed on your system. You can find dockers official download and installation instructions <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">here</a>.

## Docker Installation

To install Arranger using Docker, follow these steps:

1. Clone the Arranger repository from your command line terminal:

```shell
git clone https://github.com/overture-stack/arranger.git
```

2. Navigate to the project directory:

```shell
cd arranger
```

3. With Docker running, execute the quickstart `make` target:

```shell
make start
```

The `make start` command deploys the following services:


  - **Arranger-server:** The server-side application

  - **Elasticsearch:** Configured with default username `elastic` and password `myelasticpassword`. For more details on modifying these values prior to deployment, refer to our documentation on <a href="/documentation/arranger/installation/authentication" target="_blank" rel="noopener noreferrer">configuring Elasticsearch</a>.

  - <a href="https://www.elastic.co/kibana" target="_blank" rel="noopener noreferrer">**Kibana**</a>: Elastic's tool for visualizing indices

If the installation is successful, you should see the following message:

```shell
⠿ Container arranger-server.local     Started               
⠿ Container arranger-elasticsearch    Started                              
⠿ Container arranger-kibana           Started                                                                
****************  Succesfully started all Arranger services! 
 You may have to populate ES and restart the Server container. (Use 'make seed-es' for mock data) 
```

Please refer to the `docker-compose.yml` file for version specifications.

The deployed services will be accessible through the following ports:

| Service | Port |
|--|--|
| Arranger Server | localhost:5050/graphql |
| Elasticsearch | localhost:9200 |
| Kibana | localhost:5601 |

When accessing `arranger-server` via `localhost:5050`, you may encounter the following error message:

```shell
{"error":"The GraphQL server is unavailable due to an internal error","message":"Something went wrong while creating the GraphQL schemas"}
```

To resolve this, we need to configure and supply an index mapping to Elasticsearch. This will be covered in the next section.
