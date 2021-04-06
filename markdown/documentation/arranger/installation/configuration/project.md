---
title: Adding a Project
---

After your Elasticsearch index mapping has been created and supplied, a project must be created in Arranger.  The project will reference the mapping and allow an administrator to configure the search filters, result columns, and so on that need to be exposed to the front-end data portal.

There are several parts to this:

1. Configuring Arranger metadata files in advance (prerequisite)
2. Adding the project to the Arranger Admin UI
3. Configuring the project once it is created

<Warning>**NOTE:** Although multiple projects can be created and exist in the Arranger Admin UI, currently only **ONE** project can be actively in use by the front-end data portal at a time.  This will always be the latest created project.</Warning>

# Setup Arranger Metadata Files

When creating a new project, several metadata JSON files need to be imported.  These files need to be created in advance to reflect the fields in your index mapping that need to be configured within Arranger.

The JSON files are:

| File | Description |
|------|-------------|
| aggs-state.json | Configures the search filters and aggregations in the data portal's facet panel. |
| columns-state.json | Configures the data columns in the data portal's search results table. |
| extended.json | Extended (extra) configurations for your Elasticsearch index mapping. |
| matchbox-state.json | Configures the quick search settings for specified fields in the data portal. |

You can refer to a set of sample files for the default `file_centric_1.0` index [here](https://github.com/overture-stack/dms/tree/develop/example-data/arranger_metadata) as a guide.

<Note title="Tip">For your own custom index mapping, you only need to replace the fields in the JSON files with the fields you wish to configure in Arranger.  You do **NOT** need to supply the actual configuration values, since you can do that in the UI once they are imported.  Just make sure the JSON files are in the correct format per the default example, but with the list of fields from your own mapping instead of the default ones.</Note>

# Add Project to Admin UI

To add a new project to the Arranger Admin UI, do the following:

1. Open your browser and go to the Arranger Admin UI hosted on `localhost:8080`.  The Admin UI is displayed with no projects listed:

![Entity](../../assets/arranger-no-project.png 'Arranger No Project')

2. From the **Project versions** list, click **Add Project**:


3. A pop-up control appears.  In the **Project ID** field, enter a **Project ID**.  This must be in [`snake_case`](https://en.wikipedia.org/wiki/Snake_case).  If you are using the default sample index, you can simply enter `file`.


4. Under **Project ID**, click **Add Index**.  Additional fields appear.


5. In the **Name** field, enter a cosmetic name for the project.  If you are using the default sample index, you can simply enter `file`.


6. In the **ES Index** field, enter the **Elasticsearch Alias Name** value that you specified in the `index_config.json` file.  If you are using the default sample index, then enter `file_centric_1.0`.


7. Click **Choose Files**, then browse for and select the four (4) JSON metadata files that define your project's default configuration in Arranger.  These are the same files you setup [earlier above](/documentation/arranger/installation/configuration/project#setup-arranger-metadata-files):

- `aggs-state.json`
- `columns-state.json`
- `extended.json`
- `matchbox-state.json`

8. The configuration pop-up should now look like this:

![Entity](../../assets/arranger-add-project.png 'Arranger Add Project')

9. Click the **Add** button in the bottom right of the pop-up.  Verify that your project is now created and has an entry (row) in the **Project versions** list:

![Entity](../../assets/arranger-new-project.png 'Arranger New Project')

10. You can click the **Project ID** to browse its configurations and make sure they match the metadata files you uploaded above:

![Entity](../../assets/arranger-config.png 'Arranger Config')

# Configure Project Metadata

For details on how to configure the project metadata, see the relevant sections in the [User Guide](/documentation/arranger/user-guide):

* [Configuring Extended Field Properties](/documentation/arranger/user-guide#configuring-extended-field-properties)
* [Configuring the Facet Panel](/documentation/arranger/user-guide#configuring-the-facet-panel)
* [Configuring the Results Table](/documentation/arranger/user-guide#configuring-the-results-table)
* [Configuring Quick Search](/documentation/arranger/user-guide#configuring-quick-search)

# Indexing Data

Once Arranger is completely configured, you will need to index actual data into Elasticsearch so that it can be explored in your data portal.

If you are using Arranger with the full Overture product suite, you can learn how to upload and index data with our DMS platform bundle [here](/documentation/dms).

However, if you are using Arranger and Elasticsearch standalone without other Overture components, you will need to index the data into ES yourself.  See the [Elastic documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-index.html) for guidance.
