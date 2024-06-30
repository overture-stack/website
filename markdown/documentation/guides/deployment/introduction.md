---
title: Deployment Guide
---

**This guide is for** anyone seeking guidance on how to deploy an Overture platform

**You will need** Docker, we recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)

<Note title="File Management">To simplify managing your configuration files, create a folder (e.g., `localOverturePlatform`) as the root directory of your project. All commands should be run from this directory.</Note>

**Background:** This guide provides a step-by-step deployment of an Overture platform, including configuration details and explanations. It is divided into three setup segments:

1. **Authorization** using Keycloak

2. **Data Management & Storage** using Song and Score

3. **Search Portal setup** using Maestro, Arranger and Stage

![Portal Overview](./assets/guideOverview.webp 'Guide Overview')

A summary of each Overture and third-party service used in this guide is detailed below:

| Overture Services | Description                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| **Song**          | Our metadata management service with automated submission validation system.                                   |
| **Score**         | Our file transfer microservice that supports fault-tolerant multi-part parallel transfer.               |
| **Maestro**       | Our indexing service for transforming metadata in Song into an Elasticsearch search index.        |
| **Arranger**      | Our search API and UI component generation services.                      |
| **Stage**         | Our react-based user interface designed to allow easy deployment of data portals. |

| Third Party Services | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **KeyCloak**             | A highly regarded open-source identity and access management (IAM) service developed by Red Hat.                        |
| **Postgres**             | A free and open-source relational database management system. |
| **Minio**                | A high-performance open-source object storage provider.                                                                                              |
| **Kafka**                | The messaging system used to enable asynchronous communication between Song and Maestro.                                       |                                     |
| **Elasticsearch**        | A search and analytics engine used to help query massive datasets flexibly and efficiently.                                              |

<Note title="Do you have a specific deployment scenario?">Due to the variety of possible deployment scenarios (notably cloud servers and object storage providers) we are providing a generalized and reproducible deployment of an Overture platform running on your local machine. If you require further assistance with server deployments customized to your specific needs, our team can help. Feel free to reach out to us at contact@overture.bio for personalized consultation.</Note>

