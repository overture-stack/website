---
title: Downloading Data from your Platform
---

# This guide is for

- Anyone seeking guidance on how to download data from an Overture platform


- This guide is split into two segments with stepwise instructions on:
  - Downloading data with the score client
  - Programatically retrieving data using python

<Note title="Help us make our guides better">If you can't find what your are looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>

# You will need

- **Docker:** We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)
- **An Overture platform:** If you do not have a platform to submit data to and want to follow along you can follow our [deployment guide](/guides/deployment) or simply run the following commands with Docker open

**1. Clone the Quickstart repository**

```bash
git clone -b develop https://github.com/overture-stack/composer.git
```

**2. Run the docker-compose**

```bash
docker compose up -d
```

<Warning>**Note:** Ensure enough resources are allocated to docker. We recommend a `CPU limit of 8`, `memory limit of 12gb`, `swap of 4gb`, and `virtual disk limit of 128gb`. These settings can be accessing in docker desktop by selecting the **cog wheel** found on the top right and selecting **resources** from the left panel.</Warning>

