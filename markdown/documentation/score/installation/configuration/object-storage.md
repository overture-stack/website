---
title: Object Storage Integration
---

As indicated earlier, one of the prerequisite [dependencies](/documentation/score/) needed before installing Score is to setup a cloud object storage (see [Configuring Storage Providers](/documentation/score/installation#configuring-storage-providers)).  Score uses the storage as a location for uploading data to and downloading data from.

Once your object storage is setup, Score can be configured to connect to it using an appropriate profile in the `score-server-[version]/conf/application.properties` file, depending on your storage provider:

| Profile | Purpose |
|---------|---------|
| default | Required if using [AWS](https://aws.amazon.com/s3/), [Ceph](https://ceph.io/), or [Minio](https://min.io/) as your object storage. |
| azure | Required if using Microsoft [Azure](https://azure.microsoft.com/en-ca/services/storage/) as your object storage. |

# Default Profile Example

To connect Score to AWS, Ceph, or Minio storage, in the `score-server-[version]/conf/application.properties` file, make sure the `default` profile exists and configure these settings:

| Setting | Requirement | Description |
|---------|-------------|-------------|
| `s3.endpoint` | Required | URL of the storage service's API endpoint. Score will send requests to this URL when interacting with the service's API. |
| `s3.accessKey` | Required | Access key required to access the buckets in your object storage. You should have recorded this as part of your prequisite setup. |
| `s3.secretKey` | Required | Secret key required to access the buckets in your object storage. You should have recorded this as part of your prequisite setup. |
| `s3.sigV4Enabled` | Required | If your storage service uses the AWS S3 [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) signing process for authentication, set this to `true`.  Else set this to `false`. |
| `bucket.name.object` | Required | ID of the bucket used to store object data for Score. You should have recorded this as part of your prequisite setup. |
| `bucket.name.state` | Required | ID of the bucket used to store and maintain state information for Score. You should have recorded this as part of your prequisite setup. |
| `upload.partsize` | Required | Size, expressed in bytes, of each part or chunk to upload at once to the object storage.  You can use this parameter to adjust for your desired speed and performance. |
| `upload.retry.limit` | Required | Number of times that Score will retry failed upload requests to the object storage before aborting. |
| `upload.connectionltimeout` | Required | Number of milliseconds that Score will wait on a stale or idle connection to the object storage before timing out. |
| `upload.clean.cron` | Optional | If `clean.enabled` = `true`, use this parameter to configure the schedule on which the cleanup cron job runs. The cleanup job cleans up old upload jobs, between Score and the object storage. |
| `upload.clean.enabled` | Optional | Set to `true` if you want to run a cron job that cleans up old upload jobs between Score and the object storage.  If `true`, the cron schedule can be set with the `clean.cron` parameter.  Else set this value `false` if you do not want any cleanup. |
| `object.sentinel` | Required | Name of the sample object/file that must exist in object storage for Score to perform `ping` operations.  Default is `heliograph.` |

For example:

```yaml
s3:
  endpoint: "http://localhost:9000"
  accessKey: abc123
  secretKey: abc123
  sigV4Enabled: true

bucket:
  name.object: test_object_bucket
  name.state: test_state_bucket
  size.pool: 0
  size.key: 2

upload:
  partsize: 1048576
  retry.limit: 10
  connection.timeout: 60000
  clean.cron: “0 0 0 * * ?”
  clean.enabled: true
```

# Azure Profile Example

To connect Score to Microsoft Azure storage, in the `score-server-[version]/conf/application.properties` file, make sure the `azure` profile exists and configure these settings:

| Setting | Requirement | Description |
|---------|-------------|-------------|
| `azure.endpointProtocol` | Required | Indicates the communication protocol used by the Azure storage service's API endpoint.  For example, `https`. |
| `azure.accountName` | Required | Account name required to access your Azure object storage. You should have recorded this as part of your prequisite setup. |
| `azure.accountKey` | Required | Account key required to access your Azure object storage. You should have recorded this as part of your prequisite setup. |
| `bucket.name.object` | Required | ID of the bucket used to store object data for Score. You should have recorded this as part of your prequisite setup. |
| `bucket.policy.upload` | Required | Name of the access policy to use for write/add/modify operations. |
| `bucket.policy.download` | Required | Name of the access policy for the read/list operations. |
| `upload.partsize` | Required | Size, expressed in bytes, of each part or chunk to upload at once to the object storage.  You can use this parameter to adjust for your desired speed and performance. |
| `download.partsize` | Required | Size, expressed in bytes, of each part or chunk to download at once from the object storage.  You can use this parameter to adjust for your desired speed and performance. |
| `object.sentinel` | Required | Name of the sample object/file that must exist in object storage for Score to perform `ping` operations.  Default is `heliograph.` |

For example:

```shell
azure.endpointProtocol: "https"
azure.accountName: "<storage_account_name>"
azure.accountKey: "<storage_account_secret_key>"

bucket.name.object: "<object_bucket>" # Name of the bucket or container that will store the object data
bucket.policy.upload: "<write_policy>" # Name of the access policy to use for write/add/modify operations
bucket.policy.downolad: "<read_policy>" # Name of the access policy for the read/list operations

upload.partsize: 104587

download.partsize: 250000000 # Safe default part size for downloads

object.sentinel: "heliograph" # Score requires a sample object/file to exist in the object storage for `ping` operations; default is `heliograph`
```