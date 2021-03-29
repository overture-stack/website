---
title: Schema Strictness
---

There are 2 modes by which Song operates for allowing submission of data against analysis schemas: `strict` or `non-strict`. When a Song administrative user submits a [dynamic schema](/documentation/song/user-guide/schema), the schema is automatically versioned based on the schema name. 

When `ON` the **strict** schema configuration will force all [submitted data](/documentation/song/user-guide/analysis/submit) to conform to the latest version of an analysis schema that has been submitted. For example, if Song administrators have submitted a schema called `variant_calling` 5 times, then `5` would be the latest version.  All payloads submitted to song of the type `variant_calling` must conform to the `variant_calling` schema as defined in `version 5`.   

When `OFF`, the **strict** schema configuration will allow [submitted data](/documentation/song/user-guide/analysis/submit) to conform to _any version_ of an analysis schema that has been submitted. For example, if Song administrators have submitted a schema called `variant_calling` 5 times, then `5` would be the latest version.  Payloads could be submitted by users of the type `variant_calling` against any version of the schema if that is included in their payload; otherwise the latest version of the schema is used for validation. 

<Note title="Deployment Tip">If you are unsure which version your Song administrators would prefer, we we recommend defaulting to using the configuration `strict: true`to ensure that data submitted is always the most up-to-date. </Note>

## Configuration Example 
![DEV_CONTENT](../../assets/developer-content-needed.png 'Dev content needed')
Provide example for users. 

```bash
# Need this template from developers 
# Example of just how to configure the SCHEMA config. 
```