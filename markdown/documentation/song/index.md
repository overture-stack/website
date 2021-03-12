---
title: Introduction
---

With great data, comes great data responsibility.  Genomic data files are being generated at an fast pace and more and more laboratory groups are required a method to manage this fast growing pile of data; Song provides a metadata management and storage system to easily track and manage files in a secure and validated environment, against your established data model.  Some features are particularly tailored towards genomic files, but Song supports any data type! 

# Features
## Metadata to File Validation
In conjunction with the data upload tool [Score](/documentation/score), Song provides:
- Validation of file and clincal/administrative metadata associated with a file against a metadata record.
- Assignment of global identifiers for data management, managed by Song or an external ID database.
- Assignment of access control rules for open (public access) versus controlled (authentication required) access to files by download users.

## Data Lifecyle Management 
Song manages a lifecycle of data publication from initial upload, to publication, and even eventual removal of data. 
- Users or programs can upload metadata and files, which remains in an  `UNPUBLISHED`. 
- Users or programs can update data to a `PUBLISHED`, making it available for search or download.
- If data is no longer relevant, the status can be updated to `SUPPRESSED`, removing it from search and download for users. 

## Flexible Data Model 
We recognize that there are a multitude of use cases for how different institutions may collect data elements.  With that in mind, Song is built to be ultimately flexible to any type of data model.  There is a small "base" data model that all Songs follow to track basic patient identifiers, but beyond that any desired business rules can be encoded Song's [Dynamic Schemas](/documentation/song/user-guide/schema), which are based on JSON Schema. 

# Integrations
As a metadata management system, Song does not handle the complexities of cloud file upload. To handle this, Song is built to interact with a required companion application, [Score](/documentation/score), which manages secure and fast file upload & download, as well as standard genomic file applications like viewing with  `samtools` or downloading portions of genomic files with `BAM Slicing`. 

As part of the larger Overture.bio software suite, Song can be optionally used with other additional integrations, including:
- **[Event Streaming](http://localhost:8000/documentation/song/installation/configuration/kafka):** Built-in support for [Apache Kafka](https://kafka.apache.org/) event streaming.  
- **[Maestro](/documentation/maestro/):** Song is built to natively integrate with Maestro, which will easily index data into a configurable Elasticsearch index, to be used for convenient searching of data. 
