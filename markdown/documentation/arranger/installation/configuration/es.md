---
title: Supplying an Index Mapping
---

Now that installation is complete, we need to configure and supply an index mapping. This mapping will link your Elasticsearch Index to Arranger.

# Using the Default Index Mapping

The default index mapping, called `file_centric_1.0`, is a sample mapping used for cancer genomics. The file_centric_1.0 index mapping represents genomic file metadata that can be searched using Arranger.  In Arranger, the sample mapping is configured in the `index_config.json` file.  The sample mapping can be viewed from the GitHub repository [here](https://github.com/overture-stack/arranger/blob/2edf185835fa5e9c5db84a9567bce66d03355623/docker/elasticsearch/index_config.json).

To set up Arranger with a default mapping, run the following `make` command:

```shell
make seed-es
```

We recommend using the [Elasticvue chrome extenstion](https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa) to add the elastic search index. Use the following default information for connecting the index.

- **Username:** elastic
- **Password:** myelasticpassword
- **URI:** http://localhost:9200

<Warning>**Note:** Once the elasticsearch instance is connected you will need to restart the docker Arranger server</Warning>

You should now be able to interact with the Elasticsearch Index through `localhost:5050/graphql`

# Supplying a Custom Index Mapping

The index mapping you create will reflect your own unique data model. You can use the [sample default mapping](https://github.com/overture-stack/arranger/blob/2edf185835fa5e9c5db84a9567bce66d03355623/docker/elasticsearch/index_config.json) described earlier as a guide, but the best resource for creating your own index mapping is the [guidelines and best practices from Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html).


Once you have drafted your index mapping copy and paste it into the `index_config.json` file [found here](https://github.com/overture-stack/arranger/blob/develop/docker/elasticsearch/index_config.json).

<Warning>**Note:** You can rename the alias, but for ease-of-use it may be simpler to leave it as `file_centric_1.0`. If you change the alias, you will need to modify the `make seed-es` script, `load-es-data.sh` to reference your alias name instead.</Warning>

To update Arranger with your index mapping, restart the docker container and run the ES initialization script: 

```shell
make seed-es
``` 

In the next section we will cover how to configure the search API and Interactive UI components using Arrangers metadata files.