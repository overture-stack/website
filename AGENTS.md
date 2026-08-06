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
This repo is the public marketing and product site for Overture, served at <https://overture.bio>. It is a [Gatsby](https://www.gatsbyjs.com/) 4 static site deployed on Netlify: React components plus SCSS under `src/pages/` and `src/components/`, and no content pipeline of any kind.

**Documentation does not live here.** <https://docs.overture.bio> is the only Overture documentation surface, built from [overture-stack/docs](https://github.com/overture-stack/docs). This repo used to serve its own `/documentation` section from Markdown; that was retired in 2026 (see `.dev/roadmap.md` § Decisions), and the URLs now 301 to their equivalents on the docs site from `netlify.toml`. A correction to component documentation belongs in that component's own repo, which flows into the docs site; nothing about it belongs here.

## Project-specific constraints
- **Public repository** (`overture-stack/website`, AGPL-3.0-or-later): no credentials, secrets, tokens, or private URLs in any committed file, ever. Matomo values live in the Netlify UI and in gitignored `.env.development` / `.env.production`; `.env.example` lists the names only. `netlify.toml` is committed, so it carries non-secret build settings only, as its own header comment states.
- **Node 22 with Gatsby 4 is a verified pairing; treat it as one.** `engines` requires Node `>=22.0.0` and npm `>=10.0.0`, `.nvmrc` pins 22, and `.npmrc` sets `engine-strict`, so an install on the wrong runtime fails immediately rather than half-working. Gatsby is still on 4.25 and React on 17, and **the upgrade to Gatsby 5 is cancelled**: this site is being ported into the Docusaurus site instead (see `.dev/roadmap.md` § Decisions). Do not bump Gatsby, React, or a `gatsby-*` plugin. Work here is maintenance on a stack with a known end date.
- **There is no test suite.** `npm test` is a placeholder that exits 1, so `conventions/testing.md` has nothing to run here. Verification means running the site: `npm run dev` for development behaviour, plus `npm run qa` or `npm run prod` when a change could behave differently in a production build (Gatsby's two builds differ materially, see [README.md](README.md) § Environments). State which one you actually ran.
- **Lint runs from `eslint.config.mjs` only.** It is ESLint 9 flat config, and it is the single authority: `gatsby-node.js` deliberately strips Gatsby's own develop-time ESLint plugin, which reads eslintrc-style config and would otherwise enforce a second, conflicting rule set. `npm run lint` does not pass yet; see `.dev/tech-debt.md` for the known baseline, and do not add findings to it.
- **Never deploy.** `npm run deploy` publishes a Netlify draft URL, and merging to `main` publishes to <https://overture.bio>. Both are the human's call, same as commits and staging.
- **Environment variables**: anything read in client-side code must be prefixed `GATSBY_`. Feature flags are environment variables, set per Netlify context in `netlify.toml`; `GATSBY_ENABLE_DRAFTS` is the only one left, and only the megamenu's coming-soon badges read it.
- **Links are centralized in `constants/`**: `pages.js` (internal routes and anchors), `external-links.js` (everything off-site, including all docs.overture.bio links, which are built from one `DOCS` base), `products.js`. Change a URL there, not inline in a component.
- **Documentation links name current docs.overture.bio routes.** That site is organized into four journeys (`/develop`, `/deploy`, `/use`, `/community`) and keeps its own redirects for its internal moves. Link the current route, not an older one that redirects, so a visitor takes one hop; check the target resolves before committing it. Component reference lives at `/develop/<Component>/overview`, capitalized.

## Repository orientation
- `src/pages/`: one directory per route (`about-us`, `acknowledgements`, `case-studies`, `community`, `getting-started`, `privacy`, `products`, `services`, `terms-conditions`), plus `index.js` and `404.js`. Gatsby derives routes from this structure, so a non-page file placed here becomes a public URL: keep components out of it.
- `src/components/`: shared components, one directory each with `index.js` and colocated `styles.scss`, barrel-exported from `src/components/index.js` and imported as `from 'components'`. The aliases that make those imports work (`components`, `constants`, `data`, `hooks`, `meta`, `pages`, `styles`, `utils`) are defined in `gatsby-node.js` § `onCreateWebpackConfig`. See [src/components/README.md](src/components/README.md).
- `src/styles/`: global SCSS, colours, variables, defaults. See [src/styles/README.md](src/styles/README.md).
- `constants/`, `meta/config.js` (site metadata), `src/data/` (YAML case-study data), `src/hooks/`, `static/`, `utils.js`.
- `gatsby-node.js`: webpack aliases and the develop-time lint plugin removal, nothing else. `gatsby-config.js`: plugins and the two filesystem sources.
- `netlify.toml`: build settings, the pinned `NODE_VERSION`, per-context environment variables, and the `/documentation/*` redirects to docs.overture.bio. The catch-all redirect must stay last: Netlify matches in file order.
- Local setup: Node 22 (`nvm use` reads `.nvmrc`), `npm install`, then `npm start` ([README.md](README.md) § Installation).
