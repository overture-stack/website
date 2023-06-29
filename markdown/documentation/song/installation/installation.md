---
title: Deploying a Song Server
---

# Prerequisites 

Before installing Song, make sure the following are installed and configured on the platform of your choice (we recommend Linux):

1. PostgreSQL
    - Official download & installation instructions [here](https://www.postgresql.org/download/)
    - You must have your database setup before installing Song

2. Docker Engine
    - Official download & installation instructions [here](https://docs.docker.com/engine/install/)

# Installation

1. **Docker Pull:** Install the latest stable release with the following command:

```bash
docker pull ghcr.io/overture-stack/song-server:latest
```

2. **Run the docker container:** Run the Song-server container with the following command:

```bash
docker run ghcr.io/overture-stack/song-server:latest
```


1. **Download the latest distribution:** Official Song releases can be found on [Songs Github releases page](https://github.com/overture-stack/SONG/releases).

The latest distribution can be downloaded using the command: 
```bash
 curl https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/song-server/[RELEASE]/song-server-[RELEASE]-dist.tar.gz -Ls -o song-server-dist.tar.gz    

```
2. **Unzip the distribution:** To unzip, run the command:

```bash
tar zxvf song-server-dist.tar.gz
```

Note that once unzipped, the final directory will be suffixed with the latest release number of the distribution. 

3. **Configurations:** There are several ***required*** components to configure for a Song server including: 
- [Run Profiles](/documentation/song/installation/configuration/profiles) 
- [Score Server Integration](/documentation/song/installation/configuration/score) 
- [ID Management](/documentation/song/installation/configuration/id)
- [Schema Strictness](/documentation/song/installation/configuration/schema)

You may also ***optionally*** [Event Management Integration](/documentation/song/installation/configuration/kafka) with Kafka.

The details of each of these options are covered in the [Configuration](/documentation/song/installation/configuration/) section. 

## Database Setup 
Once you have unzipped your song-server, installed Postgres and created your database, you will need to update the configuration with your Postgres databases connections details.  

In the `/conf/application.yml`, leave the other values alone and update the database values: 
- **url:** Include the URL to your Postgres db. 
- **username:** Include the db username.
- **passsword:**  Include the corresponding password.

For example: 
```yaml
spring:
  profiles:
    include: [dev]
  autoconfigure.exclude: SecurityConfig.class
  datasource:
    driver-class-name: org.testcontainers.jdbc.ContainerDatabaseDriver
    ## update the url, username, and password below
    url: jdbc:tc:postgresql:9.6.12://<host>:5432/<database_name>?stringtype=unspecified
    username: <username-here>
    password: <password-here>
    max-active: 10
    max-idle: 1
    min-idle: 1
    hikari:
      connection-timeout: 500
      validation-timeout: 250
```
#  Running as a Service
Although the Song server distribution could be run as a standalone application, it must be manually started or stopped by the user. For a long-running server, sudden power loss or a hard reboot would mean the standalone application would need to be restarted manually. However, if the Song server distribution is run as a service, the OS would be responsible for automatically restarting the service upon reboot. For this reason, the distribution should be configured as a service that is always started on boot.

## Linux (SysV)
Assuming the directory path of the distribution is $SONG_SERVER_HOME and [pre-requisites](/documentation/song/installation/installation/#dependencies) are correct, the following steps will register the Song server as a SysV service on any Linux host supporting SysV and configure it to start on boot.

``` bash
# Register the Song service
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