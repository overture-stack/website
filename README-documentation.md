# Documentation section

- [Documentation section](#documentation-section)
  - [Page/file locations](#page-file-locations)
  - [How to write documentation](#how-to-write-documentation)
    - [Markdown files](#markdown-files)
    - [File organization](#file-organization)
    - [How to write `_contents.yaml`](#how-to-write---contentsyaml-)
  - [Algolia search](#algolia-search)
  - [Draft pages](#draft-pages)

## Page/file locations

- Landing page (<https://overture.bio/documentation>): `~/src/pages/documentation`
- Content for Markdown pages: `~/markdown/documentation`
- Template for Markdown pages: `~/src/templates/documentation`
- List of pages: See `_contents.yaml` in every `~/markdown/documentation` folder.

## How to write documentation

### Markdown files

Add a `title` to each file, otherwise one will be generated based on the filename.

> Example Markdown file

```md
---
title: Title of the Page
---

Markdown content goes here! You can do anything you would normally do in Markdown.
```

### File organization

1. Describe the placement/order of pages in the folder's `_contents.yaml` for navigation purposes.
    - The title of the page can be different in the page versus in the navigation. For example, if you want a long verbose title on the page but that long title looks awkward in the nav, you could shorten the title for the nav only. Nav is matched to pages based on URL, not based on titles.
1. Keep in mind folder/file names will be used to make URLs, so they need to be lowercase, not have spaces, etc.
1. All folders need an `index.md` file, which will be the landing page/entry point for that folder.
1. You can nest folders up to 4 levels deep.

### How to write `_contents.yaml`

```yaml
sectionSlug: score
pages:
  - title: Introduction
    url: score
    # landing page for this section
  - title: Section 1
    url: score/section-1
    isHeading: true
    # isHeading makes this link a heading.
    # links to this page will be redirected to
    # the first child page.
    pages:
      - title: Section Page 1
        url: score/section-1/section-page-1
        # make this a section by adding a list of child pages
        pages:
          - title: Subsection Page 1
            url: score/section-1/subsection-1/subsection-page-1
  - title: Page 1
    url: score/page-1
    # this is a top-level page with no children
```

## Algolia search

- Current implementation is based on [Gatsby docs: Adding Search with Algolia](https://www.gatsbyjs.com/docs/adding-search-with-algolia/)
- The site is re-indexed only in production, i.e. automatically when you merge a PR into the master branch on Github.
- Drafts are EXCLUDED.
- Algolia search only indexes the Documentation markdown pages.
- TODO: local debugging/development?
- Environments:
  - Netlify: Algolia secrets are stored in the Netlify admin UI.
  - Local: You'll need an `.env.development` & `.env.production` file with Algolia secrets.

## Draft pages

- Draft pages will not be built in a production context.
  - They will be built in local development & Netlify branch deploys.
  - If you run `npm run deploy` to make a Netlify link, you'll see draft pages.
- **Important!** Drafts won't be indexed by Algolia search in ANY context.

### Step 0: Environment variables

Make sure your ENV files have the following:

```yaml
# .env.development
GATSBY_ENABLE_DRAFTS=true

# .env.production
GATSBY_ENABLE_DRAFTS=false
```

### Step 1: Create a draft page

In the Markdown file, add `draft: true` to frontmatter:

```markdown
---
title: Example page
draft: true
---
```

### Step 2: Comment out the page in `_contents.yaml`

```yaml
# title: Example page
# url: documentation/page-title
```

### Step 3: Hide link in megamenu

In `megamenu/index.js`, find the link in the `data` object, and add `comingSoon: true` OR comment out the link.

```javascript
const data = {
  documentation: {
  sections: {
    {
      title: 'DMS Bundle',
      color: 'dark-blue',
      links: [
        {
          to: '/documentation/dms/',
          text: 'Introduction',
          comingSoon: true // COMING SOON!
        },
        // {
        //   to: '/documentation/dms/installation/installation',
        //   text: 'How to Install',
        // },
      ]
    }
  }
}
```

### Step 4: Hide cards on the Documentation Overview page

Go to `pages/documentation/index.js`, `const productSections`, the `cards` arrays, and add `comingSoon: true` OR comment out the card.
