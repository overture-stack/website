---
title: Introduction
---

Ego is an open-source application that handles user management through [OAuth 2.0](https://oauth.net/2/) and [OpenID Connect](https://auth0.com/docs/protocols/openid-connect-protocol) compliant methods. It provides authentication and authorization for users of your application, leveraging well-known Single-Sign-On identity providers like ORCiD or Google. Ego utilizes stateless authorization using [JSON Web Tokens](https://jwt.io/introduction) (JWT), allowing it to scale effectively for large user bases.

# Features

## Authentication

Ego enables users to login and authenticate themselves using the secure OAuth 2.0 protocol. Instead of managing usernames and passwords, Ego relies on popular identity providers for this purpose. Supported integrations include:

- Google
- GitHub
- LinkedIn
- [ORCiD](https://orcid.org/) (a well-established research identity passport)

Additionally, Ego uses the OpenID Connect (OIDC) layer on top of OAuth 2.0 to verify the identity of end users logging in from various providers and to retrieve basic user profile information such as first and last names, contact email address, etc.

## Authorization

Once users are authenticated, they are granted [tokens](/documentation/ego#tokens) that encode permissions for accessing resources. Ego supports the following types of authorization tokens:

- **Application JWTs:** For authorizing individual applications.
- **User JWTs:** For authorizing individual users.
- **User API Key:** For users to interact with applications registered in Ego using the level of authority defined by the key.

Secured applications can create and manage authorization tokens and use those tokens to interact with third-party applications registered in Ego. For detailed information on how tokens are used in Ego, refer to the [Tokens](/documentation/ego#tokens) section below.

Permissions granted by Ego can be assigned to applications, groups, or directly to users. To understand how these entities work together in Ego, please see the [How Ego Works](/documentation/ego#how-ego-works) section.

## Ego API

Ego provides an API based on the [OpenAPI specification](https://swagger.io/specification/) (formerly known as the Swagger specification), which allows users to interact with Ego's core functionality manually or programmatically. The Swagger UI is ideal for exploration and simple use cases. It will contain detailed descriptions of all the available endpoints, expected inputs, and error responses. Users and administrators can also interact with the API by issuing cURL commands via their terminal. For detailed instructions on API use, refer to the documentation [here](API_documentation_link).

## Ego UI

Ego can be paired with an administrative UI (Ego UI) to provide a more easily accessible option for user management tasks. To learn more about using Ego's admin UI, please refer to our documentation on [using Ego's admin UI](admin_UI_documentation_link).

![Entity](/assets/users.png 'Users')

# How It Works

Ego associates user or application identities with the permissions they have been granted, either directly or through a group. Permissions are encoded in time-sensitive authorization JWTs. The default expiry period of the JWT is configurable in Ego's setup.

Downstream services, such as a research data portal that needs to determine allowed actions for a user, make REST calls to Ego to verify the user and the authority represented by the supplied JWT. Ego can also accept a JWT and make decisions based on the encoded information to determine if a user or application can proceed.

The diagram below illustrates the relationship between the entities that work together to provide authorization and permission management in Ego:

![Entity Diagram](assets/how-it-works.png 'Ego Entity Diagram')

## Key Terms

| Term  | Description|
|-|-|
| User | Any individual registered in Ego that needs to be authorize for Ego-aware applications. |
| Admin | Users authorized to register other users, groups, applications & policies through Ego’s REST endpoints. |
| Group | A list of users with the same defined set of permissions. Admins can create new groups and add users to them. |
| Policy | A policy is a scope or context for which an application may want to grant `READ/WRITE/DENY` permissions to a particular user or group. |
| Scope |  |
| Access Level |  |
| Permission | A user or group can be given `READ/WRITE/DENY` permissions for any particular policy. |
| Application | An application is a third party service that registers itself with EGO so that EGO can authorize users on its behalf. Upon registration, the service must provide secure credentials in the form of a `Client ID` and `Client Secret` pair. |
| Application JWT |  A basic JWT token that encodes a `Client ID` and `Client Secret`, and authorizes an application to interact with Ego. |
| User JWT | A `Bearer` token which encodes the users information. |
| User API Key | A random token generated to authorize a user for a specific scope, in the context of an application. Note that a user can have multiple active API keys, as long as they contain different scopes. |     

## Ego Tokens
 
User authentication tokens issued by Ego are signed [JSON Web Tokens ](http://jwt.io)(JWT). JWTs are an industry-standard method ([RFC 7519](https://tools.ietf.org/rfc/rfc7519.txt)) for securely representing claims between parties without the need for stateful storage. In Ego, JWTs are used as `Bearer` tokens and passed in the Authorization header of web requests. Authentication tokens establish the identity of an application or user and contain information about the request.

JWT data reflects the time of token issuance. Ego digitally signs the token with a publicly available signing key that applications must use to verify the authentication token. Most of Ego's REST endpoints require an Ego authentication token in the Authorization header to validate the identity before performing operations on data.

## Ego Application JWTs

Application JWTs contain information about an application's name, role (user/administrator), status, client credentials, and permissions (represented as scopes). You can identify an application token through the "application" block. Here's an example of an application token issued by Ego:

```json
{
  "iat": 1586974587,
  "exp": 1586985387,
  "sub": "593b93d4-30a0-4c0a-be9b-45d09d196a39",
  "iss": "ego",
  "jti": "1db416b6-4dee-4d1c-9c80-0798ad938694",
  "aud": [],
  "context": {
    "application": {
      "name": "Song",
      "clientId": "song",
      "redirectUri": "https://song-example-redirect.com",
      "errorRedirectUri": "https://song-example-redirect.com/404",
      "description": "This is an integration between Ego and Song.",
      "status": "APPROVED",
      "type": "ADMIN"
    },
    "groups": ["69b77768-2016-4f04-802e-37334d823fd1"],
    "scope": ["*.DENY"]
  }
}
```

## Ego User JWT

User JWTs contain information about the user's name, role (user/administrator), status, permissions (represented as scopes), and groups associated with their Ego account. You can identify a user token through the "user" block. Here's an example of a user token issued by Ego:

```json
{
 "iat": 1617732676,
 "exp": 1617743476,
 "sub": "25c24836-a924-4e47-b35d-5bec9690ff56",
 "iss": "ego",
 "jti": "016453d2-998e-4662-9b12-6baa208c34f8",
 "context": {
  "scope": [
   "SCORE.READ",
   "SONG.WRITE",
   "SONG.READ",
   "DMS.WRITE",
   "SCORE.WRITE",
   "DMS.READ"
  ],
  "user": {
   "email": "barry.allen@gmail.com",
   "status": "APPROVED",
   "firstName": "barry",
   "lastName": "allen",
   "createdAt": 1617152136269,
   "lastLogin": 1617732676272,
   "preferredLanguage": null,
   "providerType": "GOOGLE",
   "providerSubjectId": "908761298318094571857",
   "type": "ADMIN",
   "groups": [
    "d1b669cc-fd52-46d7-937b-0ff8be76e3d2"
   ]
  }
 },
 "aud": [
  "dms"
 ]
}
```

## Ego assigned API Keys

An API Key is a unique secret password generated by Ego and associated with a specific user, their permissions, and a set of allowed applications.

For example, a user can configure a client program, such as [Song's command-line client](/documentation/song) command line client, with an API Key provided by Ego. The client program can then operate with the level of authority associated with the API Key.

