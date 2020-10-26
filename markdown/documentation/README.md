# Documentation section

## Page/file locations

- Landing page ([https://overture.bio/documentation]): [src/pages/documentation]
- Other pages: [markdown/documentation]
- Template for Markdown pages: [src/templates/documentation]

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

1. Keep in mind folder/file names will be used to make URLs and create navigation.
2. Folders need an `index.md` file, or a table of contents page will be generated instead.
3. Number your files (`##-title.md`) and nested folders (`##-for-users`). Non-numbered content will be presented in alphabetical order.
4. Currently you can nest folders **4** levels deep. (e.g. `/documentation/song/for-users/something/something/index.md`)

> Example folder structure

- /documentation/
  - _NO INDEX. See `src/pages/documentation`._
  - /song/
    - index.md
    - /01-for-users/
      - index.md
      - 01-installation.md
      - 02-getting-started.md
    - /02-for-admin/
      - _NO INDEX. Table of contents page will be generated._
      - 01-installation.md
      - 02-getting-started.md
