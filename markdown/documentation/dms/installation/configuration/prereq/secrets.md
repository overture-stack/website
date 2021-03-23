---
title: Setup Identity Provider Secrets
---

The Overture DMS supports the use of [OAUTH 2.0](https://oauth.net/2/) identity providers for authentication via the [Ego service](../../../../../ego).  To properly use the identity providers with Ego, OAUTH credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

Each identity provider has a different process for setting up their client secrets, detailed below.

If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).

# Google

For full details on setting up OAUTH 2.0 for an application to work with Google, [see here](https://support.google.com/cloud/answer/6158849?hl=en).

However, specifically for the DMS setup, see the summary steps below for acquiring a Google client ID and secret:

1. Setup an account with [Google Developer Console](https://console.developers.google.com/), if you don't already have one.  If you are an individual working solo with the DMS platform, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.


2. Log into Google Developer Console.


3. Go to **Dashboard** and select the existing project where you want your application to exist, or create a new one:

![Entity](../../../assets/google-dashboard.png 'Google Developer Dashboard')

![Entity](../../../assets/google-new-project.png 'Google New Project')

4. Go to the **OAuth consent screen** to register your application with your project.  Only one app can be registered per project:


5. Select the **User Type**:

| User Type  | Description |
| -----------| ------------|
| Internal   | If you are part of a Google Workspace, then this setting limits the app to only users within your workspace. |
| External   | The app will be available to any test user that has a Google account.  The app starts in testing mode and is only available to users you add to the list of test users.  Once testing is complete, you can verify and publish the app to production. |

<Warning>**NOTE:** Typically, **External** is the recommended configuration, especially if you intend for other external users to access and use the DMS.</Warning>


6. Click **Create**:

![Entity](../../../assets/google-create-app.png 'Google Create App')

7. You will need to fill in a series of other sections.  **Under App Information**, set the following:

| Field               | Description |
| --------------------| ------------|
| App name            | Name for the app requiring consent.  Typically just set this to something simple such as, "_DMS_". |
| User support e-mail | For users to contact you with questions about their consent. |

8. If you plan to deploy DMS in server mode (**NOT** local), then under **Authorized Domains**, add the top-most level of the [domain that you will be configuring](../domain) in the DMS Gateway (e.g. "_cancercollaboratory.org_").  Then under **Developer Contact Information**, enter an e-mail address for Google to notify you of any changes to your project:

![Entity](../../../assets/google-authorized-domain.png 'Google Authorized Domain')

9. Go to **Credentials** to setup your client ID and secret.  Click **Create Credentials** and select **OAuth client ID**:

![Entity](../../../assets/google-create-creds.png 'Google Create Credentials')

10. Enter the following:

| Field               | Description |
| --------------------| ------------|
| Application type    | Set to "_Web application_" |
| Name                | Enter a name for the client, e.g. "_DMS client_" |

12. Under **Authorized redirect URIs**, add a URI.  This is the URI where Google will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/ego-api/oauth/login/google |
| Server  | https://_myDomain_/ego-api/oauth/login/google |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

11. Click **Create**:

![Entity](../../../assets/google-create-creds2.png 'Google Create Credentials 2')

12. The credentials for your app will be created and the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in **Google Developer Console** by viewing your **Oauth Client ID** details; the **Client ID**** and **Client Secret** will be listed on the righthand side:

![Entity](../../../assets/google-secret.png 'Google Secret')

![Entity](../../../assets/google-secret2.png 'Google Secret 2')

13. You can now supply the **Client ID** and **Client Secret** to the DMS Installer in the Ego configuration section as required.

# GitHub

For full details on setting up OAUTH 2.0 for an application to work with GitHub, [see here](https://docs.github.com/en/developers/apps/building-oauth-apps).

However, specifically for the DMS setup, see the summary steps below for acquiring a GitHub client ID and secret:

1. Setup an account with [GitHub](https://github.com/), if you don't already have one.  If you are an individual working solo with the DMS platform, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.

2. Log into GitHub.

3. From your profile icon in the top right, go to **Settings**.  Then from the links on the left, go to **Developer Settings**.

4. From the left, click **OAuth Apps**, then click **New OAuth App:**

![Entity](../../../assets/github-new-app.png 'GitHub New App')

5. Enter the **Application Name** - A descriptive name for your app, e.g. "_DMS Test App_".

6. Enter the **Homepage URL** - The URL to your app's homepage.  You may simply enter the following:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:80/ego-api |
| Server  | https://_myDomain_/ego-api |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

7. In **Authorized callback URIs**, enter the URL where GitHub will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/ego-api/oauth/login/github |
| Server  | https://_myDomain_/ego-api/oauth/login/github |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

8. Click **Register application**:

![Entity](../../../assets/github-register-app.png 'GitHub Register App')

9. After the app is registered, the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.

<Warning>**NOTE:** GitHub only displays the **Client Secret** when initially created.  If you do not copy it immediately, you will not be able to see it again.  If you do not copy it or lose/forget the secret later, you will need to generate a new secret and delete the old one.</Warning>

You can always view the **Client ID** and manage (generate new, delete) the **Client Secrets** for your app by going back to your **Developer Settings > OAuth Apps > General** section in the app's lefthand navigation bar:

![Entity](../../../assets/github-client-details.png 'GitHub Client Details')

10. You can now supply the **Client ID** and **Client Secret** to the DMS Installer in the Ego configuration section as required.

# LinkedIn

For full details on setting up OAUTH 2.0 for an application to work with LinkedIn, [see here](https://docs.wpwebelite.com/social-network-integration/linkedin/#:~:text=To%20create%20a%20LinkedIn%20App,.com%2Fsecure%2Fdeveloper.&text=On%20that%20page%20click%20on,which%20do%20contain%20a%20star.).

However, specifically for the DMS setup, see the summary steps below for acquiring a LinkedIn client ID and secret:

1. Setup an account with [LinkedIn Developers](https://www.linkedin.com/developers/), if you don't already have one.  If you are an individual working solo with the DMS platform, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.


2. Log into LinkedIn Developers.


3. Click **My apps > Create app** in the top menu:

![Entity](../../../assets/linkedin-create-app.png 'LinkedIn Create App')

4. Enter the following:

| Field               | Description |
| --------------------| ------------|
| App name    | Descriptive name for your app, e.g. "_DMS Test App_" |
| LinkedIn Page | Enter or select the LinkedIn page to be associated with your app.  If you do not have one, you can create one (either real or placeholder) by clicking **Create a new LinkedInPage**. |
| App logo | Upload a logo for your app |
| Legal agreement | **Read and agree to the API Terms of Use** |

5. Click **Create app**:

![Entity](../../../assets/linkedin-create-app2.png 'LinkedIn Create App 2')

6. After the app is registered, the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in by going to the **Auth** tab in the app's top-level navigation:

![Entity](../../../assets/linkedin-secret.png 'LinkedIn Secret')

7. In the app's top navigation menu, go to **Auth** and under **OAuth 2.0 settings**, add an **Authorized redirect URL** for your app.  This is the URI where LinkedIn will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/ego-api/oauth/login/linkedin |
| Server  | https://_myDomain_/ego-api/oauth/login/linkedin |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

8. You can now supply the **Client ID** and **Client Secret** to the DMS Installer in the Ego configuration section as required.

# ORCiD

The Overture DMS makes use of the free, public ORCiD API for client applications.  Hence, all steps below are described based on the use of the free, public API, and not the paid membership API.  For full details on setting up OAUTH 2.0 for an application to with with ORCiD using their free, public API, [see here](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application).

However, specifically for the DMS setup, see the summary steps below for acquiring an ORCiD client ID and secret.

1. Setup an account with [ORCiD](https://orcid.org/), if you don't already have one.  If you are an individual working solo with the DMS platform, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.


2. Log into ORCiD.


3. From your profile icon in the top right, go to **Developer Tools**:

![Entity](../../../assets/orcid-dev-tools.png 'ORCiD Dev Tools')

4. Click **Register for the free ORCID public API**:

![Entity](../../../assets/orcid-register-api.png 'ORCiD Register API')

5. Read and consent to the **Public Client Terms of Service**, then click **Continue**:

![Entity](../../../assets/orcid-consent.png 'ORCiD Consent')

6.  You can now enter the details for your app.  Enter the **Name of your application** - A descriptive name for your app, e.g. "_DMS Test App_".


7.  Enter your **website URL**.  This is the URL to your app's homepage.

<Warning>**NOTE:** ORCiD requires a real URL be provided and will actually attempt to ping the site and establish its validity.  For server mode deployments, you can simply provide the domain which you will configure for the DMS Gateway.  For local mode deployments, you may provide your personal website or your institution's website.  However, if you have neither of these, we suggest you simply enter the Overture homepage, _https://overture.bio_.</Warning>

| Mode               | URI |
| --------------------| ------------|
| Local   | Your personal website, institution's website, or https://overture.bio |
| Server  | https://_myDomain_/ego-api |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

8.  Enter the **Description of your application** - A short description for your app.


9. Under **Redirect URIs**, enter the URI where ORCiD will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/ego-api/oauth/login/orcid |
| Server  | https://_myDomain_/ego-api/oauth/login/orcid |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

<Warning>**NOTE:** ORCiD may give a warning that "_**Only https redirect URIs are accepted**_".  However, this is a warning only and you may still enter an HTTP URI as indicated above.  The application will still save and the Client ID and Secret will still be generated.</Warning>

7. Click the save icon in the bottom right:

![Entity](../../../assets/orcid-app-details.png 'ORCiD App Details')

8. After saving the app, the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in by going to the **ORCiD Developer Tools** and viewing your app:

![Entity](../../../assets/orcid-secret.png 'ORCiD Secret')

9. You can now supply the **Client ID** and **Client Secret** to the DMS Installer in the Ego configuration section as required.