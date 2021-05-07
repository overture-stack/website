---
title: Configuring Authentication 
---

# Application Authorization 

For an application to interact with song, authentication and authorization must be provided.  You can do this by using an authorized user's API Key with the correct permissions, or enabling application-to-application authorization following the OAuth 2.0 protocol.

Scope requirements are defined in the `auth` section, and the `secure` and `jwt` profiles are available to manage the desired configuration. 

# Configuration Example 
Using the configurations file at `song-server-[version]/conf/application.yml`, set the correct values: 

```yaml
spring:
  profiles:
    active: "prod,jwt,secure,score-client-credentials"
...
auth:
  server:
    url: "http://<host>:<port>/check_token/"
    clientId: <client id from Ego>
    clientSecret: <client secret from ego>
    tokenName: "token"
    enableStrictSSL: false
    enableHttpLogging: false
    scope:     
      study:
        prefix: "song."
        suffix: ".WRITE"
      system: "song.WRITE"
...
spring.profiles: jwt
spring:
  profiles:
    include: [secure]
auth:
  jwt:
    public-key-url: http://localhost:8084/oauth/token/public_key
```
