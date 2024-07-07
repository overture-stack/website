---
title: Administration Guides
---

**These guides are for** anyone seeking information on configuring and using an Overture platform. We will walk you through the essential information for configuring your Overture platform. 

**You will need** docker installed. We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)

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
git clone  https://github.com/overture-stack/composer.git
```

**2. With Docker open run the docker-compose**

```bash
docker compose up --attach conductor
```
