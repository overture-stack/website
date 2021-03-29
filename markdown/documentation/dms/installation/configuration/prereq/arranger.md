---
title: Configure Arranger Metadata Files
---

The [Arranger service](../../../../../arranger) allows a DMS Administrator to configure which fields (and their associated data) indexed in [Elasticsearch](https://www.elastic.co/) will be displayed in the Data Portal.

The DMS Admin can also configure certain display settings for these fields, such as their display name and their display order.  These configurations can be done via a web UI.

However, to initially create a project in Arranger that can be configured this way, the DMS Admin must import a default set of metadata files containing the specific fields that were indexed into Elasticsearch.

Often, existing metadata files from another project or previous Arranger deployment can be imported for re-use and modification.  However, in the case of a fresh DMS installation, this may not be available, and hence these files need to be manually created in advance.

For details on how to manually create the Arranger metadata files, see our specific Arranger documentation [here](../../../../../arranger).

<Note title="Adding a Project">**NOTE**: Instructions on how to add and import a new project once these metadata files are created are described in the DMS post-deployment configuration section [here](../../../deploy-and-verify/arranger-ui). </Note>