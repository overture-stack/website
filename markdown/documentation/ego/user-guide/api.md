---
title: Using the API
---

In addition to using the Ego Admin UI, you may also interact with Ego using the following methods:

- Using **cURL commands** in the command line

- Using the **Swagger UI**
  - The Swagger UI is ideal for exploration and simple use cases. It will contain detailed descriptions of all the available endpoints, expected inputs, and error responses.
  - Depending on your deployment, you can access the Swagger UI from one of the following links:

|Mode|URL|
|--|--|
|**Local**| `http://localhost:8080/swagger-ui.html` |
|**Server**| `https://<YOUR-URL>/ego-api/swagger-ui.html#` |

In both of these scenarios, the user or application must first authenticate with the Ego API. The sections below describe how to authenticate with and use the Ego API.  

# Retrieving Your Ego JWT

To make valid requests to the Ego API, you will need to obtain an Ego JWT with administrative privileges.

To retrieve your Ego Admin JWT:

1. Open your web browser and access the developer tools by clicking on the **Network tab**. Keep this tab open as we will need to extract our JWT after logging into the Ego Admin UI. The method to access the developer tools may vary depending on the browser you are using. For detailed instructions, please consult your browser's official documentation. For instance, in Google Chrome, you can open the menu located at the top right (click the three vertical dots ...), then navigate to **More Tools** > **Developer Tools**, and finally select the **Network tab**.

![Entity](../assets/network-tab.png 'Network Tab')

2. To confirm your administrative privileges from the Ego Admin UI, follow these steps:

 - Click on **Users** in the left-hand menu of the Ego Admin UI.

 - Select your user profile from the list that appears and confirm your user type is set to `ADMIN`

![Entity](../assets/user-admin2.png 'Admin Role')

3. From the **Network** tab in your browser's developer tools, search for a request with the suffix `ego-token?client_id=ego-ui`. Click on that request, and then navigate to the **Response** tab. Here, you will be able to view your Ego JWT.

![Entity](../assets/ego-jwt.png 'Ego JWT')

Alternatively, you can follow these steps:

- Click the **Application** tab in your browser's developer tools.
- On the left-hand side, navigate to **Local Storage** and select the Ego Admin UI URL.
- Locate the `user-token value`, which contains your Ego JWT.

![Entity](../assets/local-storage.png 'Local Storage')

4. Copy and record your JWT, and keep it secure and safe. Your JWT contains sensitive authorization information, and it should only be accessible to you. We will use this JWT for authorization with the Ego API.

# Generating an API Key for a User

Next, we will use the Ego API to generate an API Key for another user, so that they have `WRITE` access to both Song and Score.

## Prerequisites

1. Open the Ego Admin UI and click on **Users** in the left-hand menu. Then, select the user for whom you want to generate the API Key. This will display their profile. Copy the `ID` of the user, as it will be required when supplying the necessary parameters to the relevant endpoint.

![Entity](../assets/copy-id.png 'Copy ID')

2. Click **Applications** from the left-hand menu and ensure the required applications, for which you want the API Key generated, have been configured.  For our example, we want to provide access to the Song and Score applications. For more information on configuring applications within Ego see our page on <a href="/documentation/ego/user-guide/admin-ui/applications" target="_blank">managing applications</a>.

![Entity](../assets/applications.png 'Apps')

3. Select **Policies** from the lefthand menu and make sure the required policies you want the API Key to be generated for have been configured. In this  example, we want policies for the Song and Score applications. For more information on configuring policies within Ego see our page on <a href="/documentation/ego/user-guide/admin-ui/policies" target="_blank">managing policies</a>.


![Entity](../assets/policies.png 'Policies')

4. Next, make sure the user you want to generate the API Key for has the necessary permissions already assigned to their profile. If the user does not have the proper permissions assigned, the key cannot be generated.

![Entity](../assets/scopes.png 'Scopes')

<Note title="Tip">The example we provide here is applicable to all Ego API endpoints.  Using other endpoints follows a similar process, where you must first authorize with the API, then supply the necessary input parameters to the desired endpoint.  Both Swagger UI and cURL are available to make requests to the API.</Note>

## Using Swagger UI

To generate an API Key using the Swagger UI:

1. Go to the swagger UI for your installation at `<url>/ego-api/swagger-ui.html`, where `<url>` is the base URL where Ego is deployed.

2. In the top right, click the **Authorize** button (open lock icon):

![Entity](../assets/authorize1.png 'Authorize')

3. A dialog appears asking you to authorize with the API.  In the `Value` box, enter the following:

* `Bearer <JWT>`

Where `<JWT>` is the Ego Admin JWT you recorded earlier in the prerequisite steps.

4. Click **Authorize**:

![Entity](../assets/authorize2.png 'Authorize Dialog')

5. If successful, the open lock icon becomes closed, and the dialog will show a **Logout** button:

![Entity](../assets/authorized.png 'Authorized')

6. You are now authorized to use the endpoints. Under the **API Keys** section, click the `POST` endpoint called `issueApiKey`.  The endpoint input parameters are displayed:

![Entity](../assets/params1.png 'Try Params')

7. Click **Try it out**.  You can now enter the parameters needed to generate the API Key:

| Param | Description |
|-------|-------------|
| description | Optional description of the API Key being generated. |
| scopes | Enter the specific scopes or permissions to grant for this API Key.  In our example, we want to provide `WRITE` access to the SONG and SCORE policies.  Hence, we add an entry for each of `SONG.WRITE` and `SCORE.WRITE`. |
| user_id | ID of the user that you recorded earlier from the Ego Admin UI, for whom this API Key is being generated. |

![Entity](../assets/params2.png 'Enter Params')

8. Click **Execute**.  If successful, the **responses** section will show a response indicating the API Key was generated:

```shell
{
  "name": "1a1a72a4-224f-41a0-9825-c0dacadba228",
  "scope": [
    "SONG.WRITE",
    "SCORE.WRITE"
  ],
  "expiryDate": "2021-05-06T01:42:35.228+0000",
  "issueDate": "2021-04-06T01:42:35.228+0000",
  "isRevoked": false,
  "description": null
}
```

9. You can also log back into the Ego Admin UI and check that an `ACTIVE` API Key with the correct permissions has been generated in that user's profile:

![Entity](../assets/api-key.png 'API Key')

## Using cURL

To generate the API Key via a cURL command:

1. Execute the following cURL command:

```shell
curl -X POST "<url>/ego-api/o/api_key?scopes=<scope1>&scopes=<scope2>&user_id=<userId>" -H "accept: application/json" -H "Authorization: Bearer <JWT>"
```

Where:

* `<url>` is the base URL you have deployed Ego to
* `<scope1>`, `<scope2>`, etc. are the specific scopes you want to assign - In our example it will be `SONG.WRITE` and `SCORE.WRITE`
* `<userId>` is the internal Ego ID for the user that the API Key is being generated for
* `<JWT>` is the Ego Admin JWT you recorded earlier 

For example:

```shell
curl -X POST "https://dms.test.cancercollaboratory.org/ego-api/o/api_key?scopes=SONG.WRITE&scopes=SCORE.WRITE&user_id=88d45eb5-8d43-41ec-9af5-ad956f3a7fb6" -H "accept: application/json" -H "Authorization: Bearer <JWT>"
```

2. If successful, the response will indicate that the API Key was generated:

```shell
{"name":"5c93077b-bcd6-4840-bad2-5dc3672eec50","scope":["SONG.WRITE","SCORE.WRITE"],"expiryDate":"2021-05-06T02:13:34.559+0000","issueDate":"2021-04-06T02:13:34.559+0000","isRevoked":false,"description":null}
```

3. You can also log back into the Ego Admin UI and check that an `ACTIVE` API Key with the correct permissions has been generated in that user's profile:

![Entity](../assets/api-key.png 'API Key')

