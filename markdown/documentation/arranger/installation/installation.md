---
title: Installation
---

Follow these steps to install Arranger:

1. From your command line terminal, clone the Arranger repository:

```shell
git clone https://github.com/overture-stack/arranger.git
```

2. Switch to the project directory:

```shell
cd arranger
```

3. With Docker open, run the quickstart `make` target:

```shell
make start
```

The make start command deploys the following services:

1. **Arranger-server:** The server-side application 
    - For more details on modifying these values prior to deployment see our documentation on [configuring elasticsearch](/documentation/arranger/installation/authentication)
2. **Elasticsearch:** Configured with default username `elastic` and password `myelasticpassword`
3. [**Kibana**](https://www.elastic.co/kibana): Elastic's tool for visualizing indices

```shell
⠿ Container arranger-server.local     Started               
⠿ Container arranger-elasticsearch    Started                              
⠿ Container arranger-kibana           Started                                                                
****************  Succesfully started all Arranger services! 
 You may have to populate ES and restart the Server container. (Use 'make seed-es' for mock data) 
```

Version specifications can be found in the `docker-compose.yml` file.

The deployed services are available from the following ports:

| Service | Port |
|---------|------|
| Arranger Server | localhost:5050/graphql |
| Elasticsearch | localhost:9200 |
| Kibana | localhost:5601 |

When accessing `arranger-server` through your `localhost:5050` you should get the following error message.

```
{"error":"The GraphQL server is unavailable due to an internal error","message":"Something went wrong while creating the GraphQL schemas"}
```

We need configure and supply an index mapping to Elasticsearch. In next section we will cover how resolve this error by configuring Elasticsearch for Arranger.