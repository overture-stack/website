---
title: Post-Deployment Verification & Configuration
---

After successfully [deploying all services to your cluster](../deploy), you must perform some post-deployment verification and configuration tasks to make sure the DMS platform is up and running healthily.

1. [Check Docker services are running](#check-docker-services-are-running)
2. [Check Ego API is running](#check-ego-api-is-running)
3. [Check Ego UI is running](#check-ego-ui-is-running)
4. [Check Song API is running](#check-song-api-is-running)
5. [Check Maestro API is running](#check-maestro-api-is-running)
6. [Check Elasticsearch is running](#check-elasticsearch-is-running)
7. [Add project to Arranger UI](#add-project-to-arranger-ui)
8. [Check Data Portal is running](#check-data-portal-is-running)

The following sections below describe these tasks in detail.

# Check Docker Services are Running

Although the Installer script indicates the deployment completed successfully, as a sanity check, make sure all Overture services have replicas running using this command:

```shell
$ docker service ls
```

All services should display with replicas indicating `**1/1**`:

![Entity](../../assets/docker-check-services.png 'Docker Check Services')

The specific services you must check for are:

| Service / Container Name | Description |
| --------------------| ------------|
| arranger-ui         | Arranger administrative UI |
| arranger-server     | Arranger backend server |
| dms-ui              | DMS data portal |
| ego-api             | Ego API |
| ego-db              | Ego PostgreSQL database |
| ego-ui              | Ego administrative UI |
| elasticsearch       | Elasticsearch |
| gateway             | DMS gateway / ingress controller |
| maestro             | Maestro indexing service |
| minio-api           | Only used if MinIo chosen as object storage service |
| score-api           | Score API |
| song-api            | Song API |
| song-db             | Song PostgreSQL database |

# Check Ego API is Running

Check that the Ego API is running by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ego-api/swagger-ui.html |
| Server  | https://`<myDomain>`/ego-api/swagger-ui.html |

Where:
- `<port>` is the port on which you will deploy the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

If running, the Swagger API will be accessible via your browser in graphical format:

![Entity](../../assets/ego-swagger.png 'Ego Swagger')

# Check Ego UI is Running

## Check Your Providers' Redirect URIs

Before logging into the Ego UI, you may wish to check again that all your identity providers have the correctd **redirect URI** configured in their developer console's OAUTH 2.0 settings.  This was configured earlier when [setting up your secrets](../configuration/prereq/secrets), but double-checking is a good practice.

The redirect URI you must authorize can be found in that provider's Ego configuration section in the `~/.dms/config.yaml` file.  Look for the `preEstablishedRedirectUri`.  In the example below, the
`preEstablishedRedirectUri` for Google is `https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/google`

```shell
ego:
  api:
    tokenDurationDays: 30
    jwt:
      user:
        durationMs: 10800000
      app:
        durationMs: 10800000
    refreshTokenDurationMS: 43200000
    hostPort: 9000
    sso:
      google:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/google"
```

<Warning>**NOTE:** When entering the domain in LinkedIn for server mode, you **must** append the port `:443` to the end of the domain.  The true redirect URI sent by the DMS actually contains `:443` suffixed to the domain.  While other identity providers ignore or drop this suffix, LinkedIn requires the redirect URI to match exactly, hence `:443` must be explicitly entered.</Warning>

## Login and Check Ego UI

1. Next, log in using one of the providers you setup in your configuration (e.g. Google):

![Entity](../../assets/ego-login.png 'Ego Login')

2. Once logged in, the first user is automatically created and treated as an administrator.


3. From the left navigation, click **Groups** and verify that the `dms-admin` group has been automatically created and is assigned these permissions: `DMS.WRITE`, `SONG.WRITE`, `SCORE.WRITE`

![Entity](../../assets/ego-dms-admin2.png 'Ego DMS Admin')

4. From the left navigation, click **Users** and verify that your user was created with **USER TYPE** = `ADMIN`.


5. Click **Edit** on your profile, then under **Groups** use the **Add** button to add yourself to the `dms-admin` group.  This ensures your user can perform all basic actions required for a DMS administrator.


6. Click **Save**.  Here is an example of the resulting profile changes:

![Entity](../../assets/ego-first-user.png 'Ego First User')

# Check Song API is Running

Check that the Song API is running by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/song-api/swagger-ui.html |
| Server  | https://`<myDomain>`/song-api/swagger-ui.html |

Where:
- `<port>` is the port on which you will deploy the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

If running, the Swagger API will be accessible via your browser in graphical format:

![Entity](../../assets/song-swagger.png 'Song Swagger')