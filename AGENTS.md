<!-- agentics-template-version: 0.12.0 | synced: 398df9c3363eae068dc3515a71fd472bdd329a49 -->
# Agent collaboration conventions: Overture website

**For AI agents:** this file is instructions you read and follow, not documentation written for people. If you're a person, see [README.md](README.md) instead.

Adapted from [softeng/agentics](https://github.com/oicr-softeng/agentics). This is the canonical, agent-neutral source for **website-specific** conventions; `CLAUDE.md` is a stub that points here.

Universal conventions (interaction style, critical constraints, testing, code style, writing style, security, documentation, session discipline, definition of done), the developer role, the softeng team layer, and the Overture product-family layer (`CLAUDE.overture.md`, applied because project memory flags this as an Overture repo) are **not duplicated here**: they come from the agentics source your agent already has. Read them on demand from a local clone if you have one (Claude Code default: `~/.claude/agentics/template/`), otherwise from [`template/`](https://github.com/oicr-softeng/agentics/tree/main/template) in the agentics repo. This file adds only what is specific to this repo.

## Session start
Before touching anything, read `.dev/roadmap.md`, `.dev/tech-debt.md`, and the most recent file(s) in `.dev/sessions/`. Full sequence: `conventions/session-discipline.md`.

## When to read what (agentics conventions, read on demand)
The canonical task-to-convention dispatch table lives in agentics' own `template/AGENTS.md` § "When to read what": tests, code style, writing style, code review, docs, security, convention levels, upgrading adoption, definition of done. Read the matching file from `template/conventions/` when doing that task. Most work here is content and presentation, so `conventions/documentation.md` and `conventions/writing-style.md` apply to the majority of changes.

## Project context
This repo is the public marketing and product site for Overture, served at <https://overture.bio>. It is a [Gatsby](https://www.gatsbyjs.com/) 4 static site deployed on Netlify.

It holds two content systems, not one:

1. **Marketing and product pages**: React components plus SCSS under `src/pages/` and `src/components/`.
2. **A documentation section** at `/documentation`, generated from Markdown under `markdown/documentation/` by a single template.

The current documentation hub for the Overture stack is the separate `overture-stack/docs` Docusaurus site at <https://docs.overture.bio>. The `/documentation` content in this repo predates that site and still ships alongside it; see `.dev/roadmap.md` § Open questions before adding to it.

## Project-specific constraints
- **Public repository** (`overture-stack/website`, AGPL-3.0-or-later): no credentials, secrets, tokens, or private URLs in any committed file, ever. Algolia and Matomo values live in the Netlify UI and in gitignored `.env.development` / `.env.production`; `.env.example` lists the names only. `netlify.toml` is committed, so it carries non-secret build settings only, as its own header comment states.
- **The toolchain is pinned old and stays that way unless the upgrade is the task.** `engines` requires Node >=16 <17 and npm >=8 <9; the site runs Gatsby 4 with ESLint 5. Do not bump a dependency to make an unrelated change easier: on a stack this old that turns a content fix into a migration. Flag the upgrade as its own piece of work instead, per `conventions/code-style.md` on scope discipline.
- **There is no test suite.** `npm test` is a placeholder that exits 1, so `conventions/testing.md` has nothing to run here. Verification means running the site: `npm run dev` for development behaviour, plus `npm run qa` or `npm run prod` when a change could behave differently in a production build (Gatsby's two builds differ materially, see [README.md](README.md) § Environments). State which one you actually ran.
- **Never deploy.** `npm run deploy` publishes a Netlify draft URL, and merging to `main` publishes to <https://overture.bio>. Both are the human's call, same as commits and staging.
- **Environment variables**: anything read in client-side code must be prefixed `GATSBY_`. Feature flags are environment variables, set per Netlify context in `netlify.toml`.
- **Links and navigation are centralized in `constants/`**: `pages.js` (internal routes and anchors), `docs.js` (documentation deep links), `external-links.js`, `products.js`. Change a URL there, not inline in a component. The documentation megamenu is the exception: its link list is inline in `src/components/NavBar/MegaMenu/index.js`.
- **Read [README-documentation.md](README-documentation.md) before touching `markdown/documentation/`**: it defines frontmatter, `_contents.yaml` navigation, draft pages, and the 4-level nesting limit. Parts of it have drifted from the code; check `.dev/tech-debt.md` before trusting a path it names.
- **Overture link conventions** (`CLAUDE.overture.md`) apply, with one difference worth stating: this repo is not part of the `docs.overture.bio` symlink tree, so a link to another Overture product's published docs uses the full `https://docs.overture.bio/...` URL, and links within `markdown/documentation/` stay relative to this site's own routes.

## Repository orientation
- `src/pages/`: one directory per route (`about-us`, `case-studies`, `community`, `getting-started`, `products`, `services`, `privacy`, `terms-conditions`, `acknowledgements`, `home`), plus `index.js` and `404.js`. Gatsby derives routes from this structure.
- `src/components/`: shared components, one directory each with `index.js` and colocated `styles.scss`, barrel-exported from `src/components/index.js` and imported as `from 'components'`. The aliases that make those imports work (`components`, `constants`, `data`, `hooks`, `meta`, `pages`, `styles`, `templates`, `utils`) are defined in `gatsby-node.js` § `onCreateWebpackConfig`. See [src/components/README.md](src/components/README.md).
- `src/styles/`: global SCSS, colours, variables, defaults. See [src/styles/README.md](src/styles/README.md).
- `src/templates/documentation/`: the single template every Markdown documentation page renders through. `src/components/Layout/DocsWrapper.js` is the documentation shell: sidebar navigation built from `_contents.yaml`, plus the search box.
- `markdown/documentation/<section>/`: documentation content, one directory per section (`arranger`, `dms`, `ego`, `guides`, `maestro`, `score`, `song`, `stage`), each with its own `_contents.yaml` navigation manifest and an `index.md` landing page.
- `constants/`, `meta/` (`config.js` site metadata, `algolia-queries.js` search index queries), `src/data/` (YAML case-study data), `src/hooks/`, `static/`, `utils.js`.
- `gatsby-node.js`: documentation page creation from Mdx and Yaml nodes, draft filtering, GraphQL schema for `_contents.yaml`, webpack aliases. `gatsby-config.js`: plugin and source configuration.
- Local setup: Node 16 with npm 8, `npm install`, then `npm start` ([README.md](README.md) § Installation).
