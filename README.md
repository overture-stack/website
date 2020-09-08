# Overture.bio Website

This site is hosted on Netlify. See _Deployment_ for info.

## Requirements

- Node 14.4.0
- Gatsby CLI `npm install -g gatsby-cli`
- Netlify CLI `npm install -g netlify-cli`

## Development

The site is based off of the [Gatsby Starter Business](https://gatsby-starter-business.netlify.com).

Clone the repo and run the following to get started with local development.

```
npm install
gatsby develop
```

**Note:** Folders such as `src/components/` and `src/pages` have READMES to give
a brief overview of how code/styles/etc are set up.

## Production

You can view a production build locally by running `gatsby build` and `gatsby serve`. It's important to do this regularly, and before deploying to Netlify, because Gatsby's development and production builds are quite different.

## Deployment

- Always do a test run of the production build (`gatsby build && gatsby serve`) to make sure everything works.
- The command `netlify deploy` will create a "draft deploy" of your current branch.
- To deploy to production, simply merge a PR into the master branch, and Netlify will build & deploy the site to https://overture.bio.
- Netlify automatically creates deploy previews for the master branch & PRs on master. It doesn't do that for other branches, to cut down on usage. You can do deploy a preview manually with `netlify deploy`.
