---
title: Schema Strictness
---

# Configuring Schema Strictness

Song's schema strictness determines whether analyses adhere strictly to the latest schema version or can use any version.

Song has two analysis validation modes: **strict** and **non-strict**:

- In **strict mode**, all submitted data must adhere to the latest version of the analysis schema. For example, if the newest version of the schema is 5, all analyses of type `variant_calling` must conform to version 5 of the `variant_calling` schema.

- In **non-strict mode**, submitted data can conform to any schema version. If users don't specify a version in their payload, the latest version of the schema is used for validation.

<Warning>**Tip:** If you are unsure which mode to choose, we recommend using the strict mode as it ensures that all data being submitted is up-to-date.</Warning>

# Environment Variable Setup

Add the following to your `.env.song`

```bash
SCHEMAS_ENFORCELATEST=true
```

By setting `SCHEMAS_ENFORCELATEST` to true, the Song server will enforce that data conforms to the latest schema versions. Conversely, if set to false, data can be submitted under any schema version.
