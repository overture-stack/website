# Overture.bio Website

This site is hosted on Netlify. See **Deployment** for info.

There are additional READMEs in inner folders.

Based on [Gatsby Starter Business](https://gatsby-starter-business.netlify.com).

## Installation

- Node 14.4.0
- Gatsby CLI: `npm install -g gatsby-cli`
- Netlify CLI: `npm install -g netlify-cli`
- `npm install`
- Setup Netlify deployment: `netlify link` and choose 'Use current git remote origin'.

## Local development

- Run a development server: `npm run dev`
- Run QA build locally: `npm run qa`
- Run production locally: `npm run prod`

Gatsby development and production builds are different, so consider running QA and/or prod occasionally to check for issues.

## Deployment

- QA:
  - Check your build: `npm run qa`
  - Deploy to a Netlify draft URL: `npm run deploy`
- Production:
  - Check your build: Netlify will create `deploy-preview` deployments for PRs on master.
  - Deploy to https://overture.bio: Merge a PR into the master branch.

## Environments

### Local environments

- Development: For working on this project.
  - Command: `npm run dev`
  - Secrets and settings file: `.env.development`
- QA: For checking that your branch builds before sending a Netlify link to QA.
  - Command: `npm run qa`
  - Secrets file: `.env.production` (overridden by `netlify.toml`)
  - Settings file: `netlify.toml`, `branch-deploy` context
- Production: For checking that the site builds properly in production.
  - Command: `npm run prod`
  - Secrets file: `.env.production` (overridden by `netlify.toml`)
  - Settings file: `netlify.toml`, `production` & `deploy-preview` contexts

### Netlify contexts

These contexts only apply when deploying to Netlify. The non-secret settings are stored in `netlify.toml`.

- `production`: The live site at https://overture.bio, deployed automatically.
- `deploy-preview`: Netlify deploys that are automatically generated when there is a PR created/updated on the `master` branch.
- `branch-deploy`: Other branches and PRs, deployed manually.

## Feature flags & environment variables

- Feature flags must be environment variables.
- Environment variables accessed in client-side code must be prefixed with `GATSBY_`.
- Private environment variables should be added in Netlify's UI and not the `netlify.toml` file.
- Example: Show something in development and hide it in production:
  - `FLAG="true"` in `.env.development` and Netlify `branch-deploy` context.
  - `FLAG="false"` in Netlify `production` and `deploy-preview` contexts.

### Links

- [Gatsby environment variables](https://www.gatsbyjs.com/docs/environment-variables/)
- [Netlify environment variables](https://docs.netlify.com/configure-builds/environment-variables/)
- [Netlify File-Based Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/#sample-file)
