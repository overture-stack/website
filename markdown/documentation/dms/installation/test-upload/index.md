---
title: Testing Data Upload
---

After you have completed all [post-deployment verification and configuration](../verify), the DMS platform is ready for use.

Here we will demonstrate and test a simple, end-to-end data upload.  We will use demo data available with the DMS to submit data, index it, configure it for display, and finally explore that data in the Data Portal.

# Configure User Permissions in Ego

First we must configure the correct permissions in Ego to allow us to execute data upload operations.

This configuration should have been completed during your [post-deployment verification and configuration](../verify), but we will double-check.

1. Log into Ego UI with the [original admin user you created](../verify#login-and-configure-ego) by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/ego-ui |
| Server  | https://`<myDomain>`/ego-ui |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. From the left navigation, click **Groups** and verify that the `dms-admin` group has been created and is assigned these permissions: `DMS.WRITE`, `SONG.WRITE`, `SCORE.WRITE`.  These permissions are required to perform certain data upload operations:

![Entity](../../assets/ego-dms-admin2.png 'Ego DMS Admin')

3. From the left navigation, click **Users** and verify that your user was created with **USER TYPE** = `ADMIN`, is assigned the `dms-admin` group, and has these permissions: `DMS.WRITE`, `SONG.WRITE`, `SCORE.WRITE`

![Entity](../../assets/ego-first-user2.png 'Ego First User')

# Generate API Key in DMS UI

Now that you have verified your user has the correct permissions, we can generate our API Key directly from the DMS UI (Data Portal) itself.  The API Key is used for all subsequent operations with the various Overture service APIs you will interact with.

1. Log into DMS UI with the [original admin user you created](../verify#login-and-configure-ego-ui) by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/dms-ui |
| Server  | https://`<myDomain>` |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

![Entity](../../assets/dms-ui-login.png 'DMS UI Login')

2. Click your name in the top-right in the header and select **Profile & Token**. Your profile is displayed showing your name (as captured from your identity provider), your contact email (as captured from your identity provider), and the identity provider that you have logged in with:

![Entity](../../assets/profile-info2.png 'Profile Info')

3. Click **Generate Token**.  A new token is generated, with its validity period (in days) displayed to its left. **Record and remember your token value and keep it safe and secure**.  You can easily copy the value to your clipboard by clicking the **Copy** button:

![Entity](../../assets/generate-token.png 'Generate Token')

4. Log back into Ego UI, navigate back to your user profile, and verify that under `API Keys` the newly-generated token now appears with an `ACTIVE` state and the correct `SCOPES` (permissions):

![Entity](../../assets/api-token.png 'Check API Key')

# Create Study in Song

Next, we must create a study in Song. The concept of a study is used to group data that belongs together and must be submitted and indexed together.

Moving forward, we will use a set of sample data prepared for a test study with the ID, `ABC123`.

## Create Study Using cURL

To create your study via cURL:

1. Open a command-line terminal session.

2. Enter the following command:

```shell
curl -X POST "http://<url>/song-api/studies/ABC123/" -H  "accept: */*" -H  "Authorization: bearer <API KEY>" -H  "Content-Type: application/json" -d "{  \"description\": \"string\",  \"info\": {  },  \"name\": \"string\",  \"organization\": \"string\",  \"studyId\": \"ABC123\"}"
```

Enter the `<url>` based on your deployment mode:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>` |
| Server  | https://`<myDomain>` |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

For `<API KEY>`, enter the API Key you genereted earlier.

Leave `description`, `info`, `name`, `organization` blank (can be filled in optionally if you want).

## Create Study Using Swagger UI

To create your study via the Swagger UI:

1. Go to the Song API's Swagger UI:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/song-api/swagger-ui.html |
| Server  | https://`<myDomain>`/song-api/swagger-ui.html |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. Under **Study** click the `POST /studies/{studyId}/ CreateStudy` endpoint.


3. Click **Try it out**.


4. Click the **Authorize** button in the top right.


5. Under **Authorization**, enter the `Bearer <API Key>` and click **Authorize**, where `<API Key>` is the API Key value you generated earlier.


6. In the **study** body, in the `studyId` field, replace `"string"` with `"ABC123"`.


7. In the `studyId` field, enter `ABC123`.


8. Click **Execute**.  For example:

![Entity](../../assets/create-study.png 'Create Study')

## Verify Study Created

If successful, either the cURL command or the Swagger UI will return a successful response indicating the study is created in Song:

```shell
{
  "message": "Successfully created study 'ABC123'"
}
```

# Download and Configure Song Client

Next, you must download and configure the Song client.  This command-line client is used for various metadata operations such as submitting analyses, creating file manifests for Score, and so on.  To understand how to use Song in more detail, see [here](../../../song).

1. Download and unzip the latest Song client from [here](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/song-client/%5BRELEASE%5D/song-client-%5BRELEASE%5D-dist.tar.gz) or do so from your terminal command line, then switch to the unzipped directory:

```shell
$ wget -O song-client.tar.gz https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/song-client/[RELEASE]/song-client-[RELEASE]-dist.tar.gz
 
$ tar xvzf song-client.tar.gz
 
$ cd song-client-<latest-release-number>
```

2. Open the `song-client/<latest-release-number>/conf/application.yaml` file and edit the **client** section as follows:

Set `serverUrl` based on your deployment mode:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/song-api |
| Server  | https://`<myDomain>`/song-api |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

Set `studyId` to `ABC123` (the study for which you will be submitting data).

Set `accessToken` to the API Key you recorded earlier via DMS UI.

For example:

```shell
client:
  serverUrl: http://localhost:80/song-api
  studyId: ABC123
  programName: sing
  debug: false
  accessToken: 36099917-45b1-49f4-b91e-68a655eb6708
```

3. Save your changes.

# Download and Configure Score Client

Next, you must download and configure the Score client.  This command-line client is to upload and download data files to and from your configured object storage service.  To understand how to use Score in more detail, see [here](../../../score).

1. Download and unzip the latest Score client from [here](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/%5BRELEASE%5D/score-client-%5BRELEASE%5D-dist.tar.gz) or do so from your terminal command line, then switch to the unzipped directory:

```shell
$ wget -O score-client.tar.gz https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/[RELEASE]/score-client-[RELEASE]-dist.tar.gz
 
$ tar xvzf score-client.tar.gz
 
$ cd score-client-<latest-release-number>
```

2. Open the `score-client/<latest-release-number>/conf/application.properties` file and edit the **client** section as follows:

Set `accessToken` to the API Key you recorded earlier via DMS UI.

Uncomment `metadata.url` and set it based on your deployment mode:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/song-api |
| Server  | https://`<myDomain>`/song-api |

Uncomment `storage.url` and set it based on your deployment mode:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/score-api |
| Server  | https://`<myDomain>`/score-api |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

For example:

```shell
# The access token for authorized access to data
accessToken=36099917-45b1-49f4-b91e-68a655eb6708
 
# The location of the metadata service (SONG)
metadata.url=http://locatlhost:80/song-api
 
# The location of the object storage service (SCORE)
storage.url=http://localhost:80/score-api
```

3. Save your changes.

# Submit Analysis to Song

Next, we must submit an analysis to Song. All submitted data must be associated to some type of analysis registered with Song. For demonstration purposes here, we will simply submit a default analysis type that is already pre-registered out-of-the-box, `variantCall`.  If you wish to learn how to register your own analysis type schemas, please see the detailed [Song documentation](../../../song). 

For our example, we will submit data for a single variant call JSON file:

1. Download this [sample JSON](https://github.com/overture-stack/dms/blob/develop/example-data/exampleVariantCall.json) and place it in a directory of your choosing. Remember this directory as it will be used in subsequent operations.


2. Download these accompanying input VCF files and place them in a directory of your choosing.  Remember this directory as it will be used in subsequent operations:

- [example.vcf.gz](https://github.com/overture-stack/dms/blob/develop/example-data/example.vcf.gz)
- [example.vcf.gz.idx](https://github.com/overture-stack/dms/blob/develop/example-data/example.vcf.gz.idx)

3. Switch to your home directory and from there, submit the analysis by executing the Song client with this command:

```shell
$ ./song-client-<latest-release-number>/bin/sing submit -f ./<directory>/exampleVariantCall.json
```

Where `<directory>`is the path to where you have stored the JSON file downloaded earlier.

4. If successful, an Analysis ID is returned and displayed.  Record this as you will need it for subsequent operations:

```shell
{
  "analysisId" : "2bfc131a-0d5c-4011-bc13-1a0d5c101184",
  "status" : "OK"
}
```

# Create Manifest for Score

Now that the analysis has been submitted, we must create a manifest so that the input data files that you downloaded earlier can be uploaded to your object storage service via Score:

1. Switch to your home directory and from there, create a manifest by executing the Song client with this command:

```shell
 $ ./song-client-<latest-release-number>/bin/sing manifest -a <ANALYSIS ID> -f <outputDirectory>/manifest.txt -d <submittingFilesDirectory>
 ```

Where:

- `<ANALYSIS ID>` is the Analysis ID you captured earlier from submitting an analysis to Song
- `<outputDirectory>` is the directory where you want the generated manifest to be created
- `<submittingFilesDirectory>` is the directory where you have stored the raw data files to upload to score

2. If successful, the manifest file will be created in the specified output directory:

```shell
Wrote manifest file './song/manifests/manifest.txt' for analysisId '2bfc131a-0d5c-4011-bc13-1a0d5c101184'
```

3. Switch to the manifest output directory and make sure the file exists, then examine its contents to check that it lists the correct input files:

```shell
$ cat manifest.txt
 
$ 2bfc131a-0d5c-4011-bc13-1a0d5c101184
a7612d76-37ec-57ad-92d9-51fb44a70e07    /home/ubuntu/song/input-files/example.vcf.gz.idx    c03274816eb4907a92b8e5632cd6eb81
ec619aaf-0150-5b5e-b5ec-b6fc9c7f1769    /home/ubuntu/song/input-files/example.vcf.gz    9a793e90d0d1e11301ea8da996446e59
```

# Upload Data via Score

With the manifest generated, use it to upload your raw data files to score:

1. Switch to your home directory and from there, initiate an upload by executing the Score client with this command:

```shell
$ ./score-client-<latest-release-number>/bin/score-client upload --manifest ./<directory>/manifest.txt
```

Where `<directory>` is where you previously generated and stored the manifest file.


2. If successful, each file in the manifest will be 100% uploaded, and the score-client will indicate the upload has completed:

```shell
Uploading object: '/home/ubuntu/songdata/input-files/example.vcf.gz.idx' using the object id e98daf88-fdf8-5a89-9803-9ebafb41de94
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 1000B/s, Read/sec: 0B/s
Finalizing...
Total execution time:         3.141 s
Total bytes read    :               0
Total bytes written :              24
Upload completed
Uploading object: '/home/ubuntu/songdata/input-files/example.vcf.gz' using the object id 440f4559-e905-55ec-bdeb-9518f823e287
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 7.8K/s, Read/sec: 0B/s
Finalizing...
Total execution time:         3.105 s
Total bytes read    :               0
Total bytes written :              52
Upload completed
```

# Publish Analysis

Once the input files are uploaded, you can finally publish your analysis so that it can be indexed into Elasticsearch and consumed by downstream Overture services.

1. Switch to your home directory and from there, publish the analysis by executing the Song client with this command:

```shell
$ ./song-client-<latest-release-number>/bin/sing publish -a <ANALYSIS ID>
```

Where `<ANALYSIS ID>` is the Analysis ID you captured earlier from submitting an analysis to Song.

2. If successful, the Song client will indicate that the analysis is successfully published:

```shell
AnalysisId 3ecae260-db0e-450d-8ae2-60db0e950d15 successfully published
```

# Index Study via Maestro

Now that the study is published, its data must be indexed into Elasticsearch so it can be consumed by Arranger and the DMS UI.  Indexing is done via the Maestro service.

## Index Study Using cURL

To create your study via cURL:

1. Open a command-line terminal session.

2. Enter the following command:

```shell
curl -X POST "http://<url>/maestro/index/repository/<repositoryCode>/study/<studyId>" -H  "accept: */*" -d ""
```

Enter the `<url>` based on your deployment mode:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>` |
| Server  | https://`<myDomain>` |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

For `studyId`, enter the Study ID you created earlier (e.g. "ABC123").

For `repositoryCode`, this must be set to `song.overture`.

## Index Study Using Swagger UI

To index your study via the Swagger UI:

1. Go to the Maestro API's Swagger UI:

| Mode               | URL |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/maestroi/api-docs |
| Server  | https://`<myDomain>`/maestroy/api-docs |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. Under **management-controller**, click the `POST /index/repository/{repositoryCode}/study/{studyId}` endpoint.

3. Click **Try it out**.


4. In `studyId`, enter `ABC123`, the study you created earlier.


5. In `repositoryCode`, you must enter `song.overture`.


6. Click **Execute**. For example:

![Entity](../../assets/index-study.png 'Index Study')

## Verify Study Indexed

If successful, either the cURL command or the Swagger UI will return a successful response indicating the study is created in Song:

```shell
[
  {
    "indexName": "file_centric_1",
    "failureData": {
      "failingIds": {}
    },
    "successful": true
  }
]
```

# Verify the Data in the Portal

Finally, we can visit the DMS UI (Data Portal) to explore our data and verify that the submitted data for our new study now appears in the Portal.

1. Open your browser and, depending on your deployment mode, navigate to the DMS UI by going to:

| Mode               | URI |
| --------------------| ------------|
| Local   | http://localhost:`<port>`/dms-ui |
| Server  | https://`<myDomain>` |

Where:
- `<port>` is the port on which you have deployed the DMS Gateway in local mode
- `<myDomain>` is the registered [domain you configured](../configuration/prereq/domain) for the DMS Gateway (e.g. `dms.test.cancercollaboratory.org`)

2. Click **Data Explorer**.


3. Observe that the single analysis file (VCF) we registered, uploaded, and published now appears in the UI!  Congratulations, you have successfully completed and end-to-end data upload with the DMS platform!

![Entity](../../assets/upload-complete.png 'Upload Complete')

For detailed instructions on how to use the Data Portal, see [here](../../user-guide/data-portal).