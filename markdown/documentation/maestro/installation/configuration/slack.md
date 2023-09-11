---
title: Configuring Slack Notifications
---

Maestro can be integrated with Slack to send notifications about errors and progress throughout the indexing process. Please note you will have to restart Maestro for any modifications to take effect.

**To set this up, you need:**

- A Slack integration token for the slack organization you will be sending messages to. For more information see [Slacks Official Documentation](https://slack.com/intl/en-ca/help/articles/215770388-Create-and-regenerate-API-tokens).
- The channel name you want Maestro to update.

Update the following properties in the `.env.maestro` file to manage the Slack connection:

```bash
# Slack notifications configuration for Maestro

# Enable or disable Slack integration
NOTIFICATIONS_SLACK_ENABLED=true

# Types of notifications to trigger for this channel
# (For more details, see NotificationName.java)
NOTIFICATIONS_SLACK_NOTIFIEDON=ALL

# URL for the Slack webhook (replace with your actual Slack webhook URL)
NOTIFICATIONS_SLACK_URL={{https://hooks.slack.com/services/YOUR_SECRET_TOKEN}}

# Name of the Slack channel where you want notifications to be sent
NOTIFICATIONS_SLACK_CHANNEL={{maestro-alerts}}

# Username to use for sending notifications to Slack
NOTIFICATIONS_SLACK_USERNAME={{maestro}}

# Maximum length of data for the notification message
NOTIFICATIONS_SLACK_MAXDATALENGTH=1000

# Templates for different types of notifications
# Replace ##TYPE## and ##DATA## in the templates with appropriate values as needed
NOTIFICATIONS_SLACK_TEMPLATE_ERROR=':bangbang: Error : ##TYPE##, Error Info: ```##DATA##```'
NOTIFICATIONS_SLACK_TEMPLATE_WARNING=':warning: ##TYPE## ```##DATA##```'
NOTIFICATIONS_SLACK_TEMPLATE_INFO=':information_source: ##TYPE## ```##DATA##```'
```

Please note you will have to restart Maestro for any modifications to take effect.