---
title: Configuring Score
---

## Spring Profiles



[Spring Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html) are used to configure the Score Server for running in various environments. With Spring profiles, you can customize settings based on your specific deployment scenario. For instance, you can enforce strict security measures in production while relaxing them in test deployments.

All configurations for Score are managed within a single environment variable file, referred to as the `.env.score`.

For Scores configuration, you will need to specify the active profiles within your environment variables file. The following sections will outline the information needed to set up each profile. Depending on the type of configuration, some profiles are required to run and some are optional.

**To successfully configure Score, there are three primary steps:**

1. [Integrate Score with a Song Server](/documentation/score/installation/configuration/song) 
2. [Integrate Score with your Object Storage provider](/documentation/score/installation/configuration/object-storage)
3. [Integrate Score with an authentication and authorization service](/documentation/score/installation/configuration/authentication)

You may also optionally configure Score to run with Has [HashiCorp's Vault service](/documentation/score/installation/configuration/bootstrap)

