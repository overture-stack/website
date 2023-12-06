---
title: Setting Up the Score Client
---

The Score command-line client tool facilitates user interactions with Score endpoints. The following instructions guide users through installing the client. Subsequent sections will cover how to use the client to perform various tasks. 

# Installing the Score-Client

**Running the score-client docker image**

You must supply environment variables for the STORAGE_URL, the METADATA_URL and your ACCESSTOKEN.

```bash
docker run -d -it \
--name score-client \
-e ACCESSTOKEN=${token} \
-e STORAGE_URL=http://<INSERT-URL>/score-api \
-e METADATA_URL=http://<INSERT-URL>/song-api \
--network="host" \
--mount type=bind,source="$(pwd)",target=/output \
ghcr.io/overture-stack/score:latest
```
