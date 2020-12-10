---
title: Usage
---

# Application Authentication

Applications can be added to EGO with a Client ID/Secret pair. The ID and Secret will be used to authenticate with EGO to retrieve an application JWT.

An [application JWT](/documentation/ego/getting-started/tokens#application-jwt) will not have roles but will list the groups the application is associated with, in addition to the permissions an application is granted as scopes. Other applications are responsible for controlling authorization for applications based on the content of their signed JWT.

## Register an Application
To register an application with EGO make a request as documented at /swagger-ui.html#!/application-controller/createUsingPOST

## UI 

## API

This request must have an ADMIN role JWT in the Authorization field.

Keep the client ID/Secret pair in a secret place, for use by the application only. Do not make these values visible in the browser or in your code base.

## Authenticate
Authentication uses the oauth client_credentials flow. This can be handled out-of-the-box by many REST clients (ex. Insomnia).

The Authenticate request details, to recreate manually:

- POST request to https://{{ego-domain}}/oauth/token
- Body content, content-type: `x-www-form-urlencoded`
- `grant_type:client_credentials`
- `client_id:{{application's client id}}`
- `client_secret:{{application's client secret}}`

```curl 
  http://localhost:8081/oauth/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_creden
```