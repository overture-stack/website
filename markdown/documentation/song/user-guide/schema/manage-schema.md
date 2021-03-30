---
title: Managing Schemas
---
When registering a dynamic schema, you must only submit the dynamic portion of an analysis schema, that is the schema that defines your unique business rules.


# Schema Template
The basic portion of a dynamic schema requires at a minimum: 
- an `analysis_type`
- an `experiment` object 
```json

This template can be used to start your dynamic schema: 
{
 "name": "variant_calling_example",
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
<Note title="User Tip">
There's no need to write your own JSON Schema by hand. There are many existing libraries to help you format your data.  For basic schemas, a good resource is https://jsonschema.net or https://www.liquid-technologies.com/online-json-to-schema-converter, where you can convert JSON to JSON Schema. 

</Note>

# Endpoints
## Add a Schema

Once your schema is ready, it must be registered through the Song REST API. When a schema is registered, it is assigned `version 1`.  For all future schemas that are registered with the same `analysis_type` name, the version of the schema will be auto incremented during registration.  

Example Request: 
```bash
curl --location --request POST 'https://song-url.example.com/schemas' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 02ad07ea-2982-43b4-8aa3-1d64689050f0' \
--data-raw '
{
 "name": "variant_calling_example",
 "schema":{
	 "type": "object",
	 "required":[
		 "experiment"
	 ],
	 "properties":{
		"experiment":{}
	 }
 }
}'

```
## List Schemas

Schemas registered to a Song can be returned with the List Schema endpoint.  There are a couple very helpful parameters that can be used with this endpoint for management needs:

- **hideSchema**: Can be set to `true` or `false`. When set to true, the schemas will not be returned as part of the request. 
- **unrenderedOnly**: Can be set to `true` or `false`. If `hideSchema` is set to false, then a schema will be returned. This parameter controls whether or not the song base schema is returned as part of the request.  For users making updates to dynamic schemas, it is helpful to set this to `true` so they can take the current dynamic schema portion and edit just that for easier future schema registration. 

Example: Basic listing of all schemas.
```bash
curl --location --request GET 'https://song-url.example.com/schemas?hideSchema=true&limit=50&offset=0&unrenderedOnly=true' \
--header 'Authorization: Bearer 02ad07ea-2982-43b4-8aa3-1d64689050f0' 
```

Example: List of all schemas, with only the dynamic portion rendered: 

```bash
curl --location --request GET 'https://song-url.example.com/schemas?hideSchema=false&limit=50&offset=0&unrenderedOnly=true' \
--header 'Authorization: Bearer 02ad07ea-2982-43b4-8aa3-1d64689050f0' 
```
## Get Schemas
Individual schemas can also be requested. There are a couple very helpful parameters that can be used for management needs:
- **version**: If provided, a specific version of a schema is returned.  Otherwise, all versions of an `analysis_type` schema are returned. 
- **unrenderedOnly**: Can be set to `true` or `false`. This parameter controls whether or not the song base schema is returned as part of the request.  For users making updates to dynamic schemas, it is helpful to set this to `true` so they can take the current dynamic schema portion and edit just that for easier future schema registration. 

```bash
curl --location --request GET 'https://song-url.example.com/schemas/sequencing_experiment?unrenderedOnly=true' \
--header 'Authorization: Bearer 02ad07ea-2982-43b4-8aa3-1d64689050f0'
```