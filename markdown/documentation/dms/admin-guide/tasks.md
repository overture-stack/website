---
title: Common Tasks
---

This section outlines common tasks a DMS Administrator might undertake during installation, configuration, deployment, or maintenance.

# Updating a Configuration

The DMS Installer doesn't allow configuration or updates to specific inputs or services at the moment. Every time you want to configure, you need to complete the questionnaire for all services. Thus, for any update, you'll have to rebuild and redeploy the entire configuration.

You can halt the cluster without deleting data volumes, enabling you to deploy a fresh configuration without eliminating existing data (refer to [Stopping Your Cluster](#stopping-your-cluster)).

While Overture's roadmap includes a feature to update specific service configurations in the future, for now, you'll need to follow the current update process. Manually editing the `~/.dms/config.yaml` file is **NOT** advised because not all values can be modified this way, and it might make the cluster irrecoverable.

To update a configuration:

1. Stop your cluster without removing data volumes:

```shell
$ dms cluster stop

Stopping cluster..

Finished stopping cluster
```

2. Restart the configuration questionnaire and complete all sections like before (more details [here](/documentation/dms/installation/configuration/configure-dms)):

```shell
$ dms config build

<...and so on...>
```

3. Deploy the updated configuration to your cluster:

```shell
$ dms cluster start

<...and so on...>
```

4. Verify that the changes have taken effect.

# Starting Your Cluster

Starting your cluster essentially means deploying configurations from your `~/.dms/config.yaml` file to the cluster.

For a detailed guide, visit [Deploying Your Cluster](/documentation/dms/installation/deploy).

# Stopping Your Cluster

You might occasionally need to halt your cluster and its associated services without erasing data volumes, like when you need to deploy an [updated configuration](#updating-a-configuration).

To halt your cluster without erasing volumes:

```shell
$ dms cluster stop

Stopping cluster..

Finished stopping cluster
```

# Destroying Your Cluster

Sometimes, you may need to wipe out your cluster entirely, along with its services and all associated data volumes. For instance, if you're setting up the DMS platform from scratch with a new configuration and fresh data.

<Warning>**NOTE:** The current DMS platform **DOES NOT** support automatic backups post deployment. Although a backup feature might be added in future DMS releases, for now, DMS administrators must determine and implement the best backup strategy as needed.</Warning>

1. To delete your cluster (with a confirmation prompt for safety):

```shell
$ dms cluster destroy

Starting cluster destruction: force=false
Are you sure you want to destroy the volumes for all services? This will erase all data and CANNOT be undone. (Y/N) [N]:
```

To continue, type `Y`.

2. However, to forcefully wipe your cluster **without any** confirmation:

```shell
$ dms cluster destroy -f

Starting cluster destruction: force=true
```

3. In both cases, if the cluster is successfully destroyed, you'll see:

```shell
Forcefully destroying all volumes!

Finished cluster destruction
```

4. Confirm that all services and volumes have been deleted by ensuring the docker service list is empty:

```shell
$ docker service ls

ID        NAME      MODE      REPLICAS   IMAGE     PORTS
```

# Customizing the Data Portal Appearance

You can modify the following aspects of the Data Portal's appearance:

- The logo image in the header, next to the portal name
- The portal's name displayed beside the logo

Both can be adjusted during the configuration process via the interactive questionnaire. Customizing the logo is a prerequisite to running the questionnaire, while adjusting the portal name occurs during the questionnaire itself. For detailed instructions, refer to:

- [Copy Logo File to Assets Folder](../../installation/configuration/prereq/logo)
- [Configure DMS UI](../../installation/configuration/configure-dms#configure-dms-ui)
