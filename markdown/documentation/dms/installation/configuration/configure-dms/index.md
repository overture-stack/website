---
title: Configure the DMS
---

After completing your [prerequisite setup](../prereq), follow the steps in the below sub-sections to configure the DMS platform before deployment.

# Before You Start

Before starting the interactive configuration questionnaire, here are some important things to note about its operation:

1. The following sub-sections describe how to configure all the Overture services prior to deploying them to a single cluster.  Although each sub-section describes the configuration of an individual service, this breakdown is only for reader convenience.  **In reality, the configuration questionnaire runs in one shot and all questions must completed for all services**.


2. At the end of the configuration process, a single configuration file (`~/.dms/config.yaml`) is created to record all of your inputs (all questions answered for all services).  The file can then be used to deploy the services to the cluster.

<Warning>**NOTE:** The DMS Installer currently does not support configuring or updating specific inputs (fields/questions) or specific services.  When the configuration is built, the entire questionnaire must be completed, for all services.  Hence to do an update, the entire configuration must be built and deployed again.  The cluster can be stopped without destroying the data volumes, allowing you to deploy a new configuration without deleting the existing data (see [Stopping Your Cluster](../../../admin-guide/tasks#stopping-your-cluster)).  The Overture roadmap includes a future feature enhancement to allow updates to specific service configurations.  However, until such time, this is the update process that is currently supported.  It is **NOT** recommended for an administrator manually edit the `~/.dms/config.yaml`, because not all values can be modified and updated this way and may cause the cluster to be unrecoverable.</Warning>

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
$ dms version
```

The latest version displays successfully (where `x.y.z` is the latest version):

```shell
x.y.z
```

# Start the Interactive Questionnaire

Start the interactive configuration questionnaire with this command:

```shell
$ dms config build

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

For example:

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

For example:

```shell
===============
SONG
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-song
What should the SONG database password be? ******
```

# Configure Score

[Score](../../../../score) manages data transfer to (upload) and from (download) cloud object storage.  As such, a storage service is required for Score to interact with.  The DMS allows either the use of MinIo](https://min.io/) pre-bundled with the DMS platform, or an external service such as [Amazon S3](https://aws.amazon.com/s3/), [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/), or [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/).

Configure the following for Score:

| Input | Description | Default |
| ------| ------------| --------| 
| Use Existing S3 Object Storage Service? | Select whether you have an existing S3 object storage service such as Amazon S3, Microsoft Azure, or Openstack with Ceph that you wish to use with Score.  If you have an S3 service, enter `Y`.  If not, enter `N`.  If you enter `N`, then MinIo is used as the storage service by default (comes bundled with the DMS). | None |
| Automatically Create MinIo Credentials? | This input only appears if you do not have an existing S3 object storage service and must use the MinIo service.  Select whether you want the DMS to automatically create credentials for accessing MinIo.  To auto-generate credentials, enter `Y`.  To enter your own custom credentials, enter `N`. | None |
| MinIo Access Key | This input only appears if you are using MinIo and have chosen **NOT** to auto-generate credentials.  This is the access key required to authenticate with MinIo. | None |
| MinIo Secret Key | This input only appears if you are using MinIo and have chosen **NOT** to auto-generate credentials.  This is the secret key required to authenticate with MinIo. | None |
| Will You Use AWS S3? | This input only appears if you are using an existing S3 object storage service.  Select whether you are specifically using Amazon S3, or another S3 service.  If using Amazon, enter `Y`.  If not, enter `N`. | None |
| Amazon S3 Region | This input only appears if you are using Amazon S3 as your object storage service.  Enter the geographic region where you have configured your Amazon S3 service to store the buckets. These values are predefined for you to select during your Amazon S3 service configuration.  For example, `CA_Central` is the region for Amazon servers located in Canada. | None |
| S3 Access Key | This input only appears if you are using an existing S3 object storage service. This is the access key required to access the buckets with your service. You should have recorded this as aprt of your [prequisite setup](../prereq/buckets). | None |
| S3 Secret Key | This input only appears if you are using an existing S3 object storage service. This is the secret key required to access the buckets with your service. You should have recorded this as aprt of your [prequisite setup](../prereq/buckets). | None |
| Object Bucket ID | ID of the bucket used to store object data for Score. If you are using your own S3 storage service, this must the same ID that you setup in your prequisite steps.  For details, see [here](../prereq/buckets). Else if you are using MinIo, a default value is provided, although you can enter your own. | `dms.object` if using MinIo |
| State Bucket ID | ID of the bucket used to store and maintain state information for Score. If you are using your own S3 storage service, this must the same ID that you setup in your prequisite steps.  For details, see [here](../prereq/buckets). Else if you are using MinIo, a default value is provided, although you can enter your own. | `dms.state` if using MinIo |

## MinIo Example

```shell
===============
SCORE
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-score
Do you have an existing S3 object storage service you want to use with the SCORE service? (Y/N): n
MinIO will be used as the SCORE S3 object storage service. Would you like to automatically create credentials? If no, you must enter them in the subsequent questions. (Y/N): n
What should the MinIO access key be? abc123
What should the MinIO secret key be? abc123
What is the name of the OBJECT bucket used for SCORE? [dms.object]:
What is the name of the STATE bucket used for SCORE? [dms.state]:
```

## Non-Amazon S3 Example

```shell
===============
SCORE
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-score
Do you have an existing S3 object storage service you want to use with the SCORE service? (Y/N): y
Will you be using AWS S3? (Y/N): n
What is the URL of the S3 service? https://object.cancercollaboratory.org:9080
What is the S3 access key? abc123
What is the S3 secret key? abc123
What is the name of the OBJECT bucket used for SCORE? [dms.object]: dms_object_bucket
What is the name of the STATE bucket used for SCORE? [dms.state]: dms_state_bucket
```

## Amazon S3 Example

```shell
===============
SCORE
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-score
Do you have an existing S3 object storage service you want to use with the SCORE service? (Y/N): y
Will you be using AWS S3? (Y/N): y
What is the S3 region? CA_Central
What is the S3 access key? abc123
What is the S3 secret key? abc123
What is the name of the OBJECT bucket used for SCORE? [dms.object]: dms_object_bucket
What is the name of the STATE bucket used for SCORE? [dms.state]: dms_state_bucket
```

# Configure Elasticsearch

The DMS platform indexes its data into [Elasticsearch](https://www.elastic.co/).  Elasticsearch provides a flexible and highly-optimized mechanism for indexing and searching data.  [Arranger](../../../../arranger) interfaces with Elasticsearch to interpret the index structure and allow DMS administrators to configure which data fields can be exposed to end users in the Data Portal for their consumption.

Configure the following for Elasticsearch:

| Input | Description | Default |
| ------| ------------| --------| 
| Superuser Password | Password used by the superuser to gain administrative access to Elasticsearch. By default, the superuser's username is `elastic`; this value, along with the password you enter here, must be used when logging into Elasticsearch. | None |

For example:

```shell
===============
ELASTICSEARCH
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-elasticsearch
Elasticsearch provides a superuser with default username 'elastic'. What should the superuser's password be? ******
```

# Configure Maestro

The [Maestro service](../../../../maestro) provides the ability to automate the building of search indexes in Elasticsearch.  This vastly reduces the time and complexity a DMS administrator would need to deal with Elasticsearch directly themselves.

Configure the following for Maestro:

| Input | Description | Default |
| ------| ------------| --------| 
| Elasticsearch Index Alias | The alias used to represent the Elasticsearch index that Maestro will build. **This must be different from the actual index name.** Typically, it is recommended to simply use the system default, `file_centric`. | `file_centric` |
| Elasticsearch Index Name | The actual name of the Elasticsearch index that Maestro will build. **This must be different from the alias.** Typically, it is recommended to simply use the system default, `file_centric_1`. | `file_centric_1` |

For example:

```shell
===============
MAESTRO
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-maestro
What is the alias of the Elasticsearch index that Maestro will build (must be different from the index name)? [file_centric]:
What is the index name of the Elasticsearch index that Maestro will build (must be different from the alias)? [file_centric_1]:
```

# Configure DMS UI

The DMS UI is the user-facing Data Portal where users can search, explore, and download the data you have uploaded to the DMS platform.

| Input | Description | Default |
| ------| ------------| --------| 
| Contact Email | This is the email that you wish your Data Portal users to contact for support (for example, the DMS Administrator's email). This email will appear, for example, in error messages directing users to contact support. This may be more useful or applicable to institutions deploying the Portal for groups of users than for an individual deploying the DMS for personal research use. This value must be in proper email format. | None |
| Data Portal Name | Optionally enter a custom name for the Data Portal to be displayed in the header beside the logo. For example, you may wish to display your institution or lab name. The logo must be customized separately (see [here](../prereq/logo)) | `Data Management System` |
| Arranger Project ID | ID of the project that you will confiigure in Arranger after deployment. The value you enter here **MUST** match the value you configure later in Arranger. The Data Portal references this value and if they do not match, an error will occur. | `file` |
| Arranger Project Name | Name of the project that you will confiigure in Arranger after deployment. The value you enter here **MUST** match the value you configure later in Arranger. The Data Portal references this value and if they do not match, an error will occur. | `file` |
| Arranger Elasticsearch Alias Name | Name of the alias for the Elasticsearch index that you will configure in Arranger after deployment. The value you enter here **MUST** match the value you configure later in Arranger **AND** it must also match the alias name previously [supplied for Maestro](#configure-maestro). The Data Portal references this value and if they do not match, an error will occur. | `file_centric` |

For example:

```shell
===============
DMS UI
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-dms-ui
What is the e-mail that your DMS users can contact for support (will appear in the DMS UI)? firstname.lastname@gmail.com
Would you like to customize the data portal name (appears in the DMS UI header)? [Data Management System]: Test Data Portal

*****************************************************************************************************
!!! NOTE !!!

    The next 3 fields (Arranger Project ID, Project Name, Elasticsearch AliasName are
    required when you create your project in the Arranger administrative UI after
    deployment.  The values you use MUST match the ones you supply here for the
    DMS UI configuration. The DMS UI interacts with Arranger and expects the same
    values you input here. For instructions on adding an Arranger project, see:
    https://overture.bio/documentation/dms/installation/verify#add-project-to-arranger-ui
*****************************************************************************************************

What is the Project ID you will configure in Arranger (to be referenced by DMS UI)? [file]:
What is the Project Name you will configure in Arranger (to be referenced by DMS UI)? [file]:
What is the Elasticsearch alias name you will configure in Arranger (to be referenced by DMS UI and ALSO must match the alias name previously supplied for Maestro) be?  [file_centric]:
```

## Arranger-Specific Fields

As indicated, the Arranger-specific fields (`Project ID`, `Project Name`, `Elasticsearch Alias Name`) that you supply here **MUST** match the values configured later in Arranger after deployment.  For details, see [Add Project to Arranger UI](../../verify#add-project-to-arranger-ui).

This screenshot shows how the Arranger UI fields map to the inputs in the DMS installation script:

![Entity](../../../assets/arranger-project-fields.png 'Arranger Project Fields')

# Check Configuration File

After completing the configuration for all services, the values are saved successfully to the configuration YAML file (`~/.dms/config.yaml`):

```shell
Your configuration file was successfully saved to: /root/.dms/config.yaml

You may now deploy your configuration to your cluster. For instructions, see:
https://overture.bio/documentation/dms/installation/deploy/
```

View and verify that your configuration values were captured correctly in the YAML file with this command:

```shell
$ dms config get
```

The contents of the saved config file will be displayed.  Here is a sample extract:

```shell
---
gateway:
  pathBased: true
  hostPort: 443
  url: "https://dms.test.cancercollaboratory.org:443"
  sslDir: "/etc/letsencrypt/"
healthCheck:
  retries: 15
  delaySec: 10
clusterRunMode: "SERVER"
version: "1.0.0"
network: "dms-swarm-network"
ego:
  api:
    tokenDurationDays: 30
    jwt:
      user:
        durationMs: 10800000
      app:
        durationMs: 10800000
    refreshTokenDurationMS: 43200000
    hostPort: 9000
    sso:
      google:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/google"
      github:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/github"
      linkedin:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/linkedin"
      orcid:
        clientId: "abc123"
        clientSecret: "abc123"
        preEstablishedRedirectUri: "https://dms.test.cancercollaboratory.org:443/ego-api/oauth/login/orcid"
    url: "https://dms.test.cancercollaboratory.org:443/ego-api"
    dmsAppCredential:
      name: "dms"
      clientId: "dms"
      clientSecret: "abc123"

<...and so on...>
```

# A Note About Arranger Configuration

[Arranger]((../../../../arranger)) is a key service in Overture, allowing administrators to configure what data to expose in their data portal based on the deployed Elasticsearch index.

Although Arranger does not have any configurations required in the DMS configuration questionnaire, it has mandatory configuration tasks after a successful cluster deployment.

For details of these tasks, see [Add Project to Arranger-UI](../../verify#add-project-to-arranger-ui) later on.