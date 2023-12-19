---
title: Configuring Score
---

## Spring Profiles

[Spring Profiles](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-profiles.html) play a crucial role in configuring the Score Server for different environments. These profiles enable customization of settings to suit specific deployment scenarios. For example, you can implement stringent security measures in a production environment while opting for more relaxed settings in test deployments.

All configurations for Score are centralized in a single environment variable file, termed `.env.score`.

To configure Score effectively, it's essential to specify the active profiles in your environment variable file. The subsequent sections provide detailed guidance on setting up each profile. Based on your configuration needs, some profiles are mandatory, while others are optional.

**There are three primary steps for a successful Score configuration:**

1. [Integrating Score with a Song Server](/documentation/score/installation/configuration/song)
2. [Connecting Score with your Object Storage provider](/documentation/score/installation/configuration/object-storage)
3. [Setting up Score with an authentication and authorization service](/documentation/score/installation/configuration/authentication)

Optionally, Score can also be configured to work with [HashiCorp's Vault service](/documentation/score/installation/configuration/bootstrap).
