---
title: Introduction
---

With great data, comes great data responsibility.  Genomic data files are being generated at a fast pace; Song provides a metadata management and storage system to easily track and manage files in a secure and validated environment, against your established data model.  Some features are particularly tailored towards genomic files, but Song supports any data type! 

# Features
## Metadata to File Validation
In conjunction with the data upload tool Score, provides:
- Validation of file metadata associated with a file against a metadata record
- Assignment of global identifiers for data management, managed by Song or an external ID database
- Assignment of access control rules for open (public access) versus controlled (authentication required) access to files.

## Data Lifecyle Management 
Song manages a lifecycle of data publication from initial upload, to publication, and even eventual removal of data. 

## Flexible Data Model 
We recognize that there are a multitude of use cases for how different institutions may collect data elements.  With that in mind, Song is built to be ultimately flexible to any type of data model.  There is a small "base" data model that all Songs follow to track basic patient identifiers, but beyond that any desired business rules can be encoded Song's Dynamic Schemas, which are based on JSON Schema. 
