---
title: Pre-Requisite Setup
---

Prior to running the DMS interactive configuration questionnaire, the following pre-requisites must be setup.  Certain tasks are required regardless of the [deployment mode](../../installation#decide-local-or-server-deployment), while others are only required if running in a specific mode (e.g. Server mode).

Prior to running the DMS installer and configuring the Overture services in local mode, the following pre-requisites need to be setup:

| #  | Task | Applies To |
| ---| -----| -----------|
| 1  | [Setup identity provider secrets](./secrets) | All modes|
| 2  | [Make user e-mails publicly accessible](./emails) | All modes|
| 3  | [Setup data storage buckets](./buckets) | All modes|
| 4  | [Configure Arranger metadata files](./arranger) | All modes|
| 5  | [Setup a domain name](./domain) | Server mode only|
| 6  | [Install an SSL certificate](./sslcert) | Server mode only|

The following sections describe these pre-requisite tasks in detail.