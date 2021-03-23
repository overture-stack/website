---
title: Before You Start
---

Before starting the interactive configuration questionnaire, here are some important things to note about its operation:

1. The following sub-sections describe how to configure all the Overture services prior to deploying them to a single cluster.  Although each sub-section describes the configuration of an individual service, this breakdown is only for reader convenience.  **In reality, the configuration questionnaire runs in one shot and all questions must completed for all services**.


2. At the end of the configuration process, a single configuration file (_**~/.dms/config.yaml**_) is created to record all of your inputs (all questions answered for all services).  The file can then be used to deploy the services to the cluster.

<Warning>**NOTE:** The DMS Installer currently does not support configuring or updating specific inputs (fields/questions) or specific services.  When the configuration is built, the entire questionnaire must be completed, for all services.  Hence to do an update, the entire configuration must be built and deployed again, which may be time-consuming for many users.  The Overture roadmap includes a future feature enhancement to allow updates to specific service configurations.  However, until such time, a current alternative is for knowledgeable or advanced users to directly edit specific values in the _**~/.dms/config.yaml**_ file, then re-deploy the cluster.</Warning>

3. **About default values:** Some input questions suggest a recommended default value at the end of the question, displayed in square brackets "**[ ]**".  A user can simply accept and use the recommended default by pressing "**Enter**".  However, they can of course, enter their own custom value and override the default.  In the example below, the recommended default values for the the first four questions (30 days, 3 hours, 3 hours, 12 hours, respectively) have all been accepted by the user by pressing "**Enter**" for each input:

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
```