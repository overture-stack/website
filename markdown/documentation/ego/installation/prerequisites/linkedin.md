---
title: Linkedin OAuth Setup
---

For full details on setting up OAuth 2.0 for an application to work with LinkedIn, refer to the <a href="https://docs.wpwebelite.com/social-network-integration/linkedin/#:~:text=To%20create%20a%20LinkedIn%20App,.com%2Fsecure%2Fdeveloper.&text=On%20that%20page%20click%20on,which%20do%20contain%20a%20star." target="_blank">Official LinkedIn documentation</a>.

For your convenience, we provide summary steps below:

1. **Setup an account with LinkedIn Developers:** If you don't already have one, create an account on <a href="https://developer.linkedin.com/" target="_blank">LinkedIn Developers</a>. If you are an individual working alone with the Overture suite, you may wish to use a personal account. However, if you work for a larger organization or institution, they may already have a designated account that you can or should be using. Please consult your IT department if required.


2. **Log into LinkedIn Developers:** Sign in to your LinkedIn Developers account.


3. **Create a New App:** Click on **My apps > Create app** in the top menu.

![Entity](../../assets/linkedin-create-app.png 'LinkedIn Create App')


4. **Enter App Details:** Provide the following information for your app:

- **App name:** Enter a descriptive name for your app.
- **LinkedIn Page:** Enter or select the LinkedIn page to be associated with your app.  If you do not have one, you can create one (either real or placeholder) by clicking **Create a new LinkedInPage**.
- **App logo:** Upload a logo for your app.
- **Legal agreement:** Read and agree to the API Terms of Use.


5. **Create the App:** Click on **Create app**.

![Entity](../../assets/linkedin-create-app2.png 'LinkedIn Create App 2')


6. **Copy Client ID and Client Secret:** After the app is registered, you will see the **Client ID** and **Client Secret** displayed. Make sure to copy and securely store these for later use. You can always access and view these values by going to the **Auth** tab in the app's top-level navigation.

![Entity](../../assets/linkedin-secret.png 'LinkedIn Secret')

7. **Configure Authorized Redirect URL:** In the app's top navigation menu, go to **Auth** and under **OAuth 2.0 settings**, add an **Authorized redirect URL** for your app. This is the URI where LinkedIn will redirect users once they have authenticated with the provider (i.e., redirect them back to Ego once logged in successfully). Use the following format:

`<url>/ego-api/oauth/login/linkedin`

Replace `<url>` with the base URL where you have deployed Ego. For example, it could be a specific domain name, server address, or even localhost if running locally. Here are some examples:

- `https://ego.overture.bio/ego-api/oauth/login/linkedin`
- `https://dms.test.cancercollaboratory.org/ego-api/oauth/login/linkedin`
- `http://localhost:80/ego-api/oauth/login/linkedin`

8. **Use Client ID and Client Secret:** During [Ego installation](/documentation/ego/installation/installation), provide the **Client ID** and **Client Secret** when prompted. **However, LinkedIn requires a few additional steps after Ego installation for the process to be complete.**

9. **Add the Sign in with LinkedIn Product:** Go to the **Products** tab and select the **Sign in with LinkedIn** product. This allows LinkedIn users to sign into your app.

![Entity](../../assets/linkedin-products.png 'LinkedIn Products')

10. **Agree to Legal Terms and Add Product:** Read and agree to the legal terms, then click **Add Product.**

![Entity](../../assets/linkedin-add-product.png 'LinkedIn Add Product')

11. **Wait for Product Review:** Your request to add the product will be submitted for review, with the status set to `Review in progress`. Wait for some time and refresh the page to see if the product has been approved and added. Usually, this is very quick (within a few minutes), but allow up to 24 hours for this to process. If after 24 hours you still have not been approved, contact LinkedIn support.

![Entity](../../assets/linkedin-review.png 'LinkedIn Product Request Review')

12. **Verify Scopes:** To verify that the **Sign in with LinkedIn** product was properly added, go to the **Settings** tab. Under **OAuth 2.0 scopes**, verify that these scopes have been added: `r_emailaddress`, `r_liteprofile`.

![Entity](../../assets/linkedin-scopes.png 'LinkedIn Scopes')
