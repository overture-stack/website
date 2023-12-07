---
title: Interactive Questionnaire
---
Prior to starting the interactive configuration questionnaire, consider these operational aspects:

- **Understanding the Configuration Process:** The sections below outline how to set up all Overture services before deploying them to a single cluster. While each section focuses on an individual service for clarity, the configuration questionnaire encompasses all services and should be completed in its entirety.


- **Configuration File Overview:** Upon finishing the configuration, a single configuration file (`~/.dms/config.yaml`) records all inputs. This file can then facilitate the deployment of the services to the cluster.

<Warning>**NOTE:** The DMS Installer does not support updates for specific inputs or services. The entire questionnaire must be filled out each time. To update, you must rebuild and redeploy the entire configuration. You can stop the cluster without erasing data volumes, allowing for a new configuration deployment without data loss. See [Stopping Your Cluster](../../../admin-guide/tasks#stopping-your-cluster). Although the Overture roadmap plans to improve this process, manual edits to the `~/.dms/config.yaml` are **NOT** recommended due to potential unrecoverability.</Warning>

- **About Default Values:** Some questions suggest default values shown in square brackets `[ ]`. Press `Enter` to accept, or provide a custom value to override. In the example below, default values for the initial four questions have been accepted:

```bash
---
EGO
---
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

- **Data Volume Backup:** The DMS platform does **NOT** automatically backup data volumes. Though future releases might incorporate this, administrators currently need to devise their backup strategies.

- **Deployment Limitations:** DMS only supports deployment to one cluster, aiming for single-node system use and not high availability.

# Starting the Interactive Questionnaire

1. **Check the DMS Executable and Version:** Verify you're using the latest DMS version and that the executable runs correctly:

```bash
dms version
```

The output should display the latest version, `x.y.z`:

```bash
x.y.z
```

2. **Start the Configuration Process:** Initiate the configuration process with:

```bash
dms config build
```

A brief message will remind you to ensure all prerequisite steps have been completed.

3. **Choose the Cluster Deployment Mode:** Select the cluster deployment mode consistent with your [earlier decision](../../installation#decide-local-or-server-deployment).


4. **Configuring the DMS Gateway:** The DMS Gateway serves as an ingress controller, handling all incoming traffic via a single port. This centralized approach aids in efficiently directing requests to the appropriate Overture service.

```bash
===============
CLUSTER MODE & GATEWAY
===============
Guide: https://overture.bio/documenation/dms/installation/configuration#decide-local-or-server-deployment
Select the cluster mode to configure and deploy:
  1: LOCAL
  2: SERVER
Enter your choice: 1
```

**For Local Mode:** define the port for the DMS Gateway. By default, it's Port 80:

```bash
What port will the gateway be exposed on? [80]:
```

**For Server Mode:** Provide the [domain name](../prereq/domain) and [SSL certificate](../prereq/sslcert) configured previously.

- Input the base gateway URL using the established domain:

```bash
What is the base DMS Gateway URL (example: https://dms.cancercollaboratory.org)? https://dms.test.cancercollaboratory.org
```

- Specify the **absolute** path to your SSL certificate installed earlier with Certbot. Generally, for Certbot installs, the path is `/etc/letsencrypt`:

```bash
What is the absolute path for the SSL certificate? /etc/letsencrypt
```

# Ego Configurations

[Ego](../../../../ego) manages user authentication, leveraging OAuth 2.0 with various Identity Providers.
The following Ego configuration parameters are covered in the questionnaire:

| Input | Description | Default |
| ------| ------------| --------| 
| API Key Validity | Duration (in days) before a user's API key expires. Once expired, a new key is needed. Integer > 0. | 30 days |
| User JWT Validity | Duration (in hours) before a user's JWT expires. Once expired, a new JWT is required. Integer > 0. | 3 hours |
| Application JWT Validity | Duration (in hours) before an application's JWT expires. A new JWT will be required post-expiration. Integer > 0. | 3 hours |
| Refresh Token Validity | Duration (in hours) before a refresh token expires. Post expiration, a new token is needed. Integer > 0. | 12 hours |
| Enabled SSO Providers | Comma-separated list of OAUTH 2.0 SSO identity providers for deployment. Use the numeric ID for each provider (1 = Google, 2 = LinkedIn, 3 = GitHub, 4 = ORCiD). | None |
| `<Provider>` Client ID | Client ID from `<Provider>`, generated during OAUTH credential setup. Repeat for each enabled identity provider. See [prerequisites](../prereq/secrets) for more. | None |
| `<Provider>` Client Secret | Client secret from `<Provider>`, generated during OAUTH credential setup. Repeat for each enabled identity provider. Reference [prerequisites](../prereq/secrets). | None |
| Ego Database Password | Password to access the Ego PostgreSQL database. | None |

**Example Configuration Input:**

```bash
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

# Song Configurations

[Song](../../../../song) provides a metadata management and storage system to track and manage files in a secure and validated environment, against your established data model.

### Song Configuration Parameters:

| Input | Description | Default |
| ------| ------------| --------| 
| Song Database Password | Administrator password for accessing the Song PostgreSQL database. | None |

### Example Configuration Input:

```bash
===============
SONG
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-song
What should the SONG database password be? ******
```

# Score Configurations

[Score](../../../../score) handles data transfers, both uploads and downloads from cloud object storage. This necessitates an interface with a storage service. [MinIo](https://min.io/) is available by default with the DMS, but external services like [Amazon S3](https://aws.amazon.com/s3/), [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/), or [OpenStack](https://www.openstack.org/) with [Ceph](https://ceph.io/) can also be integrated.

### Score Configuration Parameters:

| Input | Description | Default |
| ------| ------------| --------| 
| Use Existing S3 Object Storage? | Indicate if you're using services like Amazon S3, Microsoft Azure, or Openstack with Ceph. Choose `Y` for yes, or `N` for no. MinIo is the default option if `N` is selected. | None |
| Auto-Generate MinIo Credentials? | Appears if you're using MinIo. Choose `Y` for the DMS to create MinIo credentials, or `N` to input manually. | None |
| MinIo Access Key | Appears if MinIo is selected without auto-generation. It's the access key for MinIo authentication. The auto-generated value can be found using the `dms config get` command or in the `~/.dms/config.yaml` file. | None |
| MinIo Secret Key | Similar to above, for the secret key of MinIo. | None |
| Use AWS S3? | Appears for existing S3 storage users. Choose `Y` if using Amazon S3, or `N` otherwise. | None |
| Amazon S3 Region | For Amazon S3 users, indicate the region, e.g., `CA_Central` for Canada. | None |
| S3 Access Key | For existing S3 storage users. The key to access your S3 storage, noted during your [pre-setup](../prereq/buckets). | None |
| S3 Secret Key | The secret counterpart of the above. | None |
| Object Bucket ID | The ID for the Score storage bucket. If using your own S3 service, this should match your [pre-setup](../prereq/buckets). For MinIo users, a default is provided, but it can be customized. | `dms.object` for MinIo |
| State Bucket ID | The ID for the Score state data. Similar conditions apply as above. | `dms.state` for MinIo |

### Example Configurations:

**MinIo Setup:**

```bash
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

**Non-Amazon S3 Setup:**

```bash
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
**Amazon S3 Setup:**

```bash
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

# Elasticsearch Configuration

The DMS platform indexes its data into [Elasticsearch](https://www.elastic.co/). Elasticsearch delivers a flexible, highly-optimized method for data indexing and searching. [Arranger](../../../../arranger) works in conjunction with Elasticsearch to comprehend the index structure, enabling DMS administrators to determine which data fields are available to end users via the Data Portal.

### Elasticsearch Configuration Parameters:

| Input | Description | Default |
| ------| ------------| --------| 
| Superuser Password | This is the password for the superuser to access Elasticsearch. Typically, the superuser's username is `elastic`. Combine this default username with the password you input here to log into Elasticsearch. | None |

### Example Configuration:

```bash
===============
ELASTICSEARCH
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-elasticsearch
Elasticsearch provides a superuser with default username 'elastic'. What should the superuser's password be? ******
```

# Maestro Configurations

The [Maestro service](../../../../maestro) streamlines the process of automatically constructing search indexes within Elasticsearch. This significantly minimizes the time and complexity associated with manual index creation by DMS administrators.

### Maestro Configuration Parameters:

| Input | Description | Default |
| ------| ------------| --------| 
| Elasticsearch Index Alias | This represents the alias for the Elasticsearch index that Maestro creates. It should differ from the actual index name. The system default, `file_centric`, is typically recommended. | `file_centric` |
| Elasticsearch Index Name | This is the actual name of the Elasticsearch index built by Maestro. It should differ from the alias. Using the system default, `file_centric_1`, is generally advised. | `file_centric_1` |

### Example Configuration:

```bash
===============
MAESTRO
===============
Guide: https://overture.bio/documenation/dms/installation/configuration/configure-dms#configure-maestro
What is the alias of the Elasticsearch index that Maestro will build (must be different from the index name)? [file_centric]:
What is the index name of the Elasticsearch index that Maestro will build (must be different from the alias)? [file_centric_1]:
```

# DMS UI Configurations

The DMS UI serves as the public Data Portal, enabling users to search, navigate, and download the data you've uploaded to the DMS platform.

### DMS UI Configuration Parameters:

| Input | Description | Default |
| ------| ------------| --------| 
| Contact Email | The preferred contact email for Data Portal users seeking support, such as the DMS Administrator's email. It appears in contexts like error messages guiding users to contact support. Particularly useful for institutions deploying the Portal for user groups rather than individuals using DMS for personal research. The email should be in the standard format. | None |
| Data Portal Name | An optional name for the Data Portal, shown next to the logo in the header. For instance, you might want to showcase your institution or lab's name. The logo needs a separate customization; details are [here](../prereq/logo). | `Data Management System` |
| Arranger Project ID | The ID for the project set up in Arranger post-deployment. Ensure the ID here matches the one in Arranger, as the Data Portal refers to this. Mismatch leads to errors. | `file` |
| Arranger Project Name | The name of the project set up in Arranger post-deployment. Ensure this name matches Arranger's; the Data Portal uses it. Discrepancies can cause errors. | `file` |
| Arranger Elasticsearch Alias Name | The alias name for the Elasticsearch index set in Arranger post-deployment. It needs to correspond with both Arranger's value and the previously [defined alias in Maestro](#configure-maestro). Errors arise from inconsistencies. | `file_centric` |

### Example Configuration:

```bash
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

**Key Information on Arranger Fields:** The Arranger-specific fields (`Project ID`, `Project Name`, `Elasticsearch Alias Name`) you provide should align with the configurations you'll establish in Arranger post-deployment. Further details are in [Add Project to Arranger UI](../../verify#add-project-to-arranger-ui).

Below is a visual guide mapping the Arranger UI fields to DMS installation script inputs:

![Entity](../../../assets/arranger-project-fields.png 'Arranger Project Fields')

# Verification

Once you've configured all services, they are stored in the configuration YAML file (`~/.dms/config.yaml`):

```bash
Your configuration file was successfully saved to: /root/.dms/config.yaml

You may now deploy your configuration to your cluster. For instructions, see:
https://overture.bio/documentation/dms/installation/deploy/
```

You can confirm the accuracy of your configuration details in the YAML file with the following command:

```bash
dms config get
```

The saved configuration will appear on the screen. Here's a a sample extract:

```bash
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
