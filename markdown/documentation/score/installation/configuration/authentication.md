---
title: OAuth Provider
---

Authentication and authorization can be configured using different runtime profiles. You can specify the active profiles in your environment variables file, `.env.score.` This page describes the available profiles.

Relevant configuration profiles are summarized below:

| Profile | Requirement | Description |
|---------|-------------|-------------|
| [secure](#secure-profile-example) | Required | The secure profile enables authentication of requests to the Score API using API keys issued by Ego or Keyloak. |
| [jwt](#jwt-profile-example) | Optional | Optionally, you can use this profile to support both JWT (<a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">JSON Web Tokens</a>) and API Key authentication for Score requests. |     

# Secure Profile Examples

## Ego Integration

If you're using <a href="/documentation/ego" target="_blank" rel="noopener noreferrer">Ego</a> the `secure` profile is essential. It enables authentication for requests to the Score API via API keys issued by Ego. To set up your Score server with the `secure` profile modify your `.env.score` file as follows:

```bash
# Secure profile configuration
SPRING_PROFILES_ACTIVE=secure

AUTH_SERVER_PROVIDER=ego
AUTH_SERVER_URL="{{auth_server_url}}"
AUTH_SERVER_TOKENNAME="{{token_name}}"
AUTH_SERVER_CLIENTID="{{client_id}}"
AUTH_SERVER_CLIENTSECRET="{{client_secret}}"
AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM="{{download_system_scope}}" # e.g., score.WRITE'
AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_PREFIX="{{download_study_prefix}}" # e.g., 'score.'
AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_SUFFIX="{{download_study_suffix}}" # e.g., '.WRITE'
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM="{{upload_system_scope}}" # e.g., 'score.READ'
AUTH_SERVER_SCOPE_UPLOAD_STUDY_PREFIX="{{upload_study_prefix}}" # e.g., 'score.
AUTH_SERVER_SCOPE_UPLOAD_STUDY_SUFFIX="{{upload_study_suffix}}" # e.g., '.WRITE'

```

The table below summarizes the variables you need to set:

| Setting                                          | Requirement | Description |
|--------------------------------------------------|-------------|-------------|
| `AUTH_SERVER_URL`                                | Required    | URL for the Ego API endpoint authenticating a user's API key. Specify the endpoint's host and port. Use `/oauth/check_token`. |
| `AUTH_SERVER_TOKENNAME`                         | Required    | Name identifying a token. Typically, keep the default value, `apiKey`. |
| `AUTH_SERVER_CLIENTID`                          | Required    | The client ID for the Score application configured in Ego. |
| `AUTH_SERVER_CLIENTSECRET`                      | Required    | The client secret for the Score application configured in Ego. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM`              | Required    | Scope (permission) for system-level downloads from Score using an API key. Default: `score.READ` |
| `AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_PREFIX`        | Required    | Prefix before the Song study name when assigning study-level download scopes for Score. Default: `score.` |
| `AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_SUFFIX`        | Required    | Suffix after the Song study name when assigning study-level download scopes for Score. Default: `.READ` |
| `AUTH_SERVER_SCOPE_UPLOAD_SYSTEM`                | Required    | Scope (permission) for system-level uploads to Score using an API key. Default: `score.READ`. |
| `AUTH_SERVER_SCOPE_UPLOAD_STUDY_PREFIX`          | Required    | Prefix before the Song study name when assigning study-level upload scopes for Score. Default: `score.` |
| `AUTH_SERVER_SCOPE_UPLOAD_STUDY_SUFFIX`          | Required    | Suffix after the Song study name when assigning study-level upload scopes for Score. Default: `.READ` |

## Keycloak Integration

```bash
# ============================
# Spring Run Profiles (Required)
# ============================

# Active profiles to determine app behaviour & configs
SPRING_PROFILES_ACTIVE=collaboratory,prod,secure

# Server configuration
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
AUTH_SERVER_SCOPE_UPLOAD_SYSTEM=score.READ
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWKSETURI=http://localhost/realms/myrealm/protocol/openid-connect/certs
```

<Warning>**Note:** If you are running Score with Keycloak you must use run use docker container `ghcr.io/overture-stack/score-server:47f006ce`
 </Warning>

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

To support both JWT and API Key authentication, use the `jwt` profile. Note that you can't configure JWT as your sole authentication method since Score initially requires an API key. Therefore, `jwt` profile requires the `secure` profile to be active. To set up the `jwt` profile for your Score server, update your `.env.score` file as follows:

```bash
# Secure profile configuration
SPRING_PROFILES_ACTIVE=secure,jwt
AUTH_JWT_PUBLIC_KEY_URL="{{public_key_url}}" # e.g., https://localhost:8443/oauth/token/public_key
```

The table below summarizes the variables you need to set:

| Setting              | Requirement | Description |
|----------------------|-------------|-------------|
| `AUTH_JWT_PUBLIC_KEY_URL` | Required | URL to the Ego API endpoint for retrieving a user's public key. Specify the endpoint's host and port. Use `/oauth/token/public_key`. |