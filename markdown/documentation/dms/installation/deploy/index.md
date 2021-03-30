---
title: Deploy Your Cluster
---

After your [configuration is complete](../configuration/configure-dms) and saved to file, you can deploy all services to your cluster:

1. Before starting, you can optionally open a separate terminal window to monitor services as they deploy to Docker.  The command below refreshes every 2 seconds, but you can adjust the interval to your needs:

```shell
$ watch -n 2 docker service ls
```

2. Execute the following command to deploy your saved configuration:

```shell
$ dms cluster start
```

3. As the deployment executes, status messages will appear as each service is spun up.  Here is a sample extract:

```shell
Starting deployment...

🏁️ Deployment for service minio-api finished successfully


🏁️ Deployment for service song-db finished successfully


🏁️ Deployment for service gateway finished successfully


🏁️ Deployment for 'ego-db' finished


⏳ Waiting for 'elasticsearch' service to be healthy..


⏳ Waiting for 'ego-api' service to be healthy..

<...and so on...>
```

4. It may take some time for the deployment to exit successfully, as multiple services need to be deployed and the relatively larger services may take some time to complete (e.g. Ego API, Elasticsearch).  Depending on your system resources, if the process takes too long and you encounter timeouts, there is a configurable timeout period (in seconds) and # of retries in the `~/.dms/config.yaml` file, which you can adjust and retry deployment if necessary:

```shell
healthCheck:
  retries: 15
  delaySec: 10
```

Once complete, a success message appears, including a note (with a link to documentation) reminding you to perform necessary [post-deployment verification and configuration tasks](../verify) to make sure the DMS platform is up and running healthily:

```shell
Deployment completed successfully

*****************************************************************************************************
!!! NOTE !!!

    Before using the DMS platform, please complete post-deployment verification
    and configuration steps required to check the health of your deployment.  For
    instructions, see:
    https://overture.bio/documentation/dms/installation/verify/

*****************************************************************************************************
```