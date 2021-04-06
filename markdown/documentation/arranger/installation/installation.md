---
title: Installation
---

Follow these steps to install Arranger:

1. From your command line terminal, clone the Arranger repository:

```shell
git clone git@github.com:overture-stack/arranger.git
```

2. Switch to the project directory:

```shell
cd arranger
```

3. Run the quickstart `make` file:

```shell
make start
```

This deploys and starts the following services:

* Elasticsearch: Configured with default username `elastic` and password `myelasticpassword`
    * If you prefer setting different credentials, these values can be modified if required, prior to deploying these services, for details see [here](/documentation/arranger/installation/authentication)
* [Kibana](https://www.elastic.co/kibana): Elastic's tool for visualizing indices
* `arranger-server`: The server-side application
* `arranger-ui`: The administrative UI

```shell
Starting the following services: elasticsearch, kibana, arranger-server, and arranger-ui
Succesfully started all arranger services!
```
The versions deployed are specified in the `docker-compose.yml` file.

The deployed services are available on these ports on your `localhost`:

| Service | Port |
|---------|------|
| Elasticsearch | 9200 |
| Kibana | 5601 |
| Arranger Server | 5050 |
| Arranger UI | 8080 |

Now that installation is complete, we must configure and supply an index mapping to Elasticsearch.  See [here](/documentation/arranger/installation/configuration/es) for details.
