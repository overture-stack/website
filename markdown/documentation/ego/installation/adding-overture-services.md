---
title: Adding Overture Services
---

# Stage

To add Stage to Ego:

1. **Create a new application:** From the Ego Admin UI's left-hand panel select **Applications**. From the Applications screen on the right-hand side click **Create**.

![Entity](../assets/exampleappcreation.png 'Ego-UI creating a new application')

Insert the following information:

| Field              | Value                                       |
| ------------------ | ------------------------------------------- |
| Name               | Stage                                       |
| Status             | Approved                                    |
| Application Type   | CLIENT                                      |
| Client             | Stage                                       |
| Client Secret      | Stage                                       |
| Redirect URI       | http://localhost:3000/api/auth/callback/ego |
| Error Redirect URI | http://localhost:3000/error                 |

You can leave the Groups and Users fields blank. Click the **save** button on the top right of the panel.

2.  **Create an environment variable file:** Within the cloned Stage repository locate your `.env.stage` file, if you have not created one yet duplicate the `env.schema` file and rename it to `.env.stage`.

3.  **Update environment variables:** Variables within this file are already preconfigured for a local setup:

```bash
######### Ego

# Auth provider
NEXT_PUBLIC_AUTH_PROVIDER=ego
ACCESSTOKEN_ENCRYPTION_SECRET=super_secret
SESSION_ENCRYPTION_SECRET=this_is_a_super_secret_secret

# Base url for Ego API
NEXT_PUBLIC_EGO_API_ROOT=http://localhost:8081

# Ego registered app id
NEXT_PUBLIC_EGO_CLIENT_ID=Stage
```

You will also need to update the `NEXT_PUBLIC_SSO_PROVIDERS` variable in line with the SSO provider(s) you have configured:

```bash
NEXT_PUBLIC_SSO_PROVIDERS=GOOGLE,GITHUB,ORCID,LINK
```

6. **Restart Stage:** From the command line exit out (Ctrl/Cmd + C), and re-run Stage `npm run dev`.

Once compiled you should be able to access Ego by clicking login on the upper right corner of Stage.

# Song

To add Song to Ego:

1. **Create a new application:** From the Ego Admin UI's left-hand panel select **Applications**. From the Applications screen on the right-hand side click **Create**.

Insert the following information:

| Field              | Value      |
| ------------------ | ---------- |
| Name               | Song       |
| Status             | Approved   |
| Application Type   | CLIENT     |
| Client             | song       |
| Client Secret      | songsecret |
| Redirect URI       | N/A        |
| Error Redirect URI | N/A        |

You can leave the Groups and Users fields blank. Click the **save** button on the top right of the panel.

<Warning>If the save button is disabled, provide an emply space " " within the Redirect URI and Error Redirect URI fields</Warning>

2.  **Update environment variables:** Within your `.env.song` file, update the fields th following fields

| Field                    | Value      |
| ------------------------ | ---------- |
| AUTH_SERVER_CLIENTID     | song       |
| AUTH_SERVER_CLIENTSECRET | songsecret |

Everything else remains the same (see example below)

```bash
# ============================
# Ego Integration (Required)
# ============================
# Configuration for the secure profile
SPRING_PROFILES_ACTIVE=secure

# Ego authentication settings
AUTH_SERVER_URL={{ego-host-url}}/o/check_api_key/
AUTH_SERVER_CLIENTID=song
AUTH_SERVER_CLIENTSECRET=songsecret
AUTH_SERVER_TOKENNAME=apikey
AUTH_SERVER_SCOPE_STUDY_PREFIX=song.
AUTH_SERVER_SCOPE_STUDY_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_SYSTEM=song.WRITE
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_PUBLIC_KEY_LOCATION={{ego-host-url}}/oauth/token/public_key
```

3. **Create a new policy:** From the Ego Admin UI's left-hand panel select **Policies**. From the Applications screen on the right-hand side click **Create**.

The policy fields appear in the right-hand panel. Populate them as follows:

| Field  | Description                                                                                                                                                |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name   | Descriptive name for your policy                                                                                                                           |
| Groups | Use the `+ Add` button to add existing groups and specify their access level (`READ`, `WRITE`, or `DENY`). To remove a group, click `X` next to the group. |
| Users  | Use the `+ Add` button to add existing users and specify their access level (`READ`, `WRITE`, or `DENY`). To remove a user, click `X` next to the user.    |

<Note title="What is a Policy?">A policy defines the context within which an application may grant READ/WRITE/DENY permissions (Read, Write or Deny) to a user or group. For more information, see our user guide on [Managing Policies](/ego/user-guide/admin-ui/policies/) </Note>

# Score

1. **Create a new applciation:** From the Ego Admin UI's left-hand panel select **Applications**. From the Applications screen on the right-hand side click **Create**.

Insert the following information:

| Field              | Value      |
| ------------------ | ---------- |
| Name               | Song       |
| Status             | Approved   |
| Application Type   | CLIENT     |
| Client             | song       |
| Client Secret      | songsecret |
| Redirect URI       | N/A        |
| Error Redirect URI | N/A        |

You can leave the Groups and Users fields blank. Click the **save** button on the top right of the panel.

<Warning>If the save button is disabled, provide an emply space " " within the Redirect URI and Error Redirect URI fields</Warning>

2.  **Update environment variables:** Within your `.env.score` file, update the fields th following fields

| Field                    | Value       |
| ------------------------ | ----------- |
| AUTH_SERVER_CLIENTID     | score       |
| AUTH_SERVER_CLIENTSECRET | scoresecret |

Everything else remains the same (see example below)

```bash
# ============================
# Ego Configurations
# ============================

# Configuration for the secure profile
SPRING_PROFILES_ACTIVE=secure

# Ego authentication settings
AUTH_SERVER_PROVIDER=ego
AUTH_SERVER_URL={{ego-host-url}}/ego/api/oauth/token
AUTH_SERVER_TOKENNAME=apiKey # Default: 'apiKey'
AUTH_SERVER_CLIENTID=score
AUTH_SERVER_CLIENTSECRET=scoresecret
... # All subsequent variables remain unchanged
```

3. **Create a new policy:** From the Ego Admin UI's left-hand panel select **Policies**. From the Applications screen on the right-hand side click **Create**.

The policy fields appear in the right-hand panel. Populate them as follows:

| Field  | Description                                                                                                                                                |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name   | Descriptive name for your policy                                                                                                                           |
| Groups | Use the `+ Add` button to add existing groups and specify their access level (`READ`, `WRITE`, or `DENY`). To remove a group, click `X` next to the group. |
| Users  | Use the `+ Add` button to add existing users and specify their access level (`READ`, `WRITE`, or `DENY`). To remove a user, click `X` next to the user.    |

<Note title="What is a Policy?">A policy defines the context within which an application may grant READ/WRITE/DENY permissions (Read, Write or Deny) to a user or group. For more information, see our user guide on [Managing Policies](/ego/user-guide/admin-ui/policies/) </Note>
