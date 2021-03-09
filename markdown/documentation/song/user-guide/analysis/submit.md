---
title: Uploading Data to Song
---
Submitted data consists of data files (e.g. sequencing reads or VCFs), as well as any associated file metadata (data that describes your data).


Data is submitted to Song & score using the Song and Score CLIs (Command Line Clients). The Song and Score clients are used in conjunction to upload raw data files while maintaining file metadata and provenance, which is tracked through Song metadata analysis objects. 

# Configuring submission clients 

## Song-Client

Download the **[latest version of the song-client](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/song-client/[RELEASE]/song-client-[RELEASE]-dist.tar.gz)**. Once you have unzipped the tarball, change directories into the unzipped folder:

```shell
> wget -O song-client.tar.gz https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/song-client/[RELEASE]/song-client-[RELEASE]-dist.tar.gz

> tar xvzf song-client.tar.gz

## Note: Once unzipped, the final directory will be suffixed with the latest release number.
> cd song-client-<latest-release-number>
```

Update the `conf/application.yaml` configuration file with the correct user and data submission program values, including:

- **serverURL**: The Song server URL for your metadata storage server.
- **accessToken**: Your personal `API Token` generated from the Authorization client Song is configured with.  
- **studyID**: The study-id for which you are submitting data.

To do this, change directories into `conf` folder and open the `application.yaml` file. This is an example of how a `application.yaml` configuration file should look:

```yml
client:
  serverUrl: https://song-url.example.com
  studyId: EXAMPLE-STUDY-ID 
  debug: false
  accessToken: 92038829-338c-4aa2-92fc2-a3c241f63ff0
retry:
  maxRetries: 5
  initialBackoff: 15000
  multiplier: 2.0
```

### Score-Client

Download the **[latest version of the score-client](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/[RELEASE]/score-client-[RELEASE]-dist.tar.gz)**. Once you have unzipped the tarball, change directories into the unzipped folder:

```shell
> wget -O score-client.tar.gz https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/[RELEASE]/score-client-[RELEASE]-dist.tar.gz

> tar xvzf score-client.tar.gz

## Note: Once unzipped, the final directory will be suffixed with the latest release number.
> cd score-client-<latest-release-number>
```

Update the `conf/application.properties` configuration file with the correct user and data submission program values, including:

- **accessToken**: Your personal API Token, generated from the Authorization client Song is configured with.  
- **metadata.url**: The file metadata Song server URL.
- **storage.url**: The object storage Score server URL.

To do this, change directories into `conf` folder and open the `application.properties` file. This is an example of how your `application.properties` configuration file should look:

```yaml
# The access token for authorized access to data
accessToken=92038829-338c-4aa2-92fc2-a3c241f63ff0

# The location of the metadata service (SONG)
metadata.url=https://song-url.example.com

# The location of the object storage service (SCORE)
storage.url=https://score-url.example.com
```

# Data Submission Cycle 
## Step 1. Prepare a payload
First, a metadata payload must be prepared.  The payload must conform to an `analysis_type` that has been registered as a schema.  For help with schemas please see
<Warning>`<<INSERT LINK HERE>>`</Warning>
 
## Step 2. Upload the metadata payload file

Once you have formatted the payload correctly, use the song-client `submit` command to upload the payload.

```shell
> ./bin/sing submit -f example-payload.json
```

If your payload is not formatted correctly, you will receive an error message detailing what is wrong. Please fix any errors and resubmit. If your payload is formatted correctly, you will get an `analysisId` in response:

```json
{
  "analysisId": "a4142a01-1274-45b4-942a-01127465b422",
  "status": "OK"
}
```

At this point, since the payload data has successfully been submitted and accepted by Song, it is now referred to as an analysis. The newly created analysis will be state `UNPUBLISHED`.

## Step 3. Generate a manifest file

Use the returned `analysis_id` from step 2 to generate a manifest for file upload. This manifest will be used with the score-client in the next step. The manifest establishes a link between the analysis-id that has been submitted and the data file on your local systems that is being uploaded. Using the song-client `manifest` command, define

- the analysis id using `-a` parameter
- the location of your input files with the `-d` parameter,
- the output file path for the manifest file with the `-f` parameter. *Note, this is a FILE PATH not a directory path

```shell

> ./bin/sing manifest -a a4142a01-1274-45b4-942a-01127465b422 -f /some/output/dir/manifest.txt  -d /submitting/file/directory

Wrote manifest file 'manifest.txt' for analysisId 'a4142a01-1274-45b4-942a-01127465b422'
```

The `manifest.txt` file will be written out to the directory /some/output/dir/. If the output directory does not exist, it will be automatically created.

## Step 4. Upload files

Using the score-client `upload` command, upload all files associated with the payload. This requires the manifest file generated in step 3.

```shell
> .bin/score-client  upload --manifest manifest.txt
```

If the file(s) successfully upload, then you will receive an `Upload completed` message.

### Troubleshooting Upload 
Sometimes if an 
```shell
> .bin/score-client  upload --manifest manifest.txt --force 
```
For more detailed troubleshooting instructions, please see the Score documentation. 
<Warning>`<<INSERT LINK HERE>>`</Warning>

## Step 5. Publish the analysis

The final step to submitting molecular data is to set the state of an analysis to `PUBLISHED`. A published analysis signals to the DCC that this data is ready to be processed.

```shell
> ./bin/sing publish -a a4142a01-1274-45b4-942a-01127465b422

AnalysisId a4142a01-1274-45b4-942a-01127465b422 successfully published
```

Once your analysis has been successfully submitted and published, it will be searchable in Song. 

<Note title="Integration Tips">Song is a relational database designed for secure and consistent storage of data.  For an optimal data query experience, use song with a search platform.  The Overture components Maestro and Score can be used to index and view data from Song in an easy GraphQL API. </Note>
