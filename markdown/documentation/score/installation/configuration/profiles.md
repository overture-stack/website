---
title: Spring Profiles
---

[Spring Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html) are used to configure the Score Server for running in various environments. With Spring profiles, you can customize settings based on your specific deployment scenario. For instance, you can enforce strict security measures in production while relaxing them in test deployments.

For Scores configuration, you will need to specify the active profiles within your environment variables file (`.env.score`). Descriptions of the profiles available to Score are provided here. Depending on the type of configuration, some profiles are required to run and some are optional.

The profiles described on this page are summarized in the table below:

| Profile | Requirement | Description |
|---------|-------------|-------------|
| [aws](#aws) | Required for <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">AWS</a>, <a href="https://ceph.io/" target="_blank" rel="noopener noreferrer">Ceph</a>, or <a href="https://min.io/" target="_blank" rel="noopener noreferrer">Minio</a> storage | You must use the `aws` profile to configure your object storage if using AWS, Ceph, or Minio. |
| [azure](#azure) | Required for <a href="https://azure.microsoft.com/en-ca/services/storage/" target="_blank" rel="noopener noreferrer">Azure</a> storage | You must use the Azure profile to configure your object storage if using Microsoft Azure. |
| [prod](#prod) | Required | Used for production deployments and to specify the Song metadata server that Score must interact with. The `prod` profile also **requires the `aws` or `azure` profile.** |
| [secure](#secure) | Required with Ego | For protected downloads and uploads, all requests will require an API key. |
| [jwt](#jwt) | Optional | An extension to the secure profile, the `jwt` profile allows Ego JWT access tokens as authorization Bearer Tokens. Requires secure profile to function. |             

# Run Profiles

## AWS

The `aws` profile is required if using AWS, Ceph, or Minio as your object storage.  It contains configuration settings that are common to these service providers. For detailed steps on configuring your object storage, see <a href="/documentation/score/installation/configuration/object-storage" target="_blank" rel="noopener noreferrer">Object Storage Integration</a>.

```bash
# Default profile configuration
SPRING_PROFILES_ACTIVE=aws

S3_ENDPOINT="http://localhost:9000"
S3_ACCESS_KEY="{{access_key}}"
S3_SECRET_KEY="{{secret_key}}"
S3_SIGV4_ENABLED="true"

BUCKET_NAME_OBJECT="{{object_bucket_name}}"
BUCKET_NAME_STATE="{{state_bucket_name}}"
BUCKET_SIZE_POOL=0
BUCKET_SIZE_KEY=2

UPLOAD_PARTSIZE=1048576
UPLOAD_RETRY_LIMIT=10
UPLOAD_CONNECTION_TIMEOUT=60000
UPLOAD_CLEAN_CRON="0 0 0 * * ?"
UPLOAD_CLEAN_ENABLED="true"

OBJECT_SENTINEL="heliograph" # Score requires a sample object/file to exist in the object storage for `ping` operations; default is `heliograph`
```

## Azure

The `azure` profile is required if using Microsoft Azure storage as your object storage.  It contains configuration settings specific for Azure.  For details on configuring your object storage, see <a href="/documentation/score/installation/configuration/object-storage" target="_blank" rel="noopener noreferrer">Object Storage Integration</a>.

```bash
# Azure profile configuration
SPRING_PROFILES_ACTIVE=azure

AZURE_ENDPOINT_PROTOCOL="https"
AZURE_ACCOUNT_NAME="{{storage_account_name}}"
AZURE_ACCOUNT_KEY="{{storage_account_secret_key}}"

BUCKET_NAME_OBJECT="{{object_bucket}}" # Name of the bucket or container that will store the object data
BUCKET_POLICY_UPLOAD="{{write_policy}}" # Name of the access policy to use for write/add/modify operations
BUCKET_POLICY_DOWNLOAD="{{read_policy}}" # Name of the access policy for the read/list operations

OBJECT_SENTINEL="heliograph" # Score requires a sample object/file to exist in the object storage for `ping` operations; default is `heliograph`
```

## Prod

The `prod` profile is used to enable production deployments and most importantly requires you to specify the Song metadata server that Score must interact with.  For details on integrating with the Song server, see <a href="/documentation/score/installation/configuration/song" target="_blank" rel="noopener noreferrer">Song Server Integration</a>.

For example:

```bash
# Prod profile configuration
SPRING_PROFILES_ACTIVE=prod

METADATA_URL="{{metadata_url}}" ## ex. http://localhost:8089/
METADATA_SSL_ENABLED="{{ssl_enabled}}" ## True or False
```

## Secure 

The `secure` profile is required if <a href="/documentation/ego" target="_blank" rel="noopener noreferrer">Ego</a> is used as the authentication service for Score. It enables authentication for requests to the Score API using API keys issued by Ego.  For details on configuring authentication, see <a href="/documentation/score/installation/configuration/authentication" target="_blank" rel="noopener noreferrer">Authentication</a>.

For example:

```bash
# Secure profile configuration
SPRING_PROFILES_ACTIVE=secure

AUTH_SERVER_URL="{{auth_server_url}}"
AUTH_SERVER_TOKEN_NAME="{{token_name}}"
AUTH_SERVER_CLIENT_ID="{{client_id}}"
AUTH_SERVER_CLIENT_SECRET="{{client_secret}}"
AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM="{{download_system_scope}}"
AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_PREFIX="{{download_study_prefix}}"
AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_SUFFIX="{{download_study_suffix}}"
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM="{{upload_system_scope}}"
AUTH_SERVER_SCOPE_UPLOAD_STUDY_PREFIX="{{upload_study_prefix}}"
AUTH_SERVER_SCOPE_UPLOAD_STUDY_SUFFIX="{{upload_study_suffix}}"
```
## JWT

The `jwt` profile can be used if you want to support both JWT and API Key authentication for requests to Score. Note that JWT authentication cannot be configured standalone, it still requires the aforementioned API key authentication to be setup first.  For details on configuring authentication, see <a href="/documentation/score/installation/configuration/authentication" target="_blank" rel="noopener noreferrer">Authentication</a>.

For example:

```bash
# Secure profile configuration
SPRING_PROFILES_ACTIVE=jwt

AUTH_JWT_PUBLIC_KEY_URL="{{public_key_url}}" # ex. https://localhost:8443/oauth/token/public_key
```
