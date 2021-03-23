---
title: Install Docker
---

Now that you have verified that your system meets all requirements, the next step is to install [Docker](https://www.docker.com) to your environment. 

All of the Overture services are packaged as docker images to be deployed and run as containers on the Docker platform.  Hence, Docker installation is a mandatory requirement to use the DMS platform.

<Warning>**NOTE:** For the DMS to function correctly on Docker, the Docker installation must be completed as instructed using the steps from the [Docker documentation site](https://docs.docker.com) itself.</Warning>

# Install Docker from Docker Docs

Log into your environment as an administrator and follow the instructions to install docker from the Docker documentation site [here](https://docs.docker.com/engine/install/).

- If you are running MacOS, follow the [Docker Desktop for Mac instructions](https://docs.docker.com/docker-for-mac/install/)

- If you are running Linux, select the instructions for your specific distribution from the Linux distribution table

# Initialize the Docker Swarm Network

After successfully installing Docker, you must initialize the [Docker Swarm network](https://docs.docker.com/engine/swarm/).  The DMS platform uses Docker Swarm as a container orchestration tool and allows each container in the swarm to be accessed by Docker nodes within the same cluster.

To initialize the docker swarm network, from your command-line, enter: 

```shell
docker swarm init
```

If successful, a message is displayed indicating the swarm was initialized and your current node is now a swarm manager:

```shell
Swarm initialized: current node (dxn1zf6l61qsb1josjja83ngz) is now a manager.
```

# Adjust Docker Desktop Resource Settings (MacOS)

If you are running on MacOS, you need to check your Docker Desktop resource settings to ensure they are enabled for the [minimum system requirements](../requirements) specified earlier.

1. Open Docker Desktop and click ** Preferences**.


2. Go to **Resources > Advanced**.


3. Adjust the number of **CPUs** and the amount of **Memory** to meet at least the [minimum requirements](../requirements).


4. Click **Apply & Restart**.

![Entity](../../assets/docker-desktop-resources.png 'Docker Desktop Resources')