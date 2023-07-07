---
title: Setting Up the Score Client
---

The Score command-line client tool facilitates user interactions with Score endpoints. The following instructions guide users through installing the client. Subsequent sections will cover how to use the client to perform various tasks. 

# Installing the Score Client

The Score client can be downloaded and installed as a docker image or directly to your system.

## Docker Install

Running these Docker commands sets up the necessary tools and configurations to interact with the Score API. Please note that the "token" and other specific values need to be provided accordingly for proper authentication and configuration.

```shell
docker run -d -it \
--name score-client \
-e ACCESSTOKEN=${token} \
-e STORAGE_URL=http://localhost:80/score-api \
-e METADATA_URL=http://localhost:80/song-api \
--network="host" \
--mount type=bind,source="$(pwd)",target=/output \
ghcr.io/overture-stack/score:latest

```

You can now run the Score client for uploads and downloads using a Docker run command and supplying the correct input parameters. With a Docker image certain configuration parameters are supplied in real-time when you execute the Docker run command.  See [Uploading Data](/documentation/score/user-guide/upload) and [Downloading Data](/documentation/score/user-guide/download) for more details.

## Directly to your System

To use the Score client directly without Docker:

1. **Download and unzip** the latest Score client  from [here](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/%5BRELEASE%5D/score-client-%5BRELEASE%5D-dist.tar.gz) or do so from your command line, then switch to the unzipped directory:

```shell
wget -O score-client.tar.gz https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/[RELEASE]/score-client-[RELEASE]-dist.tar.gz
 
tar xvzf score-client.tar.gz
 
cd score-client-<latest-release-number>
```

2. **Open and configure** the `score-client/<latest-release-number>/conf/application.properties` file and edit the **client** section as follows:

* Set `accessToken` to your personal API key (API token).  For example, if you are using Overture's [Ego](/documentation/ego) for authentication, then this would be your personal API key issued by Ego.
* Uncomment `metadata.url` and set it to the URL of the [Song](/documentation/song) server that you deployed as part of the Score [prerequisites](/documentation/score/installation#dependencies).
* Uncomment `storage.url` and set it to the URL of the [object storage](/documentation/score/installation#configuring-storage-providers) that you deployed as part of the Score [prerequisites](/documentation/score/installation#dependencies).

Here is an example of a configured `application.properties` client section:

```shell
# The access token for authorized access to data
accessToken=36099917-45b1-49f4-b91e-68a655eb6708
 
# The location of the metadata service (SONG)
metadata.url=http://localhost:80/song-api
 
# The location of the object storage service (SCORE)
storage.url=http://localhost:80/score-api
```

3. **Save your changes.** You can now run the Score client directly using various [commands](/documentation/score/user-guide/commands). Details on how to do data transfers ([Uploading Data](/documentation/score/user-guide/upload) and [Downloading Data](/documentation/score/user-guide/download)) are covered in the next sections.