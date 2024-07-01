---
title: Administration Guides
---

**This guide is for** anyone seeking guidance on how to configure and use an Overure platform. We will walk you through the essential steps configure your Overture environment effectively. By the end of this guide, you will have successfully completed the necessary configurations and be well-equipped to manage your Overture platform.

**You will need** docker installed. We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)

**Overview:** This guide includes a series of tutorials aimed at providing clear, step-by-step instructions for basic administration tasks associated with setting up and maintaining an Overture platform. Topics covered include:

   - **[Updating the Data Model](/documentation/guides/administration/modelling/):** Learn how to update your data model to reflect your data requirements


   - **[Index Mappings](/documentation/guides/administration/indexmapping/):** Understand what Index mappings are and how to configure them to enable efficient search


   - **[Search Portal Customization](/documentation/guides/administration/portalcustomization/):** Learn how to customize how data is displayed in your search portals data facets and table components


 <Note title="Help us make our guides better">If you can't find what your are looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>

# Getting Started

If you do not have an Overture platform deployed you can use our docker compose Quickstart to get up and running locally.

## Clone and run our Quickstart

**1. Clone the Quickstart repository**

```bash
git clone https://github.com/overture-stack/composer.git
```

**2. With Docker open run the docker-compose**

```bash
docker compose up -d
```

## Viewing Elasticsearch Documents

Installing ElasticVue Browser Extension

    Install the Extension:
        Visit the Chrome Web Store (or Firefox Add-ons) and search for "ElasticVue".
        Click on "Add to Chrome" (or "Add to Firefox") to install the extension.

Connecting to Elasticsearch

    Open ElasticVue:
        Click on the ElasticVue extension icon in your browser toolbar.

    Enter Elasticsearch URL:
        Provide the URL of your Elasticsearch cluster (http://<hostname>:<port>).

    Configure Connection:
        If needed, enter username and password for authentication.
        Click Connect to establish the connection.