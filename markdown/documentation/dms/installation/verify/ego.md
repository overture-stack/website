---
title: Ego
---

# Check the Ego API is running

Verify the Ego API is active by accessing:
- **Local:** http://localhost:`<port>`/ego-api/swagger-ui.html
- **Server** https://`<myDomain>`/ego-api/swagger-ui.html

Upon success, your browser will show the Swagger API in a graphical format:

![Entity](../../assets/ego-swagger.png 'Ego Swagger')

# Check and configure the Ego UI

Before accessing the Ego UI, ensure your identity providers have the correct **redirect URI** set in their OAUTH 2.0 settings. Confirm the settings even if they were configured when [establishing your secrets](../configuration/prereq/secrets).

Find the authorized redirect URI in the provider's Ego configuration segment within the `~/.dms/config.yaml` file under `preEstablishedRedirectUri`. For instance:

```bash
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

<Warning>**NOTE:** When inputting the domain in LinkedIn for server mode, ensure you append the port `:443` to the domain end. This is vital because the DMS includes `:443` after the domain. While other providers might omit this suffix, LinkedIn mandates an exact match; thus, the `:443` must be specified.</Warning>

# Login and configure the Ego UI

1. Log in using a provider from your configuration (e.g., Google):
- **Local:** http://localhost:`<port>`/ego-ui 
- **Server** https://`<myDomain>`/ego-ui

![Entity](../../assets/ego-login.png 'Ego Login')

2. After logging in, the initial user is auto-generated and marked as an administrator.

<Warning>**NOTE:** Successive users logging into Ego UI will **NOT** receive automatic administrator status. This is for security reasons. The initial user (first admin) should allocate the `Admin` role to other necessary users.</Warning>

3. In the left navigation, select **Groups**. Verify the creation of the `dms-admin` group and its assigned permissions: `DMS.WRITE`, `SONG.WRITE`, `SCORE.WRITE`.

![Entity](../../assets/ego-dms-admin2.png 'Ego DMS Admin')

4. Click **Users** in the left navigation to confirm your user creation with **USER TYPE** = `ADMIN`.

5. Click **Edit** on your profile, then under **Groups** use the **Add** button to add yourself to the `dms-admin` group.

![Entity](../../assets/ego-first-user2.png 'Ego First User')

6. Save your changes. 

![Entity](../../assets/ego-first-user2.png 'Ego First User')

7. In the left navigation, click **Applications** and verify that the `dms` application has been created.

8.  Click **Edit** on the `dms` application and in the **ERROR REDIRECT URI** field, enter:
- **Local:** http://localhost:`<port>`/dms-ui/403
- **Server** https://`<myDomain>`:443/dms-ui/403

This ensures that when OAUTH errors occurs, the DMS UI (Data Portal) is routed to the correct error page to display to the end user.

9.  Click **Save**.  Here is an example of the resulting application changes:

![Entity](../../assets/dms-app.png 'DMS App Error Redirect URI')
