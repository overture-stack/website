---
title: Authentication
---

Arranger needs the correct Elasticsearch credentials to access the ES cluster.  During [installation](/documentation/arranger/installation/installation), the username and password are defaulted to `elastic` and `myelasticpassword`, respectively.

However, if these values need to be changed, they can be modified prior to deploying the ES service, by updating the arranger `Makefile`:

1. Open the `Makefile` in an editor and look for the `#Variables` section:

```shell
# Variables
ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
RETRY_CMD := $(ROOT_DIR)/scripts/retry-command.sh
PROJECT_NAME := $(shell echo $(ROOT_DIR) | sed 's/.*\///g')
DOCKER_DIR := $(ROOT_DIR)/docker
ES_DATA_DIR := $(DOCKER_DIR)/elasticsearch
ES_LOAD_SCRIPT := $(ES_DATA_DIR)/load-es-data.sh
ES_USERNAME := elastic
ES_PASSWORD := myelasticpassword
ES_BASIC_AUTH := $(shell echo -n "$(ES_USERNAME):$(ES_PASSWORD)" | base64)
```

2. Modify the `ES_USERNAME` and `ES_PASSWORD` to the credentials of your choice.

3. Run installation per the instructions [here](/documentation/arranger/installation/installation).
