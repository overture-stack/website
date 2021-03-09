---
title: Creating Schemas
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
There's no need to write your own JSON Schema by hand.  There are lots of libraries built already to help you format your data.  For basic schemas, a good resource is https://jsonschema.net or https://www.liquid-technologies.com/online-json-to-schema-converter, where you can convert JSON to JSON Schema. 

</Note>






# Endpoints
## Add a Schema

Once your schema is ready, it must be registered through the Song Rest API.   

When a schema is registered, it is assigned `version 1`.  For all future schemas that are registered with the same `analysis_type`, the version of the schema will be autoincremented.  

- update a schema based on name 
auto incrementing of versions 

```bash
curl --location --request POST 'https://song-url.example.com/schemas' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 2b62d0e4-7ef2-4daf-94e5-34c27f6fa752' \
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

## Get Schemas
- dynamic vs whol 
- dyanmic is useful during schema updates as it only returns the portion you want as a base to update