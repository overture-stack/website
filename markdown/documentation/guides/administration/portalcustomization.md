---
title: Customizing your Data Portal
---

# Getting Started

## Introduction

Arranger simplifies GraphQL queries over Elasticsearch indices with it's front-end library of reusable search components. The primary configurable components for this guide are the left hand search facets and the central data table seen below.

![Portal](./assets/portal.png 'Portal')

<Note title="Arranger Configration Files">All configurations for these components are made through four configuration files: `base.json`, `extended.json`, `table.json` and `facets.json`. We will cover each in the following sections.</Note>

## Viewing Elasticsearch Documents

Indices in Elasticsearch are a collection of related documents with similar characteristics.

**[Elasticvue](https://elasticvue.com/)** offers a convenient and user-friendly interface for managing and exploring your Elasticsearch data. With elasticvue, you can:

- Easily visualize and search through indexed documents.
- Quickly access and interact with JSON documents.
- Simplify the management and troubleshooting of Elasticsearch indices.

**To install elasticvue, follow these steps:**

1. Search for **elasticvue** in your browser's extension catalogue. E.g. Chrome Web Store, Firefox Add-ons, Microsoft Webstore.

2. Click on **"Add to Chrome"** (or **"Add to Firefox"**) to install the extension.

3. Open elasticvue and enter your Elasticsearch URL. For the Overture Quickstart, this will be `http://localhost:9200`.

4. Select basic authentication and enter the default username `elastic` and password `myelasticpassword`.

### Using ElasticVue

From the elasticvue dashboard's top navigation, select **search**.

![Elasticvue](./assets/elasticvue.png 'Elasticvue')

This page displays all indexed Elasticsearch documents created by Maestro from published Song analyses and used by Arranger. Clicking any of the `_index` rows will give you a direct view of the JSON documents that populate the index.

Being able to easily view the JSON documents within your elastic search instance will be beneficial when configuring your Arranger configs.

# Arranger Configurations

## Base Configuration

The [base.json file](https://github.com/overture-stack/quickstart/blob/develop/configurationFiles/arrangerConfigs/base.json) contains only two fields, `documenType` and `index`:

```json
{
  "documentType": "file",
  "index": "overture-quickstart-index"
}
```

- The `index` field specifies the name of the Elasticsearch index, in this example the `overture-quickstart-index`

- `documentType` informs Arranger of the mapping type being used by Maestro, `analysis` or `file` centric

<Note title="Learn More">For more information on index mappings and index centricity, see our [administration guide covering index mappings.](/documentation/guides/administration/indexmapping/)</Note>

## Extended Configuration

The extended.json configuration file defines all the fields and display names you wish to populate your front-end portal with. Below, we have provided a simplified list taken from our [QuickStart extended.json](https://github.com/overture-stack/quickstart/blob/develop/configurationFiles/arrangerConfigs/extended.json) configuration:

```JSON
{
	"extended": [
	  {
		"displayName": "Object Id",
		"fieldName": "object_id"
	  },
    {
		"displayName": "Analysis Id",
		"fieldName": "analysis.analysis_id"
	  },
    {
		"displayName": "Treatment Duration (Days)",
		"fieldName": "analysis.donor.primaryDiagnosis.treatment.treatmentDuration"
	  }
  ]
}

```

The`displayName` field outlines how you want your fields displayed on the front-end UI when used within the search facets and or table.

The `fieldName` values are written as represented within your Elasticsearch documents:

- Object ID can be found at the root of the [Elasticsearch Documents](https://github.com/overture-stack/quickstart/blob/develop/guideMaterials/dataAdministration/ES-fileCentric-document.json#L217) and therefore is simply the fieldName shown here

- The Analysis ID is a nested element [found inside the Analysis field](https://github.com/overture-stack/quickstart/blob/develop/guideMaterials/dataAdministration/ES-fileCentric-document.json#L61C1-L80C61), we denote nesting by adding a period `.` making the appropriate fieldName `analysis.analysis_id`

- By looking at the `treatmentDuration` field, we can see it is nested [relatively deeper](https://github.com/overture-stack/quickstart/blob/develop/guideMaterials/dataAdministration/ES-fileCentric-document.json#L61-L138) than our other three fields outlined above. The same rules, however apply, and by working backwards and adding a `.` for each nested element, we end up with `analysis.donor.primaryDiagnosis.treatment.treatmentDuration`

## Table Configuration

The [table.json file](https://github.com/overture-stack/quickstart/blob/develop/configurationFiles/arrangerConfigs/table.json) configures the columns displayed in the data table. These configurations specify which fields are shown, their visibility, and their sortability.

```JSON
{
  "table": {
    "columns": [
      {
        "canChangeShow": true,
        "fieldName": "object_id",
        "show": false,
        "sortable": true
      },
      {
        "canChangeShow": true,
        "fieldName": "analysis.analysis_id",
        "show": false,
        "sortable": true
      },
      {
        "canChangeShow": true,
        "fieldName": "analysis.collaborator.name",
        "jsonPath": "$.analysis.collaborator.hits.edges[*].node.name",
        "query": "analysis { collaborator { hits { edges { node { name } } } } }",
        "show": true,
        "sortable": true
      }
    ]
  }
}
```

### Basic fields

- `canChangeShow` is a boolean indicating if the user can toggle the visibility of the column, set this to true if you want users to have the option to show or hide this column using the columns dropdown menu. Set it to false if the visibility of this column should remain fixed.

- `FieldName` is the same fieldname as described above, these values are written as represented within your Elasticsearch documents

- `show` is a boolean indicating if the column is initially, by default, visible. Set this to true if you want the column to be visible when the table is first loaded. Set it to false if you want the column to be hidden by default.

- `sortable` is a boolean indicating if the column can be sorted. Set this to true if you want users to be able to sort the table by this column. Set it to false if sorting should not be allowed for this column.

### jsonPath

The `jsonPath` field specifies the JSON path to extract nested data from Elasticsearch documents. This field defines the path to data nested within arrays.

For example, suppose we have an Elasticsearch document structured like this:

```JSON
{
    "analysis": {
      "collaborator": [
        {
          "contactEmail": "susannorton@micr.ca",
          "name": "MICR"
        }
      ]
    }
}
```

If we want to extract the `name` field from the `collaborator` array within the `analysis` object, our jsonPath for this field would be:

```json
$.analysis.collaborator.hits.edges[*].node.name
```

- `$.` designates the root of our elasticsearch documents
- `analysis.collaborator` is the key for our desired nested object within the root
- `hits.edges[*].node` specifies that we're accessing an array (`[*]` translates to "all elements" in the array)
- `name` specifies the desired field we want to extract from our Elasticsearch documents

### query

The `query` field defines the GraphQL query needed to retrieve the nested data.

This follows a similar structure to our JSON path but is written in GraphQL syntax:

```graphql
{
  analysis {
    collaborator {
      hits {
        edges {
          node {
            name
          }
        }
      }
    }
  }
}
```

When flattened, this matches the configuration shown in our example above:

```JSON
"analysis { collaborator { hits { edges { node { name } } } } }",
```

<Note title="GraphQL Playground">If you want to gain hands-on experience making these queries and exploring GraphQL, we recommend accessing the Arranger GraphQL server using our Quickstart from `http://localhost:5050/graphql`. For those preferring to use the most up-to-date GraphQL Playground UI, you can access it from `http://localhost:5050/graphql/hellogql` (appending any string to the URL will take you there).</Note>

## Facet Configuration

The [facets.json file](https://github.com/overture-stack/quickstart/blob/develop/configurationFiles/arrangerConfigs/facets.json) defines how aggregations (also known as facets in Elasticsearch) are configured for data exploration and filtering.

```JSON
{
  "facets": {
    "aggregations": [
      {
        "active": true,
        "fieldName": "file_type",
        "show": true
      },
      {
        "active": true,
        "fieldName": "analysis__collaborator__name",
        "show": true
      }

    ]
  }
}
```

- `active` indicates whether this aggregation is active or enabled (true)

- `fieldName` the field used for aggregation. This means Elasticsearch will aggregate data based on different values found in the defined field. For the `file_type` field, this translates into a facet with the options of filtering for aggregations of three file types: `VCF`, `BAM` and `CRAM`

- `show` indicates whether to display this aggregation in the user interface (true)

<Note title="Facets.json Syntax">One caveat of the `facets.json` file is the notation used for fieldNames. Here we use double underscores `__` rather than `.` for nested elements, for example `analysis__collaborator__name` instead of `analysis.collaborator.name`</Note>
