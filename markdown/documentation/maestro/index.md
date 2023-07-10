---
title: Introduction
---

Maestro's driving principle is organizing data distributed across numerous Song repositories into a single, Elasticsearch index. By organizing data into a single index, Maestro allows upstream services, such as [Arranger](/documentation/arranger), to consume the data and expose it to end users for search and exploration.

# Features

## Multi Repo Management

- Built-in conflict detection and resolution. For example, if the same file gets identified in multiple Song repositories, Maestro can detect this and aggregate the information from all repositories into the same Elasticsearch index document

## Multiple Indexing Levels

- Song repositories follow a standard hierarchy, with the Repository at the highest level (**Repository > Study > Analysis**). Maestro can granularly index at each specific level

For example, if you want to index all analyses within a specific study, you can supply Maestro with the following command:

```bash
curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>`/study/`<studyId>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache' \
```

## Supports Songs Dynamic Schemas

Song has a base data model and a flexible, user-defined dynamic schema for administrators to encode their data model rules

- Maestro only requires the base schema fields to index data but also supports the indexing of additional fields found within the dynamic schema

<Note title="Index Mapping Migrations">When changes are made to the dynamic schema, it becomes the administrator's responsibility to update and migrate to the new index mapping.</Note> 

## Exclusion Rules

In certain use cases, specific data records may need to be excluded from indexing. For example, before a major data release, some records may need to be excluded for data integrity, legal reasons, etc.

- Maestro supports data publication controls by providing configurable exclusion rules to omit specific analyses from being indexed based on metadata tags assigned by Song. Study, Analysis, File, Sample, Specimen and Donor IDs can be used to exclude specific analyses

## HTTP or Kafka Indexing APIs

- Receive indexing requests through [Apache Kafka](https://kafka.apache.org/) or a standard JSON Web API (HTTP)

# Integrations

Maestro integrates with the following software services:

| Service | Integration Type | Description |
|--|--|--|
| [Song](/documentation/song) | Default | Maestro natively integrates with Song to index Song metadata into a single index. |
| [Elasticsearch](https://www.elastic.co/) | Default | Maestro is designed to integrate with and build Elasticsearch indices by default. |
| [Apache Kafka](https://kafka.apache.org/) | Optional |  Event-based indexing using the Kafka messaging queues. Maestro can also listen for and trigger indexing operations from specific Kafka topics |
| [Slack](https://slack.com/) | Optional | Slack notifications for index monitoring |