---
title: CLI Submissions
---

- Submitting data to an Overture platform typically includes data files such as sequencing reads, VCFs, etc., along with its associated metadata, which provides context, such as donor information or descriptions about the data files themselves


- This guide focuses on submitting data to Song & Score using their Command Line Clients (CLIs). The Song and Score clients work together to upload raw data files to object storage while tracking all related metadata stored in Songs metadata repository

![Submission Overview](./assets/submissionOverview.webp 'End Goal')

<Note title="Overture QuickStart"> If you do not have a platform to submit data to and want to follow along, check out the [introduction page instructions on running our quickstart](/documentation/guides/submission/introduction/).</Note>

# Retrieve your API Key

API Keys are brokered by Keycloak and accessible when logged in to the Stage UI. For the Overture QuickStart, Stage can access from `localhost:3000`

1. **Login through the Stage UI** by selecting login from the top right. The default credentials will be username `admin` and password `admin123` when using the Overture QuickStart.


2. **Once logged in, it's time to generate a new API token:** To do this, click on **Profile and Token** from your user drop down menu, located on the top right of the Stage UI. Then, select **Generate New Token**.

![Accessing an API Key](./assets/apikey.png 'Accessing an API Key')

# Run the Song and Score Clients

1. **Running the Song Client:** Use the following command with your API token to pull and run a Song Client docker container

```bash
docker run -d -it --name song-client \
  -e CLIENT_ACCESS_TOKEN=65893092-8249-43d7-a7ea-077553642534 \
  -e CLIENT_STUDY_ID=OICR \
  -e CLIENT_SERVER_URL=http://localhost:8080 \
  --network="host" \
  --mount type=bind,source=./demoData/OICR,target=/output \
  ghcr.io/overture-stack/song-client:5.1.1
```

You must supply environment variables for the `CLIENT_STUDY_ID`, the `CLIENT_SERVER_URL` and your `CLIENT_ACCESS_TOKEN`, values here reflect those compatible with the Overture QuickStart.

2. **Running the Score Client:** Use the following command with your API token to pull and run a Score Client docker container


```bash
docker run -d -it --name score-client \
    -e ACCESSTOKEN=65893092-8249-43d7-a7ea-077553642534 \
    -e STORAGE_URL=http://localhost:8087 \
    -e METADATA_URL=http://localhost:8080 \
    --network="host" \
    --mount type=bind,source=./demoData/OICR,target=/output \
    ghcr.io/overture-stack/score:47f006ce
```

You must supply environment variables for the `STORAGE_URL`, the `METADATA_URL` and your `ACCESSTOKEN`, values here reflect those compatible with the Overture QuickStart.

# Breaking down our upload payload

The mock metadata file we will use can be found in the Overture Quickstart repository from the following directory, <a target="_blank" rel="noopener noreferrer" href="https://github.com/overture-stack/composer/blob/develop/demoData/MICR/SP011501.vcf.json">demoData/MICR/SP011501.vcf.json</a>.



- The demo data represents a submission from the organization MICR (Made-up Insititute for Cancer Research)



- In the JSON file you will find various key value pairs representing all the associated metadata for a collection of files. 


- The files included are a VCF, `SP011501.indel.vcf.gz` and VCF Index,  `SP011501.indel.vcf.gz.tbi` described on <a target="_blank" rel="noopener noreferrer" href="https://github.com/overture-stack/composer/blob/develop/demoData/MICR/SP011501.vcf.json#L23-L48">lines 23 to 48 of the JSON</a> and conveniently located in the same folder.
 
<details>

  <summary><b>Click here to view the metadata file (SP011501.vcf.json)</b></summary>

<br></br>

```json
{
  "studyId": "MICR",
  "analysisType": {
    "name": "quickStartSchema"
  },
  "samples": [
    {
      "sampleType": "Total DNA",
      "matchedNormalSubmitterSampleId": null,
      "specimen": {
        "submitterSpecimenId": "SP011501",
        "specimenType": "Normal - tissue adjacent to primary tumour",
        "tumourNormalDesignation": "Normal",
        "specimenTissueSource": "Solid tissue"
      },
      "donor": {
        "submitterDonorId": "DO0115",
        "gender": "Female"
      }
    }
  ],
  "files": [
    {
      "dataType": "Raw InDel Calls",
      "fileName": "SP011501.indel.vcf.gz",
      "fileSize": 17346,
      "fileMd5sum": "a5e32b78bd52dc2cfe1cffcdaadcb335",
      "fileAccess": "open",
      "fileType": "VCF",
      "info": {
        "dataCategory": "Simple Nucelotide Variation",
        "jbrowseCoordinates": "hg38:chr1:100000-200000"
      }
    },
    {
      "dataType": "Raw InDel Calls",
      "fileName": "SP011501.indel.vcf.gz.tbi",
      "fileSize": 144,
      "fileMd5sum": "e4d3b0751f2824bac22f42147dd41fd8",
      "fileAccess": "open",
      "fileType": "TBI",
      "info": {
        "dataCategory": "Simple Nucelotide Variation",
        "jbrowseCoordinates": "hg38:chr1:100000-200000"
      }
    }
  ],
  "specimen": {
    "submitterPrimaryDiagnosisId": "PD011501",
    "submitterSpecimenId": "SP011501",
    "specimenAnatomicLocation": "C01",
    "tumourGradingSystem": "Grading system for GNETs",
    "tumourGrade": "G2"
  },
  "donor": {
    "submitterDonorId": "DO0115",
    "primarySite": [
      "Bronchus and lung"
    ],
    "vitalStatus": "Deceased",
    "survivalTime": 439,
    "causeOfDeath": "Died of other reasons",
    "primaryDiagnosis": [
      {
        "submitterPrimaryDiagnosisId": "PD011501",
        "ageAtDiagnosis": 36,
        "cancerTypeCode": "C34.3",
        "clinicalTumourStagingSystem": "AJCC 6th edition",
        "clinicalStageGroup": "Stage III",
        "treatment": [
          {
            "submitterTreatmentId": "TR011501",
            "treatmentType": [
              "Chemotherapy"
            ],
            "treatmentStartInterval": 79,
            "treatmentDuration": 34,
            "responseToTreatment": "Minor response",
            "chemotherapy": [
              {
                "drugName": [
                  "Azacitidine"
                ]
              }
            ]
          }
        ],
        "followUp": [
          {
            "submitterFollowUpId": "FO011501",
            "submitterTreatmentId": "TR011501",
            "intervalOfFollowUp": 50,
            "diseaseStatusAtFollowUp": "Partial remission",
            "relapseType": null
          }
        ]
      },
      {
        "submitterPrimaryDiagnosisId": "PD011502",
        "ageAtDiagnosis": 1,
        "cancerTypeCode": "C34.2",
        "clinicalTumourStagingSystem": "FIGO staging system",
        "clinicalStageGroup": "Stage IB",
        "treatment": [
          {
            "submitterTreatmentId": "TR011502",
            "treatmentType": [
              "Chemotherapy",
              "Radiation therapy"
            ],
            "treatmentStartInterval": 70,
            "treatmentDuration": 56,
            "responseToTreatment": "Complete response",
            "chemotherapy": [
              {
                "drugName": [
                  "Paclitaxel"
                ]
              }
            ],
            "radiation": [
              {
                "radiationTherapyModality": "Photon",
                "anatomicalSiteIrradiated": "Body"
              }
            ]
          }
        ],
        "followUp": [
          {
            "submitterFollowUpId": "FO011502",
            "submitterTreatmentId": "TR011502",
            "intervalOfFollowUp": 33,
            "diseaseStatusAtFollowUp": "Relapse or recurrence",
            "relapseType": null
          }
        ]
      }
    ]
  },
  "experiment": {
    "platform": "PacBio",
    "experimentalStrategy": "WXS",
    "model": "SEQUEL IIe",
    "sequencingCenter": "CGTA",
    "sequencingDate": "2021-03-08T19:00:00.000Z"
  },
  "workflow": {
    "workflowName": "Sanger Variant Calling",
    "workflowShortName": "SangerVariant",
    "workflowVersion": "0.9.8",
    "genomeBuild": "GRCh38_hla_decoy_ebv",
    "inputs": [
      {
        "analysisType": "sequencing_alignment",
        "tumourAnalysisId": "00000000-0000-0000-0000-0000000000115",
        "normalAnalysisId": "00000000-0000-0000-0000-0000000000115"
      }
    ],
    "runId": "RI0115",
    "sessionId": "SI0115"
  },
  "publication": {
    "publication": "NAR",
    "doi": "10.1093/nar/gkae188"
  }
}
```

</details>

<br></br>

<Note title="What is a payload?">In this context a payload refers to a collection of related metadata and file data to be uploaded to the resource. 
</Note>

# Submitting metadata to Song


### Submission Command

Our JSON can be submitted to Song using the song-client `submit` command from your terminal:

```bash
docker exec song-client sh -c "sing submit -f /output/SP011501.vcf.json"
```

### Expected Error Response

```bash
```

Metadata submissions that conflict with the data model associated with the analysis type provided in the submission will create an error log as follows:

### Updating and resubmitting the Metadata


```bash

```

Using the song-client `submit` command, but now submit the corrected example file

```bash
docker exec song-client sh -c "sing submit -f /output/SP011501.vcf.json"
```

With our correctly formatted metadata file, you should now recieve a status of `OK` and a Song generated `analysisId`

```json
{
  "analysisId": "034f715d-2c58-4cdb-8f71-5d2c589cdbb3",
  "status": "OK"
}
```

<Warning>**analysisID are Unique:** an analysis Id is a randomly generated UUID created by Song, as such yours will differ, please take note of your analysisID and use it for all subsequent steps that reference its usage.</Warning>

<Note title="What is an analysis?">
At this point, since the metadata data has successfully been submitted and accepted by Song and provided an analysisID, it is now considered to be part of a Song analysis. To complete the analysis we will need to upload its associated file data.</Note>

# Generating a manifest

With your `analysis_id` we will now generate a manifest for file upload. 

- The manifest establishes a link between the analysis-id that has been submitted and the data file(s) on your local system that is being uploaded. 

- This step also validates that all files being uploaded are in line with those documented in the metadata tagged with the corresponding analysisId.

### Manifest command

Make sure to replace `{AnalysisId}` with your previously generated Song analysisID

```bash
docker exec song-client sh -c "sing manifest -a {AnalysisId} -f /output/manifest.txt -d /output/"
```

The `manifest.txt` file will be written out to a defined output file path. If the output directory does not exist, it will be automatically created.

### Expected Response

```bash
Wrote manifest file '/output/manifest.txt' for analysisId '034f715d-2c58-4cdb-8f71-5d2c589cdbb3'
```

# Uploading data files with Score

### Upload command

```bash
docker exec score-client sh -c "score-client  upload --manifest manifest.txt"
```

### Expected Response

```bash
Wrote manifest file '/output/manifest.txt' for analysisId '034f715d-2c58-4cdb-8f71-5d2c589cdbb3'
Uploading object: '/output/SP011501.indel.vcf.gz.tbi' using the object id b40dbf4e-660c-5fda-ac06-d099e9a97cc9
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 1000B/s, Read/sec: 0B/s    
Finalizing...
Total execution time:         4.127 s
Total bytes read    :               0
Total bytes written :             141
Upload completed
Uploading object: '/output/SP011501.indel.vcf.gz' using the object id 1feb9a02-ed53-5204-8e9c-7e7cdce0bfce
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 525.4K/s, Read/sec: 0B/s    
Finalizing...
Total execution time:         3.791 s
Total bytes read    :               0
Total bytes written :          17,246
Upload completed

```


# Publishing the analysis with Song

The final step in data submission is to set the state of the analysis to `PUBLISHED`. 

- A published analysis signals maestro to index the data ultimatly making it available on the front end portal interface.

### Publish Command

```bash
docker exec song-client sh -c "sing publish -a a4142a01-1274-45b4-942a-01127465b422"
```

### Expected Response

```bash
{"message":"AnalysisId 034f715d-2c58-4cdb-8f71-5d2c589cdbb3 successfully published"}
```

Insert image of submitted data

