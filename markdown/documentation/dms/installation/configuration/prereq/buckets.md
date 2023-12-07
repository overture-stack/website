---
title: Setup Data Storage Buckets
---

[Score service](/documentation/score) manages data transfers to and from cloud object storage. Before using Score, you'll need to establish two specific storage buckets. These bucket details will be required during the DMS interactive configuration questionnaire.

To set up your storage buckets, follow the steps below:

1. **Choose a Storage Service:** Decide if you want to use the included [MinIo](https://min.io/) service with DMS or an external provider like [Amazon S3](https://aws.amazon.com/s3/), [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/), or [OpenStack](https://www.openstack.org/) in conjunction with [Ceph](https://ceph.io/). 
   - If using MinIo, the required buckets will be automatically created.
   - For external services, continue with the following steps.


2. **Create Buckets:** Manually set up an `object bucket` and a `state bucket` in your chosen storage service. Ensure you note down the IDs of both buckets for DMS configuration.


3. **Setup `/data` Sub-folder (if required):** Depending on the provider, you may need to create a `/data` sub-folder in each bucket. OpenStack users working with Ceph must do this, while Amazon and MinIo users can skip this step.


4. **Record Essential Credentials:** Write down the **URL**, **access key**, and **secret key** for your storage service. You will need these during DMS configuration. Ensure these details are kept confidential and secure.


5. **Amazon S3 Specifics:** If you're an Amazon S3 user, also note the **Region** where your buckets reside. This information will be prompted for during DMS configuration.


Should you need further assistance, consider reaching out to your organization's IT department or the support team of your chosen storage service provider.
