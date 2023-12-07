---
title: Using the Data Portal
---

The following sub-sections describe how to perform common tasks in the Data Portal that an end user would be interested in.

# Logging Into the Portal

To log into the Portal:

1. Click **Login** in the top-right corner in the header.

![Entity](../assets/login-page1.png 'Login Page') 

2. Select your preferred identity provider for login.


3. Grant the DMS platform access to your profile.

   - If you deny access, you must log in again with a different identity provider.


<Note title="If using ORCiD">Ensure your email address on your identity provider profile is publicly accessible. If not, adjust your settings based on the identity provider's instructions. Alternatively, choose another provider.</Note>

5. Once logged in, your name should appear in the top right, granting access to the **Profile & Token** page.

# Searching for Data

To search for data:

1. The data exploration page can be accessed by clicking the **Data Explorer** menu item in the top-right corner of the header.

![Entity](../assets/explorer-example.png 'Explorer Example')

2. You can use the **Filter facets** on the left to refine your query.

   - Each filter displays available values with an associated count indicating how many records have this value.
   - The magnifying glass allows you to search for specific values.


3. As you select filters, the displayed data updates dynamically.

![Entity](../assets/filtered-data.png 'Filtered Data')

4. Use the **Columns dropdown** to customize the displayed fields.

![Entity](../assets/columns.png 'Customize Columns')

5. Use the **Download dropdown** to export data as either a TSV or a Manifest.

| File      | Description |
| --------- | ----------- |
| Table TSV | TSV export of the results table. Exports all records if none are selected, or specific rows if selected. |
| Manifest  | A formatted file list for downloading from Score. Useful for bulk downloads using the Score CLI. Exports all records if none are selected, or specific rows if selected. |

# Accessing Your User Profile

1. Click your display name, then **Profile & Token** in the top-right of the header.

2. Your profile displays your name, email, and the identity provider used for login.

![Entity](../assets/profile-info.png 'Profile Info')

# Generating Your API Token

To generate an API token for secure DMS operations:

1. From your profile, click **Generate Token**.
   - Record your token and ensure its security.
   - Note: Generating a new token revokes previous ones.


![Entity](../assets/generate-token.png 'Generate Token')

## Viewing an Expired API Token

Expired tokens are labeled `Expired`. You'll need to generate a new token when the previous one expires.

![Entity](../assets/expired-token.png 'Expired Token')

## Revoking Your API Token

To revoke your token:

1. From your profile, click **Revoke Token**.
   - This action cannot be undone.

![Entity](../assets/revoke-token.png 'Revoke Token')

## Logging Out of the Portal

To log out:

1. Click your display name, then **Logout**. You'll be redirected to the Data Explorer.