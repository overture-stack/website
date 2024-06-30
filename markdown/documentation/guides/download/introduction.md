---
title: Downloading Data from your Platform
---

# This guide is for

- Anyone seeking guidance on how to download data from an Overture platform

# You will need

- **Docker:** We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)


- **An Overture platform:** If you do not have a platform to submit data to and want to follow along, you can follow our [deployment guide](/guides/deployment) or run our quickstart with the following commands

**1. Clone the Quickstart repository**

```bash
git clone https://github.com/overture-stack/composer.git
```

**2. With Docker open run the docker-compose**

```bash
docker compose up -d
```

<Warning>**Ensure enough resources get allocated to Docker** We recommend a minimuim CPU limit of `8`, memory limit of `8 GB`, swap of `2 GB`, and virtual disk limit of `64 GB`. You can access these settings by selecting the **cog wheel** found on the top right of the Docker desktop app and selecting **resources** from the left panel.</Warning>

<Note title="Help us make our guides better">If you can't find what your are looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>

