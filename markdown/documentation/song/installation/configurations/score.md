---
title: Score Integration
---

Song requires an object storage backend to store data files. A [Score](/documentation/score/) server must be configured for use with Song. Score is compatible with various S3 API compliant backends such as AWS, Azure, and MinIO.

To enable Song's integration with the Score server, you need to specify the Score storage backend in your Song server configuration. Once your Score server is set up, you can establish the connection with your Song configuration.

To configure Score, modify your `.env` as follows:

```bash
# Score Server Configuration
SCORE_ACCESS_TOKEN=ad83ebde-a55c-11e7-abc4-cec278b6b50a
SCORE_URL=http://localhost:8087
```
The `score` section shown above is required and contains the connection details to the score-server. Input your score-server URL and an API Key that has both upload and download permission scopes. An API Key is owned by a user and has an expiry, so will need to be updated regularly.

### Score Client Credentials

The Score client credentials are optional and provide a way to authenticate through a JWT instead of an API Key. If these configurations are enabled, the default settings defined under `score` will be overwritten.

```bash
# Score Client Credentials
SPRING_PROFILES_ACTIVE=score-client-cred
SCORE_CLIENTCREDENTIALS_ID={{client-id-from-Ego}}
SCORE_CLIENTCREDENTIALS_SECRET={{client-secret-from-Ego}}
SCORE_CLIENTCREDENTIALS_TOKENURL=http://ego-api:8080/oauth/token
SCORE_CLIENTCREDENTIALS_SYSTEMSCOPE=score.WRITE
```

Make sure to replace placeholders like `{{client-id-from-Ego}}` or `{{client-secret-from-Ego}}` with your actual values.