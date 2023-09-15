---
title: Configure Arranger Metadata Files
---

The [Arranger service](../../../../../arranger) empowers a DMS Administrator to determine which fields (and their associated data) indexed in [Elasticsearch](https://www.elastic.co/) are displayed in the Data Portal.

Administrators can also customize display settings for these fields, such as their display name and order. While these configurations are primarily made via a web UI, initializing a project in Arranger that permits such configurations requires the DMS Admin to import a default set of metadata files. These files detail specific fields indexed into Elasticsearch.

In many scenarios, metadata files from a previous project or Arranger deployment can be repurposed and adjusted. However, for fresh DMS installations without available pre-existing metadata, these files must be created manually.

For a comprehensive guide on creating the Arranger metadata files manually, refer to our specific Arranger documentation [here](../../../../../arranger).

<Note title="Adding a Project">
**NOTE**: Steps on how to add and import a new project, once these metadata files have been established, can be found in the DMS post-deployment configuration section [here](../../../verify/arranger).
</Note> 
