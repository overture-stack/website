---
title: Song Server Integration
---

After setting up your Song server, you can configure Score to connect to it. To link Score with your Song server, modify your `.env.score` file as follows:

```bash
# Prod profile configuration
SPRING_PROFILES_ACTIVE=prod

METADATA_URL="{{metadata_url}}" # e.g., http://localhost:8089/
METADATA_SSL_ENABLED="{{ssl_enabled}}" # Either 'true' or 'false'
```

The table below summarizes the variables you need to set:

| Setting               | Requirement | Description                                                                                          |
|-----------------------|-------------|------------------------------------------------------------------------------------------------------|
| `METADATA_URL`        | Required    | URL to the Song server API you have set up. When Score communicates with Song, it will make requests via this API. |
| `METADATA_SSL_ENABLED`| Optional    | Set to `true` if you're using SSL encryption to securely communicate with Song. If not using SSL, set it to `false`. |


