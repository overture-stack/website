---
title: Installation
---

To install the DMS-UI follow these steps.


1. Clone the repository to your machine

```bash
git clone https://github.com/overture-stack/dms-ui.git
```

2. To install the dependencies, run the following command:

```bash
npm ci
```

3. Deploy the DMS-UI locally by running the following command:

```bash
npm run dev
```

Once complete you should be able to access the DMS-UI from your `localhost:3000`, without anything configured you should see the following error message (or similar):

![Entity](../assets/configerror.png 'Error')

In the next section we will resolve these errors by configuring the DMS-UI to integrate with Arranger.