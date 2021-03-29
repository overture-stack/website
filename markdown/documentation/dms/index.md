---
title: Introduction
---

Overture is a collection of open-source, extendable solutions for big-data genomic science that research institutions and individual researchers can use to support their work.

The rapid advancement and clinical potential of next-generation genomic sequencing has resulted in a proliferation of genomic data, as well as intense research efforts focused on analyzing genomes to diagnose patients and offer a personalized medicine experience.  With this data boom, there are growing needs for:

1. Secure transfer, tracking and management of large-scale genomic datasets which are increasingly being stored
in compute clouds;
2. Fast search capabilities over extremely large and rich datasets, some of
which are geographically distributed;
3. Responsible sharing and management of datasets by research groups with varying levels of information technology expertise.

The Overture software suite addresses these challenges, promoting FAIR (Findable, Accessible, Interoperable, Resuable) data sharing by overcoming the major bottlenecks in storing and distributing genome-scale datasets and providing an intuitive data portal for data browsing and
querying. Overture is composed of highly customizable components that facilitate genome projects to stand up a data sharing portal with extendibility.

The development of Overture has been driven primarily by biomedical disciplines in genomics, bioinformatics and computational biology generating large amount of genomics data.  However, recognizing the immense value and applicability of the platform to other big-data disciplines, the Overture team has now bundled the software suite into an easily-deployable, easily-configurable Data Management System (DMS) bundle.  The DMS bundle provides turnkey installation, configuration, and deployment of the Overture software suite.  By vastly lowering the techncal barrier in deploying Overture, we aim to increase adoption by users in other scientific domains and disciplines.

# System Overview

![Entity](./assets/system-diagram.png 'System Overview')

Illustrated above are the five core Overture components:

| Component          | Purpose |
| --------------------| ------------|
| [Score](../../documentation/score) | Manages cloud-based data object storage and transfer. |
| [Song](../../documentation/song) | Manages the metadata associated with the data objects. |
| [Maestro](../../documentation/maestro) | Indexes the metadata in Song into [Elasticsearch](https://www.elastic.co/). |
| [Arranger](../../documentation/arranger) | Generates an easily-configurable web portal interface with faceted search against the Elasticsearch index. |
| [Ego](../../documentation/ego)     | Manages user identity for authentication, authorization and data security. |

The core components described above are currently available as individual containers where the software code and its dependencies are packaged together. However, the DMS platform simplifies their setup and removes technical barriers by bundling the core components together and making it easy for both large and small projects to install, configure, and deploy these services, ultimately standing up a data sharing portal at the end of the process.

## The Data Management Lifecycle

All the core components work together to support an end-to-end data management lifecycle, as described below:

1. The data management lifecycle starts with storing generated data files and the associated metadata. Working together, Song and Score enable secure and distributed data management. Score works with object-based storage (including [Amazon Web Services S3](https://aws.amazon.com/s3/), [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/), and [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/)) to enable file upload and download that can be parallelized into multiple parts and easily resumed with high integrity for a fault-tolerant data transfer. Song stores the associated file metadata that describes key features of the data like file names, locations, sizes; and descriptive details such as the project generating the data or the experimental protocol used. Song has been built with flexibility in mind by leveraging a dynamic schema to store the metadata. Research groups can define and register their own schema to capture the metadata details that meet their specific requirements. For example, a genomic research group would register metadata schemas relating to sequencing reads and variant calls, whereas a medical imaging group would register metadata schemas related to radiology images along with annotations.


2. Once data is securely stored, it needs to be searchable through an easily-accessible and
speedy web interface that allows for targeted querying of specific attributes. The Maestro component indexes metadata that has been submitted to Song into a search index powered by [Elasticsearch](https://www.elastic.co/). Maestro is capable of indexing the metadata in multiple
geographically-distributed Song servers into one centralized index. By extracting the metadata from the source systems into a dedicated search index, multiple types of user-friendly search styles can be made availble to users, including structured (eg. facet-based search like consumer shopping site Amazon) and unstructured (eg. Google-style free text search). Once an index is prepared, the Arranger component generates an easily-configurable web interface with faceted search using a [GraphQL](https://graphql.org/) Application Programming Interface (API) against the Elasticsearch index.


3. Overarching the data management lifecycle is the important need for data access to be secured behind appropriate protocols for authentication
and authorization, especially when datasets from multiple research groups are combined into a single interface. The final major component of the Overture DMS, Ego, addresses this by managing user identity for authorization, authentication, and data security. Ego leverages the [OAuth 2.0](https://oauth.net/2/) standard to manage user identity through established identity providers including Google, Github, LinkedIn, and ORCiD. Once a user’s identity is verified, granular
access to different datasets can be managed by administrators assigning permissions to users.  This flexible approach means that data access can be controlled at multiple levels, as well as through multiple different mechanisms, thus meeting the data access requirements of different groups.


# Features

The first general availability release of the DMS bundle includes the following features.

## Interactive Configuration Questionnaire

To facilitate rapid, turnkey deployment of the Overture software suite, the DMS providers administrators with an easy-to-use, interactive configuration questionnaire.  This script is executed via the command-line, walking the administrator step-by-step through all configuration inputs needed to stand up the platform.  Recommended defaults and links to detailed documentation are provided along the way to further guide them through the process.

After all configuration inputs are supplied, they are saved to a file.  The configuration file is then used to deploy the Overture services to a single node or cluster, using similarly easy-to-use commands.

## Saved Configuration

All configurations are saved to a file and can be retrieved and viewed at any time via the command-line interface.  This allows administrators to verify the configuration values were captured correctly before attemping to deploy to their cluster.

## Cluster Deployment Modes

The current DMS release supports deployment to a single-cluster environment, using one of two available deployment modes:

| Mode | Use Case | Access | Application Layer Security |
| -----| ---------| -------| ---------------------------|
| Local | The purpose of local mode is to deploy and host the DMS only on a local machine's resources.  For example, deploying to an individual user's laptop, or a private VM in the cloud.  Local mode is typically used for solo users or small teams with shared access to a laptop or private VM. | Local host only | HTTP only |
| Server | The purpose of server mode is to deploy and host the DMS system using resources available on separate or external infrastructure from your local machine.   For example, deploying to a VM on a cloud infrastructure, or your organization's internal IT infrastructure, etc.  The intention of server mode is to make the DMS system available to external users, by exposing them via a configured domain name and securely over HTTPS. | Externally via custom domain name | HTTPS over TLS/SSL |

## Comprehensive User Documentation

A detailed [documentation site](https://overture.bio/documentation) is available to help administrators with the configuration and installation process, and to help end users understand the data sharing web portal.

While running the interactive configuration questionnaire, documentation links are also provided each step of the way, to further guide administrators through the process.

## Bundling & Integration with 3rd Party Software Providers

The DMS platform bundles together, or in other cases integrates with, robust, quality 3rd party software providers to support critical parts of the data management lifecycle or specific use cases.

Currently, these 3rd party software providers work in conjunction with the DMS:

| Provider          | Purpose |
| --------------------| ------------|
| OAUTH 2.0 Providers | Secure authentication & authorization (e.g. Google, GitHub, LinkedIn, ORCiD) |
| Object Storage Services | Secure object storage for data transfer (e.g. [Amazon S3](https://aws.amazon.com/s3/), [MS Azure](https://azure.microsoft.com/en-ca/services/storage/), [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/), [MinIo](https://min.io/)) |
| [Elasticsearch](https://www.elastic.co/) | Efficient, optimized data search & indexing capabilities |
| [Certbot](https://certbot.eff.org/) | Security certificate generation for exposing services over HTTPS |