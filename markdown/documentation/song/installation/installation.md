---
title: Deploying a SONG Server
---

# Dependencies
The following software dependencies are required in order to run the Song server:

- Bash Shell
- Java 11 or higher
- Postgres database


# Installation
## Distribution 
Official SONG releases can be found [Github](https://github.com/overture-stack/SONG/releases). Each release contains notes with a description of the bug fixes, new features or enhancements and breaking changes, as well as links to downloads and change logs. 

The latest distribution can be downloaded using the command: 
```bash
 curl "https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/song-server/[RELEASE]/song-server-[RELEASE]-dist.tar.gz" -Ls -o song-server-dist.tar.gz    

```
This distribution contains the default configuration and jars for running the server. To unarchive, run the command:

```bash
tar zxvf song-server-dist.tar.gz
```

Note that once unzipped, the final directory will be suffixed with the latest release number of the distribution. 

##
There are several <span style="color:red"> required</span> components to configure for Song server.  These include: 
- [Score Server Integration](/documentation/song/installation/configuration/score) 
- [ID Management](/documentation/song/installation/configuration/id)
- [Schema Strictness](/documentation/song/installation/configuration/schema)

There are also some <span style="color:blue">optional</span> components to configure for Song server.  These include:  
- [Event Management Integration](/documentation/song/installation/configuration/kafka)

The details of each of these options are covered in the [Configuration](song/installation/configuration) section. 

## Database  Setup 

**<------------UPDATE NEEDED START---------------->**

![DEV_CONTENT](../assets/developer-content-needed.png 'Dev content needed')

Need DB installation updated instructions 

**<------------UPDATE NEEDED STOP---------------->**

#  Running as a Service
Although the SONG server distribution could be run as a standalone application, it must be manually started or stopped by the user. For a long-running server, sudden power loss or a hard reboot would mean the standalone application would need to be restarted manually. However, if the SONG server distribution is run as a service, the OS would be responsible for automatically restarting the service upon reboot. For this reason, the distribution should be configured as a service that is always started on boot.

## Linux (SysV)
Assuming the directory path of the distribution is $SONG_SERVER_HOME and [pre-requisites](/documentation/song/installation/installation/#dependencies) are correct, the following steps will register the SONG server as a SysV service on any Linux host supporting SysV and configure it to start on boot.

``` bash
# Register the SONG service
sudo ln -s $SONG_SERVER_HOME/bin/song-server /etc/init.d/song-server

# Start on boot (defaults)
sudo update-rc.d song-server defaults
```

The Song server can also be manually managed using several commands:
``` bash
# Start the service
sudo service song-server start

# Stop the service
sudo service song-server stop

# Restart the service
sudo service song-server restart

```