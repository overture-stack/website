---
title: Deploying Your Cluster
---

Once your [configuration is complete](../configuration/configure-dms) and the details are saved to a file, you're ready to deploy all the necessary services to your cluster. Here's a step-by-step guide:

1. **Monitor Services with Docker:** Begin by opening a separate terminal window. This will allow you to actively monitor the services that Docker is deploying. The following command will refresh every 2 seconds, but you can adjust the interval as you see fit:

```bash
watch -n 2 docker service ls
```

2. **Deploy Configuration:** To deploy the configuration you saved earlier, run:

```bash
dms cluster start
```

3. **Monitor Deployment Status:** As deployment progresses, you'll see status messages for each service:

```bash
Starting deployment...

🏁️ Deployment for service minio-api finished successfully
🏁️ Deployment for service song-db finished successfully
🏁️ Deployment for service gateway finished successfully
🏁️ Deployment for 'ego-db' finished
⏳ Waiting for 'elasticsearch' service to be healthy..
⏳ Waiting for 'ego-api' service to be healthy..

<...and so on...>
```

4. **Adjusting for Longer Deployments:** The deployment process might be time-consuming due to the multiple services involved. In case you run into timeout issues, you can adjust both the timeout period and the number of retries in the `~/.dms/config.yaml`:

```bash
healthCheck:
  retries: 15
  delaySec: 10
```

Once everything is deployed, you should see a confirmation message:

```bash
Deployment completed successfully

*****************************************************************************************************
!!! NOTE !!!

Before using the DMS platform, ensure to complete the post-deployment verification and configuration steps. This will help check the health of your deployment. For detailed instructions, visit: 
https://overture.bio/documentation/dms/installation/verify/

*****************************************************************************************************
```

<Warning>**NOTE:** The DMS platform does not offer automatic data volume backup. It's crucial for administrators to establish and manage data backup strategies.</Warning>

<Warning>**NOTE:** At present, DMS only supports deployment to a singular cluster. Hence, it's tailored for single-node systems.</Warning>
