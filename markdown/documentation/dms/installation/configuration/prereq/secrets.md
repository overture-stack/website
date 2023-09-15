---
title: Setup Identity Provider Secrets
---

The Overture DMS supports the use of [OAUTH 2.0](https://oauth.net/2/) identity providers for authentication via the [Ego service](../../../../../ego).  To properly use the identity providers with Ego, OAUTH credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

Each identity provider has a different process for setting up their client secrets, detailed below.

If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).

# Google

For full details on setting up OAUTH 2.0 for an application to work with Google, see the <a href="https://support.google.com/cloud/answer/6158849?hl=en" target="_blank" rel="noopener noreferrer">Official Google Developer Documentation</a>.

For your convenience, we provide summary steps here:

1. **Create an account with <a href="https://console.developers.google.com/" target="_blank" rel="noopener noreferrer">Google Developer Console</a>:** If you don't already have one. If you are an individual working alone with the Overture suite, you may use a personal account. However, if you work for a larger organization or institution, consult your IT department for a designated account.


2. **Log into Google Developer Console:**  Sign in to your Google Developer Console account.


3. **Select or Create a Project:** Go to **Dashboard** and select the existing project where you want your application to exist or create a new one.

![Entity](../../../assets/google-dashboard.png 'Google Developer Dashboard')

![Entity](../../../assets/google-new-project.png 'Google New Project')

4. **Register your Application:** Go to the **OAuth consent screen** to register your application with your project.  Only one app can be registered per project.


5. **Select User Type:** Choose the appropriate **User Type**:

- **Internal:** Limits the app to users within your Google Workspace if you are part of one. |
- **External:** Makes the app available to any test user with a Google account. The app starts in testing mode.

<Warning>**NOTE:** The **External** configuration is typically recommended, especially if you intend for external users to access and use your app.</Warning>


6. **Click Create:** Click on **Create** to proceed.

![Entity](../../../assets/google-create-app.png 'Google Create App')


7. **Fill in App Information:**  Provide the following details under **App Information**:

- **App name:** Name for the app requiring consent.
- **User support e-mail:** For users to contact you with questions about their consent.


8. **Add Authorized Domains and Developer Contact Information:** If you plan to deploy your app to a specific domain, add the domain under **Authorized Domains**. Then under **Developer Contact Information**, enter an e-mail address for Google to notify you of any changes to your project:

![Entity](../../../assets/google-authorized-domain.png 'Google Authorized Domain')

9. **Set up Credentials:** Go to **Credentials** to set up your client ID and secret.  Click **Create Credentials** and select **OAuth client ID**:

![Entity](../../../assets/google-create-creds.png 'Google Create Credentials')

10. **Enter Information:** Provide the following information:

- **Application type:** Set to `Web application`
- **Name:** Enter a name for the client e.g. `DMS client`

11. **Add Authorized Redirect URIs:** Under Under **Authorized redirect URIs**, add a URI. This is the URI where Google will redirect users once they have authenticated with the provider. Depending on your deployment the URI should be in the following format:

- **Local:** http://localhost:`<port>`/ego-api/oauth/login/google
- **Server:** https://`<myDomain>`/ego-api/oauth/login/google


12. **Click Create:** Click on **Create** to proceed:

![Entity](../../../assets/google-create-creds2.png 'Google Create Credentials 2')

13. **Copy Client ID and Client Secret:** The credentials for your app will be created, and the **Client ID** and **Client Secret** will be displayed. Make sure to copy and securely store these values. You can always access and view these values in the Google Developer Console by viewing your OAuth Client ID details.


<Warning> **Note:** For full details on setting up OAUTH 2.0 for an application to work with Google, [see here](https://support.google.com/cloud/answer/6158849?hl=en).</Warning>

![Entity](../../assets/google-secret.png 'Google Secret')

![Entity](../../assets/google-secret2.png 'Google Secret 2')

14. **Use Client ID and Client Secret:** During <a href="/documentation/ego/installation/installation" target="_blank" rel="noopener noreferrer">Ego installation</a>, provide the **Client ID** and **Client Secret** when prompted.

# GitHub
For full details on setting up OAUTH 2.0 for an application to work with GitHub, <a href="https://docs.github.com/en/developers/apps/building-oauth-apps" target="_blank" rel="noopener noreferrer">see the official GitHub developer docs</a>.

For your convenience, we provide summary steps below:

1. **Login or setup an account with <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>**: If you are an individual working alone with the Overture suite, you may wish to use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should be using. Please consult your IT department if required.

2. **Access Developer Settings:** Click on your profile icon in the top right corner, then go to **Settings**. From the links on the left, navigate to **Developer Settings**.

3. **Create a New OAuth App:** In the left-hand menu, click on **OAuth Apps**, then click **New OAuth App**.

![Entity](../../../assets/github-new-app.png 'GitHub New App')

4. **Enter Application Details:** Provide the following information for your app:

- **Application Name:** Enter a descriptive name for your app e.g. `DMS App`.
- **Homepage URL:** Enter the URL to your app's homepage. Depending on your deployment enter the following:

  - **Local:** http://localhost:`<port>`/ego-api
  - **Server:** https://`<myDomain>`/ego-api
6. **Configure Authorized Callback URIs:** In the **Authorized callback URIs field**, enter the URL where GitHub will redirect users once they have authenticated with the provider (i.e., redirect them back to Ego once logged in successfully). Use the following format:
 - **Local:** http://localhost:`<port>`/ego-api/oauth/login/github
  - **Server:** https://`<myDomain>`/ego-api/oauth/login/github

Replace `<url>` with the base URL where you have deployed Ego. For example, it could be a specific domain name, server address, or even localhost if running locally. Here are some examples:

7. **Register the Application:** Click on register application.

![Entity](../../../assets/github-register-app.png 'GitHub Register App')

8. **Copy Client ID and Client Secret:** After registering the app, you will see the Client ID and Client Secret displayed. Make sure to copy and securely store these for later use.

You can always view the **Client ID** and manage the **Client Secrets** for your app by going back to **Developer Settings > OAuth Apps > General** section in the app's left-hand navigation bar:

![Entity](../../../assets/github-client-details.png 'GitHub Client Details')

<Warning> **Note:** GitHub only displays the **Client Secret** when initially created. If you do not copy it immediately, you will not be able to see it again. If you lose or forget the secret later on, you will need to generate a new secret and delete the old one.</Warning>

You can now supply the **Client ID** and **Client Secret** to the DMS Installer in the Ego configuration section when required.

# LinkedIn

For full details on setting up OAuth 2.0 for an application to work with LinkedIn, refer to the <a href="https://docs.wpwebelite.com/social-network-integration/linkedin/#:~:text=To%20create%20a%20LinkedIn%20App,.com%2Fsecure%2Fdeveloper.&text=On%20that%20page%20click%20on,which%20do%20contain%20a%20star." target="_blank" rel="noopener noreferrer">Official LinkedIn documentation</a>.

For your convenience, we provide summary steps below:

1. **Setup an account with LinkedIn Developers:** If you don't already have one, create an account on <a href="https://developer.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn Developers</a>. If you are an individual working alone with the Overture suite, you may wish to use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should be using. Please consult your IT department if required.


2. **Log into LinkedIn Developers:** Sign in to your LinkedIn Developers account.


3. **Create a New App:** Click on **My apps > Create app** in the top menu.

![Entity](../../../assets/linkedin-create-app.png 'LinkedIn Create App')


4. **Enter App Details:** Provide the following information for your app:

- **App name:** Enter a descriptive name for your app, e.g. `DMS app`.
- **LinkedIn Page:** Enter or select the LinkedIn page to be associated with your app.  If you do not have one, you can create one (either real or placeholder) by clicking **Create a new LinkedInPage**.
- **App logo:** Upload a logo for your app.
- **Legal agreement:** Read and agree to the API Terms of Use.


5. **Create the App:** Click on **Create app**.

![Entity](../../../assets/linkedin-create-app2.png 'LinkedIn Create App 2')


6. **Copy Client ID and Client Secret:** After the app is registered, you will see the **Client ID** and **Client Secret** displayed. Make sure to copy and securely store these for later use. You can always access and view these values by going to the **Auth** tab in the app's top-level navigation.

![Entity](../../../assets/linkedin-secret.png 'LinkedIn Secret')

7. **Configure Authorized Redirect URL:** In the app's top navigation menu, go to **Auth** and under **OAuth 2.0 settings**, add an **Authorized redirect URL** for your app. This is the URI where LinkedIn will redirect users once they have authenticated with the provider (i.e., redirect them back to Ego once logged in successfully). Depending on your deployment enter the following:

- **Local:** http://localhost:`<port>`/ego-api/oauth/login/linkedin
- **Server:** https://`<myDomain>`:443/ego-api/oauth/login/linkedin 

8. **Use Client ID and Client Secret:** During deployment provide the **Client ID** and **Client Secret** when prompted. **However, LinkedIn requires a few additional steps before the process iscomplete.**


9. **Add the Sign in with LinkedIn Product:** Go to the **Products** tab and select the **Sign in with LinkedIn product**. This allows LinkedIn users to sign into your app.

![Entity](../../../assets/linkedin-products.png 'LinkedIn Products')

10. **Agree to Legal Terms and Add Product:** Read and agree to the legal terms, then click **Add Product.**

![Entity](../../../assets/linkedin-add-product.png 'LinkedIn Add Product')

11. **Wait for Product Review:** Your request to add the product will be submitted for review, with the status set to `Review in progress`. Wait for some time and refresh the page to see if the product has been approved and added. Usually, this is very quick (within a few minutes), but allow up to 24 hours for this to process. If after 24 hours you still have not been approved, contact LinkedIn support.

![Entity](../../../assets/linkedin-review.png 'LinkedIn Product Request Review')

12. **Verify Scopes:** To verify that the **Sign in with LinkedIn** product was properly added, go to the **Settings** tab. Under **OAuth 2.0 scopes**, verify that these scopes have been added: `r_emailaddress`, `r_liteprofile`.

![Entity](../../../assets/linkedin-scopes.png 'LinkedIn Scopes')

# ORCiD

The Overture DMS makes use of the free, public ORCiD API for client applications.  Hence, all steps below are described based on the use of the free, public API, and not the paid membership API.  For full details on setting up OAUTH 2.0 for an application to with with ORCiD using their free, public API, [see here](https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application).

However, specifically for the DMS setup, see the summary steps below for acquiring an ORCiD client ID and secret.
---
title: ORCiD OAuth Setup
---

All steps below are for setting up Ego with ORCiDs free, public API (not the paid membership API). For full details on setting up OAuth 2.0 with ORCiD, refer to the <a href="https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application" target="_blank" rel="noopener noreferrer">Official ORCiD Documentation</a>.

For your convenience, we provide summary steps here:

1. **Create an account with ORCid:**  If you don't already have one, set up an account on <a href="https://orcid.org/" target="_blank" rel="noopener noreferrer">ORCiD</a>. If you are an individual working alone with the Overture suite, you may use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should use. Please consult your IT department if necessary.


2. **Log into ORCiD:** Sign in to your ORCiD account.


3. **Go to Developer Tools:** Click on your profile icon in the top right corner, then select **Developer Tools**.

![Entity](../../../assets/orcid-dev-tools.png 'ORCiD Dev Tools')


4. **Register for the free ORCID public API:** Click on **Register for the free ORCID public API**:

![Entity](../../../assets/orcid-register-api.png 'ORCiD Register API')


5. **Consent to Public Client Terms of Service:** Read and consent to the **Public Client Terms of Service**, then click **Continue**:

![Entity](../../../assets/orcid-consent.png 'ORCiD Consent')


6. **Enter Application Details:** Fill in the details for your application:

- **Name of your application:** A descriptive name for your app.
- **Website URL:** The URL to your app's homepage.
  - **Local:** Your personal website, institution's website, or https://overture.bio
  - **Server:**  https://`<myDomain>`/ego-api


<Warning>**NOTE:** ORCiD requires a real URL and will actually attempt to ping the site and establish its validity. If your app does not have a homepage, we recommend providing your institution or organization's homepage. If none are available, you can enter the Overture homepage, `https://overture.bio`.</Warning>


7.  **Enter Application Description:** Provide a short description of your application.

8. **Add Redirect URIs:** Under **Redirect URIs**, enter the URI where ORCiD will redirect users once they have authenticated with the provider, redirecting them back to Ego upon successful login:

  - **Local:** http://localhost:`<port>`/ego-api/oauth/login/orcid
  - **Server:**  https://`<myDomain>`/ego-api/oauth/login/orcid


<Warning>**NOTE:** ORCiD may give a warning that "**Only https redirect URIs are accepted**", but can still enter an HTTP URI as indicated above. The application will still save and the Client ID and Secret will still be generated.</Warning>


9. **Save Application Details:** Click on the **Save** icon in the bottom right corner.

![Entity](../../../assets/orcid-app-details.png 'ORCiD App Details')


10. **Copy Client ID and Client Secret:** After saving the app, the **Client ID** and **Client Secret** will be displayed. Copy these values and securely store them. You can always access and view these values by going to the **ORCiD Developer Tools** and viewing your app.

![Entity](../../../assets/orcid-secret.png 'ORCiD Secret')
