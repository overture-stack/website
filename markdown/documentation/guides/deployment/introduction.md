---
title: Deployment Guide
---

**This guide is for** anyone planning to deploy our microservices in a production environment.

**In this guide** we will provide step-by-step instructions for deploying and integrating Overture microservices into a complete end-to-end data platform. We will guide you through installing the following Overture services:

![Portal Overview](./assets/portaloverview.webp 'Overture Data Platform Overview')

| Overture Services | Description                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| **Song**          | Metadata management with automated submission validation system.                                   |
| **Score**         | File Transfer Microservice that supports fault-tolerant multi-part parallel transfer.               |
| **Maestro**       | Indexes metadata in Song into an Elasticsearch search index to be consumed by Arranger.            |
| **Arranger**      | Generation of search components and APIs to be integrated in a data portal.                        |
| **Stage**         | A React-based user interface designed to allow easy deployment of browser-accessible data portals. |

**We will also use** the following third-party services:

| Third Party Services | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| KeyCloak             | A highly regarded open-source identity and access management (IAM) service developed by Red Hat. KeyCloak is our recommended OAuth service for production environments.                           |
| Postgres             | Free and open-source relational database management system used with Song to store metadata and Ego or Keycloak to store user information. |
| Minio (optional)     | Optional high Performance Open Source Object Storage.                                                                                      |
| Kafka                | Backbone messaging system for Song. It enables asynchronous communication between Song and Maestro.                                       |
| Zookeeper            | Provides a reliable way to track the status of Kafka brokers and manage their configurations.                                             |
| Elasticsearch        | A search and analytics engine used to help query massive datasets flexibly and effiecently.                                              |

**What you will need:** 

- **Docker:** We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)
- **Folder Setup:** To simplify managing your configuration files, create a folder (e.g., `localOverturePlatform`) as the root directory of your project. All commands should be run from this directory.

<Note title="Do you have a specific deployment scenario?"> Our focus here is on providing a generalized and reproducible deployment of an Overture platform running on your local machine. If you require assistance with development operations or deployments customized to your specific needs, our team can help. Feel free to reach out to us at contact@overture.bio for personalized consultation.</Note>
