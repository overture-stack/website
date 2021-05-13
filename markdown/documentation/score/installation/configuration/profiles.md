---
title: Run Profiles
---

Score uses [Spring Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html) as a feature to manage the running of a Score server in different environments or when integrating with different services.  For example, spring profiles allows different configuration settings to be applied depending on the type of object storage service being used.

During configuration, you will need to enable the active profiles in the `score-server-[version]/conf/application.properties` file.  The active profiles to use for a particular configuration can be specified using the `spring.profiles.active` property which should be added at the start of the properties file, for example:

```shell
spring.profiles.active: "default,prod,secure,jwt"

```
Descriptions of the profiles available to Score are provided below.  Depending on the type of configuration, some profiles are required to run and some are optional.

| Profile | Requirement | Description |
|---------|-------------|-------------|
| default | Required if using [AWS](https://aws.amazon.com/s3/), [Ceph](https://ceph.io/), or [Minio](https://min.io/) storage | You must use the default profile to configure your object storage if using AWS, Ceph, or Minio. |
| azure | Required if using [Azure](https://azure.microsoft.com/en-ca/services/storage/) storage | You must use the Azure profile to configure your object storage if using Microsoft Azure. |
| prod | Required | Used for production deployments and to specify the Song metadata server that Score must interact with. |
| secure | Required if using Ego | If the [Overture](https://overture.bio) product [Ego](/documentation/ego) is used as the authentication service for Score, this profile is required.  It enables authentication for requests to the Score API using API keys issued by Ego. |
| jwt | Optional | Optionally, you can use this profile to support both JWT ([JSON Web Tokens](https://jwt.io/)) and API Key authentication for requests to Score. |             

# Default

The `default` profile is required if using AWS, Ceph, or Minio as your object storage.  It contains configuration settings that are common to these service providers.  For detailed steps on configuring your object storage, see [Object Storage Integration](/documentation/score/installation/configuration/object-storage).

For example:

```shell
s3.endpoint: "http://localhost:9000"
s3.accessKey: "abc123"
s3.secretKey: "abc123"
s3.sigV4Enabled: true

bucket.name.object: "test_object_bucket"
bucket.name.state: "test_state_bucket"
bucket.size.pool: 0
bucket.size.key: 2

upload.partsize: 1048576
upload.retry.limit: 10
upload.connection.timeout: 60000
upload.clean.cron: "0 0 0 * * ?"
upload.clean.enabled: true

object.sentinel: "heliograph" # Score requires a sample object/file to exist in the object storage for `ping` operations; default is `heliograph`
```

# Azure

The `azure` profile is required if using Microsoft Azure storage as your object storage.  It contains configuration settings specific for Azure.  For details on configuring your object storage, see [Object Storage Integration](/documentation/score/installation/configuration/object-storage).

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

# Prod

The `prod` profile is used to enable production deployments and most importantly requires you to specify the Song metadata server that Score must interact with.  For details on integrating with the Song server, see [Song Server Integration](/documentation/score/installation/configuration/song).

For example:

```shell
metadata.url: "http://localhost:8089/"
metadata.ssl.enabled: false
```

# Secure 

The `secure` profile is required if the [Overture](https://overture.bio) product [Ego](/documentation/ego) is used as the authentication service for Score.  It enables authentication for requests to the Score API using API keys issued by Ego.  For details on configuring authentication, see [Authentication](documentation/score/installation/authentication).

For example:

```shell
auth.server.url: "https://localhost:8081/oauth/check_token"
auth.server.tokenName: "token"
auth.server.clientId: "score"
auth.server.clientSecret: "scoresecret"
auth.server.scope.download.system: "score.READ:"
auth.server.scope.download.study.prefix: "score."
auth.server.scope.download.study.suffix: ".READ"
auth.server.scope.upload.system: "score.WRITE"
auth.server.scope.upload.study.prefix: "score."
auth.server.scope.upload.study.suffix: ".WRITE"
```

# JWT

The `jwt` profile can be optionally used if you want to support both JWT and API Key authentication for requests to Score.  Note that JWT authentication cannot be configured standalone, it still requires the aforementioned API key authentication to be setup first.  For details on configuring authentication, see [Authentication](documentation/score/installation/authentication).

For example:

```shell
auth.jwt.publicKeyUrl: "https://localhost:8443/oauth/token/public_key"
```