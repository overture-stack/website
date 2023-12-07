---
title: Installation
---

Before the interactive DMS installer can be used to configure and deploy the DMS platform, a series of pre-requisite system checks and installation steps must be performed:

1. [Decide local vs server deployment](#decide-local-or-server-deployment)
2. [Check system requirements](#check-system-requirements)
3. [Install Docker](#install-docker)
4. [Install the DMS executable](#install-the-dms-executable)

The sections below describe these tasks in detail.

# Local vs Server Deployment

Before you perform any installation steps, you must first decide whether you want to deploy the DMS in local mode or server mode.

This decision is important because it will affect some of the pre-requisite setup tasks as well as later configuration tasks.  Certain tasks will differ based on your choice.  These differences will be clearly noted in the documentation as you proceed through the installation guide.

The DMS can be deployed to your cluster in one of two modes:

| Mode | Use Case | Access | Application Layer Security |
| -----| ---------| -------| ---------------------------|
| Local | The purpose of local mode is to deploy and host the DMS only on a local machine's resources.  For example, deploying to an individual user's laptop, or a private VM in the cloud.  Local mode is typically used for solo users or small teams with shared access to a laptop or private VM. | Local host only | HTTP only |
| Server | The purpose of server mode is to deploy and host the DMS system using resources available on separate or external infrastructure from your local machine.   For example, deploying to a VM on a cloud infrastructure, or your organization's internal IT infrastructure, etc.  The intention of server mode is to make the DMS system available to external users, by exposing them via a configured domain name and securely over HTTPS. | Externally via custom domain name | HTTPS over TLS/SSL |

Your decision will depend on the following factors and you may need to consult with your IT department if you belong to an institution:

- Your desired use case
- Who will be accessing the DMS
- Your institution's available resources and IT infrastructure
- Security considerations

<Warning>**NOTE:** Once the DMS has been deployed in a specific mode, it cannot be switched dynamically to use a different mode on-the-fly.  For example, you cannot switch from local mode to server mode by simply updating your configuration.  To re-deploy with a different mode, you must destroy your DMS cluster and restart fresh.  For instructions on destroying  your cluster, see [here](../../admin-guide/tasks#destroying-your-cluster).</Warning>

<Warning>**NOTE:** The DMS currently only supports deployment to a single cluster. It is intended for use as a single node system and does not currently support high availability.</Warning>

# System Requirements

Once you have [decided your deployment mode](#decide-local-or-server-deployment), check that the environment you will be deploying to meets the recommended system requirements.

## Operating System

The DMS currently supports deployment to platforms running these operating systems:

- Linux
- MacOS (Intel Based)

<Note title="Apple Silicon Updates">Our software is currently only compatible with Intel-based Macs, not Apple Silicon devices. We are actively working on updates to support Apple silicon. Thank you for your understanding.</Note>

## Recommended System Requirements

| # CPU Cores | Memory | Disk Space |
| ------------| ----------------| -------|
| 6 | 8 GB | 20 GB |

If your system does not meet the recommended requirements, you may need to upgrade to deploy the DMS.  If you are part of an institution, you may need to consult with your IT department about acquiring the additional resources.

## Other Requirements

After [checking your system requirements](#check-system-requirements), next you must also check that certain additional, ancillary requirements are also met.

Specifically, make sure of the following:

1. **You are comfortable and familiar using a command-line interface** - The installation and configuration of the DMS and supporting software will be largely done via command-line.
2. **You have SSH access to the environment you are deploying to** - This is especially important for deployments to remote servers, as you will need SSH to perform certain operations.
3. **You have administrator (`sudo`) level permissions on the environment you are deploying to** - Certain operations will require elevated privileges.
4. **You have Bash 5.0.0 or up installed on your environment** - The DMS Installer commands will be run in Bash.

# Docker Install and Configuration

To deploy the DMS platform, you will need Docker installed on your system.

- [Install Docker on MacOS](https://docs.docker.com/desktop/mac/install/)
- [Install Docker on Linux](https://docs.docker.com/engine/install/ubuntu/)

<Warning>**NOTE:** For the DMS to function correctly on Docker, the Docker installation must be completed as instructed using the steps from the [Docker documentation site](https://docs.docker.com) itself.  **The DMS requires at minimum Docker Engine version 19.03.12 or up**.  See [here](https://docs.docker.com/release-notes/) for Docker versions and release notes.</Warning>

## Initialize Docker Swarm Network

After successfully installing Docker, you must initialize the [Docker Swarm network](https://docs.docker.com/engine/swarm/). The DMS platform uses Docker Swarm as a container orchestration tool and allows each container in the swarm to be accessed by Docker nodes within the same cluster.

**Initialize Docker Swarm:** From your command-line, enter:

```bash
docker swarm init
```

If successful, a message is displayed indicating the swarm was initialized and your current node is now a swarm manager:

```bash
Swarm initialized: current node (dxn1zf6l61qsb1josjja83ngz) is now a manager.
```

## Docker Resource Settings (MacOS)

If you are running on MacOS, ensure your Docker Desktop resource settings are enabled for the [recommended system requirements](#check-system-requirements).

1. **Open Docker Preferences:** Open Docker Desktop and click **Preferences**.

2. **Navigate to Advanced Resources:** Go to **Resources > Advanced**.

3. **Adjust Resources:** Set the number of **CPUs** and the amount of **Memory** to the [recommended requirements](#check-system-requirements).

4. **Apply Changes:** Click **Apply & Restart**.

![Entity](../../assets/docker-desktop-resourcesv2.png 'Docker Desktop Resources')

# Install the DMS Executable

1. **Open Command-Line Terminal:** Log into your environment.

2. **Download DMS Executable:** Fetch the [latest version](https://github.com/overture-stack/dms/releases) with `<x.y.z>` being the version number:

```bash
curl https://raw.githubusercontent.com/overture-stack/dms/<x.y.z>/src/main/bin/dms-docker > dms
```

3. **Make File Executable:** From your command-line, enter: 

```bash
chmod +x dms
```

4. **Move File for Systemwide Access:** From your command-line, enter: 

```bash
sudo mv dms /usr/local/bin/
```

5. **Test the DMS Executable:** Ensure it works correctly and generates the `~/.dms` directory:

```bash
dms -h
```

Expected output:

```bash
 dms -h

    ____     __  ___   _____
   / __ \   /  |/  /  / ___/
  / / / /  / /|_/ /   \__ \
 / /_/ /  / /  / /   ___/ /
/_____/  /_/  /_/   /____/

Installation Guide: https://overture.bio/documentation/dms/installation/
User Guide: https://overture.bio/documentation/dms/user-guide/

Usage: dms [-hV] [COMMAND]
DMS command
  -h, --help      Show this help message and exit.
  -V, --version   Print version information and exit.
Commands:
  config, co
    build, bu    Interactively build a configuration
    get, g       Get the current configuration
  cluster, cl
    start        Deploy a configuration to the cluster.
    stop         Stop a running cluster, without deleting data volumes.
    destroy      Destroy the cluster and ALL the data.
```

6. **Check the `~/.dms` Directory Creation:** 

```bash
ubuntu@sample-dms:~ cd ~/.dms
ubuntu@sample-dms:~/.dms
```

After successfully installing the executable, [configure and deploy the DMS platform](../configuration).

## Generate Bash Completion File (optional)

Enhance DMS command usability with bash autocompletion.

1. **Generate Bash Completion File:** Enter the following command

```bash
dms bash-completion -n dms > ~/dms.bash_completion
```

2. **Load the Bash Completion Manually:** Enter the following command

```bash
source ~/dms.bash_completion
```

<Warning>**Note:** You must load the bash completion file manually for each session. Add the `source` command to `.bashrc` for automation.</Warning>

3. **Test Autocomplete:** Verify functionality with the DMS command:

```bash
dms <press tab twice>
```

You should see available commands like "config" and "co".