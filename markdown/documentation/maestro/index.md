---
title: Introduction
---

Maestro's driving principle is to help organize and manage your geographically-distributed genomic data into a single, searchable index.

With the rapid increase and proliferation of genomic data due to modern scientific technologies, methodologies, and discoveries, the data is invariably becoming more distributed, originating and being stored in many sources.

In the Overture product suite, [Song](/documentation/song) provides such a distributed metadata management and storage system, where multiple, geographically-distributed Song servers can exist.

Recognizing this, the Overture team designed Maestro to seamlessly connect to multiple Song servers, listen for changes, and automatically generate a single [Elasticsearch](https://www.elastic.co/) index.

By orchestrating and consolidating data into a single index, Maestro allows upstream services to easily consume the data and expose it to end users for search and exploration.  In Overture, [Arranger](/documentation/arranger) is one such consumer, able to quickly generate a data portal for end users from the index built by Maestro.

# Features

## Multiple Repository Management

Maestro natively supports indexing data from multiple Song metadata repositories. Maestro connects to each Song server and will index all files from the repositories into a single Elasticsearch index.

Conflict resolution is built-in as part of the indexing process.  For example, if the same file was identified in multiple Song repositories, Maestro is able to detect this and aggregate the information from all repositories into the same Elasticsearch index document.

## Multiple Indexing Levels

In the Song data model, data can be grouped by different entities in a specific hierarchy: `Repository --> Study --> Individual Analysis` with Repository being at the highest level.

Maestro is flexible in that it can index data for a specific level, depending on the request.  For example, if indexing is requested for a specific study, then all data for that study (including all analyses under that study) would be indexed.

## Support for Song Dynamic Schemas

Song supports a base data model ([schema](/documentation/song/user-guide/schema/)) with basic required fields that need to exist for an analysis.  However, it also supports a flexible dynamic schema which administrators can use to encode additional business rules that their data must comply with.

Maestro by default only needs the base schema fields to exist to index the data.  However, it is also capable of supporting indexing the additional fields found in the dynamic schema.  Note however, that it is the administrator's responsibility to manage the mapping and migration of one index to another should it change due to additional dynamic fields.

## Exclusion Rules

In certain use cases, specific data records may need to excluded from indexing.  For example, prior to a major data release, some records may need to be excluded for business, data integrity, legal reasons, etc.

In the context of Song, Maestro supports this by providing configurable exclusion rules that omit specific analyses from being indexed based on metadata tags found in Song.  Specific analyses can be excluded by these identifiers: Study ID, Analysis ID, File ID, Sample ID, Specimen ID, Donor ID.

## Event-Based Indexing

Maestro can optionally integrate with [Apache Kafka](https://kafka.apache.org/) to support configurable, event-based indexing using the Kafka messaging queue.  Maestro can be setup to listen for and trigger indexing operations from specific Kafka topics.

## Different Indexing APIs

Maestro can receive indexing requests through different interfaces.  The following are currently supported:

* Event-driven indexing via integration with [Apache Kafka](https://kafka.apache.org/)
* JSON Web API (HTTP)

## Slack Integration

To help monitor your indexing service, Maestro can be configured to integrate with [Slack](https://slack.com/) to send you notifications in case of errors during the indexing process.

# Integrations

Maestro integrates with the following Overture and third party software services:

| Service | Integration Type | Description |
|---------|------------------|-------------|
| [Song](/documentation/song) | Default | Maestro natively integrates with Song to index Song metadata into a single index. |
| [Elasticsearch](https://www.elastic.co/) | Default | Maestro is designed by default to integrate with and build Elasticsearch indices. |
| [Apache Kafka](https://kafka.apache.org/) | Optional | Maestro can optionally integrate with Kafka to listen for and trigger indexing operations from Kafka topics. |
| [Slack](https://slack.com/) | Optional | Maestro can optionally integrate with Slack to send notifications about errors during the indexing process. |