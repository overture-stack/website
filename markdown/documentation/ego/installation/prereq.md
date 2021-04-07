---
title: Setup Prerequisites
---

Before installing Ego itself, make sure the following are installed and configured on the platform of your choice (we recommend Linux):

1. PostgreSQL
    * If necessary, follow official download & installation instructions [here](https://www.postgresql.org/download/)
    * Make sure there is a user account you can use with the ability to apply database migrations to the Ego database and to create extensions

2. Java Runtime Environment version 11
    * If necessary, follow official download & installation instructions [here](https://www.oracle.com/ca-en/java/technologies/javase-downloads.html)

3. Your UI application hosted and available in your environment
    * This is the UI app you intend to register with Ego so that Ego can authorize users on its behalf

Additionally, these prerequisite configurations must also be completed:

1. Configure at least one OAuth 2.0 identity provider with a `Client ID` and `Client Secret` (see [instructions](/documentation/ego/installation/prereq#setup-identity-provider-secrets) below)

2. For certain identity providers, make sure users' emails are publicly accessible (see [instructions](/documentation/ego/installation/prereq#make-user-emails-publicly-accessible) below)

# Setup Identity Provider Secrets

To properly use the identity providers with Ego, OAUTH credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

Each identity provider has a different process for setting up their client secrets, detailed below.

If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).

## Google

For full details on setting up OAUTH 2.0 for an application to work with Google, [see here](https://support.google.com/cloud/answer/6158849?hl=en).

However, for your convenience, we provide summary steps here:

1. Setup an account with [Google Developer Console](https://console.developers.google.com/), if you don't already have one.  If you are an individual working solo with the Overture suite, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.


2. Log into Google Developer Console.


3. Go to **Dashboard** and select the existing project where you want your application to exist, or create a new one:

![Entity](../assets/google-dashboard.png 'Google Developer Dashboard')

![Entity](../assets/google-new-project.png 'Google New Project')

4. Go to the **OAuth consent screen** to register your application with your project.  Only one app can be registered per project:


5. Select the **User Type**:

| User Type  | Description |
| -----------| ------------|
| Internal   | If you are part of a Google Workspace, then this setting limits the app to only users within your workspace. |
| External   | The app will be available to any test user that has a Google account.  The app starts in testing mode and is only available to users you add to the list of test users.  Once testing is complete, you can verify and publish the app to production. |

<Warning>**NOTE:** Typically, **External** is the recommended configuration, especially if you intend for other external users to access and use your app.</Warning>


6. Click **Create**:

![Entity](../assets/google-create-app.png 'Google Create App')

7. You will need to fill in a series of other sections.  **Under App Information**, set the following:

| Field               | Description |
| --------------------| ------------|
| App name            | Name for the app requiring consent. |
| User support e-mail | For users to contact you with questions about their consent. |

8. If you plan to deploy your app to a specific domain, add the domain under **Authorized Domains**. Then under **Developer Contact Information**, enter an e-mail address for Google to notify you of any changes to your project:

![Entity](../assets/google-authorized-domain.png 'Google Authorized Domain')

9. Go to **Credentials** to setup your client ID and secret.  Click **Create Credentials** and select **OAuth client ID**:

![Entity](../assets/google-create-creds.png 'Google Create Credentials')

10. Enter the following:

| Field               | Description |
| --------------------| ------------|
| Application type    | Set to `Web application` |
| Name                | Enter a name for the web client |

12. Under **Authorized redirect URIs**, add a URI.  This is the URI where Google will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

`<url>/ego-api/oauth/login/google`

Where `<url>` is the base URL you have deployed Ego to (e.g. this could be a specific domain name you have setup in advance, or a server address, or even your `localhost` if you are running this off your laptop).  For example, `https://ego.overture.bio/ego-api/oauth/login/google`, `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/google`, `http://localhost:80/ego-api/oauth/login/google`, etc.

11. Click **Create**:

![Entity](../assets/google-create-creds2.png 'Google Create Credentials 2')

12. The credentials for your app will be created and the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in **Google Developer Console** by viewing your **Oauth Client ID** details; the **Client ID** and **Client Secret** will be listed on the righthand side:

![Entity](../assets/google-secret.png 'Google Secret')

![Entity](../assets/google-secret2.png 'Google Secret 2')

13. You can now supply the **Client ID** and **Client Secret** during [Ego installation](/documentation/ego/installation/installation).

## GitHub

For full details on setting up OAUTH 2.0 for an application to work with GitHub, [see here](https://docs.github.com/en/developers/apps/building-oauth-apps).

However, for your convenience, we provide summary steps here:

1. Setup an account with [GitHub](https://github.com/), if you don't already have one.  If you are an individual working solo with the Overture suite, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.

2. Log into GitHub.

3. From your profile icon in the top right, go to **Settings**.  Then from the links on the left, go to **Developer Settings**.

4. From the left, click **OAuth Apps**, then click **New OAuth App:**

![Entity](../assets/github-new-app.png 'GitHub New App')

5. Enter the **Application Name** - A descriptive name for your app.

6. Enter the **Homepage URL** - The URL to your app's homepage.  You may simply enter the following:

7. In **Authorized callback URIs**, enter the URL where GitHub will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

`<url>/ego-api/oauth/login/github`

Where `<url>` is the base URL you have deployed Ego to (e.g. this could be a specific domain name you have setup in advance, or a server address, or even your `localhost` if you are running this off your laptop).  For example, `https://ego.overture.bio/ego-api/oauth/login/github`, `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/github`, `http://localhost:80/ego-api/oauth/login/github`, etc.

8. Click **Register application**:

![Entity](../assets/github-register-app.png 'GitHub Register App')

9. After the app is registered, the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.

<Warning>**NOTE:** GitHub only displays the **Client Secret** when initially created.  If you do not copy it immediately, you will not be able to see it again.  If you do not copy it or lose/forget the secret later, you will need to generate a new secret and delete the old one.</Warning>

You can always view the **Client ID** and manage (generate new, delete) the **Client Secrets** for your app by going back to your **Developer Settings > OAuth Apps > General** section in the app's lefthand navigation bar:

![Entity](../assets/github-client-details.png 'GitHub Client Details')

10. You can now supply the **Client ID** and **Client Secret** during [Ego installation](/documentation/ego/installation/installation).

## LinkedIn

For full details on setting up OAUTH 2.0 for an application to work with LinkedIn, [see here](https://docs.wpwebelite.com/social-network-integration/linkedin/#:~:text=To%20create%20a%20LinkedIn%20App,.com%2Fsecure%2Fdeveloper.&text=On%20that%20page%20click%20on,which%20do%20contain%20a%20star.).

However, for your convenience, we provide summary steps here:

1. Setup an account with [LinkedIn Developers](https://www.linkedin.com/developers/), if you don't already have one.  If you are an individual working solo with the Overture suite, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.


2. Log into LinkedIn Developers.


3. Click **My apps > Create app** in the top menu:

![Entity](../assets/linkedin-create-app.png 'LinkedIn Create App')

4. Enter the following:

| Field               | Description |
| --------------------| ------------|
| App name    | Descriptive name for your app |
| LinkedIn Page | Enter or select the LinkedIn page to be associated with your app.  If you do not have one, you can create one (either real or placeholder) by clicking **Create a new LinkedInPage**. |
| App logo | Upload a logo for your app |
| Legal agreement | **Read and agree to the API Terms of Use** |

5. Click **Create app**:

![Entity](../assets/linkedin-create-app2.png 'LinkedIn Create App 2')

6. After the app is registered, the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in by going to the **Auth** tab in the app's top-level navigation:

![Entity](../assets/linkedin-secret.png 'LinkedIn Secret')

7. In the app's top navigation menu, go to **Auth** and under **OAuth 2.0 settings**, add an **Authorized redirect URL** for your app.  This is the URI where LinkedIn will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

`<url>/ego-api/oauth/login/linkedin`

Where `<url>` is the base URL you have deployed Ego to (e.g. this could be a specific domain name you have setup in advance, or a server address, or even your `localhost` if you are running this off your laptop).  For example, `https://ego.overture.bio/ego-api/oauth/login/linkedin`, `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/linkedin`, `http://localhost:80/ego-api/oauth/login/linkedin`, etc.

8. You can now supply the **Client ID** and **Client Secret** during [Ego installation](/documentation/ego/installation/installation).  **However, LinkedIn requires a few additional steps before the process is complete.**


9. Go to the **Products** tab and **Select** the **Sign in with LinkedIn** product.  This allows LinkedIn users to sign into your app:

![Entity](../assets/linkedin-products.png 'LinkedIn Products')

10. Read and agree to the legal terms, then click **Add Product**:

![Entity](../assets/linkedin-add-product.png 'LinkedIn Add Product')

11.  Your request to add the product will be submitted for review, with the status set to `Review in progress`. Wait for some time and refresh the page to see if the product has been approved and added. Usually this is very quick (within a few minutes), but allow up to 24 hours for this to process.  If after 24 hours you still have not been approved, please contact LinkedIn support:

![Entity](../assets/linkedin-review.png 'LinkedIn Product Request Review')

12. To verify the **Sign in with LinkedIn** product was properly added, go to the **Settings** tab.  Under **OAuth 2.0 scopes**, verify that these scopes have been added: `r_emailaddress`, `r_liteprofile`:

![Entity](../assets/linkedin-scopes.png 'LinkedIn Scopes')

## ORCiD

Ego makes use of the free, public ORCiD API for client applications.  Hence, all steps below are described based on the use of the free, public API, and not the paid membership API.  For full details on setting up OAUTH 2.0 for an application to with with ORCiD using their free, public API, [see here](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application).

However, for your convenience, we provide summary steps here:

1. Setup an account with [ORCiD](https://orcid.org/), if you don't already have one.  If you are an individual working solo with the Overture suite, you may wish to simply use a personal account.  However, if you work for a larger organization or institution, they may already have a designated account which you can or should be using.  Please consult your IT department if required.


2. Log into ORCiD.


3. From your profile icon in the top right, go to **Developer Tools**:

![Entity](../assets/orcid-dev-tools.png 'ORCiD Dev Tools')

4. Click **Register for the free ORCID public API**:

![Entity](../assets/orcid-register-api.png 'ORCiD Register API')

5. Read and consent to the **Public Client Terms of Service**, then click **Continue**:

![Entity](../assets/orcid-consent.png 'ORCiD Consent')

6.  You can now enter the details for your app.  Enter the **Name of your application** - A descriptive name for your app.


7.  Enter your **website URL**.  This is the URL to your app's homepage.

<Warning>**NOTE:** ORCiD requires a real URL be provided and will actually attempt to ping the site and establish its validity. If your app does not have a homepage, we recommend providing your institution or organization's homepage. However, if you do not have any of, we suggest you simply enter the Overture homepage, _https://overture.bio_.</Warning>

8.  Enter the **Description of your application** - A short description for your app.


9. Under **Redirect URIs**, enter the URI where ORCiD will redirect users once they have authenticated with the provider (i.e. redirect them back to Ego once logged in successfully):

`<url>/ego-api/oauth/login/orcid`

Where `<url>` is the base URL you have deployed Ego to (e.g. this could be a specific domain name you have setup in advance, or a server address, or even your `localhost` if you are running this off your laptop).  For example, `https://ego.overture.bio/ego-api/oauth/login/orcid`, `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/orcid`, `http://localhost:80/ego-api/oauth/login/orcid`, etc.

<Warning>**NOTE:** ORCiD may give a warning that "_**Only https redirect URIs are accepted**_".  However, this is a warning only and you may still enter an HTTP URI as indicated above.  The application will still save and the Client ID and Secret will still be generated.</Warning>

10. Click the **Save** icon in the bottom right:

![Entity](../assets/orcid-app-details.png 'ORCiD App Details')

11. After saving the app, the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in by going to the **ORCiD Developer Tools** and viewing your app:

![Entity](../assets/orcid-secret.png 'ORCiD Secret')

12. You can now supply the **Client ID** and **Client Secret** during [Ego installation](/documentation/ego/installation/installation).


# Make User Emails Publicly Accessible

Currently, as part of its authentication flow, the Ego must capture, store, and display a contact e-mail when a user logs in via their identity provider. However, some providers may allow their users to make their email addresses private and not publicly accessibly by an external service like Ego.

In scenarios where users have their emails set to private, they will **NOT** be able to login via Ego, and two alternatives are available:

1. The user must change the privacy setting to allow access to their e-mail via that provider, **OR**,
2. The user must login with a different provider that does not have this requirement or setting.

<Note title="ORCiD Restriction">**ORCiD** is the only provider that currently has this capability where the user's email can be set to private.</Note>

<Warning>**NOTE:** Some users will want to retain their privacy and not share their e-mail publicly.  As such, the Overture roadmap for Ego has a future enhancement to make this requirement configurable. However, for the current release, the two workarounds above must be used.</Warning>

## ORCiD

To make your ORCiD e-mail publicly accessible, see the instructions [here](https://support.orcid.org/hc/en-us/articles/360006971213-Account-email-addresses), or follow these summary steps:

1. Log into ORCiD.


2. Scroll down to the **Emails** section in the lefthand navigation and click the **Edit** (pencil) icon.  A pop-up displays with your registered emails.


3. Using the **Privacy Settings Icons** on the right, change the visibility setting to **Everyone** (leftmost icon) for each email you wish to expose publicly:

![Entity](../assets/orcid-setting.png 'ORCiD E-mail Setting')

4. Your ORCiD email(s) will now be accessible by approved external apps such as Ego.