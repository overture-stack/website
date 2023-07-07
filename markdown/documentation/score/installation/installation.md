---
title: Installing Score
---

# Distribution

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

#  Running as a Service

Although the Score server distribution can be run as a standalone application, it must be manually started or stopped by the user.  For a long-running server, sudden power loss or a hard reboot would mean the standalone application would need to be restarted manually.  However, if the Score server distribution is run as a service, the operating system would be responsible for automatically restarting the service upon reboot. For this reason, the distribution should be configured as a service that is always started on boot.

## Linux (SysV)

Assuming the directory path of the distribution is `$SCORE_SERVER_HOME` and [pre-requisites](/documentation/score/installation/prereq) are correctly setup, the following steps will register the Score server as a SysV service on any Linux host supporting SysV and configure it to start on boot:

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

The next sections will cover how to properly configure, authorize and authenticate Score.