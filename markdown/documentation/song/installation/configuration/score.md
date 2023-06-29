---
title: Score Server Integration
---

Song requires an object storage backend to store data files. A [Score](/documentation/score/) server must be configured for use with Song. Score is compatible with various S3 API compliant backends such as AWS, Azure, and MinIO.

To enable Song's integration with the Score server, you need to specify the Score storage backend in your Song server configuration. Once your Score server is set up, you can establish the connection with your Song configuration.


## Configuration Example 

To configure Score, modify the `application.yml` file located at `song-server-[version]/conf/application.yml` as follows:

- **score:** The `score` section is required and contains the connection details to the score-server. Input the score-server URL and an API Key that has both upload and download permission scopes. An API Key is owned by a user and has an expiry, so will need to be updated regularly.


- **score-client-credentials:** The `score-client-credentials` profile is optional, and contains the connection details to the score-server to be authentication though a JWT instead of an API Key. If this profile is enabled, the default configurations defined in `score` will be overwritten. 

```yaml
score:
  accessToken: "ad83ebde-a55c-11e7-abc4-cec278b6b50a "   
  url: "http://localhost:8087" 
...
spring:
  profiles:
    active: "score-client-cred"
...
spring.profiles: score-client-cred
score:
  url: "http://localhost:8087"
  clientCredentials:
    id: <client id from Ego>
    secret: <client secret from Ego>
    tokenUrl: http://ego-api:8080/oauth/token
    systemScope: "score.WRITE" # Storage scope needs to include both READ and WRITE
```
