# Overture website: roadmap

Planned work and open questions for <https://overture.bio>. This is the durable plan and the session-start entry point; it holds only what is still ahead. Completed work lives in `sessions/` and git history.

## Working documents

- **`roadmap.md`** (this file): the durable plan, open questions, deferred items.
- **`tech-debt.md`**: known issues and deferred fixes. Entry format: `conventions/session-discipline.md` § Tech-debt entry format (see [AGENTS.md](../AGENTS.md)).
- **`sessions/`**: dated work log, one file per contributor per day.

---

## Where things stand (2026-08-06)

A 13-route marketing site: Gatsby 4.25 on Node 22, no content pipeline, 14 built pages, a 12 second production build.

Documentation lives at <https://docs.overture.bio>. This site links into its four journeys and 301s its own legacy `/documentation/*` URLs there.

**One thing gates the next deploy.** Those links and redirects name docs v2 routes, which 404 until [overture-stack/docs#48](https://github.com/overture-stack/docs/pull/48) is live, and that PR is waiting on five component documentation PRs and a submodule pin re-point. Nothing else blocks shipping.

## Decisions

**<https://docs.overture.bio> is the only documentation surface for Overture (2026-08-06).** No documentation content belongs in this repo. A correction to component documentation belongs in that component's own repo, which flows into the docs site.

**This site consolidates into the Docusaurus site, and the Gatsby upgrade is cancelled (2026-08-06).** The 13 marketing routes move into `overture-stack/docs` and this repo is retired. Gatsby earns nothing here: **no GraphQL queries remain** (`useStaticQuery`, `StaticQuery`, and `graphql` tags all count zero) and case-study data is a plain `import`, so the data layer, image pipeline, and MDX all sit unused, while the build ships **1.3MB of JavaScript across 28 files** for 13 static pages. Consolidating also means one stack, one deploy, and one set of skills for a team that already writes substantial custom React in the docs repo.

Alternatives considered and rejected: porting to Astro (a better technical fit for a marketing site, and it would ship almost no JavaScript, but it leaves two stacks and two deploys to maintain); Next.js static export (a much larger framework than a brochure site needs); and upgrading to Gatsby 5 with React 18, which the ESLint, Prettier, and Bulma majors were waiting on (about a day of work, made pointless by this decision).

**The getting-started page stays, as a curated entry page (2026-08-06).** It is not collapsing into a navbar link. It is the site's one deliberate handoff into `docs.overture.bio`, so it presents the four journeys (Deploy, Use, Develop, Community) as the entry points, with a line each on what they are for, above the Quickstart and prerequisites content. Keep it that way: copy edits here should track the docs site's own structure, not drift back into naming individual components or sections.

**Check the consolidation plan before fixing anything in this repo.** Fixing something here that the move deletes or replaces is wasted effort, and the lists at the end of that section say which items those are. Shipping the aligned site is the exception: that code is temporary, but it is what `overture.bio` serves in the meantime.

## Planned work

Two pieces, in order. The first ships the site as it stands; the second replaces it.

### Ship the site (gated on `docs#48` going live)

Three steps, none of them large. The point is that `overture.bio` serves correct links the day the docs site changes, and that the port afterwards starts from a deployed, known-good state.

**Step 1: re-verify the docs URLs against the merged docs site.** Any earlier check was run against the `overtureDocsUpdate` branch, which is still moving: five component documentation PRs have to merge and their submodule pins be re-pointed before `docs#48` goes in, and re-pointing a pin can change component page slugs. The check is mechanical and worth scripting: extract every `docs.overture.bio` URL from the built site and from `netlify.toml`, request each one, require a 200. Run it against live `docs.overture.bio` once the PR is in, and again against this site's deploy preview. Note the megamenu is absent from server-rendered HTML, so its links have to come from the source, not from grepping the build.

**Step 2: check the deploy preview.** Netlify applies `netlify.toml` redirects to previews, so the `/documentation/*` rules are testable before production. Confirm: the build picks up `NODE_VERSION = "22"` (never yet confirmed against a real Netlify build, and with `engine-strict=true` a wrong default now fails the install rather than quietly building on the wrong runtime), all 13 routes render, a sample of legacy `/documentation` URLs 301 to the right place, and `/sitemap-index.xml` is served.

**Step 3: deploy, then verify live.** Re-run the URL check against production, spot-check two or three redirects by hand, and confirm Matomo is still receiving hits on siteId 76.

**Rollback:** if `docs#48` is reverted after this ships, every `/documentation/*` redirect starts pointing at 404s. Repoint the redirects at `https://docs.overture.bio/` root until the docs side is healthy, rather than reverting this deploy.

### Consolidate into the Docusaurus site (separate branch, after the above is deployed)

Porting from production rather than an unreleased branch keeps the two copies from diverging, and makes the port a clean translation instead of a translation plus a merge. While it is in progress, keep changes here to what is genuinely urgent: anything else is work done twice.

Four stages, and only stage 3 is user-visible.

**Stage 1: port the pages into the docs repo, with no DNS change.** Work happens in `overture-stack/docs`, under `website/src/pages/`, one directory per route. It already serves a custom `index.tsx`, so the pattern exists.

- **Do not port the chrome.** `Layout`, `NavBar`, `MegaMenu`, `MegaMenuLink`, `NavLink`, `Footer`, and `useSSRWorkaround` all go away: Docusaurus supplies layout, navbar, and footer through `docusaurus.config.ts`, and it has real SSR plus `<BrowserOnly>` for the cases the 2020 rehydration workaround existed for. This is the largest single simplification in the move, since the megamenu and the `Layout` class component carry most of what is left of this site's complexity.
- **Do not port the dead components** (`BottomCallout`, `GettingStarted`, `GridFeature`, `MarketingSection`, `ProductHero`, `WindowGui`, and the two they orphan). Deleting by not porting resolves that `tech-debt.md` entry.
- **Swap the Gatsby-specific layer:** `LinkHelper` becomes `@docusaurus/Link`, `react-helmet` becomes Docusaurus `<Head>`, `gatsby-plugin-anchor-links` becomes plain anchors, and nprogress is unnecessary in this setup.
- **Port as-is:** `Icon`, `Button`, `Typography`, `Hero`, `CaseStudy`, `Content`, `Terminal`, `NoteBox`, `Badge`, `ProductsPageSection`, `ServicesPageSection`, `HomeProductLink`, `ImageCrossfade`, `YellowButton`, plus `constants/` and the `src/data/case_studies` YAML. Assets go to `website/static/`.
- **Sass needs adding.** The docs site has no Sass support today (plain `src/css/custom.css`), so the 39 SCSS files need `docusaurus-plugin-sass` and `sass` to port unchanged. Check current versions against the registry before adding.
- **The real risk is CSS, not JavaScript.** Bulma's global resets will fight Infima, the Docusaurus theme. Mitigation: scope the marketing styles under a wrapper class so they cannot leak into doc pages, then trim Bulma usage over time. Rewriting the marketing styles onto Infima variables is the cleaner end state and a much larger job; do not attempt it in the same change.
- **Analytics needs nothing.** Both sites already report to Matomo siteId 76 on `webstats.oicr.on.ca`, and the docs site mounts its `MatomoTracking` component in a swizzled `Layout`, so ported pages inherit tracking and `gatsby-plugin-matomo` simply disappears.
- **Link checking improves for free.** The docs site builds with `onBrokenLinks: "throw"`, so a bad link in a ported page fails the build. This site has never had link checking at all.

**Stage 2: review on a branch deploy.** Netlify builds branch deploys for the docs repo, so the merged site can be reviewed at a preview URL with nothing user-visible changing. Styling review belongs here, before any DNS work.

**Stage 3: cut the domain over.** Both sites are already on Netlify, so this is DNS plus redirect rules rather than a hosting migration. The recommended shape: serve the merged site at `overture.bio`, keeping the docs paths exactly as they are (`/develop`, `/deploy`, `/use`, `/community`), then 301 `docs.overture.bio/*` to `overture.bio/*` path-for-path. That preserves every docs URL `docs#48` created, changing only the host, and gives the brand domain the marketing homepage rather than leaving it as a redirect to a subdomain. Serving the merged site from `docs.overture.bio` instead is the alternative, and is worse: it puts marketing pages on a documentation subdomain.

Two details that are easy to miss: the `/documentation/*` redirects must be rewritten to same-host targets so no visitor takes two hops, and the apex-versus-`www` question resolves itself, because Docusaurus takes an explicit `url` rather than deriving one.

**Stage 4: retire this repo.** Archive `overture-stack/website` once the merged site serves production, keeping its Netlify site briefly as a rollback. `.dev/` and `AGENTS.md` are archived with it; anything still open in `tech-debt.md` moves to the docs repo's own list rather than being lost.

**What the move resolves outright,** so it should not be worked on here first: the dead components, the basscss and Bulma question (the theme decides it), Google Fonts loading, the Prettier config conflict, the absence of CI, sitemap and `robots.txt`, the `siteUrl` host mismatch, the stray `/case-studies/navigation` route, and Netlify Node pinning.

**What follows the content and still needs doing** in its new home: missing `alt` text on 15 images, and the duplicated `keywords` meta, which is a rewrite rather than a copy since Docusaurus owns head tags.

## Open questions

**Which host serves the merged site.** Recommended, and assumed by stage 3 above: `overture.bio`, with `docs.overture.bio` redirecting to it path-for-path. Needs whoever owns the DNS to confirm before that stage starts.

**Whether the products page should cover the whole stack.** It has sections for Song, Score, Maestro, and Arranger. The docs site also documents Lectern, Lyric, and Stage, so the two surfaces disagree about what Overture contains. Adding three sections is content work for whoever owns that page, and it carries over to the port either way.

**Whether the megamenu comes back or gets deleted.** It is unreachable today: nothing opens it, and the component that would is imported by nothing (see `tech-debt.md` for the full subsystem, including the `Layout` state and the hook that exist only to serve it). Deciding to delete it removes most of what is left of the `Layout` class component; deciding to revive it means wiring it into `NavBar` and checking it in a browser, since none of it appears in server-rendered HTML.

## Deferred

Nothing deferred.
