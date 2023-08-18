---
title: Managing Schemas
---

# Versioning

Newly registered schemas that represent a new `analysis_type` are assigned as `Version 1` by default. All future schemas registered under the same `analysis_type` will be auto-incremented during registration.

# Listing Schemas

To retrieve a list of all schemas registered in Song, you can use the `ListAnalysisTypes` endpoint. The following parameters are helpful for managing schemas:

- **hideSchema**: When set to `true`, the schemas will not be returned in the list.
- **unrenderedOnly**: Can be set to `true` or `false`. If `hideSchema` is set to `false`, the schema will be returned. This parameter controls whether the Song base schema is included in the request. For users updating dynamic schemas, it is helpful to set this to `true` so they can focus on editing the dynamic portion for easier future schema registration.

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

You can also request individual schemas using the `GetAnalysisTypeVersion` endpoint. The following parameters are useful for management needs:

- **version**: If provided, a specific version of a schema is returned.  Otherwise, all versions of an `analysis_type` schema are returned. 
- **unrenderedOnly**: Can be set to `true` or `false`. This parameter controls whether the Song base schema is included in the request. For users updating dynamic schemas, it is helpful to set this to `true` so they can focus on editing the dynamic portion for easier future schema registration.

```bash
curl --location --request GET 'https://song-url.example.com/schemas/sequencing_experiment?unrenderedOnly=true' \
--header 'Authorization: Bearer 02ad07ea-2982-43b4-8aa3-1d64689050f0'
```

# Versioning

Newly registered schemas that represent a new `analysis_type` are by default assigned as `Version 1`. All future schemas registered under the same `analysis_type` get auto incremented during registration.  

# Listing Schemas

All schemas registered to Song can be returned with the ListAnalysisTypes endpoint. For managing schemas here are a couple helpful parameters:

- **hideSchema**: When set to true, the schemas will not be returned by the list 
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
