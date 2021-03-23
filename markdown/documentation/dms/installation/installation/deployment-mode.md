---
title: Decide Local or Server Deployment
---

Before you perform any installation steps, you must first decide whether you want to deploy the DMS in local mode or server mode.

This decision is important because it will affect some of the pre-requisite setup tasks as well as later configuration tasks.  Certain tasks will differ based on your choice.  These differences will be clearly noted in the documentation as you proceed through the installation guide.

The DMS can be deployed to your cluster in one of two modes:

| Mode | Use Case | Access | Application Layer Security |
| -----| ---------| -------| ---------------------------|
| Local | The purpose of local mode is to deploy and host the DMS only on a local machine's resources.  For example, deploying to an individual user's laptop, or a private VM in the cloud.  Local mode is typically used for solo users or small teams with shared access to a laptop or private VM. | Local host only | HTTP only |
| Server | The purpose of server mode is to deploy and host the DMS system using resources available on separate or external infrastructure from your local machine.   For example, deploying to a VM on a cloud infrastructure, or your organization's internal IT infrastructure, etc.  The intention of server mode is to make the DMS system available to external users, by exposing them via a configured domain name and securely over HTTPS. | Externally via custom domain name | HTTPS over TLS/SSL |

Your decision will depend on the following factors and you may need to consult with your IT department if you belong to an institution:

- Your desired use case
- Who will be accessing the DMS
- Your institution's available resources and IT infrastructure
- Security considerations

<Warning>**NOTE:** Once the DMS has been deployed in a specific mode, it cannot be switched dynamically to use a different mode on-the-fly.  For example, you cannot switch from local mode to server mode by simply updating your configuration.  To re-deploy with a different mode, you must purge your DMS deployment and restart fresh.  For instructions on purging the DMS deployment, see [here](../../../user-guide/purge).</Warning>