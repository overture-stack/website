---
title: Data Submission Guide
---

# Getting Started

If you do not have an Overture Platform to work with you can run our quickstart using the following commands:

**1. Clone the Quickstart repository**

```bash
git clone -b develop https://github.com/overture-stack/composer.git
```

**2. Run the docker-compose**

```bash
docker compose up -d
```

<Warning>**Note:** Ensure enough resources are allocated to docker. We recommend a `CPU limit of 8`, `memory limit of 12gb`, `swap of 4gb`, and `virtual disk limit of 128gb`. These settings can be accessing in docker desktop by selecting the **cog wheel** found on the top right and selecting **resources** from the left panel.</Warning>

# Data Submission with the Song and Score Clients

- Submitting data to an Overture platform typically includes data files such as sequencing reads, VCFs, etc., along with its associated metadata which provides context, such as donor information or descriptions about the data files themselves


- In this guide we focus on submitting data to Song & Score using their Command Line Clients (CLIs). The Song and Score clients work together to upload raw data files to object storage while tracking all related metadata stored in Songs metadata repository

![Submission Overview](./assets/submissionOverview.webp 'End Goal')

## Retrieve your API Key

API Keys are brokered by Keycloak and accessible when logged in to the Stage UI. For the Overture Composer, Stage can access from `localhost:3000`

**1. Login through the Stage UI** by selecting login from the top right. Default credentials when using the Overture Composer will be username `admin` and password `admin123`.

**2. Generate a new API token** by selecting **Profile and Token** from your user drop down found on the top right of the Stage UI, select **Generate New Token**. 

![Accessing an API Key](./assets/apikey.png 'Accessing an API Key')

## Run the Song and Score Clients

1. **Running the Song Client:** Use the following command with your API token to pull and run a Song Client docker container


```bash
docker run -d -it --name song-client \
    -e CLIENT_ACCESS_TOKEN=8a5591ec-92e9-4bd4-bbc0-4c2da6652e53 \
    -e CLIENT_STUDY_ID=SECA-CA \
    -e CLIENT_SERVER_URL=http://localhost:8080 \
    --network="host" \
    --mount type=bind,source=./demoData/data,target=/output \
    ghcr.io/overture-stack/song-client:5.1.1
```

You must supply environment variables for the `CLIENT_STUDY_ID`, the `CLIENT_SERVER_URL` and your `CLIENT_ACCESS_TOKEN`, values here reflect those compatible with the Overture composer.

2. **Running the Score Client:** Use the following command with your API token to pull and run a Score Client docker container


```bash
docker run -d -it --name score-client \
    -e CLIENT_ACCESS_TOKEN=82e57f53-c23b-4392-9b77-4a75ce9a0730 \
    -e STORAGE_URL=http://localhost:8087 \
    -e METADATA_URL=http://localhost:8080 \
    --network="host" \
    --mount type=bind,source="$(pwd)",target=/output \
    ghcr.io/overture-stack/score:5.10.0
```

You must supply environment variables for the `STORAGE_URL`, the `METADATA_URL` and your `CLIENT_ACCESS_TOKEN`, values here reflect those compatible with the Overture composer.

## Prepare your metadata


## Upload your metadata

Using the song-client `submit` command, submit the incorrect example file first:

```bash
docker exec song-client sh -c "sing submit -f /output/incorrect-metadata.json"
```

metadata submissions that conflict with the data model associated with the analysis type provided in the submission will create an error log as follows:

```bash

```

Using the song-client `submit` command, but now submit the corrected example file:

```bash
docker exec song-client sh -c "sing submit -f /output/corrected-metadata.json"
```

With a correlty formatted metadata file, you will now review a Song generated `analysisId` in response:

```json
{
  "analysisId": "a4142a01-1274-45b4-942a-01127465b422",
  "status": "OK"
}
```

<Note title="What is an analysis?">
At this point, since the metadata data has successfully been submitted and accepted by Song and provided an analysisID, it is now considered to be part of an analysis. By default, all newly created analyses are set to an `UNPUBLISHED` state. To complete the analysis we will need to upload the associated file data.</Note>

## Generate a manifest

Use the returned `analysis_id` to generate a manifest for file upload. This manifest will used by the score-client in the next step. 

**Run the song-client `manifest` command**

```bash
docker exec song-client sh -c "sing manifest -a 8e000122-994d-4200-8001-22994d5200f1 -f /output/manifest.txt -d /output/"
```

Here is the expected response:

```bash
Wrote manifest file '/output/manifest.txt' for analysisId '8e000122-994d-4200-8001-22994d5200f1'
```

The `manifest.txt` file will be written out to a defined output file path. If the output directory does not exist, it will be automatically created.


<Note title="What is an manifest?">
The manifest establishes a link between the analysis-id that has been submitted and the data file(s) on your local systems that is being uploaded. This step also validates that all files being uploaded are in line with those documented in the metadata tagged with the corresponding analysisId.
</Note>

## Upload your data files

**Run the score-client `upload` command**

```bash
docker exec score-client sh -c "score-client  upload --manifest manifest.txt"
```

Once the file(s) successfully upload, you will receive an `Upload completed` message.

## Publish the analysis

The final step in data submission is to set the state of an analysis to `PUBLISHED`. A published analysis signals to the data administrators that this data is ready to be processed by downstream services.

```bash
docker exec song-client sh -c "sing publish -a a4142a01-1274-45b4-942a-01127465b422"
```

Here is the expected response:

```bash
AnalysisId a4142a01-1274-45b4-942a-01127465b422 successfully published
```

A published analysis will now be indexed by maestro and available from the front end portal interface.