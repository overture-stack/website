---
title: Google OAuth Setup
---

For full details on setting up OAUTH 2.0 for an application to work with Google, see the <a href="https://support.google.com/cloud/answer/6158849?hl=en" target="_blank" rel="noopener noreferrer">Official Google Developer Documentation</a>.

For your convenience, we provide summary steps here:

1. **Create an account with <a href="https://console.developers.google.com/" target="_blank" rel="noopener noreferrer">Google Developer Console</a>:** If you don't already have one. If you are an individual working alone with the Overture suite, you may use a personal account. However, if you work for a larger organization or institution, consult your IT department for a designated account.


2. **Log into Google Developer Console:**  Sign in to your Google Developer Console account.


3. **Select or Create a Project:** Go to **Dashboard** and select the existing project where you want your application to exist or create a new one.

![Entity](../../assets/google-dashboard.png 'Google Developer Dashboard')

![Entity](../../assets/google-new-project.png 'Google New Project')

4. **Register your Application:** Go to the **OAuth consent screen** to register your application with your project.  Only one app can be registered per project.


5. **Select User Type:** Choose the appropriate **User Type**:

- **Internal:** Limits the app to users within your Google Workspace if you are part of one. |
- **External:** Makes the app available to any test user with a Google account. The app starts in testing mode.

<Warning>**NOTE:** The **External** configuration is typically recommended, especially if you intend for external users to access and use your app.</Warning>


6. **Click Create:** Click on **Create** to proceed.

![Entity](../../assets/google-create-app.png 'Google Create App')


7. **Fill in App Information:**  Provide the following details under **App Information**:

- **App name:** Name for the app requiring consent.
- **User support e-mail:** For users to contact you with questions about their consent.


8. **Add Authorized Domains and Developer Contact Information:** If you plan to deploy your app to a specific domain, add the domain under **Authorized Domains**. Then under **Developer Contact Information**, enter an e-mail address for Google to notify you of any changes to your project:

![Entity](../../assets/google-authorized-domain.png 'Google Authorized Domain')

9. **Set up Credentials:** Go to **Credentials** to set up your client ID and secret.  Click **Create Credentials** and select **OAuth client ID**:

![Entity](../../assets/google-create-creds.png 'Google Create Credentials')

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

![Entity](../../assets/google-create-creds2.png 'Google Create Credentials 2')

13. **Copy Client ID and Client Secret:** The credentials for your app will be created and the **Client ID** and **Client Secret** will be displayed to you so you can copy them for use later.  Keep these safe and secure.  You can always access & view these values in **Google Developer Console** by viewing your **Oauth Client ID** details; the **Client ID** and **Client Secret** will be listed on the righthand side:

The credentials for your app will be created, and the **Client ID** and **Client Secret** will be displayed. Make sure to copy and securely store these values. You can always access and view these values in the Google Developer Console by viewing your OAuth Client ID details.

<Warning> **Note:** For full details on setting up OAUTH 2.0 for an application to work with Google, [see here](https://support.google.com/cloud/answer/6158849?hl=en).</Warning>

![Entity](../../assets/google-secret.png 'Google Secret')

![Entity](../../assets/google-secret2.png 'Google Secret 2')

14. **Use Client ID and Client Secret:** During <a href="/documentation/ego/installation/installation" target="_blank" rel="noopener noreferrer">Ego installation</a>, provide the **Client ID** and **Client Secret** when prompted.

