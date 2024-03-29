---
title: Song Server Integration
---

Song is a companion application to Score, and is required for any file uploading or downloading. For detailed instructions and best practices for setting up and configuring the Song server refer to our [Song Documentation](/documentation/song/).

# Environment Variable Setup

Once your Song server is operational, the next step is to configure Score to connect with it. This connection is established by modifying your `.env.score` file. The required changes include specifying the metadata URL and SSL settings as illustrated below:

```bash
# ============================
# Song Configruation Variables
# ============================

# Specify the Song server details
METADATA_URL={{metadata_url}} # Example: http://localhost:8089/
METADATA_SSL_ENABLED={{ssl_enabled}} # Options: 'true' or 'false'
```

The table below summarizes the variables you need to set:

| Setting               | Requirement | Description                                                                                          |
|-----------------------|-------------|------------------------------------------------------------------------------------------------------|
| `METADATA_URL`        | Required    | 	The URL of the Song server API. Score will use this API for all communications with the Song server. |
| `METADATA_SSL_ENABLED`| Optional    | Indicates whether SSL encryption is used for secure communication with Song. Set to `true` for SSL, or `false` if not using SSL.|


