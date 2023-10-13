---
title: Registering Schemas
---

# Registering new Schemas

The same steps will apply when updating a previous schema.

## Using the Swagger UI

1. **Locate your endpoint of interest**

From the schema dropdown, find the `POST` **RegisterAnalysisType** endpoint.

![Entity](../../assets/swagger_register_schema(s).png 'register new schema')

2. **Select *Try it out* and input your desired values** 

Enter your authorization token in the authorization field and your new schema inside the request field.

3. **Select Execute** 

Expected responses as well as response codes and descriptions, are conviently documented within Swagger-UI. 

<Note title="Verifying Schemas">
To verify your schema has successfully been added, you can use the `GET` **ListAnalysisTypes** endpoint found under the Schema dropdown. If updating a pre-existing schema, use the `GET` **GetAnalysisTypeVersion** endpoint.</Note>


## Using a Curl command

The following curl command makes a POST request with the required authorization tokens, headers and data:

```bash
curl -X POST "https://song.virusseq-dataportal.ca/schemas" -H "accept: */*" -H "Authorization: AUTHORIZATION" -H "Content-Type: application/json" -d "{ \"name
\":\"example_demo\", \"schema\": { \"type\":\"object\", \"required\":[ \"experiment\" ], \"properties\":{ \"experiment\": { \"type\": \"object\", \"required\": [\"experiment_type\"], \"propertyNames\": { \"experiment_type\":{ \"type\":\"string\", \"enum\": [\"WGS\",\"RNA-Seq\"] }, } } } }}"
```

## Using Python

The following script imports the necessary libraries and sends a POST request to a specified URL endpoint with a new schema. It includes authorization using a JWT or API token. If the request fails (status code is not 200), it prints an error message.

```python
import json
import requests
### Verify your SONG URL either through the swagger portal or hosting terminal
url="https://song.virusseq-dataportal.ca"
### Set endpoint
endpoint="%s/schemas" % (url)
### Supply authorized JWT or API token
api_token="AUTHORIZATION"
### Format contents
headers={"accept":"*/*",
         "Authorization":"Bearer %s" % (api_token),
         "Content-Type": "application/json"
        }
### Supply schema as a json either by reading a local file or through a request
payload = new_schema
### Run POST
post_response=requests.post(endpoint, json=payload,headers=headers)
### Complain only when an attempt fails
if post_response.status_code!=200:
print("error calling patch endpoint",endpoint,post_response.status_code)
```
