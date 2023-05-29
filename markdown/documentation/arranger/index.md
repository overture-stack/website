---
title: Introduction
---

Arranger is a data-agnostic search API that uses [Elasticsearch index mappings](https://www.elastic.co/guide/en/elasticsearch/reference/6.4/mapping.html) to generate customizable and interactive search components (faceted search panels and sortable tables). When deploying a data portal with Arranger, it can be paired with our [DMS-UI](https://www.overture.bio/documentation/dmsui/) or your own custom UI.

![Entity](/assets/architecture.png 'Architecture')

# Features

## GraphQL Search API

Using a GraphQL Search API, Arranger can query complex datasets efficiently.

- Arranger makes no assumption about your data model, it generates its search API from an index mapping you configure based on your Elasticsearch cluster.

- Arrangers API uses a consistent and custom filter notation ([SQON](http://localhost:8000/documentation/arranger/reference/sqon/)) which is both straightforward for humans to understand **and** simple for software to interpret.

## Customizable Search Components

Use a default theme for your data portal, or customize it with your own branded theme.

- Configure which data columns are displayed in the search results table (highlighted in blue) and customize their display name and order.

- Configure which filters (highlighted in purple) are displayed in the portal and customize their display names and order.

- The searchable facets allow you to configure across a broad set of data types (boolean, string, date, list, etc.) and pre-built aggregation components.


![Entity](/assets/arrangercomponents.jpg 'Panels')

# Integrations

Arranger integrates with your underlying Elasticsearch cluster to automatically generate the search API based on your configured index mapping. It's best to have Elasticsearch deployed and your mapping determined before installing and configuring Arranger. Additionally, Arranger will also need the correct credentials to authenticate with Elasticsearch.