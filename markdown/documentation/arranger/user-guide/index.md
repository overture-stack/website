---
title: User Guide
---

# Configuring Your Project

Once you have [added your project](/documentation/arranger/installation/configuration/project), you can use the Arranger Admin UI to configure the specific UI components and properties that will appear in the front-end data portal.

## Configuring Extended Field Properties

Certain extended properties of your Elasticsearch field mappings can be configured.

To configure the extended properties:

1. Go to the Arranger Admin UI at `localhost:8080`.


2. From the **Project versions** list, click the project you wish to configure.  A list of Elasticsearch indices associated to the project appears.


3. Click the Elasticsearch index name you wish to configure.


4. Click the **Fields** tab.  The list of all fields from your index mapping appears:

![Entity](../assets/extended.png 'Extended')

5. For each field, you can configure the following as you deem necessary:

| Config | Description |
|--------|-------------|
| Display Name | |
| Aggregation Type | |
| Active | |
| Quicksearch enabled | |
| Is primary key | |
| Is array | |

6. Click **Save Project**.

## Configuring the Facet Panel

The facet panel is the UI control in the data portal where the search filters and aggregations appear.  Here is an example from a demo portal:

![Entity](../assets/facet-example.png 'Facet Example')

To configure properties of the facet panel:

1. Go to the Arranger Admin UI at `localhost:8080`.


2. From the **Project versions** list, click the project you wish to configure.  A list of Elasticsearch indices associated to the project appears.


3. Click the Elasticsearch index name you wish to configure.


4. Click the **Aggs Panel** tab.  The list of all fields from your index mapping appears:

![Entity](../assets/facets.png 'Facets')

5. For each field, you can configure the following as you deem necessary:

| Config | Description |
|--------|-------------|
| Position | |
| Active  | |
| Shown | |

6. Click **Save Project**.

## Configuring the Results Table

The results table is the UI control in the data portal where the search results appear. Here is an example from a demo portal:

![Entity](../assets/results.png 'Search Results')

To configure properties of the results table:

1. Go to the Arranger Admin UI at `localhost:8080`.


2. From the **Project versions** list, click the project you wish to configure.  A list of Elasticsearch indices associated to the project appears.


3. Click the Elasticsearch index name you wish to configure.


4. Click the **Aggs Panel** tab.  The list of all fields from your index mapping appears:

![Entity](../assets/facets.png 'Facets')

5. For each field, you can configure the following as you deem necessary:

| Config | Description |
|--------|-------------|
| Position | |
| Active  | |
| Shown | |

6. Click **Save Project**.

## Configuring Quick Search

Some portals may implement a global "quick search" feature that searches across multiple data entities.  This is **NOT** to be confused with the individual quick search boxes in the facet panel.

The quick search feature currently only supports the following:

- Search and filter indexed entities by text only
- Only exact match supported (free-text search **NOT** currently supported)
- Only entities at root of the Elasticsearch mapping can be searched (i.e. only the root "object" and its "nested" fields)

To configure global quick search properties:

1. Go to the Arranger Admin UI at `localhost:8080`.


2. From the **Project versions** list, click the project you wish to configure.  A list of Elasticsearch indices associated to the project appears.


3. Click the Elasticsearch index name you wish to configure.


4. Click the **Quick Search** tab.  As indicated earlier ONLY entities at the root of the mapping ad their nested fields will appear:

![Entity](../assets/quick-search.png 'Quick Search')

5. For each field, you can configure the following as you deem necessary:

| Config | Description |
|--------|-------------|
| Display Name | |
| Active  | |
| Key Field | |
| Search Field | |

6. Click **Save Project**.

# Exporting Your Project

You may need to export your project configurations for various reasons, such as:

* To simply backup your configs & metadata as good practice
* To re-use the configs in another Arranger instance or deployment
* To prepare for data migration

To export a project's configurations:

1. Go to the Arranger Admin UI at `localhost:8080`.
2. Click **Export** beside the project you need to export.
3. Your browser will automatically download a ZIP file containing the project's configuration JSON files:

- `aggs-state.json`
- `columns-state.json`
- `extended.json`
- `matchbox-state.json`

# Deleting a Project

You may need to delete a project occasionally as part of general cleanup.  For example, perhaps you created multiple projects, but since only one can ever be active at a time, you want to clean up the old ones.

<Warning>**NOTE**: Before deleting a project, make sure you wish to proceed with the operation because it is not reversible.  We recommend you first backup the project configurations (see [here](/documentation/arranger/user-guide#exporting-your-project)) in case you ever need to re-create the project for any reason.</Warning>

To delete a project:

1. Go to the Arranger Admin UI at `localhost:8080`.
2. Click **Delete** beside the project you need to export.
3. Confirm the deletion.