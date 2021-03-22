# Documentation section

## Page/file locations

- Landing page ([https://overture.bio/documentation]): [src/pages/documentation]
- Other pages: [markdown/documentation]
- Template for Markdown pages: [src/templates/documentation]
- List of pages: See `_contents.yaml` in every `markdown/documentation` folder.

## How to write documentation

### File structure

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
- The site is re-indexed on build. To test this locally, run `npm run build && npm run serve`.
- For Netlify purposes, all the Algolia environment variables are stored in the admin UI.
