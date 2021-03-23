---
title: Add Project to Arranger UI
---

To enable the Data Portal to display indexed data, a project must be created in Arranger that the Portal can reference.  The Arranger project will contain configurations and metadata that determine which data fields are displayed in the Portal and how.

Do the following:

1. Check that the Arranger administrative UI is running by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/arranger-ui/ |
| Server  | https://_myDomain_/arranger-ui/ |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

2. From the **Project versions** list, click **Add Project**:

![Entity](../../assets/arranger-no-project.png 'Arranger No Project')

3. A pop-up control appears.  In the **Project ID** field, enter the exact same **Project ID** value that you specified in the DMS-UI section of the configuration questionnaire (default is `file`).  These **MUST** match.


4. Under **Project ID**, click **Add Index**.  Additional fields appear.


5. In the **Name** field, enter the exact same **Name** value that you specified in the DMS-UI section of the configuration questionnaire (default `file`).  These **MUST** match.


6. 5. In the **ES Index** field, enter the **Alias** value that you specified in the DMS-UI section of the configuration questionnaire (default `file_centric`).  These **MUST** match.


7. Click **Choose Files**, then browse for and select the four (4) JSON metadata files that define your project's default configuration in Arranger.  These are the same files you setup earlier in the pre-quisite steps [here](../../configuration/prereq/arranger):

- `aggs-state.json`
- `columns-state.json`
- `extended.json`
- `matchbox-state.json`

Demo samples of these files can be downloaded [here](https://github.com/overture-stack/dms/tree/develop/example-data).

8. VerifyThe configuration pop-up should now look like this:

![Entity](../../assets/arranger-add-project.png 'Arranger Add Project')

9. Click the **Add** button in the bottom right of the pop-up.  Verify that your project is now created and has an entry (row) in the **Project versions** list:

![Entity](../../assets/arranger-new-project.png 'Arranger New Project')

10. You can click the **Project ID** to browse its configurations and make sure they match the metadata files you uploaded above:

![Entity](../../assets/arranger-config.png 'Arranger Config')
