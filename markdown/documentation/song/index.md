---
title: Introduction
---

With great data, comes great data responsibility.  Genomic data files are being generated at a fast pace and more and more laboratory groups are required a method to manage this fast growing pile of data. Song provides a metadata management and storage system to easily track and manage files in a secure and validated environment, against your established data model.  Some features are particularly tailored towards genomic files, but Song supports any data type! 

# Features
## Metadata to File Validation
In conjunction with the data upload tool [Score](/documentation/score), Song provides:
- Validation of file, clinical and administrative metadata associated with a file
- Assignment of global identifiers for data management, managed by Song or an external ID database.
- Assignment of access control permissions for open (public) versus controlled (authentication required) access to files by users who want to download data.

## Data Lifecycle Management 
Song manages a lifecycle of data publication from initial upload, to publication, and even eventual removal of data. 
- Data administrators or applications can upload metadata and files, which remains in an  `UNPUBLISHED` state. 
- Data administrators or applications can update data to a `PUBLISHED` state, making it available for search or download.
- If data is no longer relevant, the data administrators can update to a `SUPPRESSED` state, removing it from search and download for users. 

## Flexible Data Model 
We recognize that there are a multitude of use cases for how different institutions may collect data elements.  With that in mind, Song is ultimately built to be flexible for any type of data model.  There is a small "base" data model that all Song deployments follow to track basic patient identifiers (in the context of genomic data), but beyond that any desired business rules can be encoded within Song's [Dynamic Schemas](/documentation/song/user-guide/schema), which are based on JSON Schema. 

# Integrations
As a metadata management system, Song does not handle the complexities of cloud file upload. To handle this, Song is built to interact with a required companion application, [Score](/documentation/score), which manages secure and fast file upload & download, as well as standard genomic file applications, for example   viewing with  `samtools` to view or download portions of genomic files with `BAM Slicing`. 

As part of the larger Overture.bio software suite, Song can be optionally used with additional integrations, including:
- **[Event Streaming](/documentation/song/installation/configuration/kafka):** Built-in support for [Apache Kafka](https://kafka.apache.org/) event streaming.  
- **[Maestro](/documentation/maestro/):** Song is built to natively integrate with Maestro, which will easily index data into a configurable Elasticsearch index, to be used for convenient searching of data. 
