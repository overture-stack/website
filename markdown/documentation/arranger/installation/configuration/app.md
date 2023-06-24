---
title: Integrating Your App
---

Once Elasticsearch and Arranger are properly configured, you can integrate Arranger with your UI application.

Arrangers browser-side package, Arranger Components, is what provides the pre-configured UI components. These components are built using [React](https://reactjs.org/), so we highly recommend developing your UI application in React for the best integration experience.

<Note title="The DMS-UI">
As mentioned earlier, we also provide a pre-built React UI called DMS-UI, which facilitates the integration of Ego and Arranger in a web browser. You can find more information in our [DMS-UI documentation](https://overture.bio/documentation/dmsui).
</Note>

# Examining a Sample Portal Implementation

To get an idea of how to implement a basic portal, you can examine the code provided in the `@arranger/components` package:

1. From your `arranger` project directory, install the required dependencies:

```bash
npm ci && npm run bootstrap
```

2. Navigate to the `modules/components/stories` directory:

```bash
cd modules/components/stories
```

3. Start the `Storybook` server:

```bash
npm run storybook
```

4. Now you can explore the components using Storybook. The code for the basic portal implementation can be found [here](https://github.com/overture-stack/arranger/blob/develop/modules/components/stories/Portal.js)