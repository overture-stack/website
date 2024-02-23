---
title: Installation
---

To install Stage follow these steps.

1. **Clone the repository:** Clone the repository to your machine

```bash
git clone https://github.com/overture-stack/dms-ui.git
```

2. **Install dependencies:** Run the following command

```bash
npm ci
```

<Warning>**Note:** Ensure you are using Node.js version 20 or greater for optimal performance and compatibility.</Warning>

3. **Deploy:** Deploy Stage locally by running the following command

```bash
npm run dev
```

Once complete you should be able to access Stage from your `localhost:3000`, without anything configured you should see the following error message (or similar):

![Entity](../assets/configerror.png 'Error')

In the next section we will resolve these errors by configuring Stage to integrate with Arranger.
