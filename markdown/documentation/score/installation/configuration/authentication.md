---
title: OAuth Provider
---

Authentication and authorization in Score can be configured using different runtime profiles. To specify these profiles, update your environment variables file, `.env.score.` This page outlines the available profiles and their configurations.

# 0Auth Profiles Overview

The table below summarizes the relevant configuration profiles:

| Profile | Requirement | Description |
|---------|-------------|-------------|
| [secure](#secure-profile-example) | Required | Enables Score API authentication using API keys issued by Ego or Keycloak. |
| [jwt](#jwt-profile-example) | Optional | Supports JWT ([JSON Web Tokens](https://jwt.io/)) and API Key authentication for Score requests. |

# Secure Profile Examples

## Ego Integration

If you're using <a href="/documentation/ego" target="_blank" rel="noopener noreferrer">Ego</a> the `secure` profile is essential. It enables authentication for requests to the Score API via API keys issued by Ego. To set up your Score server with the `secure` profile modify your `.env.score` file as follows:

```bash
# Configuration for the secure profile
SPRING_PROFILES_ACTIVE=secure

# Ego authentication settings
AUTH_SERVER_PROVIDER=ego
AUTH_SERVER_URL="{{auth_server_url}}" # e.g., http://localhost:8080/ego/api/oauth/token
AUTH_SERVER_TOKENNAME="{{token_name}}" # Default: 'apiKey'
AUTH_SERVER_CLIENTID="{{client_id}}"
AUTH_SERVER_CLIENTSECRET="{{client_secret}}"
AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM="{{download_system_scope}}" # Default: 'score.READ'
AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_PREFIX="{{download_study_prefix}}" # Default: 'score.'
AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_SUFFIX="{{download_study_suffix}}" # Default: '.READ'
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM="{{upload_system_scope}}" # Default: 'score.WRITE'
AUTH_SERVER_SCOPE_UPLOAD_STUDY_PREFIX="{{upload_study_prefix}}" # Default: 'score.'
AUTH_SERVER_SCOPE_UPLOAD_STUDY_SUFFIX="{{upload_study_suffix}}" # Default: '.WRITE'
```

The table below summarizes the variables outlined above:

| Setting                                          | Requirement | Description |
|--------------------------------------------------|-------------|-------------|
| `AUTH_SERVER_URL`                                | Required    | Ego API endpoint URL for API key authentication. |
| `AUTH_SERVER_TOKENNAME`                          | Required    | Token identifier, typically `apiKey`. |
| `AUTH_SERVER_CLIENTID`                           | Required    | Client ID for Score in Ego. |
| `AUTH_SERVER_CLIENTSECRET`                       | Required    | Client secret for Score in Ego. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM`              | Required    | System-level download scope using an API key. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_PREFIX`        | Required    | Prefix for study-level download scopes. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_SUFFIX`        | Required    | Suffix for study-level download scopes. |
| `AUTH_SERVER_SCOPE_UPLOAD_SYSTEM`                | Required    | System-level upload scope using an API key. |
| `AUTH_SERVER_SCOPE_UPLOAD_STUDY_PREFIX`          | Required    | Prefix for study-level upload scopes. |
| `AUTH_SERVER_SCOPE_UPLOAD_STUDY_SUFFIX`          | Required    | Suffix for study-level upload scopes. |

## Keycloak Integration

Configure the `.env.score` file for Keycloak integration:

```bash
# Keycloak-specific profile configuration
SPRING_PROFILES_ACTIVE=collaboratory,prod,secure

# Server and authentication settings
SERVER_PORT=8087
SERVER_SSL_ENABLED=false

# Logging
LOGGING_LEVEL_ORG_SPRINGFRAMEWORK_WEB=INFO
LOGGING_LEVEL_BIO_OVERTURE_SCORE_SERVER=INFO
LOGGING_LEVEL_ROOT=INFO

# ============================
# Server Authentication integration (Required)
# ============================
AUTH_SERVER_PROVIDER=keycloak
AUTH_SERVER_KEYCLOAK_HOST=http://localhost
AUTH_SERVER_KEYCLOAK_REALM=myrealm
AUTH_SERVER_URL=http://localhost/realms/myrealm/apikey/check_api_key/
AUTH_SERVER_TOKENNAME=apiKey
AUTH_SERVER_CLIENTID=score
AUTH_SERVER_CLIENTSECRET=scoresecret
AUTH_SERVER_SCOPE_STUDY_PREFIX=score.
AUTH_SERVER_SCOPE_UPLOAD_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_DOWNLOAD_SUFFIX=.READ
AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM=score.WRITE
AUTH_SERVER_SCOPE_DOWNLOAD_SUFFIX=.READ
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM=score.READ
AUTH_SERVER_SCOPE_UPLOAD_SUFFIX=.WRITE
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWKSETURI=http://localhost/realms/myrealm/protocol/openid-connect/certs
```

<Warning>**Note:** For Keycloak integration, use the Docker container `ghcr.io/overture-stack/score-server:47f006ce`.</Warning>

Keycloak-specific variables:

| Setting                                          | Requirement | Description |
|--------------------------------------------------|-------------|-------------|
| `AUTH_SERVER_PROVIDER`                           | Required    | Specify the authentication server provider. In this case, it's set to `keycloak`. |
| `AUTH_SERVER_KEYCLOAK_HOST`                      | Required    | The host address for the Keycloak server. Default is `http://localhost`. |
| `AUTH_SERVER_KEYCLOAK_REALM`                     | Required    | The realm in Keycloak under which the Score service is registered. Example: `myrealm`. |
| `AUTH_SERVER_URL`                                | Required    | URL for the Keycloak API endpoint authenticating a user's API key. Specify the full endpoint URL. |
| `AUTH_SERVER_TOKENNAME`                          | Required    | Name identifying a token. Typically, keep the default value, `apiKey`. |
| `AUTH_SERVER_CLIENTID`                           | Required    | The client ID for the Score application configured in Keycloak. |
| `AUTH_SERVER_CLIENTSECRET`                       | Required    | The client secret for the Score application configured in Keycloak. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM`              | Required    | Scope (permission) for system-level downloads from Score using an API key. Default: `score.WRITE`. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_SUFFIX`              | Required    | Suffix after the Song study name when assigning study-level download scopes for Score. Default: `.READ`. |
| `AUTH_SERVER_SCOPE_UPLOAD_SYSTEM`                | Required    | Scope (permission) for system-level uploads to Score using an API key. Default: `score.READ`. |
| `AUTH_SERVER_SCOPE_UPLOAD_SUFFIX`                | Required    | Suffix after the Song study name when assigning study-level upload scopes for Score. Default: `.WRITE`. |
| `SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWKSETURI` | Required | URI for JWT JSON Web Key Set (JWK Set) for the OAuth2 resource server. Specify the Keycloak server URI. |
| `SERVER_PORT`                                    | Optional    | The port number on which the server will listen. Default is `8087`. |
| `SERVER_SSL_ENABLED`                             | Optional    | Indicates whether SSL is enabled for the server. Default is `false`. |
| `LOGGING_LEVEL_ORG_SPRINGFRAMEWORK_WEB`          | Optional    | Sets the logging level for Spring Framework's web components. Default is `INFO`. |
| `LOGGING_LEVEL_BIO_OVERTURE_SCORE_SERVER`        | Optional    | Sets the logging level for Score Server components. Default is `INFO`. |
| `LOGGING_LEVEL_ROOT`                             | Optional    | Sets the root logging level. Default is `INFO`. |


## JWT Profile

For simultaneous JWT and API Key authentication, use the `jwt` profile in conjunction with the `secure` profile. To configure the `jwt` profile:

```bash
# JWT profile configuration
SPRING_PROFILES_ACTIVE=secure,jwt
AUTH_JWT_PUBLIC_KEY_URL="{{public_key_url}}" # e.g., https://localhost:8443/oauth/token/public_key
```

| Setting              | Requirement | Description |
|----------------------|-------------|-------------|
| `AUTH_JWT_PUBLIC_KEY_URL` | Required | Ego API endpoint for retrieving a user's public key. Specify the endpoint's host and port. Use `/oauth/token/public_key`. |
