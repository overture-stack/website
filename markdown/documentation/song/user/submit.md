---
title: Submitting Data to Song
---

# Data Submission Overview

Submitted data consists of data files (e.g. sequencing reads or VCFs), as well as any associated file metadata (data that describes the data file). Data is submitted to Song & Score using the Song and Score CLIs (Command Line Clients). The Song and Score clients are used in conjunction to upload raw data files while maintaining file metadata and provenance, which is tracked through Song metadata analysis objects. 

# Installing the Song-Client

**Running the song-client docker image** 

You will be required to supply enviormentment variables for the `CLIENT_STUDY_IDL`, the `CLIENT_SERVER_URL` and your `ACCESSTOKEN`. The access token is supplied from Ego or from your profile page within the DMS-UI.

```bash
docker run -d -it --name song-client \
-e ACCESSTOKEN=${token} \
-e CLIENT_STUDY_ID=ABC123 \
-e CLIENT_SERVER_URL=http://<INSERT-URL>/song-api \
--network="host" \
--mount type=bind,source="$(pwd)",target=/output \
ghcr.io/overture-stack/song-client:latest
```


# Installing the Score-Client

**Running the score-client docker image** 

You will be required to supply enviormentment variables for the `STORAGE_URL`, the `METADATA_URL` and your `ACCESSTOKEN`.

```bash
docker run -d -it \
--name score-client \
-e ACCESSTOKEN=${token} \
-e STORAGE_URL=http://<INSERT-URL>/score-api \
-e METADATA_URL=http://<INSERT-URL>/song-api \
--network="host" \
--mount type=bind,source="$(pwd)",target=/output \
ghcr.io/overture-stack/score:latest
```

# Data Submission Workflow 

## Step 1. Prepare a payload

First, a metadata payload must be prepared. The payload must conform to an `analysis_type` that has been registered as a schema.  For help with creating or updating schemas please see the [Dynamic Schemas](/documentation/song/user-guide/schema) documentation.
 
## Step 2. Upload the metadata payload file

Once you have formatted the payload correctly, use the song-client `submit` command to upload the payload.

```bash 
./bin/sing submit -f example-payload.json
```

If your payload is not formatted correctly, you will receive an error message detailing what is wrong. Please fix any errors and resubmit. If your payload is formatted correctly, you will get an `analysisId` in response:

```json
{
  "analysisId": "a4142a01-1274-45b4-942a-01127465b422",
  "status": "OK"
}
```

At this point, since the payload data has successfully been submitted and accepted by Song, it is now referred to as an analysis. By default all newly created analyses are set to an `UNPUBLISHED` state.

<Warning>For more information on analysis states (published, unpublished and suppressed) see our page on [analysis managment](https://overture.bio/documentation/song/admin/analysismanagement/)</Warning>

## Step 3. Generate a manifest file

Use the returned `analysis_id` to generate a manifest for file upload. This manifest will used by the score-client in the next step. 

The manifest establishes a link between the analysis-id that has been submitted and the data file on your local systems that is being uploaded. 

Using the song-client `manifest` command, define

- The analysis id using `-a` parameter
- The location of your input files with the `-d` parameter
- The output file path for the manifest file with the `-f` parameter. **Note**: this is a *file path* not a directory path

Here is an example of a manifest command:

```bash
./bin/sing manifest -a a4142a01-1274-45b4-942a-01127465b422 -f /some/output/dir/manifest.txt  -d /submitting/file/directory
```

Here is the expected response:

```bash
Wrote manifest file 'manifest.txt' for analysisId 'a4142a01-1274-45b4-942a-01127465b422'
```

The `manifest.txt` file will be written out to defined output file path. If the output directory does not exist, it will be automatically created.

## Step 4. Upload your data files to cloud storage

Upload all the files associated to the analysis using the score-client `upload` command:

```bash
.bin/score-client  upload --manifest manifest.txt
```

Once the file(s) successfully upload you will receive an `Upload completed` message.

### Troubleshooting Upload 

- If you receive a connection or internal server error message, have your admin check that Song and Score are configured to talk to each other correctly. 

Sometimes if an upload is stuck, you can reinitiate the upload using the `--force` command. 

```bash
.bin/score-client  upload --manifest manifest.txt --force 
```
For more information on Score, please see the [Score documentation page](/documentation/score).

## Step 5. Publish the analysis

The final step to submitting molecular data is to set the state of an analysis to `PUBLISHED`. A published analysis signals to the data administrators that this data is ready to be processed by downstream services.

```bash
./bin/sing publish -a a4142a01-1274-45b4-942a-01127465b422
```

Here is the expected response:

```bash
AnalysisId a4142a01-1274-45b4-942a-01127465b422 successfully published
```

A published analysis will now be searchable in Song. In the next section we will outline how to search for data in Song.

<Note title="Integration Tips">Song is a relational database designed for secure and consistent storage of data.  For an optimal data query experience, use song with a search platform.  The Overture components [Maestro](/documentation/maestro) and [Arranger](/documentation/arranger) can be used to index and view data from Song from an intuitive search portal linked to a graphQL API.</Note>
