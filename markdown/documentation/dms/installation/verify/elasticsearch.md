---
title: Elasticsearch Verification
---

# Check Elasticsearch is Running

Check that Elasticsearch index is deployed by using a tool such as Elastic's own [Kibana](https://www.elastic.co/kibana) tool or browser plugin (e.g. [Elastichead](https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm) for Chrome or [Elasticvue](https://addons.mozilla.org/en-CA/firefox/addon/elasticvue/) for Firefox) to graphically view the index.

Do the following:

1. From your tool, connect to Elasticsearch by going to:
- **Local:** http://localhost:`<port>`/elasticsearch
- **Server** https://`<myDomain>`/elasticsearch 

2. Enter username `elastic` and the password you provided during configuration.

3. Browse the indices and check that the default index (default name `file_centric`) is created and the base fields are present.  For example, from the Chrome Elastichead plugin:

![Entity](../../assets/es-plugin.png 'Elasticsearch Plugin')
