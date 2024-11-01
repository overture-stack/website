---
title: Download Guide
---

**This guide is for** anyone seeking guidance on how to download data from an Overture platform. 

**You will need** docker installed. We recommend using Docker Desktop; for more information, visit [Dockers website](https://www.docker.com/products/docker-desktop/)

![Retrieval Overview](./assets/dataRetrieval.png 'End Goal')

# Getting Started

## Clone and run our Quickstart

**1. Clone the Quickstart repository**

```bash
git clone  https://github.com/overture-stack/conductor.git
```

**2. With Docker open run the docker-compose**

```bash
docker compose up --attach conductor
```

<Warning>**Ensure enough resources get allocated to Docker** We recommend a minimum CPU limit of `8`, memory limit of `8 GB`, swap of `2 GB`, and virtual disk limit of `64 GB`. You can access these settings by selecting the **cog wheel** found on the top right of the Docker desktop app and selecting **resources** from the left panel. **If you already have docker desktop installed be ensure you are on version 4.32.0 or higher**</Warning>

# Data Download with the Score Client

## Step 1: Generate a Manifest

1. **Build your Query:** From the portal exploration page (`localhost:3000/explorer`), build your query using the search facets panel and data table.

![Build Query](./assets/buildQueries.png 'Build Query')

2. **Download your manifest:** With your data of interest selected, click the download dropdown and select file manifest

<Note title="Why a Manifest?">The file manifest provides a detailed list of fields relevant to your query in a TSV (Tab-Separated Values) format. This file is essential for Score to locate and download your data efficiently. We utilize manifests in conjunction with specialized file transfer services because large genomic datasets require reliable multi-part download sessions, which are not suitable for browser-based transfers.</Note>

## Step 2: Retrieve your API Key

API Keys are brokered by Keycloak and accessible when logged in to the Stage UI. For the Overture QuickStart, Stage can access from `localhost:3000`

**1. Login through the Stage UI** by selecting login from the top right. Default credentials when using the Overture conductor will be username `admin` and password `admin123`.

**2. Generate a new API token** by selecting **Profile and Token** from your user dropdown menu at the top right of the Stage UI and selecting **Generate New Token**. 

![Accessing an API Key](../submission/assets/apikeys.png 'Accessing an API Key')

## Step 3: Run the Score Client

**Running the Score Client:** Use the following command with your API token to pull and run a Score Client docker container

```bash
docker run -d -it --name score-client \
    -e ACCESSTOKEN=68fb42b4-f1ed-4e8c-beab-3724b99fe528 \
    -e STORAGE_URL=http://localhost:8087 \
    -e METADATA_URL=http://localhost:8080 \
    --network="host" \
    --platform="linux/amd64" \
    --mount type=bind,source=./guideMaterials/dataDownload/,target=/output \
    ghcr.io/overture-stack/score:latest
```

<Warning>**Note:** Ensure you are running the following commands from the root directory of the quickstart folder. The values here reflect those compatible with the Overture QuickStart.</Warning>

<details>

  <summary><b>Click here for a detailed breakdown</b></summary>

<br></br>

  - `-d` runs the container in detached mode, meaning it runs in the background and does not receive input or display output in the terminal


  - `-it` combines the `-i` (interactive) and `-t` (allocate a pseudo-TTY) options, allowing you to interact with the container via the terminal


  - `-e ACCESSTOKEN=68fb42b4-f1ed-4e8c-beab-3724b99fe528` sets up the score-client with a pre-configured system-wide access token. Alternatively, you can log in through stage found on  `localhost:3000/login` with the username `admin` and password `admin123`. From the profile page you can generate your own API key and supply it here


  - `-e STORAGE_URL=http://score:8087` is the url for the Score server that the Score-Client will interact with


  - `-e METADATA_URL=http://song:8080` is the url for the song server that the score-client will interact with


  - `--network="host"` Uses the host network stack inside the container, bypassing the usual network isolation. This means the container shares the network namespace with the host machine


  - `--platform="linux/amd64"` Specifies the platform the container should emulate. In this case, it's set to linux/amd64, indicating the container is intended to run on a Linux system with an AMD64 architecture


  - `--mount type=bind,source=./guideMaterials/dataDownload,target=/output` mounts the directory and its contents from the host machine to the container. Any changes made to the files in this directory will be reflected locally and in your docker container.  

---
</details>
<br></br>

## Step 4: Download your Data

Add the manifest to the `./guideMaterials/dataDownload` folder in your QuickStart repository. For simplicity, update its name to manifest.tsv. After moving and renaming the manifest, you can run the provided command:

```bash
docker exec score-client sh -c "score-client download --manifest /output/manifest.tsv --output-dir /output"
```


-  `/dataFiles/manifest.tsv` represents the location of the earlier generated manifest file for simplicity you can either point to your download folder or move your manifest.tsv to the dataDownload folder in the quickstart repository


- `/output` specifies the directory you intend to download the files too

If successful the Score Client should produce the following logs and your files will now be located within your output directory (`./guideMaterials/dataDownload`).

```bash
Downloading...                                                                                                                                                 
---------------------------------------------------------------------------------------------------------------------------------------------------------------
[1/2] Downloading object: 5b3bf92a-8f57-54b9-9ab9-6dcf34a0dc78 (SP011501.indel.vcf.gz)
---------------------------------------------------------------------------------------------------------------------------------------------------------------
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 177.7K/s, Read/sec: 177.7K/s                                 
Finalizing...
Total execution time:        122.6 ms
Total bytes read    :          17,346
Total bytes written :          17,346
Verifying checksum...---------------------------------------------------------------------------------------------------------------------------------------------------------------
[2/2] Downloading object: 30697525-1033-543c-a86b-1ab428c7e8d5 (SP011501.indel.vcf.gz.tbi)
---------------------------------------------------------------------------------------------------------------------------------------------------------------
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 2.9K/s, Read/sec: 2.9K/s                                     
Finalizing...
Total execution time:        56.86 ms
Total bytes read    :             144
Total bytes written :             144
Verifying checksum...Done. 
```

For more information on using the Score-Client see our [Score-Client command reference documentation](/documentation/score/user-guide/commands/)

<Note title="Help us make our guides better">If you can't find what you're looking for please reach out to us on our Slack channel linked on the top right of your screen or by email at contact@overture.bio</Note>