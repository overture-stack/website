---
title: Connecting Song to a Score Server
---

Song requires an object storage backend to store data files. A [Score](/documentation/score/) server must be configured for use with Song. Score can interact with any S3 API compatible backend, including AWS, Azure, and MinIO. 

Song server MUST be pointed to a Score storage backend. Once your score server is ready, you will be able to connect it to your song configuration. 

## Configuration Example 
Using the configurations file at `song-server-[version]/conf/application.yml`, set the correct values. 
- **score:** The `score` section is <span style="color:red"> required</span> and contains the connection details to the score-server. Input the score-server URL and an API Key that has both upload and download permission scopes. An API Key is owned  by a user and has an expiry, so will need to be updated regularly.
- **score-client-credentials:** The `score-client-credentials` profile  is <span style="color:blue">optional</span>, and contains the connection details to the score-server to be authentication though JWT instead of API Key. If this profile is enabled, the default configurations defined in `score` will be overwritten. 

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
