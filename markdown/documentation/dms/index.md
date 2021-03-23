---
title: Introduction
---

Overture is a collection of open-source, extendable solutions for big-data genomic science that you can use to support your research.

Recognizing the value and re-usability of such a platform, not only for big-data genomic science, but for other big-data disciplines as well, the Overture team has now bundled our product suite into an easily-deployable, easily-configurable Data Management System (DMS) Bundle.

This bundle includes a range of useful features to help both institutions and individual users make use of our software and standup a data portal in short efficient time

# System Overview

??? Add diagram + description ???

# Features

The first general availability release of the DMS bundle includes the following features.

## Interactive Configuration Questionnaire

??? To be cleaned up ???

- Easy to use
- Step-by-step walkthrough
- Aims to remove unnecessary or difficult steps, let admin focus on their desired configs
- Automates as many steps as possible

## Cluster Deployment Modes

??? To be cleaned up ???

- Initial release supports single-cluster deployment only
- Can deploy in one of two modes: Local, Server
- Local: Run on localhost only, not meant to be externally or widely accessible, suitable for individual users or small teams sharing laptop or private VM
- Server: Intended to run on separate environment or infrastructure (e.g. on cloud) and to expose Overture services for use by external users; hence is required to be secure (HTTPS over TLS/SSL) and easily accessible (via set domain name)
local vs server

## Saved Configurations

??? To be cleaned up ???
- Ability to save config, allow user to view and verify before deploy

## Comprehensive User Documentation

??? To be cleaned up ???

- Detailed user documentation to help administrators, users enable themselves and act as a first line of knowledge & support

## Bundling & Integration with Robust 3rd Party Software Providers

??? To be cleaned up ???

- Where necessary, DMS platform bundles together or in other cases integrates with robust, quality 3rd party software providers for various use cases

- For example:

| Provider          | Purpose |
| --------------------| ------------|
| OAUTH 2.0 Providers | Secure authentication & authorization (e.g. Google, GitHub, LinkedIn, ORCiD) |
| Object Storage Services | Secure object storage for data transfer (e.g. Amazon S3, MS Azure, Openstack with Ceph, MinIo) |
| Elasticsearch | Efficient, optimized data search & indexing capabilities |
| Certbot | Security certificate generation for exposing services over HTTPS |