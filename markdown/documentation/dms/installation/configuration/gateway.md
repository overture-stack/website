---
title: Configure the DMS Gateway
---

The DMS Gateway acts as an ingress controller where all incoming traffic and requests are received via a single port.

This simplifies communication and allows the Gateway to easily route requests to the correct underlying Overture service via convenient sub-paths (e.g. "_locahost:80/dms-ui_" or "_dms.test.cancercollaboratory.org/dms-ui_").

# Local Mode

If deploying in local mode, specify the port on which the DMS Gateway will be exposed.  Port 80 is used by default:

```shell
What port will the gateway be exposed on? [80]:
```

# Server Mode

If deploying in server mode, specify the [domain name](../prereq/domain) and [SSL certificate](../prereq/sslcert) you setup in the earlier pre-requisites.

1. Enter the base gateway URL using the configured domain:

```shell
What is the base DMS Gateway URL (example: https://dms.cancercollaboratory.org)? https://dms.test.cancercollaboratory.org

```

2. Enter the **absolute** path to the SSL certificate you installed earlier with Certbot.  For typically Certbot installs, this path should be "_**/etc/letsencrypt**_":

```shell
What is the absolute path for the SSL certificate ? /etc/letsencrypt
```