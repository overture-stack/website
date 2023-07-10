---
title: Configuring Slack Notifications
---

Maestro can be integrated with Slack to send notifications about errors and progress throughout the indexing process. Please note you will have to restart Maestro for any modifications to take effect.

To set this up, you need:

- A Slack integration token for the slack organization you will be sending messages to. For more information see [Slacks Official Documentation](https://slack.com/intl/en-ca/help/articles/215770388-Create-and-regenerate-API-tokens)
- The channel name you want Maestro to update

<!--Where is this env file?-->

Update the following properties in the Maestro env file to manage the slack connection:

| Property | Description |
|--|--|
| `MAESTRO_NOTIFICATIONS_SLACK_ENABLED` | Set to `true` to enable Slack integration |
| `MAESTRO_NOTIFICATIONS_SLACK_URL` | The URL to your Slack authentication token. For details see [Slacks Official Documentation](https://slack.com/intl/en-ca/help/articles/215770388-Create-and-regenerate-API-tokens). |
| `MAESTRO_NOTIFICATIONS_SLACK_URL` | Name of the Slack channel where you want notifications to be sent | 


All Maestro configurations for Slack integration are controlled from the `application.yml` file [located here](https://github.com/overture-stack/maestro/edit/master/maestro-app/src/main/resources/config/application.yml).

Locate the following section of your `application.yml` file:

```yaml
  notifications:
    slack:
      enabled: false
      # the types to trigger a notification to this channel (see NotificationName.java)
      notifiedOn:
        - ALL
      url: https://hooks.slack.com/services/SECRET_TOKEN
      channel: maestro-alerts
      username: maestro
      maxDataLength: 1000
      # notifications has two parameters (TYPE [string], DATA[map])
      templates:
        error: ':bangbang: Error : ##TYPE##, Error Info: ```##DATA##```'
        warning: ':warning: ##TYPE## ```##DATA##```'
        info: ':information_source: ##TYPE## ```##DATA##```'
```

A summary of the properties referenced above is outlined in the table below:

| Property | Description |
|--|--|
| `enabled` | Set to `true` to enable Slack integration |
| `url` | The URL of your Slack authentication token.  For details see the [official Slack documentation](https://slack.com/intl/en-ca/help/articles/215770388-Create-and-regenerate-API-tokens). |
| `channel` | The name of the Slack channel where you want notifications to be sent |
| `username` | The username required to access the channel |