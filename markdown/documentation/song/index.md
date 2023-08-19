---
title: Introduction
---

Song is a metadata validation and tracking tool designed to streamline the management of genomics data across multiple cloud storage systems. With Song, users can create high-quality and reliable metadata repositories with minimal human intervention.

![Entity](./assets/song_arch.png 'Song Architecture')

# Data Submission

**Analysis Files:** An Analysis file contains the metadata in a structured JSON format. Metadata gets submitted to Song as an Analysis File. 

**Metadata Validation:** Analysis files get validated against the administrator's Dynamic Schema. That defines the vocabulary and structure of the Analysis File. 

**Tracking of Metadata to File Data:** Once passed validation the analysis file is submitted to the Song repository given an automated analysis ID. The analysis ID is then used when uploading all associated file data through Score. Analysis IDs associate the metadata stored in Song with the file data being transfered by score and stored in the cloud.

# Data Administration

**Dynamic Schemas:** The data administrator creates the Dynamic Schema, which again, provides the vocabulary for the structural validation of JSON formatted data (Analysis Files), for example, ensuring that required fields are present or that the contents of a field match the desired data type or allowed values.

**Data Lifecycle Management:** Analyses uploaded to a Song repository are `UNPUBLISHED` by default. When data is ready for search and download, administrators can make it available by updating it to a `PUBLISHED` state. If data is no longer relevant, the data administrators can set it to a `SUPPRESSED` state, making it unavailable for search and download through downstream services. 

<Note title="The Song Client">We created the `song-client` command line tool to streamline interactions with Songs REST API endpoints. For more information on what the `song-client` can do, see our [Song client command reference documentation](/documentation/song/reference/commands/).</Note>

# Integrations

As a metadata management system, Song does not handle file transfer and object storage. Song interacts with a required companion application, [Score](/documentation/score), which manages file transfers and object storage.

As part of the larger Overture.bio software suite, Song can be optionally used with additional integrations, including:

- **Event Streaming:** Built-in support for [Apache Kafka](https://kafka.apache.org/) event streaming.  


- **Maestro Indexing:** Song is built to natively integrate with [Maestro](/documentation/maestro/), which will easily index data into a configurable Elasticsearch index, to be used for convenient searching of data. 