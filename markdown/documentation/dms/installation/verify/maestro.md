---
title: Maestro Verification
---

1. Access the Maestro API via:
- **Local:** http://localhost:`<port>`/maestro/swagger-ui.html
- **Server** https://`<myDomain>`/maestro/swagger-ui.html

2. If successful, your browser will present the Maestro Swagger API graphically.

![Entity](../../assets/maestro-swagger.png 'Maestro Swagger')

# Check Elasticsearch is Running

Check that Elasticsearch index is deployed by using a tool such as Elastic's own [Kibana](https://www.elastic.co/kibana) tool or browser plugin (e.g. [Elastichead](https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm) for Chrome or [Elasticvue](https://addons.mozilla.org/en-CA/firefox/addon/elasticvue/) for Firefox) to graphically view the index.

Do the following:

1. From your tool, connect to Elasticsearch by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/elasticsearch |
| Server  | https://`<myDomain>`/elasticsearch |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. Enter username `elastic` and the password you provided during configuration.

3. Browse the indices and check that the default index (default name `file_centric`) is created and the base fields are present.  For example, from the Chrome Elastichead plugin:

![Entity](../../assets/es-plugin.png 'Elasticsearch Plugin')

# Add project to Arranger UI

1. Access the Arranger UI:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/arranger-admin |
| Server  | https://`<myDomain>`/arranger-admin |

. From the **Project versions** list, click **Add Project**:

![Entity](../../assets/arranger-no-project.png 'Arranger No Project')

3. A pop-up control appears.  In the **Project ID** field, enter the exact same **Project ID** value that you specified in the DMS-UI section of the configuration questionnaire (default is `file`).  These **MUST** match.


4. Under **Project ID**, click **Add Index**.  Additional fields appear.


5. In the **Name** field, enter the exact same **Project Name** value that you specified in the DMS-UI section of the configuration questionnaire (default `file`).  These **MUST** match.


6. 5. In the **ES Index** field, enter the **Elasticsearch Alias Name** value that you specified in the DMS-UI section of the configuration questionnaire (default `file_centric`).  These **MUST** match.


7. Click **Choose Files**, then browse for and select the four (4) JSON metadata files that define your project's default configuration in Arranger.  These are the same files you setup earlier in the pre-quisite steps [here](../configuration/prereq/arranger):

- `aggs-state.json`
- `columns-state.json`
- `extended.json`
- `matchbox-state.json`

Demo samples of these files can be downloaded [here](https://github.com/overture-stack/dms/tree/develop/example-data).

8. The configuration pop-up should now look like this:

![Entity](../../assets/arranger-add-project.png 'Arranger Add Project')

As indicated, values used to create the project in the Arranger UI here **MUST** match the `Project ID`, `Project Name`, `Elasticsearch Alias Name` that you [supplied earlier during the configuration script](../configuration/configure-dms#configure-dms-ui).

This screenshot shows how the Arranger UI fields map to the inputs in the DMS installation script:

![Entity](../../assets/arranger-project-fields.png 'Arranger Project Fields')

9. Click the **Add** button in the bottom right of the pop-up.  Verify that your project is now created and has an entry (row) in the **Project versions** list:

![Entity](../../assets/arranger-new-project.png 'Arranger New Project')

10. You can click the **Project ID** to browse its configurations and make sure they match the metadata files you uploaded above:

![Entity](../../assets/arranger-config.png 'Arranger Config')

# Check Data Portal is Running

Access the data portal:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ |
| Server  | https://`<myDomain>`/ |

Your browser should now display the DMS data portal.

Once all post-deployment checks are completed, and any necessary configurations are done, your DMS platform is fully operational. Please refer to our [User Guides](../user-guides) for detailed user instructions.

