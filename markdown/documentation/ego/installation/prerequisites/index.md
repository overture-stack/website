---
title: Setup Prerequisites
---

Before installing Ego, ensure that the following tools and services are installed and properly configured. While you can choose any platform, we recommend Linux for optimal performance and compatibility.

1. **PostgreSQL**

    - PostgreSQL is a powerful, open-source relational database system.
    - <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer">Official PostgreSQL download & installation instructions</a>
    - Ensure your database is set up before proceeding with Ego's installation.


2. **Docker Engine**

    - Docker Engine enables developers to define and manage their applications with containerization.
    - <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">Official Docker Engine download & installation instructions</a>


3. **Setup Identity Provider Secrets**

    - A `Client ID` and `Client Secret` for at minimum one OAuth 2.0 identity provider (more information below)

# Setting up Identity Provider Secrets

To properly use the identity providers with Ego, OAuth credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

<Note title='Secrets Managment Software'>If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).</Note>

Each identity provider has a different process for setting up their client secrets. On this page we have provided summaries for setting up for each available identity provider:

- [Google](/documentation/ego/installation/prerequisites/google)
- [GitHub](/documentation/ego/installation/prerequisites/github)
- [LinkedIn](/documentation/ego/installation/prerequisites/linkedin)
- [ORCiD](/documentation/ego/installation/prerequisites/orcid)
