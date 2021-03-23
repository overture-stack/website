---
title: Deploy Your Cluster
---

After your configuration is complete and saved to file, you can deploy all services to your cluster:

1. Before starting, you can optionally open a separate terminal window to monitor services as they deploy to Docker.  The command below refreshes every 2 seconds, but you can adjust the interval to your needs:

```shell
watch -n 2 docker service ls
```

2. Execute the following command to deploy your saved configuration:

```shell
dms cluster apply
```

3. As the deployment executes, status messages will appear as each service is spun up.  Here is a sample extract:

```shell
???
```

4. It may take some time for the deployment to exit successfully, as multiple services need to be deployed and the relatively larger services may take some time to complete (e.g. Ego API, Elasticsearch).  Depending on your system resources, if the process takes too long and you encounter timeouts, there is a configurable timeout period (in seconds) and # of retries in the _**~/.dms/config.yaml**_ file, which you can adjust and retry deployment if necessary:

```shell
healthCheck:
  retries: 15
  delaySec: 10
```

Once complete, a success message appears:

```shell
Deployment completed successfully
```

After completion, you must perform some [post-deployment verification and configuration tasks](../deploy-and-verify) to make sure the DMS platform is up and running healthily.  For details, continue reading the subsequent sections.