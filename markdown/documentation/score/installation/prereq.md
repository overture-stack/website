---
title: Prerequisites
---

Before installing Score, ensure the following software services are installed and running:

1. **Object Storage**
   - Set up an object store with one of the supported cloud-based storage providers
   - Supported storage providers include <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">Amazon S3</a>, <a href="https://azure.microsoft.com/en-ca/services/storage/" target="_blank" rel="noopener noreferrer">Microsoft Azure Storage</a>, <a href="https://www.openstack.org/" target="_blank" rel="noopener noreferrer">Openstack</a> with <a href="https://ceph.io/" target="_blank" rel="noopener noreferrer">Ceph</a>, <a href="https://min.io/" target="_blank" rel="noopener noreferrer">Minio</a>


2. **Docker**
   - Docker Engine enables developers to define and manage their applications using containerization. 
   - <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">Official Docker Engine download & installation instructions</a>.

The following are not required for initial setup but will be required if you intend to use Score in a production setting:

1. **Ego**
   - Ego is Overtures authentication and authorization service
   - If you are running score in a secure environment you will need Ego (or an alternative Auth service) to broker API keys and JWT tokens
   - For more information see our [Ego documentation](/documentation/ego/)

2. **Song**
   - Song is a companion application to Score, and is required for any file uploading or downloading.
   - For more information see our [Song documentation](/documentation/song/)

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
| Microsoft Azure | No |
| MinIO | No |
| OpenStack with Ceph | Yes |

4. **Record the URL, access key and secret key** used to access your storage service. These will be required later for configuring Score.  **Keep these values safe and secure**.

<Note title="For Amazon S3 buckets">Remember to document the geographical region where you have configured your buckets to be stored, this will be required when configuring Score.</Note>

