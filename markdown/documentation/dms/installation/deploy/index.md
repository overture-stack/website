---
title: Deploying Your Cluster
---

After your [configuration is complete](../configuration/configure-dms) and saved to file, you can deploy all services to your cluster:

1. Open a separate terminal window to monitor the services that will be deployed to Docker. This command refreshes every 2 seconds, but feel free to adjust the interval:

```shell
watch -n 2 docker service ls
```

2. To deploy your saved configuration, execute:

```shell
dms cluster start
```

3. Status messages will display during deployment for each service:

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

4. The deployment might take a while due to multiple services being deployed. If you face timeouts, adjust the timeout period and retries in the `~/.dms/config.yaml`:

```shell
healthCheck:
  retries: 15
  delaySec: 10
```

Upon completion, you'll see:

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

<Warning>**NOTE:** The DMS platform doesn't support automatic backup of data volumes. Administrators should handle data backup strategies.</Warning>

<Warning>**NOTE:** DMS currently supports deployment to a single cluster, As such it is intended for single node systems.</Warning>