---
title: Authentication 
---

# Application Authentication & Authorization

For an application to securely interact with Score, authentication and authorization must be provided.  This ensures unauthorized users cannot access Score's API endpoints.  To gain access to Score services, a user needs a valid API key with the appropriate scopes (permissions). For application-to-application authorization [OAuth 2.0](https://oauth.net/2/) protocol must be followed.

<Warning>Although configuring authentication and authorization is technically optional, it is **highly recommended**, especially for production environments.</Warning>  

All configurations settings are located within the **application.properties** file under the `auth` section heading. 

The **application.properties** file can be found from the `score-server-[version]/conf/application.properties` directory. 

Below is a summary of the configurable profiles followed by some detailed examples and explanations for each:

| Profile | Requirement | Description |
|---------|-------------|-------------|
| secure | Required if using Ego | If the [Overture](https://overture.bio) product [Ego](/documentation/ego) is used as the authentication service for Score, this profile is required.  It enables authentication for requests to the Score API using API keys issued by Ego. |
| jwt | Optional | Optionally, you can use this profile to support both JWT ([JSON Web Tokens](https://jwt.io/)) and API Key authentication for requests to Score. |     

# Secure Profile Example 

If you are using [Ego](/documentation/ego) the `secure` profile is required.  The `secure` profile enables authentication for requests to the Score API using API keys issued by Ego.

To configure authentication and authorization via Ego, in the `score-server-[version]/conf/application.properties` file, make sure the `secure` profile exists and configure the following settings found within the `auth -> server` section:

 Setting | Requirement | Description |
|---------|-------------|-------------|
| `auth.server.url` | Required | URL to the Ego API endpoint that is used to authenticate a user's API key (token). Specify the host and port where the endpoint is hosted.  The endpoint to use is `/oauth/check_token`.  See the example below for guidance. |
| `auth.server.tokenName` | Required | Name used to identify a token.  Typically you should leave this set to the default value, `token`. |
| `auth.server.clientId` | Required | This is the client ID for the Score application as configured in Ego. |
| `auth.server.clientSecret` | Required | This is the client secret for the Score application as configured in Ego. |
| `auth.server.scope.download.system` | Required | Scope (permission) that a user's API key must have to enable system-level downloads from Score. Typically you should leave this set to the default value, `score.READ` |
| `auth.server.scope.download.study.prefixprefix` | Required | Prefix that must come before the Song study name when assigning study-level download scopes (permissions) for Score.  Typically you should leave this set to the default value, `score.` |
| `auth.server.scope.download.study.suffix` | Required | Suffix that must come after the Song study name when assigning study-level download scopes (permissions) for Score.  Typically you should leave this set to the default value, `.READ` |
| `auth.server.scope.upload.system` | Required | Scope (permission) that a user's API key must have to enable system-level uploads to Score. Typically you should leave this set to the default value, `score.READ`. |
| `auth.server.scope.upload.study.prefix` | Required | Prefix that must come before the Song study name when assigning study-level upload scopes (permissions) for Score.  Typically you should leave this set to the default value, `score.` |
| `auth.server.scope.upload.study.suffix` | Required | Suffix that must come after the Song study name when assigning study-level upload scopes (permissions) for Score.  Typically you should leave this set to the default value, `.READ` |

Here is an example of a completed `Secure` profile:

```shell
auth.server.url="https://localhost:8081/oauth/check_token"
auth.server.tokenName="token"
auth.server.clientId="<client ID from Ego>"
auth.server.clientSecret="<client secret from Ego>"
auth.server.scope.download.system="score.READ:"
auth.server.scope.download.study.prefix="score."
auth.server.scope.download.study.suffix=".READ"
auth.server.scope.upload.system="score.WRITE"
auth.server.scope.upload.study.prefix="score."
auth.server.scope.upload.study.suffix=".WRITE"
```

# JWT Profile Example

If you want to support JWT and API Key authentication then the `jwt` profile should be used. JWT authentication cannot be configured as your standalone authentication method as Score requires an API key on intial setup.

To configure JWT authentication, locate the `jwt` profile (within score-server-[version]/conf/application.properties) and configure the relevant settings within the `auth -> jwt` section. Here is a summary of the configuration settings:

| Setting | Requirement | Description |
|---------|-------------|-------------|
| `auth.jwt.publicKeyUrl` | Required | URL to the Ego API endpoint that is used to retrieve a user's public key . Specify the host and port where the endpoint is hosted.  The endpoint to use is `/oauth/token/public_key`.  See the example below for guidance. |

Here is an example of a completed `JWT` profile:

```shell
auth.jwt.publicKeyUrl="https://<host>:<port>/oauth/token/public_key"
```