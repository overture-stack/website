---
title: Installing Score Via Docker
---

This page will walk you through installing Score using Docker. Ensure you've completed all the applicable prerequisite steps before starting the installation.
# Configuration Overview

Before you proceed with the Score installation, be aware that there are several configurations for a Score server:

| Component          | Description                                                | Requirement |
|--------------------|------------------------------------------------------------|-------------|
| [Run Profiles](/documentation/score/installation/configuration/profiles)       | Define how your Score server operates.                     | Required    |
| [Song](/documentation/score/installation/configuration/song)              | Connect Score with your Song server.                       | Required    |
| [Object Storage](/documentation/score/installation/configuration/object-storage)     | Integrate your object storage provider with Score.         | Required    |
| [HashiCorp's Vault](/documentation/score/installation/configuration/bootstrap)  | Configure HashiCorp Vault to manage and protect your keys. | Optional    |

For detailed information on [configuration](/documentation/score/installation/configuration/) options and guidelines, including setting up your environment variables file, see our section on Configurations section.
# Installation Steps

1. **Setting up your environment variables:**

Based on your configuration, create an `.env.score` file with the necessary environment variables. Replace placeholders like `{{ego-host-url}}` with your actual values. Here's an example of the `.env.score` file:

```bash
```

2. **Run Docker:**

Start the Score container using the `docker run` command, specifying the mounted `.env.score` file:

**For Linux (Recommended)**

```bash
docker run --env-file .env --network=host -d -p 8080:8080 ghcr.io/overture-stack/score-server:latest
```

**For Mac and Windows**

```bash
docker run --env-file .env -p 8080:8080 ghcr.io/overture-stack/score-server:latest
```

3. **Accessing Score:**

Score should now be running and accessible at `http://localhost:8080`
