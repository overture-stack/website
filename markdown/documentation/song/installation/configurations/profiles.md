---
title: Run Profiles
---

 <a href="https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html" target="_blank" rel="noopener noreferrer">Spring Profiles</a> are used to configure the Song Server for running in various environments. With Spring profiles, you can customize settings based on your specific deployment scenario. For instance, you can enforce strict security measures in production while relaxing them in test deployments.

For Songs configuration, specify the active profiles within your environment variables file (`.env`). Descriptions of the profiles available to Song are provided here. Depending on the type of configuration, some profiles are required to run, and some are optional. 

# Secure Profile

To interact with Song, an application must provide authentication and authorization. This can be done by using an API Key or JWT access token from a user or application authorized with Ego.

The `secure` profile: 

- Enables API-key authentication for Song requests.
- If Ego is used as the authentication method with Song, this profile is required.  The default URL is configured to work with Ego.
- The scopes defined in this profile can be modified based on your needs. By default, `song.WRITE` is configured for access with Ego. 

For help installing Ego, please refer to our <a href="/documentation/ego" target="_blank" rel="noopener noreferrer">Ego installation documentation</a>.

``` bash
# Secure profile configuration
SPRING_PROFILES_ACTIVE=secure

AUTH_JWT_PUBLIC-KEY-URL=http://localhost:8084/oauth/token/public_key
AUTH_SERVER_URL={{ego-host-url}}/o/check_api_key/
AUTH_SERVER_CLIENTID={{song-client-ID}}
AUTH_SERVER_CLIENTSECRET={{song-client-secret}}
AUTH_SERVER_TOKENNAME={{API-key}}
AUTH_SERVER_SCOPE_STUDY_PREFIX=song.
AUTH_SERVER_SCOPE_STUDY_SUFFIX=.WRITE
AUTH_SERVER_SCOPE_SYSTEM=song.WRITE
SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_PUBLIC_KEY_LOCATION={{ego-host-url}}/oauth/token/public_key
```
# Prod Profile

The prod profile is designed for production deployments. Specify your Postgres details for the production environment:

```bash
# Production Database Configuration
SPRING_PROFILES_ACTIVE=prod
SPRING_DATASOURCE_DRIVER-CLASS-NAME=org.postgresql.Driver
SPRING_DATASOURCE_URL=jdbc:tc:postgresql:9.6.12://{{host}}:5432/{{database_name}}?stringtype=unspecified
SPRING_DATASOURCE_USERNAME={{username-here}}
SPRING_DATASOURCE_PASSWORD={{password-here}}
SPRING_DATASOURCE_MAX_ACTIVE=10
SPRING_DATASOURCE_MAX_IDLE=1
SPRING_DATASOURCE_MIN_IDLE=1
```

# Kafka Event Managment Profile (optional)

The `kafka` profile contains the connection details to a deployed Kafka instance. When this profile is enabled, Song will send messages to Kafka whenever an analysis is created or updated, including notices following analysis publishing, unpublishing and suppression.  

This profile is only required if Kafka is configured.

For help installing Kafka, please refer to <a href="https://kafka.apache.org/quickstart" target="_blank" rel="noopener noreferrer">the official Kafka documentation</a>.

By default, song is configured to output to a topic called `song-analysis`. If you configure your Kafka with a different name, make sure to adjust accordingly. 

```bash
# Kafka Configuration
SPRING_PROFILES_ACTIVE=kafka
SPRING_KAFKA_BOOTSTRAP-SERVERS=localhost:9092
SPRING_KAFKA_TEMPLATE_DEFAULT-TOPIC=song-analysis
```
