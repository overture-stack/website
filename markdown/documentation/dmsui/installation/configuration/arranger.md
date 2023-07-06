---
title: Integrating Arranger
---

Before integrating Arranger make sure you have Arranger running with an Elasticsearch instance connected. For instructions on setting up arranger see our [arranger documentation here](https://overture.bio/documentation/arranger)

1. Copy or rename the `.env.schema` file as `.env.local`.


2. Update the following fields within your `.env.local`. These values are based on the default Elasticsearch values supplied with Arranger.

```
######### Arranger
NEXT_PUBLIC_ARRANGER_DOCUMENT_TYPE=file 
NEXT_PUBLIC_ARRANGER_INDEX=file_centric_1.0
NEXT_PUBLIC_ARRANGER_API_URL=http://localhost:5000/
# Columns are field names separated by commas, with or without quotes
# this is where you'd provide here the fields you want to use for manifest downloads
# NEXT_PUBLIC_ARRANGER_MANIFEST_COLUMNS=fieldName, "fieldName", 'fieldName'
```

3. Restart the DMS-UI by exiting out and re-running `npm run dev`

Once compiled you should be able to see Arranger running in the DMS-UI.

<!--Grab screenshot once docker is fixed-->



