---
title: Install an SSL Certificate (Server Mode Only)
---

DMS services exposed to external users in server mode must be exposed over HTTPS and have SSL certificates installed. Because traffic is exposed over a single port by the DMS Gateway, only one certificate is required.

DMS currently requires and uses [Certbot](https://certbot.eff.org/) for certificate generation (this is a free and open-source resource).

Follow these steps to install Certbot and set up your certificate:

# Install Certbot

1. Go to the [Certbot](https://certbot.eff.org/) website.

2. In the **My HTTP website is running `<software>` on `<system>`** section, select the following:

| Input | Selection |
| -------- | -------- |
| Software | Set to `None of the above` |
| System | From the drop-down, select the operating system your server is running |

In the example below, we are using a VM running Ubuntu 20.04:

![Entity](../../../assets/certbot-system.png 'Certbot Select System')

3. Read over and ensure your system meets the remaining Certbot requirements:
- You are comfortable interacting with a command-line interface
- You have your [domain name](../domain) registered
- Port 80 is open on your server (Certbot certificate generation needs this port)
- You can access your server via SSH (to execute commands)
- You have the ability to `sudo` on your server 

4. Click the **default** tab and **follow the instructions from Certbot, but note these specifics for the DMS**:
- SSH into your server
- Install **snapd**
- Ensure your version of **snapd** is up-to-date
- Remove previous **cert auto-bot** and any **Certbot OS** packages (if not necessary on a fresh system or VM)
- Install Certbot
- Prepare the Certbot command
- Choose how to run Certbot - for fresh systems or VMs, **standalone** should be chosen
- Running Certbot begins the certificate installation process. For detailed steps, see the next section

![Entity](../../../assets/certbot-default-steps.png 'Certbot Default Steps')

# Generate Certificate

When running Certbot in **standalone** mode, follow these prompts to install the certificate:

1. Provide an e-mail address for urgent certificate renewal and security notices:

```bash
ubuntu@test-dms:~$ sudo certbot certonly --standalone
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Enter email address (used for urgent renewal and security notices)
 (Enter 'c' to cancel): firstname.lastname@oicr.on.ca
```

2. Read and agree to the **Terms of Service**:

3. Decide if you want to share your e-mail with Certbot's founding partner for news updates:

4. Enter the [domain name](../domain) for which the certificate is being generated:

```bash
Please enter in your domain name(s) (comma and/or space separated): dms.test.cancercollaboratory.org
```

5. Once the certificate is generated, Certbot will show the locations of the certificate chain and keyfile. **Keep these locations secure for future reference.**

```bash
Requesting a certificate for dms.brandon.cancercollaboratory.org
Performing the following challenges:
http-01 challenge for dms.brandon.cancercollaboratory.org
Waiting for verification...
Cleaning up challenges
 
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/dms.test.cancercollaboratory.org/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/dms.test.cancercollaboratory.org/privkey.pem
   Your certificate will expire on 2021-06-16. To obtain a new or
   tweaked version of this certificate in the future, simply run
   certbot again. To non-interactively renew *all* of your
   certificates, run "certbot renew"
 - If you like Certbot, please consider supporting our work by:
 
   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

For clarity:

- **certificate chain** = `/etc/letsencrypt/live/dms.test.cancercollaboratory.org/fullchain.pem`
- **certificate keyfile** = `/etc/letsencrypt/live/dms.test.cancercollaboratory.org/privkey.pem`

6. The certificate is now ready for use in the DMS interactive configuration questionnaire.

# Test Certificate Renewal

After installing your certificate, you can test Certbot's automatic renewal. Certbot packages include a `cron` job or `systemd` timer for automatic renewals. To test run:

```bash
sudo certbot renew --dry-run
```

For future reference, the command to renew certbot is installed in one of the following locations: command for Certbot is located in:

- `/etc/crontab/`
- `/etc/cron.*/*`
- `systemctl list-timers`

<Warning>**NOTE:** DMS administrators must ensure certificates renew on schedule. Even though Certbot automates the renewal, it's essential to verify timely renewals and adjust as needed. Renew at least every 90 days. If you need help, contact Certbot support.</Warning>
