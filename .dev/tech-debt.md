# Tech debt

Entry format: `conventions/session-discipline.md` § Tech-debt entry format (agentics template; see [AGENTS.md](../AGENTS.md)).

Ordered roughly by severity. Most entries were logged from the 2026-08-06 audit; see `sessions/` for what was verified how.

**Check `roadmap.md` § Consolidate into the Docusaurus site before fixing anything here.** This repo is being ported into that site, and several entries below are resolved by the move rather than by work here. Shipping the docs-aligned site first is the exception: that code is temporary, but it is what production serves in the meantime.

---

Lint runs, and reports 15 errors and 68 warnings against existing code, so `npm run lint` exits non-zero and cannot be a gate yet. Three of the errors are real: `src/components/NavBar/MegaMenuLink/index.js:11` passes `activeClassName` to a plain DOM element, where it silently does nothing; `src/components/ImageCrossfade/index.js:12` uses `componentWillReceiveProps`, deprecated since React 16.9, which matters because that component is one phase 3 ports rather than deletes; and `src/hooks/useSSRWorkaround.js` sets state directly in an effect, though that hook does not survive phase 3 at all. The other twelve are cosmetic or die with the dead components: nine unescaped apostrophes, two missing display names, and one unreachable statement in `GridFeature`.
fix: fix the three real ones, verifying each against a build rather than trusting autofix, and take `react/no-unescaped-entities` as a config decision (switching it off is defensible for prose-heavy JSX). The 68 warnings are almost entirely unused variables, which the dead-component entry below clears in bulk.
standalone: no
context: blocks the CI entry below, since a workflow added now would be red from its first run. Six lint findings were fixed at source across phases 1 and 2: duplicate `default` keys in `Button`, external links with no `rel`, a no-op statement in `Layout`, conditional hooks in `useActiveId`, and two more that went with the deleted documentation components.

---

Six components are dead: nothing outside their own directory imports any of their exported symbols. `BottomCallout` (exports `BottomCallout`, `Callout`), `GettingStarted`, `GridFeature`, `MarketingSection`, `ProductHero`, and `WindowGui`, together 25 files and roughly 224KB, most of it `ProductHero`'s SVGs. Removing them also orphans `ProductFeature` (used only by `GridFeature`) and `ProgressBar` (used only by `ProductHero`), and leaves the `.BottomCallout` rule at `src/styles/main.scss:124` with nothing to style.
fix: delete the six directories, their `src/components/index.js` barrel exports, the two components they orphan, and the orphaned CSS rule. Confirm against a production build rather than the dev server, since the dead-code check was static.
standalone: yes

---

A Netlify CMS configuration left over from the `gatsby-starter-business` template is published on the live site. `static/admin/config.yml` is served at <https://www.overture.bio/admin/config.yml> (verified 200) and declares `backend: git-gateway`, `publish_mode: editorial_workflow`, and collections pointing at files that do not exist (`src/pages/index.md`, a `blog` collection). There is no `admin/index.html`, so the CMS UI itself is not reachable, but the file describes repo internals to anyone who looks.
fix: delete `static/admin/`.
standalone: yes

---

The site's canonical host and its configured host disagree. `meta/config.js` sets `siteUrl: 'https://overture.bio'`, but the apex domain 301-redirects every path to `www.overture.bio` (verified). Everything derived from `siteUrl`, including the sitemap's URLs and any canonical or Open Graph tag, therefore names a host that immediately redirects.
fix: set `siteUrl` to `https://www.overture.bio` to match what Netlify actually serves, or change the Netlify domain configuration to make the apex canonical. One or the other, not both.
standalone: yes

---

There is still no `robots.txt` (404 on the live site), so nothing points crawlers at the sitemap. The sitemap itself now builds at the conventional `/sitemap-index.xml`, fixed in phase 2 by setting the plugin's `output` to `/`.
fix: add a `static/robots.txt` naming the sitemap URL. Fix the `siteUrl` entry above first, since the sitemap's URLs come from it and would otherwise advertise the redirecting apex host.
standalone: no
context: coupled to the `siteUrl` entry above.

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

Ego is discontinued, but it is still a product on the marketing pages: `constants/products.js` carries an `ego` entry with an icon and title, `constants/pages.js` exposes a `#ego` products anchor, and the homepage links to it (`src/pages/index.js:350`). Keycloak is the current auth recommendation, so presenting Ego as a live option is misleading. Phase 2 removed its documentation section, its megamenu entry, and its three link constants.
fix: remove the product entry, the anchor, and the homepage tile, alongside the other retired products in the entry below.
standalone: yes

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

---

`src/pages/case-studies/navigation.js` is a component, not a page, but it sits under `src/pages/`, so Gatsby publishes it as a route: `/case-studies/navigation/` renders a bare navigation strip with no page around it, and phase 2's build confirmed it is also listed in the sitemap.
fix: move the file out of `src/pages/` (a `components/` subdirectory next to its only consumer) and update the import. Check the built output afterwards to confirm the route and its sitemap entry are gone.
standalone: yes

---

Every in-page product anchor on the site is dead. `src/components/ProductsPageSection/index.js:52` sets `id={`${mobileViewPort && title.toLowerCase()}`}`, and `mobileViewPort` is false during server rendering, so the built products page carries `id="false"` eight times and no `id="song"`, `id="score"`, `id="maestro"`, or `id="arranger"` at all. The homepage's five product tiles link to `/products/#song` and friends, so each one lands at the top of the products page and scrolls nowhere. Even after hydration the ids only exist at some viewport widths, which is what the conditional was for.
fix: set the id unconditionally from the title and let CSS handle the scroll offset (`scroll-margin-top`), rather than deriving an id from a viewport measurement. Verify against the built HTML, not the dev server, since this is a server-rendering difference.
standalone: yes

---

The homepage still promotes Ego, and its link goes nowhere. `src/pages/index.js:348` renders an Ego tile pointing at `/products/#ego`, but the products page has had no Ego section for some time: it covers Song, Score, Maestro, and Arranger only. So the tile advertises a discontinued product and lands on an unrelated page. Separately, the products page is missing Lectern, Lyric, and Stage, all of which the documentation site covers, so the page under-represents the current stack.
fix: remove the Ego tile with the rest of the Ego cleanup, then decide whether the products page should grow sections for Lectern, Lyric, and Stage. The second half is a content decision for whoever owns the page, and it is worth taking together with the vocabulary alignment in `roadmap.md`, since both are about the site describing the current stack.
standalone: no
context: the anchor half of this is covered by the entry above; this entry is about which products the site claims to have.

---

The megamenu is unreachable, and a whole subsystem exists to serve it. `NavBar` renders plain `NavLink`s and never calls `toggleMegaMenu`, so `megaMenuType` is always null and `MegaMenu` only ever returns its empty animation div: "Explore our documentation" appears zero times in the built homepage. The component that would open it, `MegaMenuLink`, is imported by nothing at all. Dead alongside them: `NavBar`'s unused `megaMenuType` prop, `Layout`'s `megaMenuOpen`/`megaMenuType`/`popOverRef` state with `openMegaMenu`, `closeMegaMenu`, and `toggleMegaMenu`, the `desktopMegaMenuCheck` viewport measurement, and `src/hooks/useSSRWorkaround.js`, whose only consumer was `MegaMenuLink`. This also accounts for two of the 15 remaining lint errors.
fix: decide whether the megamenu is coming back. If not, delete `MegaMenu`, `MegaMenuLink`, the `useSSRWorkaround` hook, and the megamenu state and handlers in `Layout`, which is most of what is left of that class component. If it is, wire `MegaMenuLink` into `NavBar` and check it against a browser, since none of this appears in server-rendered HTML. Either way the site's documentation navigation today is the plain "Documentation" navbar link, which points at the docs site root.
standalone: yes
context: this corrects an earlier note that `useSSRWorkaround` had to stay because `MegaMenuLink` used it. That consumer is itself dead, so the hook is too.
