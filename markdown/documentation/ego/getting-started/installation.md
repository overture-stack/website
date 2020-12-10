---
title: Installation
---

# Download the latest version

- Docker 
- Github Packages?
<p style="color:red">!!!!! NEEED distribution details!!!!!</p>


# Setup the Database 

1. Install Postgres

```bash
sudo apt update
sudo apt install postgresql
```
2. Create a blank Postgress database called "ego". 

```bash
sudo -u postgres psql
postgres=# CREATE DATABASE ego;
```

3.  Run the database migrations to setup the database tables. 

Database migrations and versioning are managed by [flyway](https://flywaydb.org/). Download the flyway cli client here: [flyway-commandline](https://flywaydb.org/download/community), and unpack the client in a directory of your choosing. Execute the flyway client pointing it to the configuration and migration directories.

```
./fly
```

Run outstanding migrations:

```
./fly migrate
```
At this point, your postgres database is setup and ready to use. Ego  does not come with a default admin user, which means before you can start using Ego  you need to create an admin user. Insert a new user with the admin’s Oauth Id into the “egousers” table, with role ADMIN.
<p style="color:red">!!!!! NEEED instructions on how to create user???!!!!!></p>



# Run the Application 

## Configure your Settings 

<p style="color:red">!!!!! NEEED instructions on config and if this is the right placce?!!!!!</p>

JWT Duration 
Application JWT Duration
Refresh token duration
API key duration


##  OTHER INGO?

idk stuff about ports/

## Run the APplicaiton,k 
<p style="color:red">!!!!! NEEED instructions on config and if this is the right placce?!!!!!</p>

EGO currently supports three Profiles:

- `default`: Use this to run the most simple setup. This lets you test various API endpoints without a valid JWT in authorization header.
- `auth`: Run this to include validations for JWT.
- `secure`: Run this profile to enable https

For production environemnts, we recomend running with the secure profile. 

<p style="color:red">!!!!! why  are you telling me this? how do i use this information!!!!!</p>

```
mvn clean package ; ./fly migrate
```

