---
title: Common Tasks
---

This section describes common tasks the DMS Administrator may need to perform as part of installation, configuration, deployment, or maintenace.

# Updating a Configuration

The DMS Installer currently does not support configuring or updating specific inputs (fields/questions) or specific services.  When the configuration is built, the entire questionnaire must be completed, for all services.  Hence to do an update, the entire configuration must be built and deployed again.  

The cluster can be stopped without destroying the data volumes, allowing you to deploy a new configuration without deleting the existing data (see [Stopping Your Cluster](#stopping-your-cluster)).

The Overture roadmap includes a future feature enhancement to allow updates to specific service configurations.  However, until such time, this is the update process that is supoprted.  It is **NOT** recommended for an administrator manually edit the `~/.dms/config.yaml`, because not all values can be modified and updated this way and may cause the cluster to be unrecoverable.

To update a configuration:

1. Stop your cluster without destroying the data volumes:

```shell
$ dms cluster stop

Stopping cluster..

Finished stopping cluster
```

2. Run the configuration questionnaire fresh and complete all sections and inputs like before (see [here](../installation/configuration/configure-dms)):

```shell
$ dms config build

<...and so on...>
```

3. Deploy the updated configuration to your cluster:

```shell
$ dms cluster start

<...and so on...>
```

4. Verify that the changes have been reflected.

# Starting Your Cluster

Starting your cluster is equivalent to deploying your configurations from your current `~/.dms/config.yaml` file to your cluster.

For details, see [Deploying Your Cluster](../installation/deploy).

# Stopping Your Cluster

In some scenarios you may need to stop your cluster and its services without deleting the data volumes. For example, to build and deploy an [updated configuration](#updating-a-configuration)

To stop your cluster without deleting volumes:

```shell
$ dms cluster stop

Stopping cluster..

Finished stopping cluster
```

# Destroying Your Cluster

In some scenarios you may need to entirely destroy your cluster, its services, and all the data volumes. For example, to deploy the DMS platform from scratch with a new configuration and completely fresh data.

1. To destroy your cluster with a confirmation requested as a precaution:

```shell
$ dms cluster destroy

Starting cluster destruction: force=false
Are you sure you want to destroy the volumes for all services, all data will be lost and This is IRREVERSIBLE ?  (Y/N) [N]:
```

To proceed, answer `Y`.

2. However, to destroy your cluster forcefully **without any** confirmation requested:

```shell
$ dms cluster destroy -f

Starting cluster destruction: force=true
```

3. In both scenarios, if cluster destruction proceeds and is successful, the following is displayed:

```shell
Forcefully destroying all volumes!

Finished cluster destruction
```

4. You can verify that all services and volumes have been removed by checking that the docker service list is completely blank:

```shell
$ docker service ls

ID        NAME      MODE      REPLICAS   IMAGE     PORTS



```

# Customizing the Look of the Data Portal

Currently, only these parts of the Data Portal's look-and-feel can be customized:

- The logo image displayed in the header of the Data Portal, beside the portal name
- The name of the Data Portal displayed in the header, beside the logo

These items can only be customized as part of building a configuration via the interactive questionnaire.  Customizing the logo is actually a prerequisite step to running the questionnaire, while customizing the portal name is done during the questionnaire itself.  For details on how to perform these tasks, see these sections:

- [Copy Logo File to Assets Folder](../installation/configuration/prereq/logo)
- [Configure DMS UI](../installation/configuration/configure-dms#configure-dms-ui)