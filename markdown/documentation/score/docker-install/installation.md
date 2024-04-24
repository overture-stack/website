---
title: Running Score via Docker
---

## Running Docker

After configuring your environment variables, initiate the Score container using `docker run` and mount the `.env.score file`:

**For Linux (Recommended)**

```bash
docker run --name score --env-file .env.score --network=host -d -p 8087:8087  ghcr.io/overture-stack/score-server:latest
```

**For Mac and Windows**

```bash
docker run --name score --env-file .env.score -d -p 8087:8087  ghcr.io/overture-stack/score-server:latest
```

<Note title="Running with Keycloak">If you are running Score with Keycloak you will need to use the `docker run` command with the following container `ghcr.io/overture-stack/score-server:47f006ce`</Note>

## Accessing Score

Score should now be running with the swagger-ui accessible from: `http://localhost:8087/swagger-ui.html#/`

To facilitate interactions between your local machine and the Score server we recommend [setting up the Score Client](/documentation/score/user-guide/client-setup/).
