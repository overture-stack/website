---
title: Install an SSL Certificate (Server Mode Only)
---

DMS services exposed to external users in server mode must be exposed over HTTPS and have SSL certificates installed.  Because traffic is exposed over a single port by the DMS Gateway, only one certificate is required.

DMS currently requires and uses [Certbot](https://certbot.eff.org/) for certificate generation (this is a free and open source resource).

Follow these steps to install Certbot and setup your certificate:

# Install Certbot

1. Go to the [Certbot](https://certbot.eff.org/) website.


2. In the **My HTTP website is running `<software>` on `<system>`** section, select the following:

| Input              | Selection |
| --------------------| ------------|
| Software           | Set to `None of the above` |
| System | From the drop-down, select the operating system your server is running |

In the example below we are using a VM running Ubuntu 20.04:

![Entity](../../../assets/certbot-system.png 'Certbot Select System')

3. Read over and make sure your system meets the remaining Certbot requirements:
- You are comfortable interacting with a command-line interface
- You have your [domain name](../domain) registered
- Port 80 is open on your server (Certbot certificate generation needs to use this port)
- You can access your server via SSH (to execute commands)
- You have the ability to `sudo` on your server (you are able to run operations or programs by assuming the security privileges as another user, e.g. as an administrator)


4. Click the **default** tab and **follow the instructions from Certbot, but note these specifics for the DMS**:
- SSH into your server
- Install **snapd**
- Ensure your version of **snapd** is up-to-date
- Remove previous **cert auto-bot** and any **Certbot OS** packages (if you are starting with a fresh system or VM this should not be required)
- Install Certbot
- Prepare the Certbot command
- Choose how you want to run Certbot - Typically, if you are starting with a fresh system or VM, **standalone** should be chosen
- When you run Certbot, the certificate installation process begins - For detailed steps, see the following section

![Entity](../../../assets/certbot-default-steps.png 'Certbot Default Steps')

# Generate Certificate

When you run Certbot in **standalone** mode, you will be taken through a series of prompts before the certificate can be installed:

1. Enter an e-mail address used to contact you for urgent certificate renewal and security notices:

```shell
ubuntu@test-dms:~$ sudo certbot certonly --standalone
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Enter email address (used for urgent renewal and security notices)
 (Enter 'c' to cancel): firstname.lastname@oicr.on.ca
```

2. Read and agree to the **Terms of Service**:

```shell
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server. Do you agree?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: y
```

3. Optionally decide if you wish to share your e-mail address with Certbot's founding partner and be notified of additional news and updates:

```shell
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: n
```

4. Enter the [domain name](../domain) for which you are generating the certificate (this will the domain you registered previously as a pre-requisite):

```shell
Account registered.
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): dms.test.cancercollaboratory.org
```

5. The certificate will be generated and Certbot will inform you of the location of the certificate chain and keyfile.  **Record and keep these secure for later use.**

```shell
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

In the example above:

- **certificate chain** = `/etc/letsencrypt/live/dms.test.cancercollaboratory.org/fullchain.pem`

- **certificate keyfile** = `/etc/letsencrypt/live/dms.test.cancercollaboratory.org/privkey.pem`

6. The certificate is now generated, installed, and ready to be used as an input to the DMS interactive configuration questionnaire.