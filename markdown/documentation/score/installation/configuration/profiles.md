---
title: Run Profiles
---

Score uses [Spring Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html) as a feature to manage the running of a Score server in different environments or when integrating with different services.  For example, spring profiles allows different configuration settings to be applied depending on the type of object storage service being used.

During configuration, you will need to enable the active profiles in the `score-server-[version]/conf/application.properties` file.  The active profiles to use for a particular configuration can be specified using the `profiles` argument which should be added at the start of the `spring` block, for example:

```yaml
spring:
  profiles:
    active: "default,prod,secure,jwt"

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

# Azure

The `azure` profile is required if using Microsoft Azure storage as your object storage.  It contains configuration settings specific for Azure.  For details on configuring your object storage, see [Object Storage Integration](/documentation/score/installation/configuration/object-storage).

For example:

```yaml
azure:
  endpointProtocol: https
  accountName: abc123
  accountKey: abc123

bucket:
  name.object: test_object_bucket

upload:
  partsize: 1048576
```

# Prod

The `prod` profile is used to enable production deployments and most importantly requires you to specify the Song metadata server that Score must interact with.  For details on integrating with the Song server, see [Song Server Integration](/documentation/score/installation/configuration/song).

For example:

```yaml
metadata:
   url: "http://localhost:8089/"
   ssl.enabled: false
```

# Secure 

The `secure` profile is required if the [Overture](https://overture.bio) product [Ego](/documentation/ego) is used as the authentication service for Score.  It enables authentication for requests to the Score API using API keys issued by Ego.  For details on configuring authentication, see [Authentication](documentation/score/installation/authentication).

For example:

``` yaml
auth:
  server:
    url: https://localhost:8081/oauth/check_token
    tokenName: token
    clientId: score
    clientSecret: scoresecret
    scope:
      download:
        system: score.READ
        study:
          prefix: score.
          suffix: .READ
      upload:
        system: score.WRITE
        study:
          prefix: score.
          suffix: .WRITE
```

# JWT

The `jwt` profile can be optionally used if you want to support both JWT and API Key authentication for requests to Score.  Note that JWT authentication cannot be configured standalone, it still requires the aforementioned API key authentication to be setup first.  For details on configuring authentication, see [Authentication](documentation/score/installation/authentication).

For example:

```yaml
auth:
  jwt:
    publicKeyUrl: "https://localhost:8443/oauth/token/public_key"
```