---
title: Run Profiles
---
Song uses [Spring Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html) as a feature top manage the running of a Song server in different environments.  Spring profiles allow different settings to be applied to different environments, for example keeping security strict in production but less strict in test deployments. 

During configuration, you will need to enable the active profiles.  The active profiles to use for a particular application can be specified using the `profiles` argument which should be added at the start of the `spring` block, for example:
```yaml
spring:
  profiles:
    active: "prod,jwt,secure,kafka,score-client-credentials"
```
Descriptions of the profiles available to Song are provided below.  Depending on the type of configuration, some profiles are required to run and some are optional. 

# Secure 
The `secure` profile: 
- Enables API-key authentication for Song requests.
- If [Ego](/documentation/ego) is used as the authentication method with Song, this profile is required.  The default URL is configured to work with Ego.
- The scopes defined in this profile can be modified based on your needs. By default, `song.WRITE` is configured for access with Ego. 

``` yaml
spring:
  profiles: secure

auth:
  server:
    url: "http://<host>:<port>/check_token/"
    clientId: <client id from Ego>
    clientSecret: <client secret from ego>
    tokenName: "token"
    enableStrictSSL: false
    enableHttpLogging: false
    scope:     
      study:
        prefix: "song."
        suffix: ".WRITE"
      system: "song.WRITE"
```

# JWT
You can optionally include the `jwt` profile. When enabled, this profile allows usage of both JWT and  API-key during authentication requests. The JWT public key url is by default configured to talk with [Ego](/documentation/ego) and will need to be replaced if another authentication service is used. 

```yaml
spring.profiles: jwt
spring:
  profiles:
    include: [secure]
auth:
  jwt:
    public-key-url: http://localhost:8084/oauth/token/public_key

```


# Prod

The `prod` profile is designed to be enabled for production deployments. Specify your Postgres details for the production environment in this profile: 

```yml
spring:
  profiles: prod
  datasource:
    initialization-mode: never

# Datasource
spring.datasource:
  driver-class-name: org.postgresql.Driver
  ## update the url, username, and password below
  url: jdbc:tc:postgresql:9.6.12://<host>:5432/<database_name>?stringtype=unspecified
  username: <username-here>
  password: <password-here>
  max-active: 10
  max-idle: 1
  min-idle: 1

```

#  Score
The `score` profile contains the connection details to the score-server. If this profile is enabled, the default configurations will be overwritten. 

```yaml
spring.profiles: score-client-cred
score:
  url: "http://localhost:8087"
  clientCredentials:
    id: <client id from Ego>
    secret: <client secret from Ego>
    tokenUrl: http://ego-api:8080/oauth/token
    systemScope: "score.WRITE" # Storage scope needs to include both READ and WRITE
```


# Kafka 
The `kafka` profile contains the connection details to a deployed Kafka instance. This profile is optional unless Kafka is configured.

```yaml 
spring:
  profiles: kafka
  kafka:
    bootstrap-servers: localhost:9092
    template:
      default-topic: song-analysis
```
