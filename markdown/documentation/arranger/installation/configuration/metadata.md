---
title: Metadata File Configuration
---

With your Index mapping set up, the next step is to let Arranger know what fields you'd like to use from your mapping. To do this, you will need to configure four metadata files within Arranger.

<!--

<Note title="What is an Arranger Project?">An Arranger project is a collection of JSON files that define the fields available for Arrangers Admin UI. With the Admin UI, adminstrators can then configure how data is displayed on front-end data portal</Note>

-->


# Setting up the Arranger Metadata Files

Arranger metadata files are JSON files that describe which index mapping fields are accessible to end users, these files will also describe how data is displayed within the UI. You will need to supply arranger with four metadata files.

| File | Description |
|------|-------------|
| aggs-state.json | Configures the search filters and aggregations in the data portal's facet panel. |
| columns-state.json | Configures the data columns in the data portal's search results table. |
| extended.json | Extended (extra) configurations for your Elasticsearch index mapping. |
| matchbox-state.json | Configures the quick search settings for specified fields in the data portal. |

For reference, here is a set of [sample JSON files](https://github.com/overture-stack/dms/tree/develop/example-data/arranger_metadata) created for the default `file_centric_1.0` index mapping.


<!--I want a better explaination for what the aggregations are, and what the extended and matchbox-state jsons do-->


<!--Requires how to guide

# Indexed Data

You'll likely want to supply Arranger with data. If you are using Arranger with the full Overture product suite, you can learn how to upload and index data with Song, Score and Maestro.

However, if you are using Arranger and Elasticsearch standalone without other Overture components, you will need to index the data into Elasticsearch yourself.  See the [Elastic documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-index.html) for guidance.

-->


