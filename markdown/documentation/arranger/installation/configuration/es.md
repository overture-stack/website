---
title: Elasticsearch
---

Now that installation is complete, we must configure and supply an index mapping to Elasticsearch.

The default installation comes with a sample index that can be used to demonstrate and understand how Arranger uses the ES mapping.

However, most users will wish to configure and supply their own index mapping, which is also possible.

# Using the Default Index Mapping

The default index mapping, called `file_centric_1.0`, is a sample mapping used for cancer genomics, which represents genomic file metadata that can be searched in the data portal.  In Arranger, the sample mapping is configured in the `index_config.json` file.  The sample mapping can be examined [here](https://github.com/overture-stack/arranger/blob/2edf185835fa5e9c5db84a9567bce66d03355623/docker/elasticsearch/index_config.json).

To use the default mapping, run the ES initialization script:

```shell
make init-es
```

# Supplying a Custom Index Mapping

Alternatively, to configure and supply your own mapping:

1. First create your custom mapping.  You can use the sample default mapping described earlier as a guide, but the best resource is to follow the guidelines and best practices from Elastic [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html).


2. Once you have your mapping created, you must copy and paste it into the aforementioned `index_config.json` file in the proper format. Again, use the existing sample file as a guide.  The `index_config.json` file can be found in the `arranger/docker/elasticsearch` directory.

<Warning>**NOTE:** You can rename the alias, but it may be simpler to leave it as `file_centric` for easy-of-use.  This is because, if you change the alias, you will need to modify the `make init-es` script, `load-es-data.sh` to reference your alias name instead.</Warning>

3. To use your custom mapping, run the ES initialization script:

```shell
make init-es
```
