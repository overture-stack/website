---
title: Common Problems
---

This section outlines common problems and known issues in the DMS platform, along with troubleshooting steps or workarounds.

- [I can't run DMS on my Apple Silicon device](##dms-not-running-on-apple-silicon)
- [I get an HTTP 404 error when trying to access the Arranger UI without a trailing slash](##arranger-ui-url-inconsistency)
- [I encountered a Docker Daemon error while running the DMS installer](##docker-daemon-error-when-running-dms-installer)
- [I see a generic error page instead of the OAUTH error page](##oauth-error-pages-not-displaying)
- [I'm authenticated in Swagger UI but still get a 'Forbidden Access' error](##omitting-bearer-prefix-when-using-swagger-ui)
- [I can't generate an API token from my profile page in the Data Portal](##user-has-no-permissions-to-generate-an-api-token)
## DMS not running on Apple Silicon

Currently, our software supports only Intel-based Macs and not Apple Silicon devices. We are actively working on updates for Apple Silicon compatibility. We appreciate your patience.

## Arranger UI URL Inconsistency

**Problem:**  
The URL required to access the Arranger UI needs a trailing slash `\` in the final sub-path (e.g., `\arranger-ui\`). Without it, an `HTTP 404 Not Found` error is encountered. This is different from other services where a trailing slash is **NOT** necessary (e.g., `\ego-ui`).

**Cause:**  
This is a [known issue](https://github.com/overture-stack/arranger/issues/655) to be addressed in an upcoming DMS release.

**Solution:**  
Always add the trailing slash when accessing the Arranger UI.
## Docker Daemon Error When Running DMS Installer

**Problem:**  
When trying to run the DMS installer, a Docker Daemon error may occur, indicating a failure to attach to the network. The DMS crashes and exits:
```shell
$ dms -h

Status: Downloaded newer image for overture/dms:0.12.1
docker: Error response from daemon: attaching to network failed, make sure your network options are correct and check manager logs: context deadline exceeded.
```
**Cause:**  
The error might arise if Docker was installed in a non-standard manner or if the official installation instructions from the [Docker documentation site](https://docs.docker.com/engine/install/) weren't followed.

**Solution:**  
Ensure Docker is installed following the instructions directly from the [Docker documentation site](https://docs.docker.com/engine/install/).

## OAUTH Error Pages Not Displaying

**Problem:**  
When an OAUTH authentication error occurs, a generic HTTP error page (e.g. 403) is shown, instead of the proper descriptive error page. The generic error page is not informative and is not the correct one to display:

![Entity](../assets/generic-error.png 'Generic Error')

**Cause:**  
The `dms` application's **ERROR REDIRECT URI** has not been configured in Ego UI.

**Solution:**  
Configure the **ERROR REDIRECT URI** in the `dms` application in Ego UI. Steps include:

1. Log into Ego UI.
2. Navigate to **Applications** and verify that the `dms` application exists.
3. Edit the `dms` application.
4. Enter the appropriate **ERROR REDIRECT URI**.
5. Save your changes.

![Entity](../assets/dms-app.png 'DMS App Error Redirect URI')
## Omitting Bearer Prefix When Using Swagger UI

**Problem:**  
Even after authenticating with the Swagger UI for a given API service, using the endpoints results in a `Forbidden Access` error.

![Entity](../assets/swagger-error.png 'Swagger Access Error')

**Cause:**  
Authentication in Swagger UI might not have the `Bearer` prefix before the token or API key.

**Solution:**  
Always include the `Bearer` prefix followed by a space when authenticating in Swagger UI.

![Entity](../assets/bearer2.png 'Bearer Prefix')

## User Has No Permissions to Generate an API Token

**Problem:**  
End users might encounter an error when trying to generate an API token from their profile page in the Data Portal.

![Entity](../assets/no-permissions.png 'No Permissions')

**Cause:**  
The user might not have the necessary permissions in Ego UI.

**Solution:**  
Ensure the user has the appropriate permissions in Ego UI.

1. Log into Ego UI.

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ego-ui |
| Server  | https://`<myDomain>`/ego-ui |



2. Navigate to **Users**.


3. Edit the user's permissions or group assignments as needed.