---
title: Authentication
---

# Application Authorization

To interact with Song, an application must provide authentication and authorization. This can be done by using an API Key from an authorized user with the appropriate permissions or by enabling application-to-application authorization following the OAuth 2.0 protocol.

# Configuration Example

To configure authentication, modify the `application.yml` file located at `song-server-[version]/conf/application.yml` with the following values:

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

Ensure that you replace `<host>`, `<port>`, `<client id from Ego>`, and `<client secret from ego>`with the appropriate values for your configuration.

Scope requirements are defined in the `auth` section, and the `secure` and `jwt` profiles are available to manage the desired configuration.



