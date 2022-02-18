# Overture.bio

- Hosted on Netlify. See **Deployment** for info.
- Based on the [Gatsby Starter Business](https://gatsby-starter-business.netlify.com).

## Additional READMEs

- [Documentation section](README-documentation.md)
- [Styles](src/styles/README.md)
- [Components](src/components/README.md)

## Installation

- Node 14.4.0
- Gatsby CLI: `npm install -g gatsby-cli`
- Netlify CLI: `npm install -g netlify-cli`
- `npm install`
- Setup Netlify deployment: `netlify link` and choose 'Use current git remote origin'.

### Troubleshooting

Overture.bio requires NPM v^8.3.0, to ensure all dependencies are installed correctly

```bash
# If you need to update your NPM version first, use the following command:
  npm i -g npm
```

## Local development

`npm start`

## Deployment

Check your QA builds locally! (See **Environments**)

- Deploy to a Netlify draft URL for QA: `npm run deploy`
- Deploy to <https://overture.bio>: Merge a PR into the master branch.

## Environments

Gatsby has two environments: **development** (runs a dev server with hot reloading) and **production** (creates a static build in the `~/public` folder).

Gatsby development and production builds are significantly different, so consider running `npm run qa` (prod build) occasionally to check for issues, and before deploying to QA.

### Local environments

- **Development**
  - Feature flags ON
  - Command: `npm run dev`
  - Secrets and settings file: `.env.development`
- **QA** (check your build before creating a Netlify link for QA)
  - Feature flags ON
  - Command: `npm run qa`
  - Secrets file: `.env.production` (overridden by `netlify.toml`) (ignored by git)
  - Settings file: `netlify.toml`, `branch-deploy` context
- **Production** (check your build before deploying to <https://overture.bio>)
  - Feature flags OFF
  - Command: `npm run prod`
  - Secrets file: `.env.production` (overridden by `netlify.toml`) (ignored by git)
  - Settings file: `netlify.toml`, `production` & `deploy-preview` contexts

### Netlify contexts

These environments only apply when deploying to Netlify. The non-secret settings are stored in `netlify.toml`.

- `production`: The live site at <https://overture.bio>, deployed automatically by Netlify when a PR is merged into master.
- `deploy-preview`: Netlify deploys that are automatically generated when there is a PR created/updated on the master branch.
- `branch-deploy`: Other branches and PRs, deployed manually.

## Feature flags & environment variables

- Feature flags in Gatsby must be environment variables.
- Environment variables accessed in client-side code must be prefixed with `GATSBY_`.
- Example: Show something in development and hide it in production:
  - `FLAG="true"` in `.env.development` and Netlify `branch-deploy` context in `netlify.toml`.
  - `FLAG="false"` in Netlify `production` and `deploy-preview` contexts in `netlify.toml`.

### Links

- [Gatsby environment variables](https://www.gatsbyjs.com/docs/environment-variables/)
- [Netlify environment variables](https://docs.netlify.com/configure-builds/environment-variables/)
- [Netlify File-Based Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/#sample-file)
