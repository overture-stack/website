---
title: Setup Data Storage Buckets
---

The [Score service]((../../../../../score)) manages data transfer to (upload) and from (download) cloud object storage.  As such, Score requires two specific buckets to get setup in advance in your storage service.  These buckets are supplied as inputs to the DMS interactive configuration questionnaire later on.

Score requires two buckets to be setup in your storage:

1. A bucket to store object data


2. A bucket to store and maintain state information

If you plan to use the free [MinIo](https://min.io/) service packaged with the DMS, then these buckets will be created by default for you.

However, if you plan to use an external service such as [Amazon S3](https://aws.amazon.com/s3/), [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/), or [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/), you must ensure the buckets are created in your service as follows:

1. Create an object bucket and a state bucket and remember both their IDs, as they will be required as input during DMS configuration.


2. For certain storage services, a `/data` sub-folder must be created in advance in each bucket.  Please check with your service provider's configuration requirements.  Currently, Openstack with Ceph requires this sub-folder when used by Score, while Amazon and MinIo do not.


3. Make sure to note the **URL**, **access key**, and **secret key** used to access your external service, as these are also required as input during DMS configuration.  **Keep these values safe and secure**.


4. If specifically using Amazon S3, makes ure to note the geographic **Region** where you have configured your buckets to be stored, as this is also required as an input during DMS configuration.

If assistance is required, please consult your IT department if you are part of an institution, or contact support with your specific storage provider.