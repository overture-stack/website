---
title: Getting Started
---

# Contents 

Welcome to the Overture platform guides, here you will find information on deploying and using Overture microservices as a combined platform. 

 Our guides currently cover the following topics:

- **[Deployment:]()** A generalized deployment of our platform from start to finish


- **[Administration:]()** Detailed stepwise instructions for customizing our platform


- **[Submission:]()** Stepwise instructions on submitting data to our platform 


- **[Download:]()** Stepwise instructions on downloading data from our platform

<Note title="Help us make our guides better">If you can't find what your are looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>

# Running the Overture Quickstart

We provide an Overture Quickstart for a fast and frictionless setup of our data platform locally. 

Instructions on running our Quickstart are found here and at the begining of each guide, we recommed using this resource to follow along if you do not already have an Overture based platform to work with.


- To run our quickstart you will need Docker. We recommend using Docker Desktop; for more information on downloading and installing docker visit [Dockers website located here](https://www.docker.com/products/docker-desktop/)


**1. Clone the Quickstart repository**

```bash
git clone -b develop https://github.com/overture-stack/composer.git
```

**2. Run the docker-compose**

```bash
docker compose up -d
```

<Warning>**Note:** Ensure enough resources are allocated to docker. We recommend a `CPU limit of 8`, `memory limit of 12gb`, `swap of 4gb`, and `virtual disk limit of 128gb`. These settings can be accessing in docker desktop by selecting the **cog wheel** found on the top right and selecting **resources** from the left panel.</Warning>
