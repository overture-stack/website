---
title: Using the API
---


# Retrieve Your Ego JWT
# Retrieving Your Ego JWT

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


# Generating an API Key


# Provide the API Key

For instructions on how to ???


# Retrieving Your Ego JWT

# Generating Your API Key

# Authenticating with the API

# Supported Operations