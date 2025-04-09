---
title: Getting Started
---

# Contents

Welcome to the Overture platform guides, here you will find information on deploying and using Overture microservices as a combined platform.

Our guides currently cover the following topics:

- **[Deployment:](/documentation/guides/deployment/introduction)** generalized instructions for deploying our platform from start to finish

- **[Administration:](/documentation/guides/administration/introduction)** detailed stepwise instructions for customizing your platform

- **[Submission:](/documentation/guides/submission/clientsubmission)** stepwise instructions on submitting data to our platform

- **[Download:](/documentation/guides/download/clientdownload)** stepwise instructions on downloading data from our platform

<Note title="Help us make our guides better">If you can't find what you're looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>

# Running the Overture Quickstart

We provide an Overture Quickstart for a fast and frictionless setup of our data platform locally.

**1. Install or update Docker:** To run our quickstart you will need you will need Docker Desktop version `4.32.0` or higher. If you already have Docker installed, please ensure it's up to date. For more information see, [Dockers website here](https://www.docker.com/products/docker-desktop/).

<Warning>**Note:** Ensure enough resources get allocated to Docker. We recommend a minimum CPU limit of `8`, memory limit of `8 GB`, swap of `2 GB`, and virtual disk limit of `64 GB`. You can access these settings by selecting the **cog wheel** found on the top right of the Docker desktop app and selecting **resources** from the left panel. **If you already have docker desktop installed be ensure you are on version 4.32.0 or higher**.</Warning>

**2. Clone the Quickstart repository**

```bash
git clone  -b quickstart https://github.com/overture-stack/prelude.git
```

**3. Launch the platform by running the appropriate command for your operating system:**

- For Unix/macOS run `make platform`
- For Windows run `./make.bat platform`
