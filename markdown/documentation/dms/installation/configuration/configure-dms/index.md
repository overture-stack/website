---
title: Configure the DMS
---

After completing your [prerequisite setup](../prereq), follow the steps in the below sub-sections to configure the DMS platform before deployment.

# Before You Start

Before starting the interactive configuration questionnaire, here are some important things to note about its operation:

1. The following sub-sections describe how to configure all the Overture services prior to deploying them to a single cluster.  Although each sub-section describes the configuration of an individual service, this breakdown is only for reader convenience.  **In reality, the configuration questionnaire runs in one shot and all questions must completed for all services**.


2. At the end of the configuration process, a single configuration file (`~/.dms/config.yaml`) is created to record all of your inputs (all questions answered for all services).  The file can then be used to deploy the services to the cluster.

<Warning>**NOTE:** The DMS Installer currently does not support configuring or updating specific inputs (fields/questions) or specific services.  When the configuration is built, the entire questionnaire must be completed, for all services.  Hence to do an update, the entire configuration must be built and deployed again, which may be time-consuming for many users.  The Overture roadmap includes a future feature enhancement to allow updates to specific service configurations.  However, until such time, a current alternative is for knowledgeable or advanced users to directly edit specific values in the `~/.dms/config.yaml` file, then re-deploy the cluster.</Warning>

3. **About default values:** Some input questions suggest a recommended default value at the end of the question, displayed in square brackets `[ ]`.  A user can simply accept and use the recommended default by pressing `Enter`.  However, they can of course, enter their own custom value and override the default.  In the example below, the recommended default values for the the first four questions (30 days, 3 hours, 3 hours, 12 hours, respectively) have all been accepted by the user by pressing `Enter` for each input:

```shell
===============
EGO
===============
Guide: https://overture.bio/documentation/dms/installation/configuration/configure-dms#configure-ego
How many days should API keys be valid for? [30]:
How many hours should user-level JWTs be valid for? [3]:
How many hours should application-level JWTs be valid for? [3]:
How many hours should refresh tokens be valid for? [12]:
Which OAuth identity providers would you like to enable? e.g: 1,4
  1: GOOGLE
  2: LINKEDIN
  3: GITHUB
  4: ORCID
Enter your choices as comma-separated values: 1,2,3,4
```

# Check the DMS Executable and Version

Before running the interactive configuration, make sure you are running the latest DMS version.  This also serves as a check that the executable can run properly:

```shell
dms version
```

The latest version displays successfully (where `x.y.z` is the latest version):

```shell
x.y.z
```

# Start the Interactive Questionnaire

Start the interactive configuration questionnaire with this command:

```shell
dms config build

*****************************************************************************************************
!!! NOTE !!!

   Before starting, make sure you have completed all prerequisite setup steps here:
   https://overture.bio/documentation/dms/installation/configuration/prereq/

*****************************************************************************************************


Starting interactive configuration...
```

Prior to the configuration questions, a small message appears reminding you to verify you have completed all prerequisite setup steps, with a link to the installation documentation if you have not.

# Select the Cluster Deployment Mode

First select the cluster deployment mode, which you should have thought through and [decided earlier in the installation pre-requisites](../../installation#decide-local-or-server-deployment).

<Warning>**NOTE:** You must choose the same deployment mode you decided earlier, since all of your prerequisite setup would have been based on that decision.</Warning>

```shell:
===============
CLUSTER MODE & GATEWAY
===============
Guide: https://overture.bio/documenation/dms/installation/configuration#decide-local-or-server-deployment
Select the cluster mode to configure and deploy:
  1: LOCAL
  2: SERVER
Enter your choice: 1
```

# Configure the DMS Gateway

The DMS Gateway acts as an ingress controller where all incoming traffic and requests are received via a single port.

This simplifies communication and allows the Gateway to easily route requests to the correct underlying Overture service via convenient sub-paths (e.g. `locahost:80/ego-ui` or `dms.test.cancercollaboratory.org/ego-ui`).

## Local Mode

If deploying in local mode, specify the port on which the DMS Gateway will be exposed.  Port 80 is used by default:

```shell
What port will the gateway be exposed on? [80]:
```

## Server Mode

If deploying in server mode, specify the [domain name](../prereq/domain) and [SSL certificate](../prereq/sslcert) you setup in the earlier pre-requisites.

1. Enter the base gateway URL using the configured domain:

```shell
What is the base DMS Gateway URL (example: https://dms.cancercollaboratory.org)? https://dms.test.cancercollaboratory.org

```

2. Enter the **absolute** path to the SSL certificate you installed earlier with Certbot.  For typically Certbot installs, this path should be `/etc/letsencrypt`:

```shell
What is the absolute path for the SSL certificate ? /etc/letsencrypt
```

# Configure Ego

[Ego](../../../../ego) is responsible for user management and authentication, allowing users to login and authenticate themselves over the OAuth 2.0 protocol via supported Identity Providers.

Configure the following for Ego:

| Input | Description | Default |
| ------| ------------| --------| 
| API Key Validity Period | Number of days after a user's API key is issued before it expires and can no longer be used.  A new key would need to be requested at that point. Must be an integer value greater than 0. | 30 days |
| User JWT Validity Period | Number of hours after a user's JSON Web Token (JWT) is issued before it expires and can no longer be used.  A new JWT would need to be requested at that point. Must be an integer value greater than 0. | 3 hours |
| Application JWT Validity Period | Number of hours after a user's JSON Web Token (JWT) is issued before it expires and can no longer be used.  A new JWT would need to be requested at that point. Must be an integer value greater than 0. | 3 hours |
| Refresh Token Validity Period | Number of hours after a refresh token is issued before it expires and can no longer be used.  A new refresh token would need to be requested at that point. Must be an integer value greater than 0. | 12 hours |
| Enabled SSO Providers | A comma-separated list of the OAUTH 2.0 single-sign on (SSO) identity providers you plan to enable and use in your deployment. Enter the numeric ID representing each provider you want (1 = Google, 2 = LinkedIn, 3 = GitHub, 4 = ORCiD). | None |
| `<Provider>` Client ID | The client ID generated by your `<Provider>` when you generated your app's OAUTH credentials with them. You must repeat this for each identity provider you have chosen to enable. For details, see [here](../prereq/secrets). | None |
| `<Provider>` Client Secret | The client secret generated by your `<Provider>` when you generated your app's OAUTH credentials with them. You must repeat this for each identity provider you have chosen to enable. For details, see [here](../prereq/secrets). | None |
| Ego Database Password | Password used by an administrator to access the Ego PostgresSQL database. | None |

For example:

```shell
===============
EGO
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-ego
How many days should api keys be valid for? [30]:
How many hours should USER JWTs be valid for? [3]:
How many hours should APP JWTs be valid for? [3]:
How many hours should refresh tokens be valid for? [12]:
What SSO providers would you like to enable?
  1: GOOGLE
  2: LINKEDIN
  3: GITHUB
  4: ORCID
Enter your choices as comma-separated values: 1,2,3,4
What is the GOOGLE client id? abc123
What is the GOOGLE client secret? abc123
What is the LINKEDIN client id? abc123
What is the LINKEDIN client secret? abc123
What is the GITHUB client id? abc123
What is the GITHUB client secret? abc123
What is the ORCID client id? abc123
What is the ORCID client secret? abc123
What should the EGO db password be? ******
```

# Configure Song

[Song](../../../../song) provides a metadata management and storage system to easily track and manage files in a secure and validated environment, against your established data model.

Configure the following for Song:

| Input | Description | Default |
| ------| ------------| --------| 
| Song Database Password | Password used by an administrator to access the Song PostgresSQL database. | None |

```shell
===============
SONG
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-song
What should the SONG database password be? ******
```