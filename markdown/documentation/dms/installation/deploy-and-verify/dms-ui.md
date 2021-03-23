---
title: Check DMS-UI (Data Portal) is Running
---

After [adding your project to Arranger](./arranger-ui), check that the DMS-UI (Data Portal) is running by going to: 

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:80/dms-ui |
| Server  | https://_myDomain_/dms-ui |

Where _myDomain_ is the registered [domain you will configure](../domain) for the DMS Gateway (e.g. "_dms.test.cancercollaboratory.org_")

1. Click **Login**, select one of the Identity Providers, and test that you can log into the Data Portal:

![Entity](../../assets/dms-ui-login.png 'DMS UI Login')

2. Next, click **Data Explorer** and verify that page displays the filters in the left control panel and the columns in the results table, as described by your Arranger UI configuration.  **However, no data will be present at this point, since no actual data has been uploaded and indexed**:

![Entity](../../assets/dms-explorer-empty.png 'DMS Explorer Empty')



<Note title="Verification Complete">**NOTE:** This completes the verification of your DMS installation.  The final step in preparing your DMS platform is to upload actual data to it for end user consumption.  In the [Test Data Upload Flow](../../test-upload) section, we will teach you how to populate the system with data using a simple demo example. </Note>