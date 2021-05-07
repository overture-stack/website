---
title: Other Bootstrap Properties
---

In addition to the `score-server-[version]/conf/application.properties` file that is created by default when you unzip the distribution, you must also create another file in the same `conf` folder.  This file, `bootstrap.properties`, will contain some additional configurations required by the Score server.

Assuming the directory path of the distribution is `$SCORE_SERVER_HOME`, do the following:

1. Switch to the Score server configuration folder:

```bash
$ cd $SCORE_SERVER_HOME/conf
```

2. Using the text editor of your choice, create a new file in the `/conf` directory named `bootstrap.properties`, and add the following settings:

 Setting | Requirement | Description |
|---------|-------------|-------------|
| `spring.cloud.vault.enabled` | Required | If [HashiCorp's Vault](https://www.vaultproject.io/) solution is being used to manage your authentication secrets, set this to `true`.  Else, set this to `false`.  Typically, most deployments will no be using Vault and hence this value should be defaulted to `false`. |

For example:

```yaml
spring.cloud.vault.enabled=false
```

3. Save the file.