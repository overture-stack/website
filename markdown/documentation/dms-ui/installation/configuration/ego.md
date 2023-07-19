---
title: Integrating Ego
---

Before integrating Ego with the DMS-UI make sure you have Ego running and configured with an identity provider. For instructions on setting up and configuring Ego see our [Ego documentation here](https://overture.bio/documentation/ego).

To add Ego to the DMS UI:

1. On the left hand panel select Applications. From the Applications screen on the right hand side click create. 

![Entity](../../assets/dmsappcreate.jpg 'Ego-UI creating a new application')

2. To set up Ego with the DMS-UI locally insert the following information:

|Field|Value|
|--|--|
|Name|DMS-UI|
|Status|Approved|
|Client|dms-ui|
|Client Secret|dms-ui|
|Redirect URI|http://localhost:3000/logged-in|
|Error Redirect URI|http://localhost:3000/error|

You can leave the Groups and Users fields blank. Click the save button on the top right of the panel.

![Entity](../../assets/dmsuiappcreatefilled.jpg 'New DMS-UI application values')

4. Within the DMS-UI locate your `.env.local` file, if you have not created one yet duplicate the `env.schema` file and rename it to `.env.local`.


5. Variables within this file are already preconfigured for a local setup:

```Shell
######### Ego
# Base url for Ego API
NEXT_PUBLIC_EGO_API_ROOT=http://localhost:8081/
# Ego registered app id
NEXT_PUBLIC_EGO_CLIENT_ID=dms-ui
```

However, you will need to update the `NEXT_PUBLIC_SSO_PROVIDERS` variable in line with the SSO provider(s) you want available: 

```Shell
######### DMS
NEXT_PUBLIC_SSO_PROVIDERS=GOOGLE,GITHUB,ORCID,LINK
```

<Warning>**Note:** you will need to set up a client ID and client Secret through each provider. For more information see our documentation on [setting up identity provider secrets](https://www.overture.bio/documentation/ego/installation/prereq/#setup-identity-provider-secrets)</Warning>

6. Restart the DMS-UI by exiting out and re-running `npm run dev`

Once compiled you should be able to access Ego by clicking login on the upper right corner of the DMS-UI.