---
title: Installing Ego
---

# Installation

Before installing Ego, make sure you have completed all the applicable [prerequisites steps](/documentation/ego/installation/preqreq).

## Download Ego

You can download the latest version of Ego from [here](https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/ego/[RELEASE]/ego-[RELEASE]-dist.tar.gz). 

Example using curl:
```shell
curl  https://artifacts.oicr.on.ca/artifactory/dcc-release/bio/overture/ego/[RELEASE]/ego-[RELEASE]-dist.tar.gz -o ego-dist.tar.gz
```

## Extract the Distribution

Once downloaded, extract the distribution:

```shell
tar zxvf ego-dist.tar.gz
```

This creates a folder with the name of `ego-<version>` where `<version>` is the release number.  We recommend moving Ego out of your home directory and into to a directory like `/srv`. You may need elevated privileges to do this:

```shell
$ sudo mv ego-5.4.0 /srv/
$ ls -l /srv/
total 4
drwxrwxr-x 8 ubuntu ubuntu 4096 Mar 31 18:51 ego-5.4.0
```

We also recommend creating a symlink with the name of `ego-current` in case you ever need to update or rollback to a previous version of Ego while maintaining a single place to look at for running and configuration: 

```shell
/srv$ sudo ln -sf ego-4.4.0 ego-current
/srv$ ls -la
total 12
drwxr-xr-x  3 root   root   4096 Mar 31 18:56 .
drwxr-xr-x 19 root   root   4096 Mar 31 18:14 ..
drwxrwxr-x  8 ubuntu ubuntu 4096 Mar 31 18:51 ego-4.4.0
lrwxrwxrwx  1 root   root      9 Mar 31 18:56 ego-current -> ego-5.4.0
```

## Database Configuration

Next, we must configure the Ego's database.

```shell
/srv/ego-current$ ls -l
total 24
drwxrwxr-x 2 ubuntu ubuntu 4096 Mar 31 18:51 bin
drwxrwxr-x 2 ubuntu ubuntu 4096 Mar 31 18:51 cert
drwxr-xr-x 2 ubuntu ubuntu 4096 Mar 1 17:03 conf
drwxrwxr-x 2 ubuntu ubuntu 4096 Mar 31 18:51 exec
drwxr-xr-x 2 ubuntu ubuntu 4096 Mar 31 17:03 lib
drwxr-xr-x 2 ubuntu ubuntu 4096 Mar 31 17:03 logs
```

Navigate to the `conf` directory to edit the `application.yml` file:

```shell
vim conf/application.yml
```

First, edit the `spring.datasource` section, replacing `<ego_db>`, `<db_user>`, and `<db_pass>` with the values you have configured in your postgresql instance:

```yml
# Datasource
spring.datasource:
  driver-class-name: org.postgresql.Driver
  url: jdbc:postgresql://localhost:5432/<ego_db>?stringtype=unspecified

  username: <db_user>
  password: <db_pass>
  max-active: 10
  max-idle: 1
  min-idle: 1
```

Next, since we have not applied any database migrations, we must enable [Flyway](https://flywaydb.org/) to automatically apply outstanding migrations on startup. Look for the `spring.flyway.enabled` setting and set it to `true`. Also, we must tell Flyway where to find the migrations. Since we are using built-in migrations, we can add `locations: classpath:flyway/sql,classpath:db.migration`:

```yml
spring:
  flyway:
    enabled: true # SET THIS TO TRUE, DEFAULT IS FALSE
    user: <privileged_user>
    password: <privileged_user_password>
    locations: classpath:flyway/sql,classpath:db.migration
```

Since the migration requires elevated privileges to create extensions in PostgreSQL, feel free to use a separate user for running them. 

## First Startup

We are now ready to start Ego and initialize the database. We will use the service wrapper `bin/ego` to start/stop/restart Ego:

```shell
/srv/ego-current$ bin/ego 
Usage: bin/ego [ console | start | stop | restart | condrestart | status | install | remove | dump ]

Commands:
  console      Launch in the current console.
  start        Start in the background as a daemon process.
  stop         Stop if running as a daemon or in another console.
  restart      Stop if running and then start.
  condrestart  Restart only if already running.
  status       Query the current status.
  install      Install to start automatically when system boots.
  remove       Uninstall.
  dump         Request a Java thread dump if running.

```
Starting it up for the first time:
```shell
/srv/ego-current$ bin/ego start
Starting EGO Server...
Waiting for EGO Server......
running: PID:11994
```

Examine the logs and verify that you see log messages similar to the following:

```shell
$ /srv/ego-current$ tail -f logs/wrapper.20210331.log 
INFO   | jvm 1    | 2021/03/31 19:35:02 | 2021-03-31 19:35:02,492 [WrapperSimpleAppMain] INFO  o.s.b.w.e.t.TomcatWebServer - Tomcat started on port(s): 8081 (http) with context path ''
INFO   | jvm 1    | 2021/03/31 19:35:02 | 2021-03-31 19:35:02,492 [WrapperSimpleAppMain] INFO  o.s.b.w.e.t.TomcatWebServer - Tomcat started on port(s): 8081 (http) with context path ''
INFO   | jvm 1    | 2021/03/31 19:35:02 | 2021-03-31 19:35:02,497 [WrapperSimpleAppMain] INFO  b.o.e.AuthorizationServiceMain - Started AuthorizationServiceMain in 22.659 seconds (JVM running for 24.385)
```

# Auth Setup

Now that Ego is up and running we want to configure the first user and application that can use Ego for authorization.

## Identity Provider

Make sure you have setup the `Client ID` and `Client Secret` for at least one identity provider (see instructions [here](/documentation/ego/prereq#setup-identity-provider-secrets)).

For the identity provider of your choice, find the relevant section in the `application.yml` configuration file and enter the `Client ID` and `Client Secret` you have configured fro that provider.  Save the file.  For example, if Google is your provider:


```yml
google:
  client:
    clientId: <cliend_id>
    clientSecret: <client_secret>
    accessTokenUri: https://www.googleapis.com/oauth2/v4/token
    userAuthorizationUri: https://accounts.google.com/o/oauth2/v2/auth
    clientAuthenticationScheme: form
    scope:
      - email
      - profile
  resource:
    userInfoUri: https://www.googleapis.com/oauth2/v3/userinfo
```

## First Application

Before users can login, we need to setup the UI application inside of Ego. This can be done by setting `intialization.enabled` to `true` and configuring the rest of the settings to match the settings you will use in your UI application.

```yml
initialization:
  enabled: true # Set to true
  applications:
    - name: <name_of_your_ui_app>
      type: CLIENT
      clientId: <client_id_of_ui>
      clientSecret: <some_secret> 
      redirectUri: <url to redirect to in your UI app; for the Overture Ego UI this must be root>
      description: General description of your application  # optional
```

## First User

Users by default do not have the `ADMIN` role and therefore cannot modify Ego or use the Ego UI. We want to allow the first user only to login as an `ADMIN` user. They will then be able to manage other users and assign the `ADMIN` role to others as required.

We can setup the first user as `ADMIN` by setting the `firstUserAsAdmin`, `type`, and `status` configurations in `application.yml` as follows:

```yml
# Default values available for creation of entities
default:
  user:
    # flag to automatically register first user as an admin
    firstUserAsAdmin: true
    type: ADMIN
    status: APPROVED
```

# Putting It All Together

Now that we have updated our configurations, we can restart Ego, and try to login via the Ego Administrative UI:

```shell
bin/ego restart
```

# Cleanup

Assuming all is well, the Ego database is properly configured, and the first user and application are working, we recommend that you disable the initialization of the first application and user. This means setting the `firstUserAsAdmin` and `initialization.enabled` configurations back to `false` in the `application.yml` file.

Additionally, if you prefer to manage migrations yourself and not have Ego automatically apply them when you update Ego, you may disable the Flyway migration setting (set back to `false`).