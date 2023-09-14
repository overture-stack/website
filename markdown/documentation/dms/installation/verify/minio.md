---
title: MinIo Verification
---

1. If MinIo was chosen as your object storage service you access the MinIo browser by going to at the following links depending on your deployment:
- **Local:** http://localhost:`<port>`/minio 
- **Server** https://`<myDomain>`/minio



![Entity](../../assets/minio-login.png 'MinIo Login')

2. Enter your `Access Key` and `Secret Key`.  If you chose to provide your own credentials during configuration, then you should have recorded these earlier.  Otherwise, if you chose for credentials to be auto-generated, you can view them by running the `dms config get` command or inspecting the `~/.dms/config.yaml` file.


3. Click login. Your buckets will display. Verify that the bucket IDs you specified during configuration have been created:

![Entity](../../assets/minio-buckets.png 'MinIo Buckets')
