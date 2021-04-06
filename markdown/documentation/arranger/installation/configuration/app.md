---
title: Integrating Your App
---

After Elasticsearch and the Arranger Admin UI are properly configured, you can finally integrate your UI application (e.g. data portal).

The key browser-side packages used by Arranger are the `@arranger/admin-ui` and `@arranger/components` packages:

* `@arranger/admin-ui`: This package provides the admin UI for content administration
* `@arranger/components`: This package provides UI components that are pre-configured to work with the Arranger server API

Both packages are written in [React](https://reactjs.org/), and hence we highly recommend that you develop your UI app in React for the most seamless integration.

# Integrating Admin UI with Your React App

To integrate the admin UI with your React app:

1. Install the admin UI package:

```shell
npm i @arranger/admin-ui
```

2. Import & add the following to your app code:

```shell
import ArrangerAdmin from '@arranger/admin-ui/dist';
import { Route, Switch } from 'react-router-dom';

const ArrangerAdminPage = () => (
  <ArrangerAdmin basename="/admin" apiRoot="http://localhost:8000" fetcher={fetch} />
)
```

3. Modify these configurations if required:

| Config | Description |
|--------|-------------|
| basename | Tells Arranger Admin to treat `/admin` as the root path for client-side routing. |
| apiroot | Tells Arranger Admin where to communicate with the backend API. |
| fetcher | Allows you to specify a custom data fetcher to use. Can be useful for integrating custom client-side login or authorization logic. It must implement the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). |

# Examining a Sample Portal Implementation

The code for a very basic sample portal implementation can be examined with the `@arranger/components` package, to guide you in your development.

From your `arranger` project directory:

1. Install required dependencies:

```shell
npm ci && npm run bootstrap
```

2. Navigate to the `modules/components/stories` directory:

```shell
cd modules/components
```

3. Start the `Storybook` server:

```shell
npm run storybook
```

4. You can now examine the components via `Storybook`.  The actual code for the basic portal implementation can be examined in this file: `arranger/modules/components/stories/Portal.js`.