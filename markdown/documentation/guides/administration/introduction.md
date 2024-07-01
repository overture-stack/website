---
title: Administration Guides
---

**This guide is for** anyone seeking guidance on configuring and using an Overture platform. We will walk you through the essential steps to configure your Overture environment effectively. By the end of this guide, you will have completed the necessary configurations and be well-equipped to manage your Overture platform.

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
git clone https://github.com/overture-stack/composer.git
```

**2. With Docker open run the docker-compose**

```bash
docker compose up -d
```

## Installing ElasticVue 

ElasticVue offers a convenient and user-friendly interface for managing and exploring your Elasticsearch data. With ElasticVue, you can:

- Easily visualize and search through indexed documents.
- Quickly access and interact with JSON documents.
- Simplify the management and troubleshooting of Elasticsearch indices.

**To install ElasticVue, follow these steps:**

1. Visit the Chrome Web Store (or Firefox Add-ons) and search for the **ElasticVue** browser extension.


2. Click on **"Add to Chrome"** (or **"Add to Firefox"**) to install the extension.


3. Open ElasticVue and enter your Elasticsearch URL. For the Overture Quickstart, this will be `localhost:9200`.


4. Select basic authentication and enter the default username `elastic` and password `myelasticpassword`.

### Using ElasticVue

From the ElasticVue dashboard's top navigation, select **search**.

![ElasticVue](./assets/elasticvue.png 'ElasticVue')

This page displays all indexed Elasticsearch documents created by Maestro from published Song analyses and used by Arranger. Clicking any of the `_index` rows will give you a direct view of the JSON documents that populate the index.
