---
title: Introduction
---

Maestro's primary function is to organize data from multiple Song repositories into a single Elasticsearch index. By collecting data into a single index, Maestro allows upstream services, such as <a href="/documentation/arranger" target="_blank" rel="noopener noreferrer">Arranger</a>, to consume the data and expose it to end users for search and exploration.

![Entity](./assets/MaestroArchitecture.jpg 'Maestro Architecture')

# Features

## Multi Repo Management

Maestro offers built-in conflict detection and resolution. For instance, if multiple Song repositories identify the same file, Maestro detects this and aggregates the data from all sources into a the same Elasticsearch index document.

## Multiple Indexing Levels

Song repositories have a standard hierarchy: **Repository > Study > Analysis**. Maestro can index at each level. For example, if you want to index all analyses within a specific study, you can supply Maestro with the following command:

```bash
curl -X POST \
    http://localhost:11235/index/repository/`<repositoryCode>`/study/`<studyId>` \
    -H 'Content-Type: application/json' \
    -H 'cache-control: no-cache' \
```

## Supports Song's Dynamic Schemas

Song utilizes a core data model along with a flexible, user-defined dynamic schema, allowing administrators to define their data model rules. Maestro will require the base schema fields to index data but also supports the indexing of additional fields found within the dynamic schema.
 
<Note title="Index Mapping Migrations">When changes are introduced to the dynamic schema, the administrator(s) must update and migrate the new index mapping.</Note>

## Exclusion Rules

Specific data records may need to be excluded from indexing, for example, before a major data release, where records might need omission due to data integrity or legal concerns.

Maestro supports data publication controls by providing configurable exclusion rules to omit specific analyses from being indexed based on metadata tags assigned by Song. Study, Analysis, File, Sample, Specimen and Donor IDs can be used to exclude specific analyses.

```yaml
  # exclusion rules configs
  exclusionRules:
    byId:
      studyId:
        - TEST-STUDY
#      analysis:
#        - 531had59-235f-315j-3918-gjaea93ga90j
#      file:
#        - 41ba4fb3-9428-50b5-af6c-d779cd59b04d
#      sample:
#        - a6381313-gaj3-eaif-95jd-nahnba9gn112
#      specimen:
#        - j928shgh-bme9-gka7-vac8-ga239sdaig98
#      donor:
#        - DO232991
```

Each property is a comma-separated list of the IDs you want to exclude from indexing. For more information see our instructions on <a href="/documentation/maestro/installation/configuration/exclusion/" target="_blank" rel="noopener noreferrer">configuring Maestro exclusion rules</a>.

## HTTP or Kafka Indexing APIs

Maestro can process indexing requests via <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Apache Kafka</a> or through a standard JSON Web API (HTTP).

# Integrations

Maestro integrates with the following software services:

| Service | Integration Type | Description |
|--|--|--|
| <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> | Default | Maestro natively integrates with Song to index Song metadata into a single index. |
| <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">Elasticsearch</a> | Default | Maestro is designed to integrate with and build Elasticsearch indices by default. |
| <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Apache Kafka</a> | Optional |  Event-based indexing using the Kafka messaging queues. Maestro can also listen for and trigger indexing operations from specific Kafka topics |
| <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">Slack</a> | Optional | Slack notifications for index monitoring |