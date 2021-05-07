---
title: Installing Score
---

# Dependencies

Before installing Score, the following software services needs to be installed and running:

| Service | Version | Requirement | Notes |
|---------|---------|-------------|-------------|
| [Java Runtime Environment (JRE)](https://www.oracle.com/java/technologies/javase-downloads.html) | 11 or up | Required ||
| [Song](https://github.com/overture-stack/SONG/releases) | Latest | Required | Required as companion application to Score for metadata validation and management.  See [here](/documentation/song/installation) for installation instructions. | 
| Object Storage | Latest | Required | You must setup an object store with one of the supported cloud-based storage providers.  This is required for Score to have a location for uploading data to and downloading data from. See [Configuring Storage Providers](#configuring-storage-providers) for details. |

## Configuring Storage Providers

Score currently supports data transfer with several popular cloud-based storage providers:

* [Amazon S3](https://aws.amazon.com/s3/)
* [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/)
* [Openstack](https://www.openstack.org/) with [Ceph](https://ceph.io/)
* [Minio](https://min.io/)

To setup your object storage for Score to use:

1. First register with the provider of your choice and follow their instructions for setting up and configuring their service. Follow the links provided above as a starting point; however note that each provider will may have different setup requirements and steps, so follow their procedures as directed.

2. Once you have an object storage created with your provider, you must create two data buckets for Score to use:

* A bucket to store object data
* A bucket to store and maintain state information

Create these buckets and remember both their IDs, as they will be required as inputs later during Score configuration.

3. For certain storage services, a `/data` sub-folder must be created in advance in each bucket.  Please check with your service provider's configuration requirements.  For example, currently Openstack with Ceph requires this sub-folder when used by Score, while other services such as Amazon and MinIo do not.

4. Make sure to note the **URL**, **access key**, and **secret key** used to access your storage service, as these are also required as input during Score configuration.  **Keep these values safe and secure**.

5. If specifically using Amazon S3, makes ure to note the geographic **Region** where you have configured your buckets to be stored, as this is also required as an input during Score configuration.

If assistance is required, you may need to contact support with your specific storage provider.

# Installation

## Distribution

Official Score releases can be found on [Github](https://github.com/overture-stack/SCORE/releases). Each release contains notes with a description of the bug fixes, new features or enhancements, breaking changes, and links to downloads and change logs. 

The latest distribution can be downloaded using this command:

```bash
 curl https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/score-server/[RELEASE]/score-server-[RELEASE]-dist.tar.gz -Ls -o score-server-dist.tar.gz    
```

* Where `[RELEASE]` is the specific 3-digit release number you wish to download (e.g. `5.3.0`)

The distribution contains the default configuration and jars for running the server.  To unzip the distribution, run this command:

```bash
tar zxvf score-server-dist.tar.gz
```

Note that once unzipped, the final directory will be suffixed with the latest release number of the distribution.

## Feature Configuration

There are several <span style="color:red"> required</span> components to configure for the Score server.  These include:

- [Run Profiles](/documentation/score/installation/configuration/profiles) 
- [Song Server Integration](/documentation/score/installation/configuration/song) 
- [Object Storage Integration](/documentation/score/installation/configuration/object-storage)
- [Other Bootstrap Properties](/documentation/score/installation/configuration/bootstrap)

The details of each of these configurations are covered in the [Configuration](/documentation/score/installation/configuration/) section. 

## Authentication

For an application to securely interact with Score, authentication and authorization must be provided.  This ensures unauthorized users cannot access Score's API endpoints.  To authorize properly with Score, either an authorized user's valid API key with appropriate scopes (permissions) must be supplied, or application-to-application authorization must be enabled following the [OAuth 2.0](https://oauth.net/2/) protocol.

Although configuring authentication and authorization is technically optional, it is **highly recommended**, especially for production environments.  The details for configuring authentication and authorization are covered in the [Authentication](/documentation/score/installation/authentication) section.

#  Running as a Service

Although the Score server distribution can be run as a standalone application, it must be manually started or stopped by the user.  For a long-running server, sudden power loss or a hard reboot would mean the standalone application would need to be restarted manually.  However, if the Score server distribution is run as a service, the operating system would be responsible for automatically restarting the service upon reboot. For this reason, the distribution should be configured as a service that is always started on boot.

## Linux (SysV)

Assuming the directory path of the distribution is `$SCORE_SERVER_HOME` and [pre-requisites](/documentation/score/installation/installation/#dependencies) are correctly setup, the following steps will register the Score server as a SysV service on any Linux host supporting SysV and configure it to start on boot:

``` bash
# Register the Score service
sudo ln -s $SCORE_SERVER_HOME/bin/score-server /etc/init.d/score-server

# Start on boot (defaults)
sudo update-rc.d score-server defaults
```

The Score server can also be manually managed using several commands:

``` bash
# Start the service
sudo service score-server start

# Stop the service
sudo service score-server stop

# Restart the service
sudo service score-server restart
```