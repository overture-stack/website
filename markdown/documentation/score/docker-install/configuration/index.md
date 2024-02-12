---
title: Configuring Score for Docker Install
---

# Prerequisite

The following sections outline how to configure and run Score as a docker image. Before beginning, ensure that you have Docker installed and running. You can follow the <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">Official Docker Engine download & installation instructions</a> or [download and install the Docker desktop application](https://www.docker.com/products/docker-desktop/).

# Configuration Overview

All configurations for Score are centralized in a single environment variable file (`.env.score`). These configurations are essential for linking Score with other services. 

**There are three primary steps for a successful Score configuration:**

1. [Integrating Score with a Song Server](/documentation/score/docker-install/configuration/song/)
2. [Connecting Score with your Object Storage provider](/documentation/score/installation-guide/configuration/object-storage)
3. [Setting up Score with an authentication and authorization service](/documentation/score/installation-guide/configuration/authentication)

Optionally, Score can also be configured to work with [HashiCorp's Vault service](/documentation/score/installation-guide/configuration/bootstrap).

# Setting up your environment variables

To begin, create a file and name it `.env.score`. Copy an paste the following template.

```ENV
# ============================
# Spring Run Profiles (Required)
# ============================

# Active profiles to determine app behaviour & configs
SPRING_PROFILES_ACTIVE=collaboratory,prod,secure

# Server configuration
SERVER_PORT=8087
SERVER_SSL_ENABLED=false
```

The following sections will provide details to expand and complete your `env.score` file.


