---
title: Updating the Index Mapping
---

# Indexing in Overture

An index mapping defines how documents and their fields are stored and indexed in Elasticsearch.

Maestro is responsible for taking published Song metadata and translating it into Elasticsearch documents. With these documents Arranger uses the index mapping and generates our GraphQL server which enables fast and flexible queries.

Depending on how Maestro is configured it can index data into documents in one of two ways:

- **File Centric Indexing:** Each document indexed in Elasticsearch describes all information central to a specific file. [Click here to see an example of a file centric JSON document](https://github.com/overture-stack/quickstart/blob/develop/guideMaterials/dataAdministration/ES-fileCentric-document.json).

- **Analysis Centric Indexing** Each document indexed in Elasticsearch describes all information central to a specific analysis. [Click here to see an example of a analysis centric JSON document](https://github.com/overture-stack/quickstart/blob/develop/guideMaterials/dataAdministration/ES-analysisCentric-document.json).

<Note title="File or Analysis Centric Indexing">If your queries focus on individual files and their attributes, choose file-centric indexing. If your queries center on analyses/participants and their associated data, choose analysis-centric indexing.</Note>

The index mapping can be defined within an index template supplied to Elasticsearch on startup. In the next section we will break down the structure of an index template.

# Breaking Down Index Templates

When broken down the index template has four components, `index_patterns`, `aliases`, `mappings`, and `settings`

```json
{
  "index_patterns": ["overture-*"],
  "aliases": {},
  "mappings": {},
  "settings": {}
}
```

The above code snippet references [the Overture Quickstart Index template](https://github.com/overture-stack/quickstart/blob/develop/guideMaterials/dataAdministration/ES-index-template.json), feel free to have this open as a reference, we will refer to it where ever appropriate

## Index Patterns

In Elasticsearch, the `index_patterns` setting specifies which indices the index template should apply to. `"index_patterns": ["overture-*"]` means that the index template applies to any index whose name starts with `overture-`.

## Aliases

Here we can define an alias for indices that use this template. <a target="_blank" rel="noopener noreferrer" href="https://www.elastic.co/guide/en/elasticsearch/reference/7.17/aliases.html">Aliases</a> are a secondary and more generalized index name typically used to group related indices.

Here we define our alias as `file_centric` providing us some context on the method of indexing configured with Maestro:

```json
  "aliases": {
    "file_centric": {}
  },
```

## Settings

The settings section is for configuring index behavior. Each setting plays a role in defining how data is indexed, stored, and queried in Elasticsearch, optimizing performance and scalability based on specific use cases and requirements.

Most of these will be automatically configured by Maestro. However, we will outline the additional settings used in our index template including `analyzers`, `filters`, and `tokenizers`, essential components in Elasticsearch that contribute to how text data is indexed, analyzed, and searched.

```json
  "settings": {
    "analysis": {
      "analyzer": {
        "autocomplete_analyzed": {
          "filter": ["lowercase", "edge_ngram"],
          "tokenizer": "standard"
        },
        "autocomplete_prefix": {
          "filter": ["lowercase", "edge_ngram"],
          "tokenizer": "keyword"
        },
        "lowercase_keyword": {
          "filter": ["lowercase"],
          "tokenizer": "keyword"
        }
      },
      "filter": {
        "edge_ngram": {
          "max_gram": "20",
          "min_gram": "1",
          "side": "front",
          "type": "edge_ngram"
        }
      }
    },
    "index.max_result_window": 300000,
    "index.number_of_shards": 3
  }
```

**Analyzer** are a combination of tokenizer and optional filters that processes text during indexing and searching in Elasticsearch.

**Filters** in Elasticsearch are specific processing steps, typically used for text transformations within an analyzer or independently applied during indexing or querying. Filters are used to improve search relevance and efficiency by modifying or discarding certain tokens.

**Tokens and Tokenizers** are fundamental concepts in text processing and search indexing. Tokens are individual units of text generated during tokenization. Tokenizers are components responsible for breaking down text into tokens (tokenization). They define how text is segmented based on rules like whitespace, punctuation, or specific character patterns.

<Note title="For more information">For more information on tokenizers, analyzers and filters refer to [Elasticsearch's documentation on the Anatomy of analyzers]("https://www.elastic.co/guide/en/elasticsearch/reference/7.17/analyzer-anatomy.html").</Note>

With this information, lets breakdown some of the settings found in our index template

```json
        "lowercase_keyword": {
          "filter": ["lowercase"],
          "tokenizer": "keyword"
        }
```

The above section defines an analyzer named `lowercase_keyword`. It uses the `"keyword"` tokenizer, which indexes the entire input as a single token. The `"lowercase"` filter is applied to convert all tokens to lowercase, enabling case-insensitive search.

```json
      "filter": {
        "edge_ngram": {
          "max_gram": "20",
          "min_gram": "1",
          "side": "front",
          "type": "edge_ngram"
        }

```

The above filter configuration is independent of an analyzer and defines an `"edge_ngram"` filter. This filter generates edge n-grams (substrings of specified lengths) from the beginning (`"side": "front"`) of tokens during indexing. It facilitates partial matching and autocomplete functionality by creating prefixes of varying lengths (`"min_gram"` to `"max_gram"`).

<Note title="For more information">For more details on the edge_ngram filter and its parameters, refer to the [Elasticsearch documentation on Edge NGram Token Filters](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/analysis-ngram-tokenizer.html).</Note>

The `edge_ngram` filter defined above is used in the analyzer shown below:

```JSON
      "analyzer": {
        "autocomplete_analyzed": {
          "filter": ["lowercase", "edge_ngram"],
          "tokenizer": "standard"
        },
```

Here, `autocomplete_analyzed` is defined with a `Tokenizer` using the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.17/analysis-standard-tokenizer.html" rel="noopener noreferrer" target="_blank">standard tokenizer</a>. The tokenizer divides text into tokens based on word boundaries. The `filter` then makes all text lowercase and applies the `"edge_ngram"` filter. This analyzer configuration is particularly useful for implementing autocomplete features, allowing users to search with partial terms and matching results based on the generated N-grams.

## Mappings

The mappings section defines the structure of the documents in our index. Each field should relate to the data collected by Song and indexed by Maestro, this mapping is needed by Elasticsearch and Arranger to use our data.

**The following is a summary of the basic units of an index mapping:**

```json
  "mappings": {
    "properties": {
      "analysis": {
        "properties": {
          "analysisStateHistory": {
            "type": "nested",
            "properties": {
              "initialState": { "type": "keyword" },
              "updatedState": { "type": "keyword" },
              "updatedAt": { "type": "date" }
            }
          }
        }
      }
    }
```

**Properties:** Each field within the mapping section defines a specific attribute or property of the documents. These properties describe the structure and type of data that can be indexed.

**Field Names:** Field names such as `analysisStateHistory` denote individual attributes within documents. They represent specific data points that help organize and categorize information.

**Types:** Each field in your documents should have a defined data type to ensure Elasticsearch understands how to index and query your data effectively. A summary of common types are provided below:

| Type      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `keyword` | Exact value fields not intended for full-text search. Ideal for fields like IDs, keywords, enums.      |
| `text`    | Full-text fields used for search and indexing. Analyzed by default to support partial matches.         |
| `integer` | Integer numeric fields for storing whole numbers. Useful for numerical operations and aggregations.    |
| `date`    | Date/time fields that support date formats and time zones. Allows for date-based querying and sorting. |

**Nested Types** are used to model hierarchical data structures within documents. They allow for the nesting of objects or arrays within a single field. This is particularly useful when dealing with entities that have multiple properties or attributes, such as `analysisStateHistory` shown above.

**copy_to & file_autocomplete:** The `copy_to` <a rel="noopener noreferrer" target="_blank" href="https://www.elastic.co/guide/en/elasticsearch/reference/7.17/copy-to.html)">parameter in Elasticsearch</a> allows you to copy the values of one or more fields into a designated target field. This feature is useful when you want to create a single field that aggregates content from multiple other fields.

```json
  "mappings": {
    "properties": {
      "object_id": { "type": "keyword", "copy_to": ["file_autocomplete"] },
      "study_id": { "type": "keyword" },
      "data_type": { "type": "keyword" },
      "file_type": { "type": "keyword" },
      "file_access": { "type": "keyword" },
      "file_autocomplete": {
				"type": "keyword",
				"fields": {
					"analyzed": {
						"type": "text",
						"analyzer": "autocomplete_analyzed",
						"search_analyzer": "lowercase_keyword"
					},
					"lowercase": {
						"type": "text",
						"analyzer": "lowercase_keyword"
					},
					"prefix": {
						"type": "text",
						"analyzer": "autocomplete_prefix",
						"search_analyzer": "lowercase_keyword"
					}
				}
			}
    }
  }
```

The `object_id` field here is defined as the `"type": "keyword"` and includes a `copy_to` parameter pointing to `file_autocomplete`.

- This means that the value of `object_id` will be copied into the `file_autocomplete` field

- The `file_autocomplete` field is initially defined as `"type": "keyword"` and includes the sub-fields (`analyzed`, `lowercase`, and `prefix`) using the three text analyzers (`autocomplete_analyzed`, `autocomplete_prefix`, `lowercase_keyword`) configured in our settings sections.

- These sub-fields enable different types of searches and queries on the copied content from `object_id`.

By aggregating relevant metadata into `file_autocomplete` this setup enables users to search across multiple fields related to any given `object_id`.

# Updating an Index Template

1. **Prepare your Template File:** Start by preparing your Elasticsearch index template file with your desired mappings and settings. Ensure this reflects the structure and configuration specific to your data model being used in Song.

2. **Update the Index Template:** Use the following `curl` command to update Elasticsearch with your index template. The values here reflect those of the Overture Quickstart.

```JSON
curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/_template/index_template' -H 'Content-Type: application/json' -d @/directory/to/your/index_template.json
```

- Replace `elastic:myelasticpassword` with your Elasticsearch username and password combination
- Adjust the URL (`http://elasticsearch:9200/_template/index_template`) to match your Elasticsearch host
- Ensure that `-d @/directory/to/your/index_template.json` points to the correct location of your template file

3. **Create a new Alias:** Use the following `curl` command to create an alias for your index:

```
curl -u elastic:myelasticpassword -X PUT 'http://elasticsearch:9200/{index-name}/_alias/file_centric' -H 'Content-Type: application/json' -d '{"is_write_index": true}'
```

- Replace `elastic:myelasticpassword` with your Elasticsearch username and password combination
- Adjust the URL (`http://elasticsearch:9200/{index-name}/_alias/file_centric`) to match your Elasticsearch host, index name, and alias name (`file_centric`). \
- `{"is_write_index": true}` sets the alias to be the write index meaning new documents submitted to this alias through indexing operations (Maestro) will be routed to this index

## Using the Quickstart Index

The index mapping template used within the Quickstart can be found in [the directory linked here](https://github.com/overture-stack/quickstart/blob/develop/configurationFiles/elasticsearchConfigs/quickstart_index_template.json)

Upon initial deployment, this index template is uploaded to Elasticsearch, and a new alias, `overture-quickstart-index`, is created in alignment with the defined `"index_patterns": ["overture-*"]"`. The Docker container and associated script that automate this process is [located in the docker-compose.yml here](https://github.com/overture-stack/quickstart/blob/develop/docker-compose.yml#L344-L379).

If you change this template to match your own custom schema, and wish to populate Elasticsearch with your new index template, ensure you check the following:

- **Stage Arranger Variables:** Ensure [the environment variables in Stage](https://github.com/overture-stack/quickstart/blob/develop/docker-compose.yml#L446-L448) are adjusted to specify the updated documentType and Index name according to your modified Elasticsearch mapping

- **Maestro Elasticsearch Variables:** Maestro requires specific information about the alias and centrality of the index. Make sure [these variables are updated](https://github.com/overture-stack/quickstart/blob/develop/docker-compose.yml#L303-L307)

- **Arranger Configuration Files:** Update [Arranger configuration](https://github.com/overture-stack/quickstart/tree/develop/configurationFiles/arrangerConfigs) files to reflect any changes made to your index mapping. This ensures that Arranger, the front-end search interface, correctly interprets and interacts with your Elasticsearch data

<Note title="Updating Arranger Configuration Files">For detailed instructions on customizing the search interface in Arranger to align with your updated mapping, refer to the next section on search interface customization.</Note>
