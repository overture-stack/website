---
title: Prerequisites 
---

Before installing Song, ensure that the following tools and services are installed and properly configured. While you can choose any platform, we recommend Linux for optimal performance and compatibility.

1. **PostgreSQL**

    - PostgreSQL is a powerful, open-source relational database system.
    - [Official PostgreSQL download & installation instructions](https://www.postgresql.org/download/)
    - Ensure your database is set up before proceeding with Song's installation.


2. **Docker Engine**

    - Docker Engine enables developers to define and manage their applications with containerization.
    - [Official Docker Engine download & installation instructions](https://docs.docker.com/engine/install/)

In order for full functionality of Song, we also highly recommend installing the following Overture services:

1. **Ego**

    - Ego is our authentication and authorization service. Song uses Ego as an OAuth service to ensure secure data management.
    - [See Ego's documentation and installation instructions for more details](/documentation/ego/)

2. **Score**

    - Score collaborates with Song to facilitate file transfers to and from the cloud.
    - [See Score's documentation and installation instructions for more details](/documentation/score/)