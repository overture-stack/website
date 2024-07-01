---
title: Configuring your data model
---
# Song Schemas

The data administrator can create and submit schemas to Song to validate data submissions. This ensures that required administrator-defined fields are present and that the contents of a field match the desired data type or allowed values.

Song includes a [base schema](https://github.com/overture-stack/SONG/blob/develop/song-server/src/main/resources/schemas/analysis/analysisBase.json) that is combined with all user-created schemas upon submission. When creating your schemas, it is important to reference the base schema to avoid specifying conflicting properties and to ensure compatibility with Song's schema structure.

<Note title="Song Base Schema">The Song base schema can be restrictive for data models outside of cancer research contexts, as it requires tumour and normal samples. We are aware of this limitation and are currently working on a new data-agnostic submission system. For more information, contact us on Slack or email us at contact@overture.bio</Note>

# Building Schemas

## Schema Basics

The most basic schema requires, at a minimum, an `analysisType` defined by the `name` field and a single object within it. In the example below, this object is a field termed `experiment`:

```JSON
{
 "name": "basicShcemaExample",
 "schema":{
     "type": "object",
     "required":[
         "experiment"
     ],
     "properties":{
        "experiment":{}
     }
  }
}
 ```

The `analysisType` is defined in data submissions to Song. This field informs Song which data model the submission should be validated against:

 ```JSON
 {
  "studyId": "MICR-CA",
  "analysisType": {
    "name": "basicSchemaExample"
  },
  "experiment": "myNewExperiment"
}
```

In this example, the schema named `basicSchemaExample` is used to validate the data submission. The `analysisType` field specifies that the submission should adhere to the `basicSchemaExample` model, ensuring that all required fields, such as `experiment`, are present and correctly formatted.

The field `studyId` comes from and is required by the base schema and is used to identify what group this collection of data belongs to.

## Schema Structure

The following schema defines that a data submission using the `analysisType` of `exampleSchema` must contain two fields: `field1` (a string) and `field2` (a number):

```JSON
{
  "name": "exampleSchema",
  "schema": {
    "type": "object",
    "required": ["field1", "field2"],
    "properties": {
      "field1": {
        "type": "string"
      },
      "field2": {
        "type": "number"
      }
    }
  }
}
```

There are many different type values available in JSON schema, here is a list of commonly used in JSON type values definitions:

- `string` Textual data e.g., "a word"
- `number` Numeric data (integer or float), e.g. `-5`, `10`, `-5.8`, `10.2`  
- `integer` Integer values (`16`, `0`, `-20`)
- `boolean` Boolean values (`true` or `false`)   
- `object` Key-value pairs where keys are strings and values can be any type
- `array` Ordered lists of items, which can contain any data type   
- `enum`  A fixed set of values.
- `null`  Represents a null value

**Additional Contraints in JSON Schema

JSON Schema can include various additional constraints:

- **Regex Patterns:** Fields can use regex patterns to enforce specific formatting rules

- **Required Fields:** Defines which fields must be present in the data object

- **Array Constraints:**  Allows setting minimum (minItems) and maximum (maxItems) array lengths

- **Conditional Logic (if-then):** Logic to enforce required fields based on conditions.

### Detailed Examples

Let's break down a more complex schema example, you can [view the entire schema here](https://github.com/overture-stack/composer/blob/develop/guideMaterials/dataAdministration/SONG-schema.json). We will provide snippets of this schema along with explainations of the structure, function, and any embedded logic.

**Required Fields**

Line 5 of the reference Schema dictates that `"donor"`, `"specimen"`, `"workflow"`, and `"experiment"` are required fields:

```JSON
{
  "name": "quickStartSchema",
  "schema": {
    "type": "object",
    "required": ["donor", "specimen", "workflow", "experiment"],
    "properties": { ...
```
 
**Enum, Types, and Patterns**

Usage of propertyNames, enum, required, type and regex patterns

```JSON
      "workflow": {
        "propertyNames": {
          "enum": ["workflowName", "workflowShortName", "workflowVersion", "genomeBuild", "inputs","sessionId","runId"]
        },
        "required": ["workflowName", "genomeBuild", "inputs"],
        "type": "object",
        "properties": {
          "workflowName": {
            "type": "string",
            "pattern": "^[a-zA-Z][a-zA-Z0-9 _\\-]+[a-zA-Z0-9]+$"
          },
          "workflowShortName": {
            "type": "string",
            "pattern": "^[a-zA-Z][a-zA-Z0-9_\\-]+[a-zA-Z0-9]+$"
          },
          "workflowVersion": {
            "type": "string"
          },
          "genomeBuild": {
            "type": "string",
            "enum": ["GRCh37", "GRCh38_hla_decoy_ebv", "GRCh38_Verily_v1"]
          },
```

- `workflow` Defines an object containing properties related to workflow.


- `propertyNames` Limits the allowed property names within workflow to those listed


- `required` specifies that `workflowName`, `genomeBuild`, and `inputs` must be present within the workflow object


- `type` indicates that workflow is an object type and therefore contains nested key value pairs


- `workflowName` Requires a string (`"type": "string"`) that matches the specified regex pattern (`"pattern": ^[a-zA-Z][a-zA-Z0-9 _\\-]+[a-zA-Z0-9]+$`). This ensures it starts with a letter, allows alphanumeric characters, spaces, underscores, and hyphens, and ends with alphanumeric characters.


- `genomeBuild` requires a string (`"type": "string"`) that can only be one of the specified values (`"enum": ["GRCh37", "GRCh38_hla_decoy_ebv", "GRCh38_Verily_v1"]`).

**minItems & maxItems**

The snippet below is a simplification of the workflow field to show to usage of minItems and maxItems

```JSON
      "workflow": {
        "propertyNames": {
          "enum": ["inputs"]
        },
        "required": ["inputs"],
        "type": "object",
        "properties": {
          "inputs": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "tumourAnalysisId": {
                  "type": "string",
                  "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{13}$"
                },
                "normalAnalysisId": {
                  "type": "string",
                  "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{13}$"
                },
                "analysisType": {
                  "type": "string"
                }
              }
            },
            "minItems": 1,
            "maxItems": 2
          },
        }
```

- `"minItems": 1,` If you submit data according to this schema then you must include at least one complete set of inputs (A complete set consists of `analysisType`, `normalAnalysisId`, and `tumourAnalysisId`).


- `"maxItems": 2` You can include up to two complete sets of inputs in a single submission.

The `minItems` and `maxItems` constraints apply to the number of these sets (or arrays) within the inputs array, not to the individual fields within each set.

**Conditional Logic**

The following snippet demonstrates the usage of if, then, and properties for conditional logic:

```JSON
          "vitalStatus": {
            "type": "string",
            "enum": ["Alive", "Deceased"]
          },
          "if": {
          "properties": {
            "vitalStatus": {
              "const": "Deceased"
            }
          }
        },
        "then": {
          "required": ["causeOfDeath", "survivalTime"]
        }
      },
```

This conditional schema structure allows for dynamic validation based on the value of `vitalStatus`, ensuring that `causeOfDeath` and `survivalTime` are only required when `vitalStatus` is `Deceased`.


- If `vitalStatus` is `"Deceased"`, then the submission must include `causeOfDeath` and `survivalTime`.


- If `vitalStatus` is `"Alive"`, then there are no additional requirements needed.


- `const` is a validation keyword that specifies that a property's value must exactly match for the submission to be considered valid

 
**Null Values**

Null values can provide flexibility by allowing a property to be explicitly null when no valid string value is applicable or known.

```JSON
  "relapseType": {
    "type": ["string", "null"],
    "enum": [
      "Distant recurrence/metastasis",
      "Local recurrence",
      "Local recurrence and distant metastasis",
      "Progression (liquid tumours)",
      null
    ]
```

If `relapseType` is a string, it must match exactly one of the values listed in the enum array ("Distant recurrence/metastasis", "Local recurrence", "Local recurrence and distant metastasis", "Progression (liquid tumours)")

If relapseType is `null`

```
{
  "relapseType": null
}
```

It is considered valid according to the schema.

This allows for scenarios where relapseType might not have a defined value or where its value is intentionally absent or unknown.

**Minimum & Maximum**

Minimum and maximum keywords in JSON Schema provide straightforward ways to enforce numerical constraints, ensuring that data adheres to specified ranges or limits

```JSON
"treatmentDuration": {
"type": "integer",
"minimum": 0
},
```

- `"minimum": 0` ensures that `treatmentDuration` can only accept non-negative integer values

<Note title="Want to learn more?">If you want to learn more about JSON schema take a look at the following [JSON Schema guide](https://json-schema.org/understanding-json-schema).
</Note>
 

# Updating the Schema

To customize and extend Song's data model to suit your project's requirements, you can update schemas using either Swagger or curl commands. 

## Using the Swagger UI

The Song Swagger UI provides a user-friendly interface to interact with Song's API endpoints. You can access it at the Song server URL appended with `/swagger-ui.html`. For the quickstart, this will be `http://localhost:8080/swagger-ui.html`.

To update the schema using the Swagger UI:

1. **Locate the Schema API endpoints** From the schema dropdown, find the `POST` **RegisterAnalysisType** endpoint.

![Entity](./assets/swagger_register_schema.png 'register new schema')

2. **Select *Try it out* and input your API key and Schema:** enter your authorization token in the authorization field (Bearer {API-Key}), and place your new schema inside the request field.

API Keys are brokered by Keycloak and accessible when logged in to the Stage UI. For the Overture QuickStart, Stage can access from `localhost:3000`

- **Login through the Stage UI** by selecting login from the top right. Default credentials when using the Overture QuickStart will be username `admin` and password `admin123`.


- **Generate a new API token** by selecting **Profile and Token** from your user drop down found on the top right of the Stage UI, select **Generate New Token**. 

![Accessing an API Key](../submission/assets/apikeys.png 'Accessing an API Key')

3. **Select Execute:** expected responses as well as response codes and descriptions, are conviently documented within Swagger-UI. 

<Note title="Verifying Schemas">
To verify your schema has successfully been added, you can use the `GET` **ListAnalysisTypes** endpoint found under the Schema dropdown. If updating a pre-existing schema, use the `GET` **GetAnalysisTypeVersion** endpoint.</Note>

## Using a Curl command

The following curl command makes a POST request with the required authorization tokens, headers and data:

```bash
curl -X POST "https://localhost:8080/schemas" -H "accept: */*" -H "Authorization: Bearer {Insert-API-Key}" -H "Content-Type: application/json" -d "{ \"name
\":\"example_demo\", \"schema\": { \"type\":\"object\", \"required\":[ \"experiment\" ], \"properties\":{ \"experiment\": { \"type\": \"object\", \"required\": [\"experiment_type\"], \"propertyNames\": { \"experiment_type\":{ \"type\":\"string\", \"enum\": [\"WGS\",\"RNA-Seq\"] }, } } } }}"
```

`-X POST "https://localhost:8080/schemas"` specifies the request method to be used, in this case, POST, this points to Songs `schemas` endpoint

`-H "accept: /"` adds an HTTP header specifying that the client accepts any type of response

`-H "Authorization: Bearer {Insert-API-Key}"` adds an HTTP header for authorization, with a Bearer token (replace {Insert-API-Key} with the actual API key).

`-H "Content-Type: application/json"` Adds an HTTP header specifying the content type of the request body as JSON.

`-d '{ ... }'` is the data to be sent with the POST request. This is the JSON payload defining the schema.




