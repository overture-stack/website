---
title: Check Docker Services are Running
---

Although the Installer script indicates the deployment completed successfully, as a sanity check, make sure all Overture services have replicas running using this command:

```shell
docker service ls
```

All services should display with replicas indicating "**1/1**":

![Entity](../../assets/docker-check-services.png 'Docker Check Services')

The specific services you must check for are:

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
| minio-api           | Only used if MinIo chosen as object storage service |
| score-api           | Score API |
| song-api            | Song API |
| song-db             | Song PostgreSQL database |
