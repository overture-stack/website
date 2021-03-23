---
title: Configure Ego
---

[Ego](../../../../ego) is responsible for user management and authentication, allowing users to login and authenticate themselves over the OAuth 2.0 protocol via supported Identity Providers.

Configure the following for Ego:

???

For example:

```shell
===============
EGO
===============
How many days should api keys be valid for? [30]:
How many hours should USER JWTs be valid for? [3]:
How many hours should APP JWTs be valid for? [3]:
How many hours should refresh tokens be valid for? [12]:
What SSO providers would you like to enable?
  1: GOOGLE
  2: LINKEDIN
  3: GITHUB
  4: ORCID
Enter your choices as comma-separated values: 1,2,3,4
What is the GOOGLE client id? abc123
What is the GOOGLE client secret? abc123
What is the LINKEDIN client id? abc123
What is the LINKEDIN client secret? abc123
What is the GITHUB client id? abc123
What is the GITHUB client secret? abc123
What is the ORCID client id? abc123
What is the ORCID client secret? abc123
The EGO application with name 'dms' was not yet configured. Please input the clientId? [dms]:
How many characters should the randomly generated clientSecret contain? [30]:
Would you like to set the database password for EGO? (Y/N): y
What should the EGO db password be? ******
```