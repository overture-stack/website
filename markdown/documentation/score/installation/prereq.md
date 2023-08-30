---
title: Prerequisites
---

Before installing Score, ensure the following software services are installed and running:

1. **Song**
   - Song is a companion application to Score
   - <a href="https://github.com/overture-stack/SONG/releases" target="_blank"> See Song's documentation and installation instructions for more details</a>


2. **Object Storage**
   - Set up an object store with one of the supported cloud-based storage providers
   - Supported storage providers include <a href="https://aws.amazon.com/s3/" target="_blank">Amazon S3</a>, <a href="https://azure.microsoft.com/en-ca/services/storage/" target="_blank">Microsoft Azure Storage</a>, <a href="https://www.openstack.org/" target="_blank">Openstack</a> with <a href="https://ceph.io/" target="_blank">Ceph</a>, <a href="https://min.io/" target="_blank">Minio</a>


3. **Docker**
   - Docker Engine enables developers to define and manage their applications using containerization. 
   - <a href="https://docs.docker.com/engine/install/" target="_blank">Official Docker Engine download & installation instructions</a>.

# Configuring Storage Providers

To set up your object storage for Score:

1. **Register with a provider** of your choice and follow their instructions for setting up and configuring their service. We have provided links above to get you started

2. **Create two data buckets for Score** to use:

- A bucket to store object data
- A bucket to store and maintain state information

<Warning>**Note:** After creation, remember the IDs of both buckets, they will be required later for configuring Score.</Warning>

3. You may need to **create a `/data` sub-folder** in advance for each bucket. This requirement will depend on your storage provider and is summarized below:

| Storage Provider | Data sub-folder required |
|--|--|
| Amazon S3 | No |
| Microsoft Azure | No*  |
| MinIO | No |
| OpenStack with Ceph | Yes |

4. **Record the URL, access key and secret key** used to access your storage service. These will be required later for configuring Score.  **Keep these values safe and secure**.

<Note title="For Amazon S3 buckets">Remember to document the geographical region where you have configured your buckets to be stored, this will be required when configuring Score.</Note>

