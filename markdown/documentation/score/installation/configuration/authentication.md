---
title: Authentication 
---
# Application Authentication & Authorization

To access Score services, users need a valid API key with the appropriate scopes (permissions).  

<Warning>Setting up authentication and authorization, while technically optional, is **strongly advised**, especially in production environments.</Warning>  

Authentication and authorization can be configured using different runtime profiles. You can specify the active profiles in your environment variables file, `.env.score.` This page describes the available profiles.

Relevant configuration profiles are summarized below:

| Profile | Requirement | Description |
|---------|-------------|-------------|
| [secure](#secure-profile-example) | Required if using Ego | If you are using <a href="/documentation/ego" target="_blank" rel="noopener noreferrer">Ego</a> this profile is a must. It enables authentication of requests to the Score API using API keys issued by Ego. |
| [jwt](#jwt-profile-example) | Optional | Optionally, you can use this profile to support both JWT (<a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">JSON Web Tokens</a>) and API Key authentication for Score requests. |     

## Secure Profile Example 

If you're using <a href="/documentation/ego" target="_blank" rel="noopener noreferrer">Ego</a> the `secure` profile is essential. It enables authentication for requests to the Score API via API keys issued by Ego. To set up your Score server with the `secure` profile modify your `.env.score` file as follows:

```bash
# Secure profile configuration
SPRING_PROFILES_ACTIVE=secure

AUTH_SERVER_URL="{{auth_server_url}}"
AUTH_SERVER_TOKEN_NAME="{{token_name}}"
AUTH_SERVER_CLIENT_ID="{{client_id}}"
AUTH_SERVER_CLIENT_SECRET="{{client_secret}}"
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
| `AUTH_SERVER_TOKEN_NAME`                         | Required    | Name identifying a token. Typically, keep the default value, `token`. |
| `AUTH_SERVER_CLIENT_ID`                          | Required    | The client ID for the Score application configured in Ego. |
| `AUTH_SERVER_CLIENT_SECRET`                      | Required    | The client secret for the Score application configured in Ego. |
| `AUTH_SERVER_SCOPE_DOWNLOAD_SYSTEM`              | Required    | Scope (permission) for system-level downloads from Score using an API key. Default: `score.READ` |
| `AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_PREFIX`        | Required    | Prefix before the Song study name when assigning study-level download scopes for Score. Default: `score.` |
| `AUTH_SERVER_SCOPE_DOWNLOAD_STUDY_SUFFIX`        | Required    | Suffix after the Song study name when assigning study-level download scopes for Score. Default: `.READ` |
| `AUTH_SERVER_SCOPE_UPLOAD_SYSTEM`                | Required    | Scope (permission) for system-level uploads to Score using an API key. Default: `score.READ`. |
| `AUTH_SERVER_SCOPE_UPLOAD_STUDY_PREFIX`          | Required    | Prefix before the Song study name when assigning study-level upload scopes for Score. Default: `score.` |
| `AUTH_SERVER_SCOPE_UPLOAD_STUDY_SUFFIX`          | Required    | Suffix after the Song study name when assigning study-level upload scopes for Score. Default: `.READ` |


## JWT Profile Example

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