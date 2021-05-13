---
title: Setting Up the Score Client
---

End users must use the Score command-line client to execute data transfers (uploads and downloads) to and from the configured object storage.  Users must download and install the client and perform some minimal configuration.

# Installing the Score Client

The Score client can be run in different ways depending on your operating system or setup:

* If you are on Windows, use the Score client Docker distribution
* If you are on a Unix system (IOS/Linux) you can also use the Docker distribution, or alternatively use the Score client directly

## Using the Docker Distribution

To use the Docker distribution, from your command line, pull the latest version:

```shell
$ docker pull overture/score
```

The Docker distribution does not have a specific configuration to setup beforehand.  Configuration parameters are supplied

You can now run the Score client for uploads and downloads using a Docker run command and supplying the correct input parameters.  Unlike the direct Score client, the Docker distribution does not have a configuration file that you need to setup in advance.  Instead, certain config parameters are supplied in real-time when you execute the Docker run command.  See [Uploading Data](/documentation/score/user-guide/upload) and [Downloading Data](/documentation/score/user-guide/download) for more details.

## Using the Score Client Directly with Configured Values

To use the Score client directly without Docker:

1. Download and unzip the latest Score client  from [here](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/%5BRELEASE%5D/score-client-%5BRELEASE%5D-dist.tar.gz) or do so from your command line, then switch to the unzipped directory:

```shell
$ wget -O score-client.tar.gz https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-client/[RELEASE]/score-client-[RELEASE]-dist.tar.gz
 
$ tar xvzf score-client.tar.gz
 
$ cd score-client-<latest-release-number>
```

2. Open the `score-client/<latest-release-number>/conf/application.properties` file and edit the `client` section as follows:

accessToken: your personal API Token
metadata.url: the file metadata Song server URL
storage.url: the object storage Score server URL

* Set `accessToken` to your personal API key (API token).  For example, if you are using Overture's [Ego](/documentation/ego) for authentication, then this would be your personal API key issued by Ego.
* Uncomment `metadata.url` and set it to the URL of the [Song](/documentation/song) server that you deployed as part of the Score [prerequisites](/documentation/score/installation#dependencies).
* Uncomment `storage.url` and set it to the URL of the [object storage](/documentation/score/installation#configuring-storage-providers) that you deployed as part of the Score [prerequisites](/documentation/score/installation#dependencies).

For example:

```shell
# The access token for authorized access to data
accessToken=36099917-45b1-49f4-b91e-68a655eb6708
 
# The location of the metadata service (SONG)
metadata.url=http://localhost:80/song-api
 
# The location of the object storage service (SCORE)
storage.url=http://localhost:80/score-api
```

3. Save your changes.

You can now run the Score client directly using various commands. For details on how to do data transfers, see [Uploading Data](/documentation/score/user-guide/upload) and [Downloading Data](/documentation/score/user-guide/download).  For a full command reference, see [here](/documentation/score/user-guide/commands).