---
title: Authentication
---

Arranger needs the correct Elasticsearch credentials to access the ES cluster. <!--What is a cluster this has not been mentioned yet--> By default the username and password for Elasticsearch is `elastic` and `myelasticpassword`.

However, if these values need to be changed, they can be modified prior to deploying the ES service. To do this you will need to update Arranger's `Makefile`.

1. Open the `Makefile` in an editor and look for the `#Variables` section:

```shell

# Variables
DOCKER_DIR := $(ROOT_DIR)/docker
ES_DATA_DIR := $(DOCKER_DIR)/elasticsearch
ES_HOST := http://localhost:9200
ES_INDEX := file_centric_1.0
ES_LOAD_SCRIPT := $(ES_DATA_DIR)/load-es-data.sh
ES_PASS := myelasticpassword
ES_USER := elastic
RETRY_CMD := $(ROOT_DIR)/scripts/retry-command.sh

ES_BASIC_AUTH := $(shell printf "$(ES_USER):$(ES_PASS)" | base64)

```

2. Modify the `ES_USER` and `ES_PASS` to the credentials of your choice.

3. Run the installation as normal. Our Installation guide can be <a href="/documentation/arranger/installation/installation" target="_blank">found here</a>
.
