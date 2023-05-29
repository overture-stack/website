---
title: Integrating Your App
---

After Elasticsearch and the Arranger Admin UI are properly configured, you can finally integrate your UI application (e.g. data portal).

The key browser-side packages used by Arranger are the `@arranger/admin-ui` and `@arranger/components` packages:

|Package|Description|
|---|---|
|@arranger/admin-ui|Provides the admin UI for content administration|
|@arranger/components|Provides UI components that are pre-configured to work with the Arranger server API|

As both `@arranger/admin-ui` and `@arranger/components` are written in [React](https://reactjs.org/) we highly recommend that you develop your UI app in React for the most seamless integration.

<Note title="The DMS-UI">We have made available a pre-built UI that easily integrates Ego and Arranger within a web browser. For more information, see our [DMS-UI documentation](https://overture.bio/documentation/dmsui).</Note>

# Examining a Sample Portal Implementation

The code for a very basic sample portal implementation can be examined with the `@arranger/components` package, to guide you in your development.

From your `arranger` project directory:

1. Install the required dependencies:

```shell
npm ci && npm run bootstrap
```

2. Navigate to the `modules/components/stories` directory:

```shell
cd modules/components/stories
```

3. Start the `Storybook` server:

```shell
npm run storybook
```

4. You can now examine the components via `Storybook`. The code for the basic portal implementation can be examined [here](https://github.com/overture-stack/arranger/blob/develop/modules/components/stories/Portal.js)