---
title: Managing Index Mappings
--- 

By default, Maestro builds the Elasticsearch index based on a pre-defined default index mapping. The name of this default mapping gets set in the `.env.maestro` environment variable file.

While this mapping is not configurable in runtime, there may be cases where an administrator will need to change the mapping.

For example, when updating Songs' <a href="/documentation/song/user-guide/schema/" target="_blank" rel="noopener noreferrer">dynamic schemas</a> the administrator must also update Maestros' index mapping.

**Guidelines for index migration are outlined here:**

1. **Update the existing <a href="https://github.com/overture-stack/maestro/blob/master/maestro-app/src/main/resources/file_centric.json" target="_blank" rel="noopener noreferrer">index mapping</a>** to account for the new analysis types and fields.

2. **Re-index the data.** Trigger indexing by updating the `.env.maestro` environment file with the new index mapping or index via the Elasticsearch API.

3. **Update your Elasticsearch aliases** to point to the new or updated index instead of the old one.

Following these steps, the data will be migrated and Maestro will now index based on the new mapping.