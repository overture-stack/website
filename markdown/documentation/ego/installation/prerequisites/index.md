---
title: Setup Prerequisites
---

Before installing Ego, make sure the following are installed and configured on the platform of your choice (we recommend Linux):

1. PostgreSQL
    - Official download & installation instructions [here](https://www.postgresql.org/download/)
    - You must have your database setup before installing Ego
    - Make sure there is a user account you can use to apply database migrations to the Ego database and create extensions.


2. Docker Engine
    - Official download & installation instructions [here](https://docs.docker.com/engine/install/)
    

3. A `Client ID` and `Client Secret` for at minimum one OAuth 2.0 identity provider (more information below)

To properly use the identity providers with Ego, OAuth credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

<Note title='Secrets Managment Software'>If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).</Note>

Each identity provider has a different process for setting up their client secrets. On this page we have provided summaries for setting up for each available identity provider:

- [Google](/documentation/ego/installation/prerequisites/google)
- [GitHub](/documentation/ego/installation/prerequisites/github)
- [LinkedIn](/documentation/ego/installation/prerequisites/linkedin)
- [ORCiD](/documentation/ego/installation/prerequisites/orcid)
