yuhuhuuuuu

## Local preview

Requires Node.js **22.12.0 or newer** and npm **9.6.5 or newer**. Node 24 is
recommended and is also used by the existing GitHub Pages build action.

```sh
npm ci
npm run build
npm run preview -- --host 0.0.0.0 --port 4321
```

Open **http://localhost:4321/** in your Windows browser when running on WSL.
For development with live reload: `npm run dev -- --host 0.0.0.0 --port 4321`.
If WSL localhost forwarding is unavailable, use the WSL IP address on port 4321.
The preview server serves the built static site; rebuild after changing sources.

## ASCII Rest redesign

- Alpine Dawn initially fills a fixed, uniformly scaled 2:1 landscape stage.
  `[scene: Alpine Dawn v]` is a native keyboard/touch dropdown offering all 15
  library scene presets, grouped into Nature, Places and Space. Choices are
  lazy-loaded and remembered locally, without resetting the pause state.
  Scene changes use a gentle 1.2-second dissolve, with no zoom or black flash;
  reduced motion switches immediately instead.
  `Random — every 30s` chooses a new scene immediately and rotates every 30
  seconds without repeating the current scene. Pause stops both animation and
  rotation. Rotation also waits while the tab is hidden, and the Random choice
  is remembered across visits.
  The current scene and ASCII Rest credit remain in the bottom-right caption
  on desktop, not in the main content.
- Desktop uses one independently scrolling, 35vw reading pane; narrow screens
  use normal page scrolling. Scrollbar tracks are hidden without disabling
  scrolling. A separate black backdrop stays translucent (70% on desktop).
- All portfolio text and destinations remain semantic HTML. The background is
  decorative, inert and pointer-transparent. A server-rendered first frame and
  font fallback keep the page usable without JavaScript.
- `[pause scene]` / `[play scene]` controls animation. Reduced-motion preferences
  start the scene paused, and changes to that preference are respected.
- The existing theme preference is retained as `[tone: cool]` / `[tone: warm]`:
  both use light text on the same dark backing, with no scenery-obscuring ripple.
- ASCII Rest's dividers piece generates the in-panel ornament. Only row 11 of its
  sample sheet is used, not the entire demonstration output. Its text receives
  an explicit Ioskeley Mono font override.

### Sources and reproducibility

The current [official ASCII Rest README](https://github.com/bas3line/ascii)
uses the published `ascii.rest` package (instead of the older GitHub install
route). This site pins **ascii.rest 0.2.1**, uses `ascii.rest/astro`, and records
its registry integrity hash in `package-lock.json`. The official Astro wrapper,
custom-element renderer, scene metadata and Alpine Dawn/dividers/form-controls
sources were inspected before integration. The form-controls piece is an animated
example, not an interactive form, so the scene chooser uses semantic HTML.

**Ioskeley Mono v2.1.0** Regular and Medium WOFF2 files come from the official
[web-font release](https://github.com/ahatem/IoskeleyMono/releases/tag/v2.1.0).
They are self-hosted in `public/fonts/ioskeley-mono/`; that directory includes
release/asset hashes and the SIL Open Font License 1.1.

Deployment remains Astro's static GitHub Pages build. The site URL and
`public/CNAME` remain **bavarianprayoga.dev**. No deployment is needed for the
local preview.

## Astro 7 upgrade

Upgraded using the [official Astro 7 migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/):

- Astro **7.3.7** and its compatible MDX integration **8.0.3**.
- Removed the old Vite 7 override so Astro can use Vite 8 (currently **8.3.4**).
- Retained Tailwind 4, the static Pages configuration, custom domain and portfolio
  components. No template or Markdown processor compatibility overrides were needed.

`package-lock.json` records the resolved versions; use `npm ci` for reproducible
installs.
