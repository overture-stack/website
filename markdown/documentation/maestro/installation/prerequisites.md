---
title: Prerequisites 
---

Before installing Maestro, ensure that the following software services are installed and running:


1. **Docker Engine**

    - [Official Docker Engine download & installation instructions](https://docs.docker.com/engine/install/)


2. **Elasticsearch**

    - [Official Elasticsearch download](https://www.elastic.co/downloads/elasticsearch)
    - Ensure you are using version 7 or up for Maestro to build the index in.


3. **Song**

    - Song manages the metadata associated with your genomic data.
    - [See the latest release of Song](https://github.com/overture-stack/SONG/releases)
    - [See Song's installation instructions for more details](/documentation/song/installation)


4. **Apache Kafka** *(Optional)*

    - [Official Apache Kafka download](https://kafka.apache.org/downloads/)
    - Optional, only needed if you want to set up event-based indexing.
