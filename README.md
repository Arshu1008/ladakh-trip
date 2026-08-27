# Ladakh — The High Road

A single-page React travel site built from your Ladakh trip photos and
clips: a muted looping video hero, an animated route of seven real
waypoints (Sonmarg → Zoji La → Thajiwas Glacier → Khardung La → Nubra
Valley → Pangong Tso → Leh) with actual elevations, a scroll-triggered
reel strip, a WebP photo gallery with a full lightbox, and scroll-reveal
animations throughout — no UI libraries, just React + hand-written CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional, serves the production build locally
```

The static site is output to `dist/` — deploy that folder anywhere
(Vercel, Netlify, GitHub Pages, S3, etc).

## Project structure

```
src/
  assets/photos/     enhanced trip photos — WebP, color/contrast graded
  assets/videos/      trimmed, compressed hero + reel clips (mp4) with
                       matching WebP poster frames
  components/
    Preloader.jsx      splash screen shown on first paint
    Nav.jsx             fixed nav + mobile hamburger menu
    Hero.jsx            looping muted background video, mute toggle
    Journey.jsx          the 7-stop route timeline
    Reels.jsx             Instagram-style autoplay video cards
    Gallery.jsx            WebP photo grid
    Lightbox.jsx             photo lightbox (keyboard nav)
    ReelLightbox.jsx          video lightbox with sound + controls
    Closing.jsx                closing quote + footer
  data/
    waypoints.js       the route + photo gallery data
    reels.js             hero + reel video data
  hooks/useReveal.js  IntersectionObserver-based scroll-reveal hook
  index.css           design tokens + all styles
```

## Customizing

- **Swap or add photos**: drop new `.webp` files in `src/assets/photos/`
  and reference them in `src/data/waypoints.js`.
- **Swap or add video clips**: drop an `.mp4` + poster `.webp` in
  `src/assets/videos/` and reference them in `src/data/reels.js`. Keep
  clips short (6–10s) and under a few MB — they're meant to loop.
- **Edit the route**: each entry in the `waypoints` array in
  `waypoints.js` controls a stop in the "Route" section (name, altitude,
  coordinates, and the caption text).
- **Colors/fonts**: all design tokens live at the top of `src/index.css`
  under `:root`.

## Media notes

- Photos are re-encoded as WebP (quality 82) instead of JPEG for smaller
  file size at the same visual quality.
- Videos are H.264 mp4, muted, `faststart`-flagged for instant playback,
  downscaled to fit their display size — the whole hero + 4 reel clips
  come in under 6MB combined.
- The hero video respects `prefers-reduced-motion` and falls back to a
  static poster image if video can't play.

