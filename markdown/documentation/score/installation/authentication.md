---
title: Authentication 
---

# Application Authentication & Authorization

For an application to securely interact with Score, authentication and authorization must be provided.  This ensures unauthorized users cannot access Score's API endpoints.  To authorize properly with Score, either an authorized user's valid API key with appropriate scopes (permissions) must be supplied, or application-to-application authorization must be enabled following the [OAuth 2.0](https://oauth.net/2/) protocol.

Although configuring authentication and authorization is technically optional, it is **highly recommended**, especially for production environments.  Settings are configured in the `auth` section of the `score-server-[version]/conf/application.properties` file, using these profiles:

| Profile | Requirement | Description |
|---------|-------------|-------------|
| secure | Required if using Ego | If the [Overture](https://overture.bio) product [Ego](/documentation/ego) is used as the authentication service for Score, this profile is required.  It enables authentication for requests to the Score API using API keys issued by Ego. |
| jwt | Optional | Optionally, you can use this profile to support both JWT ([JSON Web Tokens](https://jwt.io/)) and API Key authentication for requests to Score. |     

# Secure Profile Example 

The `secure` profile is required if the [Overture](https://overture.bio) product [Ego](/documentation/ego) is used as the authentication service for Score.  It enables authentication for requests to the Score API using API keys issued by Ego.

To configure authentication and authorization via Ego, in the `score-server-[version]/conf/application.properties` file, make sure the `secure` profile exists and configure these settings in the `auth -> server` section:

| Setting | Requirement | Description |
|---------|-------------|-------------|
| `url` | Required | URL to the Ego API endpoint that is used to authenticate a user's API key (token). Specify the host and port where the endpoint is hosted.  The endpoint to use is `/oauth/check_token`.  See the example below for guidance. |
| `tokenName` | Required | Name used to identify a token.  Typically you should leave this set to the default value, `token`. |
| `clientId` | Required | This is the client ID for the Score application as configured in Ego. |
| `clientSecret` | Required | This is the client secret for the Score application as configured in Ego. |
| `scope -> download -> system` | Required | Scope (permission) that a user's API key must have to enable system-level downloads from Score. Typically you should leave this set to the default value, `score.READ`. |
| `scope -> download -> study -> prefix` | Required | Prefix that must come before the Song study name when assigning study-level download scopes (permissions) for Score.  Typically you should leave this set to the default value, `score.`. |
| `scope -> download -> study -> suffix` | Required | Suffix that must come after the Song study name when assigning study-level download scopes (permissions) for Score.  Typically you should leave this set to the default value, `.READ`. |
| `scope -> upload -> system` | Required | Scope (permission) that a user's API key must have to enable system-level uploads to Score. Typically you should leave this set to the default value, `score.READ`. |
| `scope -> upload -> study -> prefix` | Required | Prefix that must come before the Song study name when assigning study-level upload scopes (permissions) for Score.  Typically you should leave this set to the default value, `score.`. |
| `scope -> upload -> study -> suffix` | Required | Suffix that must come after the Song study name when assigning study-level upload scopes (permissions) for Score.  Typically you should leave this set to the default value, `.READ`. |

For example:

``` yaml
auth:
  server:
    url: "https://<host>:<port>/oauth/check_token"
    tokenName: "token"
    clientId: <client ID from Ego>
    clientSecret: <client secret from Ego>
    scope:
      download:
        system: "score.READ"
        study:
          prefix: "score."
          suffix: ".READ"
      upload:
        system: "score.WRITE"
        study:
          prefix: "score."
          suffix: ".WRITE"
```

# JWT Profile Example

The `jwt` profile can be optionally used if you want to support both JWT and API Key authentication for requests to Score.  Note that JWT authentication cannot be configured standalone, it still requires the aforementioned API key authentication to be setup first.

To make use of JWT authentication, in the `score-server-[version]/conf/application.properties` file, make sure the `jwt` profile exists and configure these settings in the `auth -> jwt` section:

| Setting | Requirement | Description |
|---------|-------------|-------------|
| `publicKeyUrl` | Required | URL to the Ego API endpoint that is used to retrieve a user's public key . Specify the host and port where the endpoint is hosted.  The endpoint to use is `/oauth/token/public_key`.  See the example below for guidance. |

For example:

```yaml
auth:
  jwt:
    publicKeyUrl: "https://<host>:<port>/oauth/token/public_key"
```