---
title: Maestro's API
--- 

The following sections will demonstrate how to index data at different entity levels using the API. Maestro can index data flexibly at either the repository, study, or individual analysis levels. 

<Note title="What is an analysis?">An Analysis file contains the metadata in a structured JSON format. Metadata gets submitted to Song as an Analysis File.</Note>

Maestro provides a RESTful API that allows you to interact with its core functionalities. There are two methods available to interact with the Maestro API.

## The Swagger UI

The Swagger UI is a helpful tool for exploration and simple use cases. It provides detailed descriptions of all the available endpoints, expected inputs, and error responses.

![Entity](../assets/swagger.png 'Swagger UI')

Depending on your deployment, you can access the Swagger UI from one of the following links:

| Mode | URL |
| -- | --- |
| Local | `http://localhost:11235/maestro/api-docs` |
| Server | `https://<YOUR-URL>/maestro/api-docs` |

## cURL

Maestro's API can be accessed through the command line using cURLs, this also allows users to create more complex programmatic queries if desired.

Examples and instructions for interacting with Maestro's API will be provided in the following pages.



