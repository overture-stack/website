---
title: ORCiD OAuth Setup
---

All steps below are for setting up Ego with ORCiDs free, public API (not the paid membership API). For full details on setting up OAuth 2.0 with ORCiD, refer to the <a href="https://support.orcid.org/hc/en-us/articles/360006897174-Register-a-public-API-client-application" target="_blank" rel="noopener noreferrer">Official ORCiD Documentation</a>.

For your convenience, we provide summary steps here:

1. **Create an account with ORCid:**  If you don't already have one, set up an account on <a href="https://orcid.org/" target="_blank" rel="noopener noreferrer">ORCiD</a>. If you are an individual working alone with the Overture suite, you may use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should use. Please consult your IT department if necessary.


2. **Log into ORCiD:** Sign in to your ORCiD account.


3. **Go to Developer Tools:** Click on your profile icon in the top right corner, then select **Developer Tools**.

![Entity](../../assets/orcid-dev-tools.png 'ORCiD Dev Tools')


4. **Register for the free ORCID public API:** Click on **Register for the free ORCID public API**:

![Entity](../../assets/orcid-register-api.png 'ORCiD Register API')


5. **Consent to Public Client Terms of Service:** Read and consent to the **Public Client Terms of Service**, then click **Continue**:

![Entity](../../assets/orcid-consent.png 'ORCiD Consent')


6. **Enter Application Details:** Fill in the details for your application:

- **Name of your application:** A descriptive name for your app.
- **Website URL:** The URL to your app's homepage.

<Warning>**NOTE:** ORCiD requires a real URL and will actually attempt to ping the site and establish its validity. If your app does not have a homepage, we recommend providing your institution or organization's homepage. If none are available, you can enter the Overture homepage, `https://overture.bio`.</Warning>


7.  **Enter Application Description:** Provide a short description of your application.


8. **Add Redirect URIs:** Under **Redirect URIs**, enter the URI where ORCiD will redirect users once they have authenticated with the provider, redirecting them back to Ego upon successful login:

  - **Local:** http://localhost:`<port>`/oauth/code/orcid
  - **Server:**  https://`<myDomain>`/oauth/code/orcid

<Warning>**NOTE:** ORCiD may give a warning that "**Only https redirect URIs are accepted**", but can still enter an HTTP URI as indicated above. The application will still save and the Client ID and Secret will still be generated.</Warning>


9. **Save Application Details:** Click on the **Save** icon in the bottom right corner.

![Entity](../../assets/orcid-app-details.png 'ORCiD App Details')


10. **Copy Client ID and Client Secret:** After saving the app, the **Client ID** and **Client Secret** will be displayed. Copy these values and securely store them. You can always access and view these values by going to the **ORCiD Developer Tools** and viewing your app.

![Entity](../../assets/orcid-secret.png 'ORCiD Secret')

12. **Provide Client ID and Client Secret:** During <a href="/documentation/ego/installation/installation" target="_blank" rel="noopener noreferrer">Ego installation</a>, provide the Client ID and Client Secret when prompted.

# Make User Emails Publicly Accessible

When a user logs in via their identity provider Ego captures, stores, and displays a contact e-mail. However, some providers may allow their users to make their email addresses private and not publicly accessible to an external service.

Private emails will not be able to login via Ego. To prevent this the user can change their privacy setting to allow access to their e-mail via that provider or login with a different provider that does not have this requirement or setting.

<Warning> **Note: ORCiD** is the only provider that currently has this capability where the user's email can be set to private.</Warning>

Some users will want to retain their privacy and not share their e-mail publicly.  As such, the Overture roadmap for Ego has a future enhancement to make this requirement configurable. However, for the current release, the two workarounds above must be used.

## ORCiD

To make your ORCiD e-mail publicly accessible, see the instructions <a href="https://support.orcid.org/hc/en-us/articles/360006971213-Account-email-addresses" target="_blank" rel="noopener noreferrer">here</a>, or follow these summary steps:

1. **Log into ORCiD:** Sign in to your ORCiD account.


2. **Edit Email Settings:** Scroll down to the **Emails** section in the left-hand navigation and click the **Edit** (pencil) icon. A pop-up will display with your registered emails.


3. **Adjust Privacy Settings:** In the pop-up, you will see the list of your registered emails. Using the **Privacy Settings Icons** on the right side of each email, change the visibility setting to **Everyone** (leftmost icon) for each email you want to make publicly accessible.

![Entity](../../assets/orcid-setting.png 'ORCiD E-mail Setting')

4. **Save Changes:** Once you have adjusted the privacy settings for your emails, click **Save** to apply the changes.
