---
title: Song Server Integration
---

As a data transfer management system, Score is focused on managing data upload and download, and does not handle the complexities of file metadata validation. To handle this, Score is built to interact with a required companion application, [Song](/documentation/song).  Song is responsibe for validating file metadata, assigning unique global identifiers for data management, assigning permisssions for open (public) versus controlled (authentication required) file access, and so on.

As such, a Song server must be setup for use with Score.  See [here](/documentation/song/installation/installation/) for instructions on how to deploy a Song server.  Once the Song server is setup, Score can be configured to connect to it using the `prod` profile in the `score-server-[version]/conf/application.properties` file.

# Configuration Example

To connect Score to your Song server, in the `score-server-[version]/conf/application.properties` file, make sure the `prod` profile exists and configure these settings:

| Setting | Requirement | Description |
|---------|-------------|-------------|
| `url` | Required | URL to the Song server API that you have setup. When communicating with Song, Score will make requests via this API. |
| `ssl.enabled` | Optional | If using SSL encryption to securely communicate with Song, set this to `true`.  Else if not using SSL, set this to `false.` |

For example:

```yaml
metadata:
   url: "http://localhost:8089/"
   ssl.enabled: false
```