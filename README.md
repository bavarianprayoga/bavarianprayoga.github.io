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
  The scene-name native dropdown offers all 15
  library scene presets, grouped into Nature, Places and Space. Choices are
  lazy-loaded and remembered locally, without resetting the pause state.
  Scene changes use a 1.6-second pixel dissolve: random 4 × 4 ASCII-cell
  tiles conceal the old scene, pause briefly on a dark grid, then reveal the
  new live scene through the same grid. No opacity fade or prerecorded assets.
  Reduced motion switches immediately instead.
  `Shuffle` chooses a new scene immediately and rotates every 30 seconds
  without repeating the current scene. Pause stops both animation and rotation.
  Rotation also waits while the tab is hidden, and the choice is remembered
  across visits.
  The floating scene caption doubles as the dropdown, alongside the
  `ascii.rest` source link, rather than duplicating the name elsewhere.
  During Shuffle it displays the current scene name with a Shuffle suffix.
- Desktop uses one independently scrolling, 35vw reading pane; narrow screens
  use normal page scrolling. Scrollbar tracks are hidden without disabling
  scrolling. A separate black backdrop stays translucent (70% on desktop),
  easing across 20vw beyond the reading pane before becoming transparent at
  55% across the viewport from its content-side edge. This shorter transition
  leaves more scenery unobscured, without narrowing the reading pane or its
  unchanged bottom fade.
  The desktop `[swap]` button mirrors the composition: content, backing and
  reading fade switch left/right while the controls move to the opposite edge.
  Right-side text, contacts, separators and portrait/caption align to the right;
  swapping back restores left alignment, without reversing any characters.
  The control row and its credit group reverse on the left so `ascii.rest`
  stays in the outer corner, with native Tab order following the visible row.
  Content and controls slide off their current viewport edges (240ms), relocate
  while fully outside, then slide back in from the opposite edges (320ms).
  They stay opaque, with no cross-screen sweep or bounce; the reading feather
  follows the content, while the backing crossfades without moving the scenery.
  Scroll position, focus, scene and pause state are preserved, including rapid
  reversals. Resizing settles the new layout; reduced motion switches instantly.
  The side is remembered locally and restored before the initial paint. On
  narrow screens the button is hidden, content stays full-width and controls
  stay bottom-right; the desktop preference remains saved.
- All portfolio text and destinations remain semantic HTML. The background is
  decorative, inert and pointer-transparent. A server-rendered first frame and
  font fallback keep the page usable without JavaScript.
- `[tone: cool]` and `[freeze]` / `[resume]` join the scene dropdown and credit
  in one fixed bottom-edge line, with `[swap]` on desktop. The row mirrors when
  it moves left, keeping the source link nearest the viewport corner.
  All use the original
  Ioskeley Mono size; there is no panel, border or button box. The scene name
  takes only the space it needs, contracting on narrow screens instead of
  wrapping the row. The opened native list retains the full names.
  The reading pane has a short, feathered bottom fade (80–112px on desktop),
  confined to the content side. The floating controls keep only their original
  diffuse shadow, with no extra mask or fade behind them. The reading fade has
  no tall black shelf and does not intercept clicks or scrolling.
  Content reserves the reading fade's full height; narrow screens also account
  for the control row so final lines and focused links remain readable.
  Without JavaScript, interactive controls stay hidden and the static
  `Alpine Dawn / ascii.rest` caption remains visible.
- Reduced-motion preferences start the scene frozen, and changes to that
  preference are respected. The existing theme preference is retained as
  `[tone: cool]` / `[tone: warm]`: cool white gradually eases into warm yellow
  over 650ms (and back again), including links, separators and text controls.
  Both use light text on the same dark backing, with no scenery-obscuring ripple.
  Saved tones render directly on load; reduced-motion tone changes are instant.
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
