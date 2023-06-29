---
title: Schema Strictness
---

Song has two analysis validation modes: **strict** and **non-strict**. 

In **strict mode**, all submitted data must adhere to the latest version of the analysis schema. For example, if the latest version of the schema is 5, all analyses of type `variant_calling` must conform to version 5 of the `variant_calling` schema. 

In **non-strict mode**, submitted data can conform to any version of the schema. If users don't specify a version in their payload, the latest version of the schema is used for validation.

<Note title="Deployment Tip">If you are unsure which mode to choose, we recommend using the strict mode as it ensures that all data being submitted is up-to-date.</Note>

## Configuration 

Using the configurations file at `song-server-[version]/conf/application.yml`, set the following value as desired: 

```yaml
schemas:
  enforceLatest: true
```

