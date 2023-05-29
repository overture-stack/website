---
title: Setup Prerequisites
---

Before installing Ego, make sure the following are installed and configured on the platform of your choice (we recommend Linux):

1. PostgreSQL
    - Official download & installation instructions [here](https://www.postgresql.org/download/)
    - Make sure there is a user account you can use to apply database migrations to the Ego database and create extensions.

2. Java Runtime Environment version 11
    * Official download & installation instructions [here](https://www.oracle.com/ca-en/java/technologies/javase-downloads.html)

3. Your UI application hosted and available in your environment.
    * The UI app you intend to register with Ego so that Ego can authorize users on its behalf

These prerequisite configurations must also be completed:

1. Configure at least one OAuth 2.0 identity provider with a `Client ID` and `Client Secret` (more information below).

2. For certain identity providers, make sure users' emails are publicly accessible (see [instructions](/documentation/ego/installation/prereq#make-user-emails-publicly-accessible) below)

# Setup Identity Provider Secrets

To properly use the identity providers with Ego, OAUTH credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

<Note title='Secrets Managment Software'>If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).</Note>

Each identity provider has a different process for setting up their client secrets. On this page we have provided summaries for setting up for each available identity provider:

- [Google](/documentation/ego/installation/prereq#google)
- [GitHub](/documentation/ego/installation/prereq#github)
- [LinkedIn](/documentation/ego/installation/prereq#linkedin)
- [ORCiD](/documentation/ego/installation/prereq#orcid)

## Google

For full details on setting up OAUTH 2.0 for an application to work with Google, see the [Official Google Developer Documentation](https://support.google.com/cloud/answer/6158849?hl=en).

For your convenience, we provide summary steps here:

1. **Create an account with [Google Developer Console](https://console.developers.google.com/):** If you don't already have one. If you are an individual working alone with the Overture suite, you may use a personal account. However, if you work for a larger organization or institution, consult your IT department for a designated account.


2. **Log into Google Developer Console:**  Sign in to your Google Developer Console account.


3. **Select or Create a Project:** Go to **Dashboard** and select the existing project where you want your application to exist or create a new one.

![Entity](../assets/google-dashboard.png 'Google Developer Dashboard')

![Entity](../assets/google-new-project.png 'Google New Project')

4. **Register your Application:** Go to the **OAuth consent screen** to register your application with your project.  Only one app can be registered per project.


5. **Select User Type:** Choose the appropriate **User Type**:

- **Internal:** Limits the app to users within your Google Workspace if you are part of one. |
- **External:** Makes the app available to any test user with a Google account. The app starts in testing mode.

<Warning>**NOTE:** The **External** configuration is typically recommended, especially if you intend for external users to access and use your app.</Warning>


6. **Click Create:** Click on **Create** to proceed.

![Entity](../assets/google-create-app.png 'Google Create App')


7. **Fill in App Information:**  Provide the following details under **App Information**:

- **App name:** Name for the app requiring consent.
- **User support e-mail:** For users to contact you with questions about their consent.


8. **Add Authorized Domains and Developer Contact Information:** If you plan to deploy your app to a specific domain, add the domain under **Authorized Domains**. Then under **Developer Contact Information**, enter an e-mail address for Google to notify you of any changes to your project:

![Entity](../assets/google-authorized-domain.png 'Google Authorized Domain')

9. **Set up Credentials:** Go to **Credentials** to set up your client ID and secret.  Click **Create Credentials** and select **OAuth client ID**:

![Entity](../assets/google-create-creds.png 'Google Create Credentials')

10. **Enter Information:** Provide the following information:

- **Application type:** Set to `Web application`
- **Name:** Enter a name for the client

11. **Add Authorized Redirect URIs:** Under Under **Authorized redirect URIs**, add a URI. This is the URI where Google will redirect users once they have authenticated with the provider. The URI should be in the following format:

`<url>/ego-api/oauth/login/google`

Replace `<url>` with the base URL where you have deployed Ego. For example:

- `https://ego.overture.bio/ego-api/oauth/login/google`
- `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/google`
- `http://localhost:80/ego-api/oauth/login/google`

12. **Click Create:** Click on **Create** to proceed:

![Entity](../assets/google-create-creds2.png 'Google Create Credentials 2')

13. **Copy Client ID and Client Secret:** The credentials for your app will be created and the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in **Google Developer Console** by viewing your **Oauth Client ID** details; the **Client ID** and **Client Secret** will be listed on the righthand side:

The credentials for your app will be created, and the **Client ID** and **Client Secret** will be displayed. Make sure to copy and securely store these values. You can always access and view these values in the Google Developer Console by viewing your OAuth Client ID details.

<Warning> **Note:** For full details on setting up OAUTH 2.0 for an application to work with Google, [see here](https://support.google.com/cloud/answer/6158849?hl=en).</Warning>

![Entity](../assets/google-secret.png 'Google Secret')

![Entity](../assets/google-secret2.png 'Google Secret 2')

14. **Use Client ID and Client Secret:** During [Ego installation](/documentation/ego/installation/installation), provide the **Client ID** and **Client Secret** when prompted.

## GitHub

For full details on setting up OAUTH 2.0 for an application to work with GitHub, [see here](https://docs.github.com/en/developers/apps/building-oauth-apps).

For your convenience, we provide summary steps below:

1. **Login or setup an account with [GitHub](https://github.com/)**: If you are an individual working alone with the Overture suite, you may wish to use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should be using. Please consult your IT department if required.

2. **Access Developer Settings:** Click on your profile icon in the top right corner, then go to **Settings**. From the links on the left, navigate to **Developer Settings**.

3. **Create a New OAuth App:** In the left-hand menu, click on **OAuth Apps**, then click **New OAuth App**.

![Entity](../assets/github-new-app.png 'GitHub New App')

4. **Enter Application Details:** Provide the following information for your app:

- **Application Name:** Enter a descriptive name for your app.
- **Homepage URL:** Enter the URL to your app's homepage. You can simply enter the following:

6. **Configure Authorized Callback URIs:** In the **Authorized callback URIs field, enter the URL where GitHub will redirect users once they have authenticated with the provider (i.e., redirect them back to Ego once logged in successfully). Use the following format:

`<url>/ego-api/oauth/login/github`

Replace `<url>` with the base URL where you have deployed Ego. For example, it could be a specific domain name, server address, or even localhost if running locally. Here are some examples:

- `https://ego.overture.bio/ego-api/oauth/login/github`
- `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/github`
- `http://localhost:80/ego-api/oauth/login/github`

7. **Register the Application:** Click on **Register application.**

![Entity](../assets/github-register-app.png 'GitHub Register App')

8. **Copy Client ID and Client Secret:** After the app is registered, you will see the Client ID and Client Secret displayed. Make sure to copy and securely store these for later use.

You can always view the **Client ID** and manage the **Client Secrets** for your app by going back to **Developer Settings > OAuth Apps > General** section in the app's left-hand navigation bar:

![Entity](../assets/github-client-details.png 'GitHub Client Details')

<Warning> **Note:** GitHub only displays the **Client Secret** when initially created. If you do not copy it immediately, you will not be able to see it again. If you lose or forget the secret later on, you will need to generate a new secret and delete the old one.</Warning>

9. **Use Client ID and Client Secret:** During [Ego installation](/documentation/ego/installation/installation), provide the **Client ID** and **Client Secret** when prompted.

## LinkedIn

For full details on setting up OAuth 2.0 for an application to work with LinkedIn, refer to the [Official LinkedIn documentation](https://docs.wpwebelite.com/social-network-integration/linkedin/#:~:text=To%20create%20a%20LinkedIn%20App,.com%2Fsecure%2Fdeveloper.&text=On%20that%20page%20click%20on,which%20do%20contain%20a%20star.).

For your convenience, we provide summary steps below:

1. **Setup an account with LinkedIn Developers:** If you don't already have one, create an account on [LinkedIn Developers](https://developer.linkedin.com/). If you are an individual working alone with the Overture suite, you may wish to use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should be using. Please consult your IT department if required.


2. **Log into LinkedIn Developers:** Sign in to your LinkedIn Developers account.


3. **Create a New App:** Click on **My apps > Create app** in the top menu.

![Entity](../assets/linkedin-create-app.png 'LinkedIn Create App')


4. **Enter App Details:** Provide the following information for your app:

- **App name:** Enter a descriptive name for your app.
- **LinkedIn Page:** Enter or select the LinkedIn page to be associated with your app.  If you do not have one, you can create one (either real or placeholder) by clicking **Create a new LinkedInPage**.
- **App logo:** Upload a logo for your app.
- **Legal agreement:** Read and agree to the API Terms of Use.


5. **Create the App:** Click on **Create app**.

![Entity](../assets/linkedin-create-app2.png 'LinkedIn Create App 2')


6. **Copy Client ID and Client Secret:** After the app is registered, you will see the **Client ID** and **Client Secret** displayed. Make sure to copy and securely store these for later use. You can always access and view these values by going to the **Auth** tab in the app's top-level navigation.

![Entity](../assets/linkedin-secret.png 'LinkedIn Secret')


7. In the app's top navigation menu, go to **Auth** and under **OAuth 2.0 settings**, add an **Authorized redirect URL** for your app.  This is the URI where LinkedIn will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

`<url>/ego-api/oauth/login/linkedin`

Where `<url>` is the base URL you have deployed Ego to (e.g. this could be a specific domain name you have setup in advance, or a server address, or even your `localhost` if you are running this off your laptop).  For example, `https://ego.overture.bio/ego-api/oauth/login/linkedin`, `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/linkedin`, `http://localhost:80/ego-api/oauth/login/linkedin`, etc.

7. **Configure Authorized Redirect URL:** In the app's top navigation menu, go to **Auth** and under **OAuth 2.0 settings**, add an **Authorized redirect URL** for your app. This is the URI where LinkedIn will redirect users once they have authenticated with the provider (i.e., redirect them back to Ego once logged in successfully). Use the following format:

`<url>/ego-api/oauth/login/linkedin`

Replace `<url>` with the base URL where you have deployed Ego. For example, it could be a specific domain name, server address, or even localhost if running locally. Here are some examples:

- `https://ego.overture.bio/ego-api/oauth/login/linkedin`
- `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/linkedin`
- `http://localhost:80/ego-api/oauth/login/linkedin`

8. **Use Client ID and Client Secret:** During [Ego installation](/documentation/ego/installation/installation), provide the **Client ID** and **Client Secret** when prompted. **However, LinkedIn requires a few additional steps after Ego installation for the process to be complete.**

9. Go to the **Products** tab and **Select** the **Sign in with LinkedIn** product.  This allows LinkedIn users to sign into your app:

9. **Add the Sign in with LinkedIn Product:** Go to the **Products** tab and select the **Sign in with LinkedIn** product. This allows LinkedIn users to sign into your app.

![Entity](../assets/linkedin-products.png 'LinkedIn Products')

10. **Agree to Legal Terms and Add Product:** Read and agree to the legal terms, then click **Add Product.**

![Entity](../assets/linkedin-add-product.png 'LinkedIn Add Product')

11. **Wait for Product Review:** Your request to add the product will be submitted for review, with the status set to `Review in progress`. Wait for some time and refresh the page to see if the product has been approved and added. Usually, this is very quick (within a few minutes), but allow up to 24 hours for this to process. If after 24 hours you still have not been approved, contact LinkedIn support.

![Entity](../assets/linkedin-review.png 'LinkedIn Product Request Review')

12. **Verify Scopes:** To verify that the **Sign in with LinkedIn** product was properly added, go to the **Settings** tab. Under **OAuth 2.0 scopes**, verify that these scopes have been added: `r_emailaddress`, `r_liteprofile`.

![Entity](../assets/linkedin-scopes.png 'LinkedIn Scopes')

## ORCiD

All steps below are for setting up Ego with ORCiDs free, public API (not the paid membership API). For full details on setting up OAuth 2.0 with ORCiD, refer to the [Official ORCiD Documentation](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application).

For your convenience, we provide summary steps here:

1. **Create an account with ORCid:**  If you don't already have one, set up an account on [ORCiD](https://orcid.org/). If you are an individual working alone with the Overture suite, you may use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should use. Please consult your IT department if necessary.


2. **Log into ORCiD:** Sign in to your ORCiD account.


3. **Go to Developer Tools:** Click on your profile icon in the top right corner, then select **Developer Tools**.

![Entity](../assets/orcid-dev-tools.png 'ORCiD Dev Tools')


4. **Register for the free ORCID public API:** Click on **Register for the free ORCID public API**:

![Entity](../assets/orcid-register-api.png 'ORCiD Register API')


5. **Consent to Public Client Terms of Service:** Read and consent to the **Public Client Terms of Service**, then click **Continue**:

![Entity](../assets/orcid-consent.png 'ORCiD Consent')


6. **Enter Application Details:** Fill in the details for your application:

- **Name of your application:** A descriptive name for your app.
- **Website URL:** The URL to your app's homepage.

<Warning>**NOTE:** ORCiD requires a real URL and will actually attempt to ping the site and establish its validity. If your app does not have a homepage, we recommend providing your institution or organization's homepage. If none are available, you can enter the Overture homepage, `https://overture.bio`.</Warning>


7.  **Enter Application Description:** Provide a short description of your application.


8. **Add Redirect URIs:** Under **Redirect URIs**, enter the URI where ORCiD will redirect users once they have authenticated with the provider, redirecting them back to Ego upon successful login:

`<url>/ego-api/oauth/login/orcid`

Replace `<url>` with the base URL where you have deployed Ego. For example:

- `https://ego.overture.bio/ego-api/oauth/login/orcid`
- `https://dms.test.cancercollaboratory.org/ego-api/- oauth/login/orcid`
- `http://localhost:80/ego-api/oauth/login/orcid`

<Warning>**NOTE:** ORCiD may give a warning that "**Only https redirect URIs are accepted**", but can still enter an HTTP URI as indicated above. The application will still save and the Client ID and Secret will still be generated.</Warning>


9. **Save Application Details:** Click on the **Save** icon in the bottom right corner.

![Entity](../assets/orcid-app-details.png 'ORCiD App Details')


10. **Copy Client ID and Client Secret:** After saving the app, the **Client ID** and **Client Secret** will be displayed. Copy these values and securely store them. You can always access and view these values by going to the **ORCiD Developer Tools** and viewing your app.

![Entity](../assets/orcid-secret.png 'ORCiD Secret')

12. **Provide Client ID and Client Secret:** During [Ego installation](/documentation/ego/installation/installation), provide the Client ID and Client Secret when prompted.

# Make User Emails Publicly Accessible

When a user logs in via their identity provider Ego captures, stores, and displays a contact e-mail. However, some providers may allow their users to make their email addresses private and not publicly accessible to an external service.

Private emails will not be able to login via Ego. To prevent this the user can change their privacy setting to allow access to their e-mail via that provider or login with a different provider that does not have this requirement or setting.

<Warning> **Note: ORCiD** is the only provider that currently has this capability where the user's email can be set to private.</Warning>

Some users will want to retain their privacy and not share their e-mail publicly.  As such, the Overture roadmap for Ego has a future enhancement to make this requirement configurable. However, for the current release, the two workarounds above must be used.

## ORCiD

To make your ORCiD e-mail publicly accessible, see the instructions [here](https://support.orcid.org/hc/en-us/articles/360006971213-Account-email-addresses), or follow these summary steps:

1. **Log into ORCiD:** Sign in to your ORCiD account.


2. **Edit Email Settings:** Scroll down to the **Emails** section in the left-hand navigation and click the **Edit** (pencil) icon. A pop-up will display with your registered emails.


3. **Adjust Privacy Settings:** In the pop-up, you will see the list of your registered emails. Using the **Privacy Settings Icons** on the right side of each email, change the visibility setting to **Everyone** (leftmost icon) for each email you want to make publicly accessible.

![Entity](../assets/orcid-setting.png 'ORCiD E-mail Setting')

4. **Save Changes:** Once you have adjusted the privacy settings for your emails, click **Save** to apply the changes.