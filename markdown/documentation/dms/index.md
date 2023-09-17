---
title: Introduction
---

Overture is a comprehensive suite of open-source, extendable solutions tailored for genomic big-data science. It caters to research institutions and individual researchers, enhancing their capacity to manage and share large genomic datasets.

Built from our core collection of microservices, the DMS offers turnkey installation, configuration, and deployment of the Overture software. Ideal for smaller scale projects the DMS has all of Overtures core functionalities without the added installation and maintenance required.

## System Overview

![Entity](./assets/system-diagram.png 'System Overview')

Below are the five core components found within the DMS:

| Component          | Purpose |
| --------------------| ------------|
| [Score](/documentation/score) | Manages cloud-based data object storage and transfer. |
| [Song](/documentation/song) | Manages metadata linked with data objects. |
| [Maestro](/documentation/maestro) | Indexes metadata in Song into [Elasticsearch](https://www.elastic.co/). |
| [Arranger](/documentation/arranger) | Produces a configurable web portal interface with faceted search against the Elasticsearch index. |
| [Ego](/documentation/ego) | Manages user identity for authentication, authorization, and data security. |

While these components are available as separate containers, the DMS platform amalgamates them, simplifying the setup process. This allows projects of all scales to seamlessly deploy these services and ultimately establish a data-sharing portal.

### The Data Management Lifecycle

The core components jointly support a holistic data management lifecycle:

1. **Data Storage**: The lifecycle commences with data and metadata storage. Song and Score collaborate to ensure secure and distributed data management. Score integrates with object-based storage services, enabling robust and fault-tolerant data transfers. Song captures metadata detailing file characteristics and descriptors, like the originating project or the experimental protocol used. Its dynamic schema ensures flexibility, allowing research groups to customize their metadata storage.


2. **Data Discovery**: Stored data should be quickly and easily searchable. Maestro indexes Song-submitted metadata into an [Elasticsearch](https://www.elastic.co/) index. It can amalgamate metadata from distributed Song servers into a centralized index. This extraction enables diverse search styles, and Arranger subsequently develops a faceted search interface using a [GraphQL](https://graphql.org/) API against the Elasticsearch index.


3. **Data Security**: Data security is paramount, especially when consolidating datasets from multiple sources. Ego addresses this, overseeing user identity, authentication, and authorization. Using [OAuth 2.0](https://oauth.net/2/), Ego integrates with established identity providers like Google, Github, and LinkedIn. This ensures fine-grained data access control, catering to varied group requirements.

## Features

The first general release of the DMS bundle boasts several features:

- **Interactive Configuration Questionnaire:** To expedite Overture's deployment, the DMS offers an intuitive configuration questionnaire. Admins are guided through configuration steps, with default suggestions and documentation links available for additional clarity. Post-configuration, all inputs are saved for deployment.


- **Saved Configuration:** Configurations are saved and retrievable, allowing verification before deployment.


- **Cluster Deployment Modes:**

The DMS bundle supports single-cluster deployment in two modes:

| Mode | Use Case | Access | Security |
| -----| ---------| -------| ----------|
| Local | Ideal for solo users or small teams on local machines or private cloud VMs. | Local host only | HTTP only |
| Server | Targets larger infrastructures, offering external access over secure connections. | Domain-specific | HTTPS over TLS/SSL |

- **Bundling & Integration with 3rd Party Software** 

The DMS platform uses the following 3rd party software providers:

| Provider          | Purpose |
| --------------------| ------------|
| OAUTH 2.0 Providers | Secure Authentication & authorization (e.g., Google, GitHub, LinkedIn, ORCiD) |
| Object Storage Services | Robust data transfer (e.g., [Amazon S3](https://aws.amazon.com/s3/), [MS Azure](https://azure.microsoft.com/en-ca/services/storage/), [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/), [MinIo](https://min.io/)) |
| [Elasticsearch](https://www.elastic.co/) | Search & indexing |
| [Certbot](https://certbot.eff.org/) | HTTPS security certification |
