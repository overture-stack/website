---
title: Making Schemas
---

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

Here are some resources to help with the creation of new schemas for your projects:

- <a href="https://json-schema.org/understanding-json-schema" target="_blank" rel="noopener noreferrer">Understanding JSON Schema guide</a>: This guide provides detailed information on JSON Schema formatting, offering a comprehensive resource for understanding and working with JSON schemas.

- <a href="https://raw.githubusercontent.com/cancogen-virus-seq/metadata-schemas/main/schemas/consensus_sequence.json" target="_blank" rel="noopener noreferrer">Example schema</a>: If you're looking for a sample schema, you can refer to this example schema used for the CanCOGeN's VirusSeq Portal. It can serve as a reference or starting point for creating your own schemas.

- <a href="https://github.com/overture-stack/SONG/blob/develop/song-server/src/main/resources/schemas/analysis/analysisBase.json" target="_blank" rel="noopener noreferrer">Base schema reference</a>: Song utilizes a base schema that is combined with all user schemas. When creating your schemas, it's important to reference the base schema to avoid specifying conflicting properties and ensure compatibility with Song's schema structure.

These resources aim to provide guidance and references for schema creation, ensuring the consistency and compatibility of your schemas within the Song metadata framework.

<Note title="User Tip">
There's no need to write your own JSON Schema by hand. There are many existing libraries to help you format your data.  For basic schemas, a good resource is https://jsonschema.net or https://www.liquid-technologies.com/online-json-to-schema-converter, where you can convert JSON to JSON Schema.</Note>
