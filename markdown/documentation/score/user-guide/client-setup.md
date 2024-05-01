---
title: Setting Up the Score Client
---

The Score command-line client is a tool designed to enable user interactions with Score endpoints. This guide provides step-by-step instructions for installing the client. Additional sections will describe how to use the client for various tasks.

## Installing the Score-Client

To run the score-client using a Docker image, you need to provide specific environment variables including the `STORAGE_URL`, the `METADATA_URL`, and your `ACCESSTOKEN`.

**Running the score-client docker image:**

Supply the required environment variables as shown in the command below:

```bash
docker run -d -it \
--name score-client \
-e CLIENT_ACCESS_TOKEN=${token} \
-e STORAGE_URL=http://<INSERT-URL> \
-e METADATA_URL=http://<INSERT-URL> \
--network="host" \
--mount type=bind,source="$(pwd)",target=/output \
ghcr.io/overture-stack/score:latest
```

Replace `<INSERT-URL>` with the appropriate URLs for your storage and metadata services, and `${token}` with your access token.
