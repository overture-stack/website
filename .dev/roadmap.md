# Overture website: roadmap

Planned work and open questions for <https://overture.bio>. This is the durable plan and the session-start entry point; per-change detail lives in `sessions/` and git history.

## Working documents

- **`roadmap.md`** (this file): the durable plan, active work, open questions, deferred items.
- **`tech-debt.md`**: known issues and deferred fixes. Entry format: `conventions/session-discipline.md` § Tech-debt entry format (see [AGENTS.md](../AGENTS.md)).
- **`sessions/`**: dated work log, one file per contributor per day.

---

## Where things stand (2026-08-06)

Recent shipped work has been incremental content and link upkeep rather than feature work: the Conductor section renamed to Quickstart and its commands updated, a support link added to the navbar, Docker version requirements refreshed, a licensing link added to the footer with the unused contact-us page removed, and `gatsby-plugin-algolia` removed from `gatsby-config.js`.

A full audit on 2026-08-06 found the site itself healthy in production (pages serve, Matomo reports, the docs section renders) while the development toolchain around it has stopped working: the repo cannot be installed on a current Node, and lint has not run in a long time. Those two are the entry point for everything else, since almost every other item is either blocked behind the upgrade or trivial once the tooling runs again. Findings are logged individually in `tech-debt.md`.

## Decisions

**<https://docs.overture.bio> is the only documentation surface for Overture (2026-08-06).** The `/documentation` section in this repo is outdated and is being retired, not maintained in parallel. No new content goes into `markdown/documentation/`, and a correction to component documentation belongs in that component's own repo, which flows into `docs.overture.bio`. Phase 2 below carries this out.

## Planned work

Four phases, ordered so each one is independently shippable and reviewable.

### Phase 1: unblock local development and lint (done, uncommitted 2026-08-06)

**The verified pairing is Node 22 with Gatsby 4.25.** `engines` now asks for `>=22.0.0` and npm `>=10.0.0`, `.nvmrc` pins `22` so the version is picked up automatically, and `.npmrc`'s `engine-strict=true` is kept, since the range it enforces is now a supported runtime rather than an end-of-life one. Node 20 was rejected as the target: it left LTS maintenance in April 2026, so it would have meant landing on an already-expired runtime.

Gatsby 4 needs no changes to build on Node 22, which was the open risk. Verified: `gatsby build` exits 0, produces all 131 pages and the sitemap in about 60 seconds, and processes 784 images, because `sharp` and `lmdb` are N-API addons and stay ABI-compatible across Node majors without a rebuild.

**Lint is rebuilt rather than repaired.** ESLint 5 with the never-installed `react-app` and `prettier` configs is replaced by ESLint 9 with flat config (`eslint.config.mjs`), `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-config-prettier`; nine stale lint packages including `babel-eslint` are removed, and the `lint` script drops the `--ext` and `--ignore-path` flags that ESLint 9 no longer accepts. ESLint 10 was the first choice and does not work here: no released `eslint-plugin-react` supports it (the current 7.37.5 caps its peer range at `^9.7`), and forcing it with `--legacy-peer-deps` would install a combination upstream says is unsupported.

`react/prop-types` is off. It accounted for 279 of the 306 errors on first run, and turning it on in earnest would mean annotating every component before lint could pass. What remains is a real baseline of 24 errors and 89 warnings, logged in `tech-debt.md`, including a genuine hook-order bug and two `switch` fallthroughs. Two findings were fixed at source in this phase: duplicate `default` keys in `Button`, and external links opening with `target="_blank"` and no `rel`, which is a tabnabbing risk on every outbound link on the site.

**Still open in this phase:** Netlify's build Node version is implicit. `.nvmrc` should be honoured by Netlify automatically, but that has not been confirmed against a real deploy, and with `engine-strict=true` an older Netlify default would now fail the install rather than silently building on the wrong runtime. Confirm on the first deploy preview; the fallback is setting `NODE_VERSION` in `netlify.toml`.

The security fixes that need none of this (`sharp`, `lodash`, deleting the unused `gatsby-source-git`) are logged separately in `tech-debt.md` and are the natural next small change.

### Phase 2: retire the on-site documentation section

118 Markdown pages across eight sections (arranger, dms, ego, guides, maestro, score, song, stage) plus the whole pipeline that renders them. This is the single largest simplification available to the repo, and doing it before phase 3 shrinks that phase substantially: the MDX and YAML plumbing is exactly where a Gatsby 5 upgrade is most likely to break, since `gatsby-plugin-mdx` v5 moves to MDX 2 and the documentation template leans on `MDXRenderer`, `mdx-utils`, `react-markdown` shortcodes, and 59 Markdown files using `<Note>` and `<Warning>`.

**Most of the marketing side has already moved.** `src/pages/getting-started/` is the site's documentation hub and already links out to `docs.overture.bio` for user, administration, deployment, and API guides. Every constant in `constants/docs.js` and the four `*_GUIDE` constants in `constants/pages.js` have no consumers left at all. The only live entry point into the legacy section is the navbar megamenu, which hardcodes ten paths (four under Platform Guides, six under Product Documentation).

**Step 1: redirect, and repoint the megamenu.** Add `[[redirects]]` rules to `netlify.toml` (301) and change the ten megamenu links to the same targets, so internal navigation goes straight to the docs site rather than through a redirect hop:

| Legacy path | Target on docs.overture.bio |
| --- | --- |
| `/documentation/song/*` | `/develop/Song/overview` |
| `/documentation/score/*` | `/develop/Score/overview` |
| `/documentation/maestro/*` | `/develop/Maestro/overview` |
| `/documentation/arranger/*` | `/develop/Arranger/overview` |
| `/documentation/stage/*` | `/develop/Stage/overview` |
| `/documentation/guides/deployment/*` | `/deploy/deployment` |
| `/documentation/guides/administration/*` | `/use` |
| `/documentation/guides/submission/*` | `/use/cli-submissions` |
| `/documentation/guides/download/*` | `/use/cli-downloads` |
| `/documentation/dms/*` | `/deploy/prelude` |
| `/documentation/ego/*` | `/deploy/deployment/keycloak` |
| `/documentation/*` (catch-all) | `/develop` |

**These targets belong to the docs v2 restructure, not to the docs site as it serves today.** They come from [overture-stack/docs#48](https://github.com/overture-stack/docs/pull/48), which moves the site to four audience journeys (`/develop`, `/deploy`, `/use`, `/community`) and retires the `/docs/core-software/...` and `/guides/...` paths the site currently serves. Every target in the table was confirmed present in a local production build of that branch on 2026-08-06, and none of them exist on the live site yet.

**So this step is blocked on that PR merging.** Shipping these redirects earlier would send every retired URL to a 404. Pointing them at today's live paths instead is not a safe alternative: those paths survive the restructure only as `plugin-client-redirects` pages, which are HTML meta-refresh documents, so a visitor would take a 301 from this site into a client-side hop on the other, and search engines would follow a redirect chain ending in a soft redirect. One hop to a real page is the outcome worth waiting for.

**Target section front doors, not per-page equivalents.** A 118-entry deep-link map buys little and breaks on the next restructure; the docs site owns its own internal moves through its redirect plugin. Two sections have no successor page at all, which is why their rows point at the nearest live topic: Ego is discontinued (the new site has no Ego docs, and its predecessor authorization guide now redirects to the Keycloak deployment page) and the DMS bundle was superseded by Prelude, which is also where the retired Quickstart page now lands.

**Step 2: delete the pipeline.** Once the redirects are live and verified:

- `markdown/documentation/` (118 pages, and with it the 60MB of uncompressed screenshots and the `_contents.yaml` navigation convention)
- `src/templates/documentation/`, `src/components/Layout/DocsWrapper.js`, and `README-documentation.md`
- The six components used only by the documentation pipeline: `AnchorHeading`, `Credits`, `HeadingsTableOfContents`, `SectionTableOfContents`, `SupportFooter`, `WarningBox`. Also `Code` (only the docs template renders it) and `Search` with `meta/algolia-queries.js`, since the only render site is `DocsWrapper`; the unused `searchIndices` variable in `src/pages/getting-started/index.js` goes with it. `NoteBox` stays: the getting-started page uses it.
- The documentation branches of `gatsby-node.js` (page creation from Mdx and Yaml nodes, the `_contents.yaml` schema customization) and `gatsby-config.js` (the `docs` filesystem source, the MDX, remark, and YAML plugins)
- `constants/docs.js` entirely, and the four dead `*_GUIDE` constants in `constants/pages.js`
- Dependencies that exist only for this pipeline: `@mdx-js/mdx`, `@mdx-js/react`, `gatsby-plugin-mdx`, `gatsby-transformer-remark`, `gatsby-remark-images`, `gatsby-remark-copy-linked-files`, `gatsby-transformer-yaml`, `mdx-utils`, `react-markdown`, `remark-gfm`, `remark-slug`, `flat`, `prism-react-renderer`, `algoliasearch`, `react-instantsearch-dom`, and the already-unused `gatsby-plugin-algolia`
- `src/hooks/useSSRWorkaround.js`, whose only callers are documentation components

What remains is a marketing site of roughly thirteen routes with no content pipeline, which is the right shape for what this repo actually is.

**Step 3: check inbound links.** These URLs have been public for years, so before deleting, pull the top `/documentation/*` paths from Matomo (siteId 76 on `webstats.oicr.on.ca`) and confirm the busiest ones land somewhere useful rather than on the catch-all. Also grep the other Overture repos for `overture.bio/documentation` links, since a redirect is a courtesy and a corrected link is better.

**Ordering against the docs repo.** `overture-stack/docs#48` merges first, then this phase. That PR is itself blocked on component documentation PRs in five submodules, so the realistic sequence is: those merge, its pins are re-pointed, it merges, the new journey URLs go live, and only then do these redirects land. Phase 1 and the standalone `tech-debt.md` items are not blocked by any of that and can proceed in parallel.

### Phase 3: framework majors

Gatsby 4.25.9 to 5.16.1, React 17 to 18 or 19, and the remaining `gatsby-*` plugins alongside them. This clears the bulk of the dependency advisories (77 high, 8 critical, mostly transitive through Gatsby 4), so treat the advisory count as an outcome of this phase rather than a task of its own. After phase 2 this is a much smaller migration: static pages, images, Sass, and the sitemap, with no MDX pipeline in the way.

### Phase 4: everything the majors unlock

ESLint 9 or 10 with flat config, Prettier 3, Bulma 1.0, and the remaining dependency and dead-code removals in `tech-debt.md` that are cheap to confirm once lint and a working build are back.

## Open questions

**Whether the Gatsby upgrade is worth it at all, versus a platform move.** Phase 3 is a real project on a framework whose momentum has slowed since Netlify acquired it. If the medium-term intent is to fold this site into the Docusaurus stack already running `docs.overture.bio`, then that migration is work thrown away. Phase 2 changes this calculation in both directions: it makes the Gatsby upgrade smaller, and it also makes a platform move cheaper, since a thirteen-route marketing site with no content pipeline is far easier to port than the same site with a documentation system attached. Worth deciding before phase 3 starts, not during it. Phases 1 and 2 are worth doing under any answer.

**What the getting-started page should be once the section is gone.** It currently reads as a hub for both the on-site documentation and the docs site. After phase 2 it is purely a launch point into `docs.overture.bio`, and its Product Documentation framing (`Detailed product documentation for administrators and developers`) describes pages that will no longer exist here. Someone who owns the site's content should decide whether it stays as a curated entry page or collapses into a navbar link.

## Deferred

Nothing deferred yet.

## Deferred

Nothing deferred yet.
