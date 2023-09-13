---
title: Data Upload
---

This guide walks you through an end-to-end data upload. We will use demo data to submit, index, configure for display, and finally explore that data in the Data Portal.

# Create a Study in Song

To upload data, we will need to create a study in Song. A study in Song acts as a grouping mechanism for data that's related, allowing data to be submitted and indexed together. For demonstration purposes, we'll use sample data from a fictional test study with the ID `ABC123`.

## Create a Study Using cURL

1. **Open Terminal:** Launch your terminal or command prompt.

2. **Input Command:** Enter the following command to create the study:

```bash
curl -X POST "http://<url>/song-api/studies/ABC123/" -H  "accept: */*" -H  "Authorization: bearer <API KEY>" -H  "Content-Type: application/json" -d "{  \"description\": \"string\",  \"info\": {  },  \"name\": \"string\",  \"organization\": \"string\",  \"studyId\": \"ABC123\"}"
```

- Based on your deployment mode, replace `<url>` with:
   - Local: `http://localhost:<port>`
   - Server: `https://<myDomain>`
- Replace `<API KEY>` with your generated key (If unsure, see prerequisite steps).
- The other placeholders (`description`, `info`, `name`, `organization`) can remain empty but can be populated if desired.

## Create a Study Using Swagger UI

If you prefer a GUI approach:

1. **Open Swagger UI:** Navigate to the Song API's Swagger UI:
   - Local: `http://localhost:<port>/song-api/swagger-ui.html`
   - Server: `https://<myDomain>/song-api/swagger-ui.html`


2. **Select Endpoint:** Under the **Study** category, choose the `POST /studies/{studyId}/ CreateStudy` endpoint.


3. Click **Try it out**.


4. **Authorize:** Click **Authorize** at the top right. Under **Authorization**, input `Bearer <API Key>`, replacing `<API Key>` with your token, and confirm with **Authorize**.


5. **Input Data:** In the request body, replace the `studyId` placeholder with `ABC123`.


6. Click **Execute**. 

![Entity](../../assets/create-study.png 'Create Study')

# Submit the Analysis to Song

In Song, submitted data encompasses both data files (such as sequencing reads or VCFs) and their associated metadata. When you combine this metadata and data files, the result is what we term a Song `Analysis`. It represents a cohesive unit that keeps file metadata and the data itself tightly coupled, serving as the primary entity within the Song database.

Song administrators describe Analysis types. They have the flexibility to model the data encapsulated within an analysis type using <a href="/documentation/song/user-guide/schema" target="_blank" rel="noopener noreferrer">Dynamic Schemas</a>. This means an analysis type can include a diverse array of information relevant to a file type, all formatted in `JSON`.

For most Song users, interactions typically revolve around two main activities: 

- Submitting metadata in alignment with a pre-established analysis type schema.
- Downloading file sets associated with an analysis (for instance, multiple files combined into a single analysis).

1. **Download the following sample data files**:
   - [Sample Analysis file](https://github.com/overture-stack/dms/blob/develop/example-data/exampleVariantCall.json)
   - [Sample VCF file](https://github.com/overture-stack/dms/blob/develop/example-data/example.vcf.gz)
   - [Sample VCF Index](https://github.com/overture-stack/dms/blob/develop/example-data/example.vcf.gz.idx)


2. **Submit the Analysis**: Navigate to your home directory and run the following Song client command:

```bash
./song-client-<latest-release-number>/bin/sing submit -f ./<directory>/exampleVariantCall.json
```

Where `<directory>` is the location you stored the sample Analysis file. 


3. **Save the Analysis ID**: On successful submission, an Analysis ID is generated. Keep a record:

```bash
{
   "analysisId" : "2bfc131a-0d5c-4011-bc13-1a0d5c101184",
   "status" : "OK"
}
```

# Create a Manifest for Score

With the analysis submitted, create a manifest to upload the data files to your object storage via Score.

1. **Generate the Manifest:** Return to your home directory and use the following Song client command:

```bash
$ ./song-client-<latest-release-number>/bin/sing manifest -a <ANALYSIS ID> -f <outputDirectory>/manifest.txt -d <submittingFilesDirectory>
```

   Where:
   - `<ANALYSIS ID>` is the ID from the previous section.
   - `<outputDirectory>` is the destination for the generated manifest.
   - `<submittingFilesDirectory>` is the location of the raw data files.

2. **Confirm the Manifest Creation:** A success message confirms the manifest's location and associated `analysisId`.

```bash
Wrote manifest file './song/manifests/manifest.txt' for analysisId '2bfc131a-0d5c-4011-bc13-1a0d5c101184'
```

3. **View the Manifest:** Navigate to the manifest's directory and check it's referencing the correct input files.

```bash
$ cat manifest.txt
$ 2bfc131a-0d5c-4011-bc13-1a0d5c101184
a7612d76-37ec-57ad-92d9-51fb44a70e07    /home/ubuntu/song/input-files/example.vcf.gz.idx    c03274816eb4907a92b8e5632cd6eb81
ec619aaf-0150-5b5e-b5ec-b6fc9c7f1769    /home/ubuntu/song/input-files/example.vcf.gz    9a793e90d0d1e11301ea8da996446e59
```

# Upload Data via Score

After generating the manifest, you'll use it to upload your raw data files using Score.

1. **Upload:** Navigate to your home directory. Execute the Score client to initiate the upload:

```bash
./score-client-<latest-release-number>/bin/score-client upload --manifest ./<directory>/manifest.txt
```

Where `<directory>` is the location you saved the manifest file.

The score-client will confirm each file upload:

```bash
Uploading object: '/path/to/file/example.vcf.gz.idx'... 
Upload completed 
Uploading object: '/path/to/file/example.vcf.gz'... 
Upload completed
```

# Publish the Analysis

Once you've uploaded your files, it's time to publish your analysis. This makes it accessible to Elasticsearch and other downstream services.

Navigate to your home directory and publish the analysis using the following Song client command:

```bash
./song-client-<latest-release-number>/bin/sing publish -a <ANALYSIS ID>
```

Where `<ANALYSIS ID>` is the ID from the previous section. 

On success, you'll receive a confirmation message:

```bash
{
   "analysisId" : "2bfc131a-0d5c-4011-bc13-1a0d5c101184",
   "status" : "PUBLISHED"
}
```

# Index the Study via Maestro

Now that the study is published it can be indexed into Elasticsearch. This indexing is facilitated by Maestro.

## Using cURL for Indexing

Execute the following:

```bash
curl -X POST "http://<url>/maestro/index/repository/<repositoryCode>/study/<studyId>" -H  "accept: */*"
```

set `<url>` based on your deployment mode:
   - Local: `http://localhost:<port>`
   - Server: `https://<myDomain>`
Set `<repositoryCode>` to `song.overture`
Set `<studyID>` to `ABC123`

## Indexing with Swagger UI

1. Access the Maestro Swagger UI via your browser. Navigate to the appropriate URL based on your deployment:
   - Local: `http://localhost:<port>/maestroi/api-docs`
   - Server: `https://<myDomain>/maestroy/api-docs`


2. Under **management-controller**, select the `POST /index/repository/{repositoryCode}/study/{studyId}` endpoint.


3. Click **Try it out**.


4. Enter the Study ID (`ABC123` as an example) for `studyId`.


5. For `repositoryCode`, input `song.overture`.


6. Click **Execute**.

## Verification

After successful indexing, both cURL and Swagger UI should return:

```bash
[
  {
    "indexName": "file_centric_1",
    "successful": true
  }
]
```

# Check Your Data in the Portal

1. Open a browser and access the DMS UI:
   - Local: `http://localhost:<port>/dms-ui`
   - Server: `https://<myDomain>`


2. Select **Data Explorer**.


3. You should now see the VCF analysis file that was registered, uploaded, and published. Congratulations on completing an end-to-end data upload with the DMS platform!
