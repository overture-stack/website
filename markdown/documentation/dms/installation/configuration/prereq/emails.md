---
title: Make User E-mails Publicly Accessible
---

Currently, as part of its authentication flow, the [Ego service](../../../../../ego) in Overture must capture, store, and display a contact e-mail when a user logs in via their Identity Provider.

However, some providers may allow their users to make their e-mail addresses private and not publicly accessibly by an external service like Ego.

In scenarios where users have their e-mails set to private, they will **NOT** be able to login via Ego, and two alternatives are available:

1. The user must change the privacy setting to allow access to their e-mail via that provider, **OR**


2. The user must login with a different provider that does not have this requirement or setting.

<Note title="ORCiD Restriction">**ORCiD** is the only provider that currently has this capability where the user's e-mail can be set to private.</Note>

<Warning>**NOTE:** Some users will want to retain their privacy and not share their e-mail publicly.  As such, the Overture roadmap for Ego has a future enhancement to make this requirement configurable.  This way, a DMS Administrator can choose to enforce this or not when initially setting up the DMS.  However, for the current release, the two workarounds above must be used.</Warning>

# ORCiD

To make your ORCiD e-mail publicly accessible, [see the instructions here](https://support.orcid.org/hc/en-us/articles/360006971213-Account-email-addresses), or follow these summary steps:

1. Log into ORCiD.


2. Scroll down to the **Emails** section in the lefthand navigation and click the **Edit** (pencil) icon.  A pop-up displays with your registered e-mails.


3. Using the **Privacy Settings Icons** on the right, change the visibility setting to **Everyone** (leftmost icon) for each e-mail you wish to expose publicly:

![Entity](../../../assets/orcid-email-setting.png 'ORCiD E-mail Setting')

4. Your ORCiD e-mail(s) will now be accessible by approved external apps such as Ego.