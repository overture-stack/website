---
title: Prerequisites
---

Before installing Score, the following software services needs to be installed and running:

| Service | Version | Requirement | Notes |
|--|--|--|--|
| [Song](https://github.com/overture-stack/SONG/releases) | Latest | Required | Required as companion application to Score for metadata validation and management.  See [here](/documentation/song/installation) for installation instructions. | 
| Object Storage | Latest | Required | You must setup an object store with one of the supported cloud-based storage providers.  This is required for Score to have a location for uploading data to and downloading data from. See [Configuring Storage Providers](#configuring-storage-providers) for details. |
| [Docker](https://docs.docker.com/engine/install/) | Latest | Required ||

## Supported Storage Providers

* [Amazon S3](https://aws.amazon.com/s3/)
* [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/)
* [Openstack](https://www.openstack.org/) with [Ceph](https://ceph.io/)
* [Minio](https://min.io/)

## Configuring Storage Providers

To setup your object storage for Score to use:

1. **Register with a provider** of your choice and follow their instructions for setting up and configuring their service. We have provided links provided above to get you started


2. **Create two data buckets for Score** to use:

- A bucket to store object data
- A bucket to store and maintain state information

<Warning>**Note:** Once created remember both their IDs, they will be required later for configuring Score.</Warning>

3. You may need to **create a `/data` sub-folder** in advance for each bucket. This requirement will depend on your storage provider and is summarized below:

| Storage Provider | data sub-folder required |
|--|--|
| Amazon S3 | No |
| Microsoft Azure | No*  |
| MinIO | No |
| OpenStack with Ceph | Yes |

4. **Record the URL, access key and secret key** used to access your storage service. These will be required later for configuring Score.  **Keep these values safe and secure**.

<Note title="For Amazon S3 buckets">Make sure to **note the geographical region** where you have configured your buckets to be stored, this will be required when configuring Score.</Note>

