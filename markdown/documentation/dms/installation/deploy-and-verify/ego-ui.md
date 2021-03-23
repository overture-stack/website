---
title: Check Ego UI is Running
---

# Check Your Providers' Redirect URIs

Before logging into the Ego UI, you may wish to check again that all your Identity Providers have the correctd redirect URI configured in their developer console's OAUTH 2.0 settings.  This was configured earlier when [setting up your secrets](../configuration/prereq/secrets), but double-checking is a good practice.

The redirect URI you must authorize can be found in that provider's Ego configuration section in the _**~/.dms/config.yaml**_ file.  Look for the **preEstablishedRedirectUri**.  In the example below, the
**preEstablishedRedirectUri** for Google is "_https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/google_"

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

# Log Into Ego UI

1. Next, login using one of the providers you setup in your configuration (e.g. Google):

![Entity](../../assets/ego-login.png 'Ego Login')

2. Once logged in, the first user is automatically created and treated as an administrator.


3. From the left navigation, click **Groups** and verify that the **dms-admin** group has been automatically created and is assigned these permissions: **DMS.WRITE**, **SONG.WRITE**, **SCORE.WRITE**

![Entity](../../assets/ego-dms-admin.png 'Ego DMS Admin')

4. From the left navigation, click **Users** and verify that your user was created with **USER TYPE** = "_ADMIN_".


5. Click **Edit** on your profile, then under **Groups** use the **Add** button to add yourself to the **dms-admin** group.  This ensures your user can perform all basic actions required for a DMS administrator.


6. Click **Save**.  Here is an example of the resulting profile changes:

![Entity](../../assets/ego-first-user.png 'Ego First User')