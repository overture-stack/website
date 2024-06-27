---
title: Submitting Data to your Platform
---

# This guide is for

- Anyone seeking guidance on how to submit data to an Overture platform. 

<Note title="Help us make our guides better"> If you can't find what you are looking for, please [submit a GitHub request](https://github.com/overture-stack/website/issues/new?assignees=&labels=&projects=&template=Feature_Requests.md) or contact us by email at contact@overture.bio</Note>

# You will need

- **Docker:** We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)


- **An Overture platform:** If you do not have a platform to submit data to and want to follow along, you can follow our [deployment guide](/guides/deployment) or run our quickstart with the following commands

**1. Clone the Quickstart repository**

```bash
git clone -b develop https://github.com/overture-stack/composer.git
```

**2. With Docker open run the docker-compose**

```bash
docker compose up -d
```

<Warning>**Ensure enough resources get allocated to Docker** We recommend a CPU limit of `8`, memory limit of `12 GB`, swap of `4 GB`, and virtual disk limit of `128 GB`. You can access these settings by selecting the **cog wheel** found on the top right of the Docker desktop app and selecting **resources** from the left panel.</Warning>

