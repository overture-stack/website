---
title: Post-Deployment Verification & Configuration
---

After successfully [deploying all services to your cluster](../deploy), it's essential to conduct post-deployment verification and configuration to ensure the DMS platform is running optimally.

Even if the Installer script suggests a successful deployment, verify all Overture services are active using:

```bash
docker service ls
```

All services should display replicas as **1/1**:

![Entity](../../assets/docker-check-services.png 'Docker Check Services')

The services inspected here and verified in the following pages include:

| Service / Container Name | Description |
| --------------------| ------------|
| arranger-ui         | Arranger administrative UI |
| arranger-server     | Arranger backend server |
| dms-ui              | DMS data portal |
| ego-api             | Ego API |
| ego-db              | Ego PostgreSQL database |
| ego-ui              | Ego administrative UI |
| elasticsearch       | Elasticsearch |
| gateway             | DMS gateway / ingress controller |
| maestro             | Maestro indexing service |
| minio-api           | Used only if MinIo is the selected object storage service |
| score-api           | Score API |
| song-api            | Song API |
| song-db             | Song PostgreSQL database |
