---
title: Testing Data Upload
---

After you have completed all [post-deployment verification and configuration](../verify), the DMS platform is ready for user.

Here we will demonstrate and test a simple, end-to-end data upload.  We will use demo data available with the DMS to submit data, index it, configure it for display, and finally explore that data in the Data Portal.

# Configure User Permissions in Ego

First we must configure the correct permissions in Ego to allow us to execute data upload operations.

This configuration should have been completed during your [post-deployment verification and configuration](../verify), but we will double-check.

1. Log into Ego UI with the [original admin user you created](../verify#login-and-configure-ego) by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ego-ui |
| Server  | https://`<myDomain>`/ego-ui |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. From the left navigation, click **Groups** and verify that the `dms-admin` group has been created and is assigned these permissions: `DMS.WRITE`, `SONG.WRITE`, `SCORE.WRITE`.  These permissions are required to perform certain data upload operations:

![Entity](../../assets/ego-dms-admin2.png 'Ego DMS Admin')

3. From the left navigation, click **Users** and verify that your user was created with **USER TYPE** = `ADMIN`, is assigned the `dms-admin` group, and has these permissions: `DMS.WRITE`, `SONG.WRITE`, `SCORE.WRITE`

![Entity](../../assets/ego-first-user2.png 'Ego First User')

# Generate API Key in DMS UI

Now that you have verified your user has the correct permissions, we can generate our API Key directly from the DMS UI (Data Portal) itself.  The API Key is used for all subsequent operations with the various Overture service APIs you will interact with.

1. Log into Ego UI with the [original admin user you created](../verify#login-and-configure-ego-ui) by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/dms-ui |
| Server  | https://`<myDomain>` |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

![Entity](../../assets/dms-ui-login.png 'DMS UI Login')

2. Click your name in the top-right in the header and select **Profile & Token**. Your profile is displayed showing your name (as captured from your identity provider), your contact email (as captured from your identity provider), and the identity provider that you have logged in with:

![Entity](../../assets/profile-info2.png 'Profile Info')

3. Click **Generate Token**.  A new token is generated, with its validity period (in days) displayed to its left. **Record and remember your token value and keep it safe and secure**.  You can easily copy the value to your clipboard by clicking the **Copy** button:

![Entity](../../assets/generate-token.png 'Generate Token')

4. Log back into Ego UI, navigate back to your user profile, and verify that under `API Keys` the newly-generated token now appears with an `ACTIVE` state and the correct `SCOPES` (permissions):

![Entity](../../assets/api-token.png 'Check API Key')

# Create Study in Song

Next, we must create a study in Song. The concept of a study is used to group data that belongs together and must be submitted and indexed together.

Moving forward, we will use a set of sample data prepared for a test study with the ID, `ABC123`.

## Create Study Using cURL

To create your study via cURL:

1. Open a command-line terminal session.

2. Enter the following command:

```shell
curl -X POST "http://<url>/song-api/studies/ABC123/" -H  "accept: */*" -H  "Authorization: bearer <API KEY>" -H  "Content-Type: application/json" -d "{  \"description\": \"string\",  \"info\": {  },  \"name\": \"string\",  \"organization\": \"string\",  \"studyId\": \"ABC123\"}"
```

Enter the `<url>` based on your deployment mode:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/dms-ui |
| Server  | https://`<myDomain>` |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

For `<API KEY>`, enter the API Key you genereted earlier.

Leave `description`, `info`, `name`, `organization` blank (can be filled in optionally if you want).

## Verify Study Created

If successful, either the cURL command or the Swagger UI will return a successful response indicating the study is created in Song:

```shell
{
  "message": "Successfully created study 'ABC123'"
}
```

To verify this, you can query for the study by either:

1. cURL command:

```shell
curl -X GET "http://localhost:80/song-api/studies/ABC123" -H "accept: */*"
```

In either case, the study details are returned, and the `studyId` should be "ABC123":


{"info":{"array":true,"bigDecimal":true,"bigInteger":true,"binary":true,"boolean":true,"containerNode":true,"double":true,"float":true,"floatingPointNumber":true,"int":true,"integralNumber":true,"long":true,"missingNode":true,"nodeType":"ARRAY","null":true,"number":true,"object":true,"pojo":true,"short":true,"textual":true,"valueNode":true},"studyId":"ABC123","name":"string","organization":"string","description":"string"}



## Create Study Using Swagger UI



# Download and Configure Song Client

# Download and Configure Score Client

# Register Analysis Type with Song

# Submit Analysis to Song

# Create Manifest for Score

# Upload Data via Score

# Publish Analysis

# Index Study via Maestro

# Verify the Data in the Portal