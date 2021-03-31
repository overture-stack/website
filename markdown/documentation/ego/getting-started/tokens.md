---
title: Tokens
draft: true
---

User Authentication tokens are signed [JSON Web Tokens ](http://jwt.io)(JWT) issued when a user successfully logs into Ego using their [Login Provider](/documentation/ego/getting-started/login-providers) credentials.  JWTs are an open, industry standard [RFC 7519](https://tools.ietf.org/rfc/rfc7519.txt) method for statelessly representing claims securely between two parties, and are intended to be used as a Bearer token, passed as the Authorization header as part of any web request. Authentication establishes the identity, or _who_, a user is and as such authentication tokens are used to verify an application or user’s identity and contain information about the entity. 

JWT data is current as of the time the token is issued, and the token is digitally signed by Ego with a publicly available signing key that applications have to use to verify that an authentication token is valid. Most of Ego’s REST endpoints require an Ego authentication token to be provided in the authorization header, in order to validate the identity before operating on data.

## Application JWT

Application JWTs contain information about an applications's name, role (user/administrator), status, client credentials, and permissions (materialized as scopes) associated to an application. .  Ypu can tell it is an application token through the `"application"` block that is defined.  An example of a user token issues by Ego is shown below:

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
      "description": "This is an integration between Ego and Song.",
      "status": "APPROVED",
      "type": "ADMIN"
    },
    "groups": ["69b77768-2016-4f04-802e-37334d823fd1"],
    "scope": ["*.DENY"],
  }
}
```

## User JWT
User JWTs contain information about the user's name, role (user/administrator), status, and any permissions (materialized as scopes), and groups associated with their Ego account.  Ypu can tell it is a user token through the `"user"` block that is defined.  An example of a user token issues by Ego is shown below:

```json
{
  "iat": 1566833116,
  "exp": 1566919516,
  "sub": "2d157929-89e0-426d-8711-4abeccc57252",
  "iss": "ego",
  "jti": "e0e97f8b-559f-4487-975d-be255535cc9e",
  "context": {
    "scope": [
      "CLINICAL_DATA.WRITE",
      "Genomic_Data.READ",
      "AWS_Cloud_Compute.DENY"
    ],
    "user": {
      "name": "rose@example.com",
      "email": "rose@example.com",
      "status": "APPROVED",
      "firstName": "Rose",
      "lastName": "Example",
      "createdAt": 1562262377367,
      "lastLogin": 1566833116623,
      "preferredLanguage": "ENGLISH",
      "type": "ADMIN",
      "groups": ["69b77768-2016-4f04-802e-37334d823fd1"]
    }
  }
}
```

## User API Key 
In addition to providing a user JWT, Ego can also issue a user-based API Key which can be used to verify a user’s permissions to execute on a desired scope.

API Keys are a random uuid, issued be ego to a single users, so that they can interact with applications registered in Ego with a chosen level of authority. Each API Key is a unique secret password that is associated with a specific user, permissions, and optionally, an allowed set of applications.

API Keys automatically expire and they can be revoked if the user suspects that they have been compromised. Typically, the user will configure a client program (such as sing, the client program used with Song,with their secret token, and the program will then operate with the associated level of authority.  

