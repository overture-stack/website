---
title: Check Configuration File
---

After completing the configuration for all services, the value are saved successfully to the configuration YAML file (_**~/.dms/config.yaml**_):

```shell
Wrote config file to /root/.dms/config.yaml
```

View and verify that your configuration values were captured correctly in the YAML file with this command:

```shell
dms config get
```

The contents of the saved config file will be displayed.  Here is a sample extract:

```shell
---
gateway:
  pathBased: true
  hostPort: 443
  url: "https://dms.test.cancercollaboratory.org:443"
  sslDir: "/etc/letsencrypt"
healthCheck:
  retries: 15
  delaySec: 10
clusterRunMode: "SERVER"
version: "0.15.1"
network: "dms-swarm-network"
ego:
  api:
    tokenDurationDays: 30
    jwt:
      user:
        durationMs: 10800000
      app:
        durationMs: 10800000
    refreshTokenDurationMS: 43200000
    hostPort: 9000
    sso:
      google:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/google"
      github:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/github"
      linkedin:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/linkedin"
      orcid:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/orcid"
    url: "https://dms.test.cancercollaboratory.org:443/ego-api"
    dmsAppCredential:
      name: "dms"
      clientId: "dms"
      clientSecret: "abc123"

<...and so on...>
```