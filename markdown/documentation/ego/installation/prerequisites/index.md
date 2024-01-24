---
title: Setup Prerequisites
---

Before installing Ego, ensure that the following tools and services are installed and properly configured. While you can choose any platform, we recommend Linux for optimal performance and compatibility.

1. **Docker**

    - For ease of use we recommend using <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker Desktop</a>
    - If you prefer using the command line, you can install the <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">Docker Engine here</a>


2. **PostgreSQL**

    - We store all [Ego related data](/documentation/ego/technical) within PostgreSQL databases
    - Instructions for <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer">downloading and installing PostgreSQL can be found here</a>
    - We also provide a docker quickstart for database setup below that does not require PostgreSQL installation


3. **Setup Identity Provider Secrets**

    - You will need a `Client ID` and `Client Secret` for at minimum one OAuth 2.0 identity provider (more information below)

# PostgreSQL Quickstart

We will be using docker to set up our PostgreSQL database for Ego and PgAdmin4 to help in monitoring and configuring the database.

1. **Pull and Run PostgreSQL** 

Use the following command to pull and run the PostgreSQL docker container:

```bash
docker run --name postgresEgo -e POSTGRES_PASSWORD=abc123 -e POSTGRES_DB=egoDb -p 5432:5432 -d postgres                                       
```

This command spins up a PostgreSQL container named `postgresEgo` with the default username `postgres` a password of `abc123` and create a database called `egoDb`. 

2. **Pull and Run PgAdmin4 (optional)** 

Use the following command to pull and run the PgAdmin4 docker container:

```bash
docker run --name my-pgadmin -p 82:80 -e 'PGADMIN_DEFAULT_EMAIL=email@domain.com' -e 'PGADMIN_DEFAULT_PASSWORD=abc123' -d dpage/pgadmin4
```

This command spins up a PgAdmin4 container accessible from `http://localhost:82/`. Once deployed you will need to login using the credentials specified within the docker run command. In our example above this is `email@domain.com` with the password `abc123`.

<Note title='PgAdmin4'>Is an open-source, web-based tool that provides a convenient and user-friendly interface for managing PostgreSQL databases.</Note>

3. **Connect your database to PgAdmin4 (optional)**  

Select **Add New Server** name your server and then **select the connection tab** and input the following:

![Entity Diagram](../../assets/pgadmin-config.png 'PgAdmin Configuration')

| Field | Value |
|---|---|
| Host name/address: | `host.docker.internal` |
| Port:* | `5432` |
| Username:* | `postgres` |
| Username:* | `abc123` |
** * ** These values may be different depending on the values you provided during step 1

4. **Click Save** 

From the left-hand server drop-down, you can now view the connected database(s)

# Setting up Identity Provider Secrets

To properly use the identity providers with Ego, OAuth credentials must be setup with each provider you want to use, specifically a client ID and client secret.

The secret is known only to your web application and the provider's authorization server.  It serves to protect your resources by only granting tokens to authorized requestors.

<Note title='Secrets Managment Software'>If you or your organization needs a secure solution to store, manage, and control access to all your secrets in one place, you may wish to consult with your IT department about adopting a 3rd party tool such as [HashiCorp's Vault](https://www.vaultproject.io/).</Note>

Each identity provider has a different process for setting up their client secrets. On this page we have provided summaries for setting up for each available identity provider:

- [Google](/documentation/ego/installation/prerequisites/google)
- [GitHub](/documentation/ego/installation/prerequisites/github)
- [LinkedIn](/documentation/ego/installation/prerequisites/linkedin)
- [ORCiD](/documentation/ego/installation/prerequisites/orcid)
