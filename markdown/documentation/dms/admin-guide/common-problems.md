---
title: Common Problems
---

This section describes some common problems and known issues currently present in the DMS platform, and suggestions on how to troubleshoot and/or work around them.

# DMS not running on Apple Silicon

Our software is currently only compatible with Intel-based Macs, not Apple Silicon devices. We are actively working on updates to support Apple silicon. Thank you for your understanding.

# Arranger UI URL Inconsistency

**Problem:**

When accessing the Arranger UI, the URL that must be entered requires a trailing slash `\` in the final sub-path (e.g. `\arranger-ui\`), otherwise an `HTTP 404 Not Found` error is encountered and the URL cannot be resolved.

This is inconsistent from other services, where a trailing slash is **NOT** required (e.g. `\ego-ui`).

**Cause:**

This is a [known issue](https://github.com/overture-stack/arranger/issues/655) to be addressed in a future DMS release.

**Solution:**

Currently, the trailing slash must be added to the URL to access the Arranger UI.

# Docker Daemon Error When Running DMS Installer

**Problem:**

When trying to run the DMS installer, a Docker Daemon error may occur, indicating a failure to attach to the network.  The DMS crashes and exits:

```shell
$ dms -h

Status: Downloaded newer image for overture/dms:0.12.1
docker: Error response from daemon: attaching to network failed, make sure your network options are correct and check manager logs: context deadline exceeded.
```

sudo groupadd docker
sudo usermod -aG docker $USER
sudo reboot
curl https://raw.githubusercontent.com/overture-stack/dms/0.15.1/src/main/bin/dms-docker > dms
chmod +x dms
docker swarm init
dms -h
Got the error:
Status: Downloaded newer image for overture/dms:0.15.1 docker: Error response from daemon: attaching to network failed, make sure your network options are correct and check manager logs: context deadline exceeded.

**Cause:**

This may be caused by installing Docker in a non-standard way, not following the official installation instructions from the [Docker documentation site](https://docs.docker.com/engine/install/).

For example, this installation using the `snapd` package manager, instead of the Docker site itself, causes the issue:

```shell
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
$ sudo reboot
$ curl https://raw.githubusercontent.com/overture-stack/dms/1.0.0/src/main/bin/dms-docker > dms
$ chmod +x dms
$ docker swarm init
$ dms -h

Status: Downloaded newer image for overture/dms:0.15.1 docker: Error response from daemon: attaching to network failed, make sure your network options are correct and check manager logs: context deadline exceeded.
```

**Solution:**

Make sure to install Docker using installation instructions directly from the [Docker documentation site](https://docs.docker.com/engine/install/).

# OAUTH Error Pages Not Displaying

**Problem:**

When an OAUTH authentication error occurs, a generic HTTP error page (e.g. 403) is shown, instead of the proper descriptive error page.  For example, when a user's email address is not found, when a user has denied Ego access to their profile, etc.  The generic error page is not informative and is not the correct one to display:

![Entity](../assets/generic-error.png 'Generic Error')

The correct error message should be stylized and include the type of error that occurred, a description of why it occurred, and a suggestion on how it can be rectified.  For example:

![Entity](../assets/no-email.png 'No Primary Email')

**Cause:**

The `dms` application's **ERROR REDIRECT URI** has not been configured in Ego UI.

**Solution:**

Add the correct **ERROR REDIRECT URI** to the `dms` application in Ego UI.

1.  Log into Ego UI by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ego-ui |
| Server  | https://`<myDomain>`/ego-ui |

Where:
- `<port>` is the port on which you will deploy the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. From the left navigation, click **Applications** and verify that the `dms` application has been created.


3.  Click **Edit** on the `dms` application and in the **ERROR REDIRECT URI** field, enter:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/dms-ui/403 |
| Server  | https://`<myDomain>`:443/dms-ui/403 |

Where:
- `<port>` is the port on which you will deploy the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

This ensures that when OAUTH errors occurs, the DMS UI (Data Portal) is routed to the correct error page to display to the end user.

4.  Click **Save**.  Here is an example of the resulting application changes:

![Entity](../assets/dms-app.png 'DMS App Error Redirect URI')

# Omitting Bearer Prefix When Using Swagger UI

**Problem:**

Even after authenticating with the Swagger UI for a given API service (e.g. Ego API, Song API, etc.), using the endpoints always results in a `Forbidden Access` error.  For example:

![Entity](../assets/swagger-error.png 'Swagger Access Error')

**Cause:**

Make sure that, when authenticating with the Swagger UI, you have prefixed your credential (e.g. JWT, API Key, whichever applies in the given context) with the term `Bearer` and a whitespace. This is a common human/user error that occurs.

For example: `Bearer abc123DEF456ghi789`

**Solution:**

Make sure the `Bearer` prefix is added before your credential (e.g. JWT, API Key, whichever applies) when authenticating with the API. For example:

![Entity](../assets/bearer2.png 'Bearer Prefix')

# User Has No Permissions to Generate an API Token

**Problem:**

After logging into the Data Portal and trying to generate an API token from their profile page, an end user receives an error indicating they do not have permissions to generate an API token.  For example:

![Entity](../assets/no-permissions.png 'No Permissions')

**Cause:**

The user has not been assigned the correct permissions, or any permission at all, in Ego UI.  For example, note that this user's profile Ego UI has empty **Groups** and empty **Permissions**:

![Entity](../assets/empty-permissions.png 'Empty Permissions')

**Solution:**

Make sure the user's permissions are not empty in Ego UI and assign then the correct permissions.

1.  Log into Ego UI by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ego-ui |
| Server  | https://`<myDomain>`/ego-ui |

Where:
- `<port>` is the port on which you will deploy the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. From the left navigation, click **Users** and click **Edit** for the user in question.


3. Under **Groups**, make sure the user is assigned a group with the correct permissions, OR under **Permissions** directly assign the necessary permissions.  The permissions needed for their API key depends on functions or use cases the user needs to fulfill.  For example, if the user needs to submit analyses via Song, then upload the data via score, they will need the `SONG.WRITE` and `SCORE.WRITE` permissions, respectively:

![Entity](../assets/correct-permissions2.png 'Correct Permissions')