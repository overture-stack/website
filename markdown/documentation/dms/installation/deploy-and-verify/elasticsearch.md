---
title: Check Elasticsearch is Running
---

Check that Elasticsearch index is deployed by using a tool such as Elastic's own [Kibana](https://www.elastic.co/kibana) tool or browser plugin (e.g. [Elastichead](https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm) for Chrome or [Elasticvue](https://addons.mozilla.org/en-CA/firefox/addon/elasticvue/) for Firefox) to graphically view the index.

Do the following:

1. From your tool, connect to Elasticsearch by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/elasticsearch |
| Server  | https://_myDomain_/elasticsearch |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

2. Enter username **_elastic_** and the password you provided during configuration.

3. Browse the indices and check that the default index (default name **_file_centric_**) is created and the base fields are present.  For example, from the Chrome Elastichead plugin:

![Entity](../../assets/es-plugin.png 'Elasticsearch Plugin')