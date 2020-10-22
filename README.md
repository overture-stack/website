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

The Documentation section is written in Markdown and uses a mix of local & external files. Various pages and features in this section are controlled in the following places:

- Landing page ([https://overture.bio/documentation]): [src/pages/documentation/index.js]
- List of pages (for table of contents & previous/next buttons): [meta/documentation-pages.yaml]
- Local pages: [markdown/documentation/]
- External pages: [meta/external-documentation.js]

### External documentation

#### Development

External documentation isn't fetched by default in development, because it's stored in the cache, and the cache gets cleared often in dev.

To see remote documentation in dev: Add `FETCH_DOCS=true` to `.env.development`

#### Folder structure

To get started, in the top level of your project repo, copy this folder structure:

```
- documentation
  - maestro # name of the project
    - index.md # landing page
```

Result: [https://overture.bio/documentation/maestro]

Now you can continue to add pages:

```
- documentation
  - maestro # name of the project
    - index.md # landing page
    - installation.md
    - getting-started.md
```

Don't use nested folders, or create a tree of links/table of contents on the landing page. If you want to provide a table of contents for users looking at the repo, you can add information to filenames, or write a YAML file.

**Example of documentation folder for Maestro, with sections for users & administrators:**

```
- documentation
  - maestro
    - index.md
    - users-01-installation.md
    - users-02-deployment.md
    - admin-01-installation.md
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

#### Configuration

Add each repo to [meta/external-documentation.js] and [meta/documentation-pages.yaml], see examples provided.
