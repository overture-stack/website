---
title: Integrating Arranger
---

Before integrating, make sure to have Arranger Server running correctly and connected to an Elasticsearch instance. For instructions on setting that up, see our <a href="https://overture.bio/documentation/arranger" target="_blank" rel="noopener noreferrer">Arranger documentation here</a>

1. **Create an environment variable file:** Copy or rename the `.env.schema` file as `.env.dmsui`.


2. **Update environment variables:** Update the following fields within your `.env.dmsui`. These values are based on the default Elasticsearch values supplied with Arranger.

```ENV
######### Arranger
NEXT_PUBLIC_ARRANGER_DOCUMENT_TYPE=file 
NEXT_PUBLIC_ARRANGER_INDEX=file_centric_1.0
NEXT_PUBLIC_ARRANGER_API_URL=http://localhost:5050/
# Columns are field names separated by commas, with or without quotes
# this is where you'd provide here the fields you want to use for manifest downloads
# NEXT_PUBLIC_ARRANGER_MANIFEST_COLUMNS=fieldName, "fieldName", 'fieldName'
```

3. **Restart the DMS-UI:** From the command line exit out (Ctrl/Cmd + C), and re-run the DMS-UI `npm run dev`. 

Once compiled you should be able to see Arranger running in the DMS-UI.

![Entity](../../assets/dmsuiarranger.jpg 'Arranger running in the DMS-UI')