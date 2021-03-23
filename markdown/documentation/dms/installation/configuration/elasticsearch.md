---
title: Configure Elasticsearch
---

The DMS platform indexes its data into [Elasticsearch](https://www.elastic.co/).  Elasticsearch provides a flexible and highly-optimized mechanism for indexing and searching data.  [Arranger](../../../../arranger) interfaces with Elasticsearch to interpret the index structure and allow DMS administrators to configure which data fields can be exposed to end users in the Data Portal for their consumption.

Configure the following for Elasticsearch:

???

For example:

```shell
===============
ELASTICSEARCH
===============
Do you want to enable elasticsearch user authentication? (Y/N) [Y]: y
What should the superuser (elastic) password be? ******
```