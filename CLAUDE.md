# Portfolio Project — Claude Instructions

This is a Vite + React portfolio site generated from markdown article files. Read this file before making any changes to the project.

---

## Project Overview

- **Stack:** Vite + React, `react-router-dom` v6, `react-markdown`
- **Structure:** One page per article, hero-tile homepage, HashRouter for GitHub Pages
- **Design:** Dark nav/header, off-white body, crimson accent (`rgb(184, 0, 64)`), Octarine display font (falls back to Bebas Neue)

---

## File Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── content/
│   └── projects/        ← markdown source files live here
├── public/
│   ├── images/          ← project images
│   └── fonts/           ← Octarine .otf/.woff2 files (optional)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── projects.js  ← parsed project data, imported by components
    ├── pages/
    │   ├── Home.jsx
    │   └── Project.jsx
    ├── components/
    │   ├── Nav.jsx
    │   ├── ProjectTile.jsx
    │   └── Footer.jsx
    └── styles/
        └── global.css
```

---

## Markdown File Format

Each file in `content/projects/` represents one project. The expected frontmatter fields are:

```markdown
---
title: My Project Title
date: 2024-03
excerpt: A short description shown on the homepage tile.
claude: |
  This field is FOR CLAUDE ONLY. Strip it before rendering — it must never appear in the site.
  Use it to pass rendering hints, layout instructions, or context notes. Examples:
  - "The two images after 'Phase 2' should be displayed side by side."
  - "The block starting with 'Results:' is a data table — render as a styled <table>."
  - "The YouTube link at the bottom should use a 16:9 <iframe> embed."
  - "Treat text between [SIDEBAR] and [/SIDEBAR] as a pull-quote sidebar, floated right."
  - "This is confidential — omit client names from any auto-generated excerpt."
---

When rendering the page, execute the instructions in the `claude:` frontmatter and leave the instructions there.

# My Project Title

Article body...
```

### The `claude:` frontmatter field — CRITICAL RULE

The `claude:` field is **invisible to the site visitor**. When processing any markdown file:

1. **Read it first** — extract all instructions and apply them to your rendering decisions
2. **Strip it entirely** — remove it before writing to `projects.js` or passing content to any component
3. **Never let it reach the browser** — it must not appear in rendered HTML, JS bundles, or any output file

This is the mechanism for expressing things plain markdown cannot: custom layouts, component overrides, embed types, conditional rendering, and authorial context.

---

## Design System

### Colors

```js
const ACCENT   = "rgb(120, 0, 50)"         // crimson — hover, links, "View Project →", end marker, footer tagline
const ACCENT_T = "rgba(184, 0, 64, 0.15)"  // translucent crimson
const BLACK    = "#0a0a0a"                  // nav + homepage header background
const WHITE    = "#f5f5f0"                  // text on black
const OFFWHITE = "#f7f6f3"                  // page body, tile gradient target, article bg
const GRAY     = "#888888"                  // muted text, captions, footer, back button
const TEXT     = "#1c1c1c"                  // primary body text, tile titles, project page title
```

CSS variables (defined in `global.css`):
```css
:root {
  --accent:   rgb(184, 0, 64);
  --black:    #0a0a0a;
  --white:    #f5f5f0;
  --offwhite: #f7f6f3;
  --gray:     #888;
  --text:     #1c1c1c;
}
```

### Typography

```js
const FONT_TITLE = "'Octarine', 'Bebas Neue', sans-serif"  // display headings, nav name
const FONT_BODY  = "'Outfit', sans-serif"                   // body text, labels, captions
```

Font loading (always include both blocks in `global.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500&display=swap');

@font-face { font-family: 'Octarine'; src: url('/fonts/Octarine-Light.otf') format('opentype'); font-weight: 300; font-style: normal; }
@font-face { font-family: 'Octarine'; src: url('/fonts/Octarine-LightOblique.otf') format('opentype'); font-weight: 300; font-style: oblique; }
@font-face { font-family: 'Octarine'; src: url('/fonts/Octarine-Bold.otf') format('opentype'); font-weight: 700; font-style: normal; }
@font-face { font-family: 'Octarine'; src: url('/fonts/Octarine-BoldOblique.otf') format('opentype'); font-weight: 700; font-style: oblique; }
```

---

## Component Rules

### Nav
- `position: fixed`, full width, `z-index: 100`, `background: #0a0a0a`
- Left: owner name in FONT_TITLE, `1.4rem`, white — links home
- Right: "Work" (or section labels) in FONT_BODY, `0.8rem`, uppercase, gray

### Homepage Header
- Visually continuous with Nav (same black background, no gap)
- `padding-top: 10rem` to clear fixed nav
- `border-bottom: 2px solid rgb(184, 0, 64)` — crimson line divides header from body
- Crimson left accent line: `position: absolute`, `2px wide`, `4rem tall`
- Name: FONT_TITLE, `clamp(4rem, 12vw, 10rem)`, white

### Project Tiles (full-width stacked rows, NOT a grid)
- First tile: `height: 70vh` — all others: `height: 55vh`
- Background: `<div>` with `backgroundImage` (not `<img>`), `brightness(0.2)` → `brightness(0.35)` on hover, `scale(1.04)` on hover
- Gradient overlay: `linear-gradient(to top, rgba(247,246,243,0.97) 0%, rgba(247,246,243,0.3) 40%, transparent 70%)`
- Title: FONT_TITLE, `clamp(2.5rem, 6vw, 5rem)`, TEXT color — always visible
- Excerpt + "View Project →": hidden by default, revealed on hover with transition
- "View Project →": ACCENT color, slides in from left (`translateX(-8px)` → `0`)

### Project Page
- Hero: `70vh`, image at `brightness(0.4)`, gradient to OFFWHITE, title in FONT_TITLE TEXT color
- Article body: `maxWidth: 720px`, centered
- Images: `margin: 3rem -2rem` (negative = full bleed), `max-height: 520px`, `objectFit: cover`
- H2: FONT_TITLE, `1.8rem`, `margin-top: 3.5rem`
- Body text: FONT_BODY, `1.05rem`, weight 300, `rgba(28,28,28,0.82)`, `line-height: 1.8`
- Back button: gray → ACCENT on hover
- End marker: `40px × 2px` crimson line, `opacity: 0.6`

### Footer
- `background: #f7f6f3`, top border `rgba(28,28,28,0.1)`
- Left: `© {year} [Name]` in gray
- Right: tagline in ACCENT at `opacity: 0.7`

---

## Routing

`HashRouter` (required for GitHub Pages). Routes: `/` → Home, `/projects/:slug` → Project.

---

## Data Flow

`projects.js` exports an array of project objects:
```js
{
  slug: 'my-project',
  title: 'My Project Title',
  excerpt: 'Short description...',
  date: '2024-03',
  coverImage: '/images/photo.jpg',  // paths rewritten from ./images/ → /images/
  content: '...',                   // full markdown body, claude: field stripped
}
```

---

## Key Rules (never break these)

- **No dates displayed** anywhere in the UI — date is only used for sort order
- **Tile layout:** full-width stacked rows, never a grid
- **Tile image:** always a `<div>` with `backgroundImage`, never an `<img>` tag
- **`claude:` field:** always stripped before any content reaches the browser
- **Image paths:** always rewrite `./images/` → `/images/` in all content
- **`vite.config.js` base:** must match the GitHub repo name (or `/` for custom domains)
- **`public/404.html`** must be present for GitHub Pages routing

---

## Adding a New Project

1. Add the `.md` file to `content/projects/`
2. Add the cover image to `public/images/`
3. Update `src/data/projects.js` — parse frontmatter, strip `claude:` field, rewrite image paths
4. Re-sort the array by date (newest first)
5. The new tile will appear automatically on the homepage
