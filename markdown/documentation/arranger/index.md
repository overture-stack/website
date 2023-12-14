---
title: Introduction
---

Arranger is a data-agnostic search API that utilizes <a href="https://www.elastic.co/guide/en/elasticsearch/reference/6.4/mapping.html" target="_blank" rel="noopener noreferrer">Elasticsearch index mappings</a> to generate interactive and configurable search components.

![Entity](./assets/ArrangerArchitecture.png 'Arranger Architecture')

Arranger integrates with your underlying Elasticsearch cluster to automatically generate a powerful search API based on your configured index mapping. It consists of two main modules, **Arranger Server** and **Arranger Components**.

**Arranger Server** is a GraphQL API that communicates with an Elasticsearch index. One unique feature of Arranger Server is its use of a consistent and custom filter notation called <a href="../documentation/arranger/reference/sqon/" target="_blank" rel="noopener noreferrer">SQON</a>. SQON is designed to be user-friendly, allowing humans to easily understand and create custom filters while also being straightforward for software systems to interpret and process.

**Arranger Components** are interactive and configurable UI components specifically designed to display and query complex datasets. The example below showcases the Arranger Components that form the foundation of the VirusSeq data portal.

![Entity](./assets/arrangercomponents.jpg 'Panels')

  - The left hand box (in red) is Arrangers **faceted search** component
  - The bottom box (in blue) is Arrangers **Data Table** component
  - The top box (in yellow) is Arrangers **SQON Viewer** component
  

<Note title="DMS-UI">Arranger works best when paired with a user interface (UI) to host its search components. We recommend using the [DMS-UI](https://www.overture.bio/documentation/dms-ui/), a React-based UI specifically designed to facilitate Arranger components and the integration of our OAuth tool, Ego. The DMS-UI offers an extensible layout, reusable components, and a themeable front-end interface. Ultimately the DMS-UI enables you to integrate these services into any web-based application.</Note>
