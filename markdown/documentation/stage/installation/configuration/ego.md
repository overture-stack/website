---
title: Integrating Ego
---

Before integrating Ego with Stage make sure you have Ego running and configured with an identity provider. For instructions on setting up and configuring Ego see our <a href="https://overture.bio/documentation/ego" target="_blank" rel="noopener noreferrer">Ego documentation here</a>.

To add Ego to the DMS UI:

1. **Add Stage to Ego:** From the Ego Admin UI's left-hand panel select **Applications**. From the Applications screen on the right-hand side click **Create**.

![Entity](../../assets/dmsappcreate.jpg 'Ego-UI creating a new application')

Insert the following information:

| Field              | Value                                       |
| ------------------ | ------------------------------------------- |
| Name               | Stage                                       |
| Status             | Approved                                    |
| Client             | Stage                                       |
| Client Secret      | Stage                                       |
| Redirect URI       | http://localhost:3000/api/auth/callback/ego |
| Error Redirect URI | http://localhost:3000/error                 |

You can leave the Groups and Users fields blank. Click the **save** button on the top right of the panel.

![Entity](../../assets/dmsuiappcreatepopulated.jpg 'New Stage application values')

4.  **Create an environment variable file:** Within the cloned Stage repository locate your `.env.dmsui` file, if you have not created one yet duplicate the `env.schema` file and rename it to `.env.dmsui`.

5.  **Update environment variables:**Variables within this file are already preconfigured for a local setup:

```ENV
######### Ego

# Auth provider
NEXT_PUBLIC_AUTH_PROVIDER=ego
ACCESSTOKEN_ENCRYPTION_SECRET=super_secret
SESSION_ENCRYPTION_SECRET=this_is_a_super_secret_secret

# Base url for Ego API
NEXT_PUBLIC_EGO_API_ROOT=http://localhost:8081

# Ego registered app id
NEXT_PUBLIC_EGO_CLIENT_ID=Stage
```

However, you will need to update the `NEXT_PUBLIC_SSO_PROVIDERS` variable in line with the SSO provider(s) you want available:

```ENV
NEXT_PUBLIC_SSO_PROVIDERS=GOOGLE,GITHUB,ORCID,LINK

######### Optional features/functionalities

NEXT_PUBLIC_DEBUG=true

```

<Warning>**Note:** you will need to set up a client ID and client Secret through each provider. For more information see our documentation on [setting up identity provider secrets](https://www.overture.bio/documentation/ego/installation/prereq/#setup-identity-provider-secrets)</Warning>

6. **Restart Stage:** From the command line exit out (Ctrl/Cmd + C), and re-run Stage `npm run dev`.

Once compiled you should be able to access Ego by clicking login on the upper right corner of Stage.
