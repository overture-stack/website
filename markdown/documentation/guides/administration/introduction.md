---
title: Administration Guides
---

**These guides are for** anyone seeking information on configuring and using Overture as their platforms's foundation. We will walk you through the essential information for configuring it.

**You will need** Docker, we recommend using Docker Desktop version `4.32.0` or higher. If you already have Docker installed, please ensure it's up to date. For more information see, [Dockers website here](https://www.docker.com/products/docker-desktop/).

<Warning>**Note:** Ensure enough resources get allocated to Docker. We recommend a minimum CPU limit of `8`, memory limit of `8 GB`, swap of `2 GB`, and virtual disk limit of `64 GB`. You can access these settings by selecting the **cog wheel** found on the top right of the Docker desktop app and selecting **resources** from the left panel. **If you already have docker desktop installed be ensure you are on version 4.32.0 or higher**.</Warning>

**Overview:** This guide covers basic administration tasks associated with setting up and maintaining an Overture platform. Topics covered include:

- **[Updating the Data Model](/documentation/guides/administration/modelling/):** Learn how to update your data model to reflect your data requirements

- **[Index Mappings](/documentation/guides/administration/indexmapping/):** Understand what Index mappings are and how to configure them

- **[Search Portal Customization](/documentation/guides/administration/portalcustomization/):** Learn how to customize how data is displayed in your front-end data facets and table components

<Note title="Help us make our guides better">If you can't find what you're looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>

# Getting Started

If you do not have an Overture platform deployed, you can use our docker compose Quickstart to get up and running locally.

## Clone and run our Quickstart

**1. Clone the Quickstart repository**

```bash
git clone  -b quickstart https://github.com/overture-stack/prelude.git
```

**2. Launch the platform by running the appropriate command for your operating system:**

- For Unix/macOS run `make platform`
- For Windows run `./make.bat platform`
