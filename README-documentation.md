# Documentation section

## Page/file locations

- Landing page ([https://overture.bio/documentation]): [src/pages/documentation]
- Other pages: [markdown/documentation]
- Template for Markdown pages: [src/templates/documentation]
- List of pages: [meta/docs-pages.yaml]

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

### Folder structure

Make sure to describe the placement/order of your pages in `meta/docs-pages.yaml`, for navigation purposes.

1. Keep in mind folder/file names will be used to make URLs and create navigation.
2. Folders need an `index.md` file.
