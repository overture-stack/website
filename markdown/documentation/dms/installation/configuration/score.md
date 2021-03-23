---
title: Configure Score
---

[Score](../../../../score) manages data transfer to (upload) and from (download) cloud object storage.  As such, a storage service is required for Score to interact with.  The DMS allows either the use of MinIo](https://min.io/) pre-bundled with the DMS platform, or an external service such as [Amazon S3](https://aws.amazon.com/s3/), [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/), or [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/).

Configure the following for Score:

???

For example:

```shell
===============
SCORE
===============
Do you have an existing S3 service you would like to use with the SCORE service? (Y/N): y
Will you be using AWS S3? (Y/N): n
What is the URL of the S3 service? https://object.cancercollaboratory.org:9080/
What is the S3 accessKey? abc123
What is the S3 secretKey? abc123
What is the name of the OBJECT bucket used for SCORE? [dms.object]: test_object_bucket
What is the name of the STATE bucket used for SCORE? [dms.state]: test_state_bucket
```