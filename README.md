> Source code for the overture.bio website.

## Development:

The site is based off of the [Gatsby Starter
Business](https://gatsby-starter-business.netlify.com).

Clone the repo and run the following to get started with local development.

```
npm install
npm start
```

**Note:** Folders such as `src/components/` and `src/pages` have READMES to give
a brief overview of how code/styles/etc are set up.

## Documentation section

The Documentation section is written in Markdown and uses a mix of local & remote files. Various pages and features in this section are controlled in the following places:

- Landing page ([https://overture.bio/documentation]): [src/pages/documentation/index.js]
- List of pages (for table of contents & previous/next buttons): [meta/documentation-pages.yaml]
- Local Markdown pages: [markdown/documentation/]
- Remote Markdown pages: [gatsby-config.js]

### Remote documentation

#### Development

Remote documentation isn't fetched by default in development, because it's stored in the cache, and the cache gets cleared often in dev. You can turn it on by adding `GATSBY_FETCH_DOCS=true` to `.evn.development`.

#### Folder structure

In the top level of the repo, make a folder called `documentation`, with an `index.md` file that will be used as the landing page.

Don't use nested folders, or create a tree of links/table of contents on the landing page. If you want to provide a table of contents for users looking at the repo, you can add information to filenames, or write a YAML file.

**Example of documentation folder with sections for users & administrators:**

```
- /documentation
  - index.md
  - users-01-installation.md
  - users-02-deployment.md
  - admin-01-installation.md
  ...
```

#### File structure

Add a front matter (YAML) `title` field to pages, otherwise the page's filename will be used as a title.

**Example Markdown file:**

```md
---
title: Title of the Page
---

Markdown content goes here
```

#### Navigation

Make sure to add each repo & page to [meta/documentation-pages.yaml]. See that file's comments for more info.

#### Configuration & Updating

For each repo you want to pull Markdown from, add this to [gatsby-config.js].

```js
{
  resolve: `gatsby-source-git`,
  options: {
    branch: LATEST_RELEASE_TAG_NAME, // change this to update the documentation
    name: NAME_OF_REPO,
    patterns: [`documentation/**`],
    remote: REPO_HTTPS_URL,
  },
},
```

See [gatsby-source-git](https://github.com/stevetweeddale/gatsby-source-git) documentation for more info.
