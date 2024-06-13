---
title: Download Guide
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

# Data Download with the Score Client

## Build a query

## Download a manifest

<Note title="What is a Manifest?"> To understand more about key terms in Overture's data submission workflow, check this guide on [data submission using Song and Score](/documentation/song/user/submit/).</Note>

## Retrieve your API Key

API Keys are brokered by Keycloak and accessible when logged in to the Stage UI. For the Overture Composer, Stage can access from `localhost:3000`

**1. Login through the Stage UI** by selecting login from the top right. Default credentials when using the Overture Composer will be username `admin` and password `admin123`.

**2. Generate a new API token** by selecting **Profile and Token** from your user drop down found on the top right of the Stage UI, select **Generate New Token**. 

![Accessing an API Key](../submission/assets/apikey.png 'Accessing an API Key')

## Run the score-client

You will be required to supply environment variables for the `STORAGE_URL`, the `METADATA_URL` and your `CLIENT_ACCESS_TOKEN`.

```bash
docker run -d -it \
--name score-client \
-e CLIENT_ACCESS_TOKEN=${token} \
-e STORAGE_URL=http://<INSERT-URL> \
-e METADATA_URL=http://<INSERT-URL> \
--network="host" \
--mount type=bind,source="$(pwd)",target=/output \
ghcr.io/overture-stack/score:latest
```

## Download your data

```bash
docker exec score-client sh -c "score-client download --manifest ./<manifestDirectory>/manifest.txt --output-dir ./<outputDirectory>"
```

-  `<manifestDirectory>` represents the location of the earlier generated manifest file
- `<outputDirectory>` specifies where you intend to download the files

If successful the Score Client will indicate the upload has completed.

```bash

```

<details>
  <summary><b>Click here for more details</b></summary>
<br></br>

File downloads can be run using the Score Client's `download` command.

The `download` command offers various methods for downloading file data. The main methods are as follows:

- `--analysis-id`: Downloads files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> analysis ID. 
- `--manifest`: Downloads specific files based on a manifest file ID, manifest file URL, or path to the manifest file.
- `--object-id`: Downloads a specific file object ID.
- `--program-id`: Downloads files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> program ID.
- `--study-id`: Downloads files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> study ID.

The table below details the options available when using the Score-Client `download` command:

| Option | Description |
| -------| ------------|
| `--analysis-id` | Download files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> analysis ID. |
| `--force` | Re-download the file if it already exists locally (overrides local file). |
| `--index` | If available, also download the file index. |
| `--length` | Restrict the download size to this number of bytes. By default, the whole file is downloaded unless this option is specified. |
| `--manifest` | Download specific files based on a manifest file ID, URL, or its path. |
| `--object-id` | Download a specific file object ID. |
| `--offset` | Byte position in the source file from where the download begins. By default, the whole file is downloaded unless this option is specified. |
| `--output-dir` | Path to the output directory where files will be downloaded to. |
| `--output-layout` | Layout of the output directory, one of: |
| | * `bundle` : Saved according to the filename under the Song bundle ID directory. |
| | * `filename` : Saved according to the filename in the output directory. |
| | * `id` : Saved according to the object ID in the output directory. |
| `--program-id` | Download files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> program ID. |
| `--study-id` | Download files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> study ID. |
| `--validate` | If available, validate the file using the MD5 checksum. |
| `--verify-connection` | First verify the connection to the object storage repository. |

</details>
<br></br>