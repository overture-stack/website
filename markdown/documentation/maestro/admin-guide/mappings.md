---
title: Managing Index Mappings
--- 

By default, Maestro builds the Elasticsearch index based on a pre-defined default index mapping. The name of this default mapping gets set in the `application.yml` configuration file.

While this mapping is not configurable in runtime, there may be use cases where an administrator will need to change the mapping.

For example, as mentioned earlier, Song supports [dynamic schemas](/documentation/song/user-guide/schema/), which can be used to extend the base scheme with additional fields. In such a scenario, the administrator must modify the mapping that Maestro uses as input.

**Guidelines for index migration are outlined here:**

1. **Update the existing [index mapping](https://github.com/overture-stack/maestro/blob/master/maestro-app/src/main/resources/file_centric.json)** to account for the new anaysis types and fields.


2. **Re-index the data.** Trigger indexing by updating the `application.yml` configuration file with the new index mapping or index via the Elasticsearch API.


3. **Update your Elasticsearch aliases** to point to the new or updated index instead of the old one.


Following these steps, the data will be migrated and Maestro will now index based on the new mapping.