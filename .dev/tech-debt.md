# Tech debt

Entry format: `conventions/session-discipline.md` § Tech-debt entry format (agentics template; see [AGENTS.md](../AGENTS.md)).

Ordered roughly by severity. Most entries were logged from the 2026-08-06 audit; see `sessions/` for what was verified how.

---

Lint runs, and reports 22 errors and 89 warnings against existing code, so `npm run lint` exits non-zero and cannot be a gate yet. Four of the errors are real defects: `src/components/SupportFooter/index.js:51` and `:55` fall through between `switch` cases; `src/components/NavBar/MegaMenuLink/index.js:11` passes `activeClassName` to a plain DOM element, where it silently does nothing; `src/components/Code/index.js:32` and `:34` render iterated elements without a `key`; `src/components/ImageCrossfade/index.js:12` uses `componentWillReceiveProps`, removed in React 18, so it also blocks phase 3. The remaining 18 are cosmetic or already scheduled to disappear: nine unescaped apostrophes, two missing display names, two `react/no-children-prop` and two `set-state-in-effect` reports in code phase 2 deletes, and one unreachable statement in the dead `GridFeature`.
fix: fix the four defects, verifying each against a build rather than trusting autofix, and take `react/no-unescaped-entities` as a config decision (switching it off is defensible for prose-heavy JSX). Leave the rest for phase 2 and phase 3 to remove. The 89 warnings are almost entirely unused variables, which the dead-code and phase 2 entries clear in bulk.
standalone: no
context: blocks the CI entry below, since a workflow added now would be red from its first run. Four findings were already fixed at source during phase 1: duplicate `default` keys in `Button`, external links opening with `target="_blank"` and no `rel`, a no-op `this.popOverRef;` statement in `Layout`, and conditional hooks in `useActiveId`.

---

Three dependency advisories are fixable now, without waiting for the framework upgrade. `sharp` is pinned at ^0.30.1: CVE-2023-4863 in the bundled libwebp needs >=0.32.6, and four 2026 libvips CVEs need >=0.35.0. `lodash` at ^4.17.21 is covered by a `_.template` code-injection advisory and two prototype-pollution advisories, all fixed in 4.18.1. `gatsby-source-git` carries a critical advisory and is not used at all (see the unused-dependency entry below), so deleting it resolves it outright.
fix: bump `sharp` to ^0.35.x and `lodash` to ^4.18.1, delete `gatsby-source-git`, then rebuild and check the image pipeline, since `sharp` is what `gatsby-plugin-sharp` renders through and a major bump there has historically needed a matching plugin version.
standalone: yes

---

Matomo tracks local development traffic into production analytics and ignores Do Not Track while doing it. `gatsby-config.js` sets `dev: process.env.NODE_ENV === 'development'`, which is inverted relative to intent: the plugin's `dev` option means "load tracking scripts even outside production", and its own documentation notes that in that mode all hits are sent as in production and the browser's DNT header is ignored. Production is siteId 76 on `webstats.oicr.on.ca`, so every `npm run dev` session pollutes real site statistics.
fix: set `dev: false`, or gate it behind an explicit opt-in variable (`GATSBY_MATOMO_DEV`) for the rare case of testing tracking locally.
standalone: yes

---

Six declared dependencies are unreferenced anywhere in the codebase: `gatsby-source-git` (also a critical advisory), `gatsby-plugin-offline` (the config uses `gatsby-plugin-remove-serviceworker` instead, so the two are contradictory intentions and only the removal is wired up), `gatsby-plugin-image`, `lodash.find`, `lodash-webpack-plugin` (never wired into the webpack config), and `@babel/plugin-proposal-export-default-from` (the repo has no Babel config file at all). `gatsby-plugin-algolia` is referenced only inside a commented-out config block.
fix: delete all six. `gatsby-plugin-algolia` and the rest of the search stack go with `roadmap.md` § Phase 2, along with `src/templates/documentation/utils.js`, which is the only file importing the full `lodash` package; that leaves `lodash.startcase` in `gatsby-node.js` as the only lodash dependency, so no rewrite of the `findIndex` call is needed if phase 2 lands first.
standalone: yes

---

`gatsby-config.js` requires `dotenv` at its first line, but `dotenv` is not declared in `package.json`. It resolves today only because Gatsby depends on it transitively, so a Gatsby upgrade that drops or hoists it differently breaks environment loading, and the failure appears as missing environment variables rather than a missing module.
fix: add `dotenv` to `dependencies` explicitly. Gatsby 5 loads `.env.<NODE_ENV>` itself, so check whether the manual `require` is still needed at all before keeping it.
standalone: yes

---

Six components are dead: nothing outside their own directory imports any of their exported symbols. `BottomCallout` (exports `BottomCallout`, `Callout`), `GettingStarted`, `GridFeature`, `MarketingSection`, `ProductHero`, and `WindowGui`, together 25 files and roughly 224KB, most of it `ProductHero`'s SVGs. Removing them also orphans `ProductFeature` (used only by `GridFeature`) and `ProgressBar` (used only by `ProductHero`), and leaves the `.BottomCallout` rule at `src/styles/main.scss:124` with nothing to style.
fix: delete the six directories, their `src/components/index.js` barrel exports, the two components they orphan, and the orphaned CSS rule. Confirm against a production build rather than the dev server, since the dead-code check was static.
standalone: yes

---

A Netlify CMS configuration left over from the `gatsby-starter-business` template is published on the live site. `static/admin/config.yml` is served at <https://www.overture.bio/admin/config.yml> (verified 200) and declares `backend: git-gateway`, `publish_mode: editorial_workflow`, and collections pointing at files that do not exist (`src/pages/index.md`, a `blog` collection). There is no `admin/index.html`, so the CMS UI itself is not reachable, but the file describes repo internals to anyone who looks.
fix: delete `static/admin/`.
standalone: yes

---

`meta/config.js` carries three settings that resolve to nothing. `siteLogo: '/logos/logo-512x512.png'` points at a directory that does not exist (`static/` has `icons/`, not `logos/`). `siteRss: '/rss.xml'` and the entire `rssMetadata` block in `gatsby-config.js` describe a feed that no plugin generates, since there is no `gatsby-plugin-feed`. `siteFBAppID` is an empty string.
fix: point `siteLogo` at the real `/icons/icon-512x512.png` (and check wherever it is consumed for social preview images), then delete `siteRss`, `rssMetadata`, and `siteFBAppID`, or add `gatsby-plugin-feed` if a feed is actually wanted.
standalone: yes

---

The site's canonical host and its configured host disagree. `meta/config.js` sets `siteUrl: 'https://overture.bio'`, but the apex domain 301-redirects every path to `www.overture.bio` (verified). Everything derived from `siteUrl`, including the sitemap's URLs and any canonical or Open Graph tag, therefore names a host that immediately redirects.
fix: set `siteUrl` to `https://www.overture.bio` to match what Netlify actually serves, or change the Netlify domain configuration to make the apex canonical. One or the other, not both.
standalone: yes

---

Search engines cannot find the sitemap. There is no `robots.txt` at all (404), and `gatsby-plugin-sitemap` is configured with no `output` option, so it writes to its default `/sitemap/sitemap-index.xml` rather than the conventional `/sitemap-index.xml` (both verified against the live site: the default path serves, the conventional one 404s).
fix: add a `robots.txt` naming the sitemap URL, and either set the plugin's `output` to `/` or keep the default and reference it from `robots.txt`. Fix the `siteUrl` entry above first, since the sitemap's URLs come from it.
standalone: no
context: coupled to the `siteUrl` entry above; fixing the sitemap's discoverability while its URLs still name the redirecting host would only publish the wrong hostname more widely.

---

Fifteen `<img>` tags in `src/` have no `alt` attribute, including the shared `Icon` component at `src/components/Icon/index.js:240`, which multiplies the problem across every page that renders an icon. Screen readers announce the file path instead of a description, and it fails WCAG 1.1.1. Markdown content is clean by comparison: no image there is missing alt text.
fix: add `alt` to each, with `alt=""` where the image is genuinely decorative, and give `Icon` an `alt` prop that defaults to `""` so decorative icons are explicitly marked rather than unlabelled.
standalone: yes

---

Prettier has two sources of truth that disagree. `.prettierrc` sets `"semi": true`, while the `format` script passes `--no-semi` on the command line, where it wins. So `npm run format` strips semicolons and an editor's Prettier integration puts them back, and whichever ran last decides the diff. Separately, `.gitignore` lists `.prettierrc` and `.prettierignore` under "Dev tool configuration files" even though `.prettierrc` is tracked, so that ignore entry does nothing except suggest the file is local.
fix: delete the redundant flags from the `format` script so `.prettierrc` is the only source, and remove the stale `.gitignore` entries. Reformatting the tree to whichever convention wins deserves its own commit, separate from any behaviour change.
standalone: yes

---

`netlify.toml` sets `YARN_VERSION = "1.5.1"` and `YARN_FLAGS` although the repo uses npm and commits `package-lock.json`, and Netlify selects the package manager from the lockfile. The values are inert, and Yarn 1.5.1 predates the repo by years, so they read as configuration someone is expected to maintain.
fix: delete both from `[build.environment]`. Consider pinning `NODE_VERSION` there instead, which is the setting that actually matters for this build and is currently implicit.
standalone: yes

---

`basscss` is a declared dependency that is never imported: the framework is vendored as a plain stylesheet at `static/css/basscss.css` and loaded through a hand-written `<link>` in `src/html.js`, with a comment noting the npm and Sass imports "are not working". That path is render-blocking, unhashed, and outside the build's cache-busting. The site therefore ships two CSS frameworks (Bulma via Sass, basscss via the static link) on top of its own SCSS.
fix: decide whether basscss is still earning its place. If yes, import it through Sass so it is bundled and hashed, and drop the static copy plus the `<link>`. If no, remove the utility classes it provides (`src/styles/_util.scss` documents itself as the escape hatch for what basscss does not cover) and delete both the dependency and the static file. Either way the npm dependency should not stay unreferenced.
standalone: yes

---

There is no CI. The repo has no `.github/` directory, so nothing checks lint or the build on a pull request; Netlify's deploy previews build each PR, which catches build breakage but not lint, and `npm test` is a placeholder that exits 1. This is how a broken lint setup survived unnoticed.
fix: add a workflow running install, lint, and build on pull requests, after the lint entry above is resolved (a workflow that fails from the first commit gets ignored). Whether `npm test` should become a real test suite is a separate decision; for a marketing site, making it a no-op that exits 0 is defensible, but the current stub that always fails is not.
standalone: no
context: depends on the lint repair above; wiring CI to a lint command that cannot run adds a permanently red check.

---

Ego is discontinued, but the marketing side of the site still presents it as a current product: `constants/products.js` carries an `ego` entry with an icon and title, `constants/pages.js` exposes a `#ego` products anchor, `constants/external-links.js` has three Ego links, and `src/components/NavBar/MegaMenu/index.js` links `documentation/ego`. Keycloak is the current auth recommendation, so a page presenting Ego as a live option is actively misleading.
fix: remove the product entry, the anchor, the three links, and the megamenu entry. The megamenu link is also covered by `roadmap.md` § Phase 2 (it redirects to the deployment guide's authorization page), so do that one in whichever lands first, not twice.
standalone: yes
context: softeng conventions treat any live Ego reference as debt. The documentation section itself is not part of this entry: it goes with the rest of `markdown/documentation/` in phase 2.

---

`constants/external-links.js` has three problems beyond the legacy documentation links that phase 2 replaces. `ARRANGER_LOCAL_LINK` is `https://localhost:8080`, which is both the wrong scheme for a local Arranger and a localhost link shipped on a public site. `OVERTURE_GITHUB_DISSCUSSION_LINK` is misspelled. And five constants (Arranger installation and updates, Ego updates, Maestro updates, Song docs) point at `https://www.overture.bio/documentation/...`, which phase 2 retires.
fix: delete `ARRANGER_LOCAL_LINK` if nothing renders it, rename the misspelled constant, and repoint the five legacy documentation constants at their `docs.overture.bio` targets rather than root-relative paths, using the table in `roadmap.md` § Phase 2.
standalone: no
context: the five documentation constants are part of phase 2's link repointing; the localhost link and the typo are independent and can go any time.

---

`constants/products.js` defines entries for products that are not part of Overture's current lineup: `billing`, `enrolment`, `jukebox`, `oncojs`, `persona`, and `riff`, alongside the live components. Each carries an icon reference and title, so they are ready to render, and a future page that iterates the dictionary would surface them.
fix: confirm which are genuinely retired and delete those entries with their icon assets. This is separate from the Ego entry logged above, which is a retired product still actively linked rather than an unused dictionary entry.
standalone: yes

---

The same 300-character `keywords` meta string is copied verbatim into at least seven pages (`products`, `about-us`, `case-studies`, `services`, `community`, `getting-started`, `acknowledgements`), and it still advertises retired products: "DMS Command Line Interface" and "Overture DMS". Search engines have ignored the `keywords` meta tag for well over a decade, so this is seven copies of a string that does nothing except go stale in seven places at once.
fix: delete the `keywords` meta tag from every page. If it is kept for any reason, move the string into `constants/` so there is one copy, and drop the retired product names. The historical DMS mentions in `src/pages/acknowledgements/index.js` are a record of past grant deliverables and are correct as they stand; leave those.
standalone: yes

---

`src/html.js` loads two Google Fonts stylesheets directly from `fonts.googleapis.com`, with no `preconnect`, and `Source Code Pro` lacks the `display=swap` the Lato request has. Each visit makes a third-party request before text renders, and the privacy page discusses cookies and analytics without naming either Matomo or Google as recipients of visitor data.
fix: self-host the two fonts through the build, which removes the third-party request and the render-blocking round trip together. Whether the privacy page needs updating is a question for whoever owns it, not a code fix: Matomo can be configured cookieless and self-hosted (it is, on `webstats.oicr.on.ca`), and that configuration was not checked as part of this audit.
standalone: yes
