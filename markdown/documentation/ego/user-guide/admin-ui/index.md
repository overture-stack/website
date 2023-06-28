---
title: Using the Admin UI
---

The Ego administrative UI allows you to easily mangae your applications, users, groups, and policies all from a single web interface.

# Logging In

To log into the Ego admin UI, follow these steps:

1. Navigate to `<url>/ego-ui` (replace `<url>` with the base URL or domain where you have deployed Ego).

![Ego Login](../../assets/ego-ui-login.png)

2. Choose the identity provider you want to use for login. In this example, we will use ORCiD.

![ORCiD Login](../../assets/orcid-login.png)

3. Grant access to Ego for your profile on the selected identity provider.

![ORCiD Grant Access](../../assets/orcid-grant2.png)

<Warning> **NOTE:** If you prefer not to grant Ego access, your only option is to log in again using a different identity provider that you are comfortable granting access to.</Warning>

4. After granting access, you may encounter an error message if your email address is not set to be publicly accessible on your identity provider profile.

![No Primary Email](../../assets/no-email.png)

If your identity provider allows adjusting this setting, you should make your email accessible. Refer to the [instructions here](../../../../installation/configuration/prereq/emails) for guidance. Alternatively, you can log in with a different provider that doesn't have such a setting or doesn't require exposing your email.

5. Once logged in successfully, the default view displays the list of users registered in Ego.

![Users](../../assets/users.png)

