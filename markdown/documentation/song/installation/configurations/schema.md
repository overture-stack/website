---
title: Schema Strictness
---

Song's schema strictness determines whether analyses adhere strictly to the latest schema version or can use any version. 

Song has two analysis validation modes: **strict** and **non-strict**. 

In **strict mode**, all submitted data must adhere to the latest version of the analysis schema. For example, if the latest version of the schema is 5, all analyses of type `variant_calling` must conform to version 5 of the `variant_calling` schema. 

In **non-strict mode**, submitted data can conform to any version of the schema. If users don't specify a version in their payload, the latest version of the schema is used for validation.

<Note title="Deployment Tip">If you are unsure which mode to choose, we recommend using the strict mode as it ensures that all data being submitted is up-to-date.</Note>

## Configuration 

If the `.env` variable does not exist in the supplied file, you may need to create one. Once located or created, set the following value as desired:

```bash
SCHEMAS_ENFORCELATEST=true
```

By setting SCHEMAS_ENFORCELATEST to true, the Song server will enforce that data conforms to the latest schema versions. Conversely, if set to false, data can be submitted under any version of the schema.