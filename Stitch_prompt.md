# Stitch Prompt — Sean Personal Website

Paste the entire **PROMPT** block into [Google Stitch](https://stitch.withgoogle.com) as a **desktop web** project.  
Style reference: [Terminal CLI](https://www.designprompts.dev/terminal) on [designprompts.dev](https://www.designprompts.dev/), remapped from phosphor green to **black + blue**.

Generate **4 high-fidelity prototype screens** (Home, About Me, Contact Me, Works) plus a **loading screen**. Do **not** include photographs, portraits, headshots, product photos, or stock images. Use geometric frames, ASCII, scanlines, and TV-static placeholders only.

---

## PROMPT

```
Design a desktop personal-website prototype for Sean — a geek / hacker-portfolio homepage used to showcase work and provide contact. Four clickable pages plus a CRT boot loader. No photographs, no avatars, no illustrations of people, no stock imagery.

# Design Philosophy
The aesthetic pays homage to the raw power of the command line, remapped onto a late-90s CRT television. It strips away decorative UI chrome to reveal the system underneath. It is brutally functional, high-contrast, and authentically retro-geek — not “Matrix rain” (too cliché), not neon cyberpunk overload. It should feel like a clean, usable ZSH/BASH session running inside an old TV: phosphor-blue on deep black, scanlines, a blinking block cursor.

The vibe is Cyber-Industrial, Hacker, System-Level, and slightly analog. Every screen is a single viewport (no scroll-driven effects, no parallax, no sticky-reveal). Page changes are fade-out then fade-in. First visit (and hard refresh) plays an old-fashioned TV loading sequence before the Home page appears.

Key visual signatures:
- Monospace supremacy: every character, from the largest headline to the smallest footer label, is monospaced.
- The cursor: a blinking block `█` or underscore `_` is the heartbeat of the interface.
- Shell metaphors: prompt characters (`>`, `$`, `~`), command flags (`--help`), status codes (`[OK]`, `[BOOT]`, `[READY]`).
- CRT overlay: a very faint scanline + analog noise texture. Depth without ruining readability.
- Zero photos: empty picture slots are CRT frames filled with static, ASCII silhouettes, or a labeled box such as `[ NO SIGNAL ]` / `[ IMG_SLOT ]`. Never generate a face.

# Design Token System

## Colors (Dark Mode Only)
Primary colors are black and blue. Accents and text may use related cool tones. High contrast is non-negotiable.

- Background: `#05070B` (near-black TV glass)
- Surface / pane: `#0B1220`
- Foreground / body text: `#C8D8F0` (cool off-white, readable on black)
- Primary: `#1E6FFF` (electric blue)
- Accent: `#4CC3FF` (cyan-blue glow for cursors, active nav, links)
- Muted: `#3A4A66` (inactive text, ASCII rules)
- Border: `#1A335C`
- Error / abort: `#FF4D4D`
- Text glow: `text-shadow: 0 0 6px rgba(76, 195, 255, 0.35)`

## Typography
- Font: JetBrains Mono, IBM Plex Mono, or Fira Code. No serif. No rounded display fonts.
- Headers: ALL CAPS or Title Case with tracking. Hero greeting may mix lowercase for “hello, I'm Sean”.
- Scale: snap to a rigid modular / character grid. Do not use fluid, marketing-site type ramps.

## Radius, Borders, Shadows
- Radius: 0px. No rounded corners except the outer CRT bezel (slightly rounded TV housing only).
- Borders: 1px solid or dashed blue. Panes feel like `tmux` splits.
- No drop shadows. Optional inner CRT vignette. Blue phosphor glow on active text and the primary button.

# Component Stylings

## Navigation
- Position: FIXED top-right on every screen.
- Items, in this order: Home · About Me · Contact Me · Works
- Style: monospaced labels, muted by default, accent + underline or inverted block when active. Prefixed like `> HOME` for the current page.
- Behavior: click jumps to a new page (not in-page anchors). Transition: 200–400ms fade out, then fade in. No slide, no scroll hijack.

## Buttons
- Structure: bracketed command `[ CONTACT ME ]` or inverted blue block with black text.
- Hover: fill with primary blue, text becomes `#05070B` (inverted video).
- Active: 1px press or a short blink.

## Cards / Panes
- Black-blue box, 1px `#1A335C` border.
- Title bar: `+--- WORKS / 01 ---+` or a solid inverted bar.
- Interior: padded monospaced copy. No photo thumbnails.

## Inputs (Contact)
- Prompt-style fields: `name@sean:~$` then a caret. Blinking block cursor. No pill-shaped inputs.

# Global Chrome (all pages)
- Outer composition: a dark room around a centered CRT monitor / TV bezel. The website UI lives on the screen glass.
- Top-right: the fixed nav.
- Optional status strip at the bottom of the glass: `SYS.READY  |  NTSC  |  60Hz  |  [OK]`
- Do not add a traditional marketing header logo. A small text mark `SEAN://` or `root@sean` may sit top-left.

# Motion
- Page transition: fade in / fade out only.
- Scrolling effect: none. Each prototype frame is a single screen. If content is dense, stack it inside the CRT, but do not design scroll-triggered animations.
- Loading: old-fashioned television boot (see Loading screen).

# Imagery policy (critical)
- Do not generate photos, portraits, selfies, illustrated people, or decorative stock photos.
- Avatar / image slots = empty CRT, TV snow, ASCII bust, or a dashed frame labeled `[ AVATAR SLOT ]`.
- Icons: simple line glyphs or ASCII (`GH`, `WX`, `XHS`). Not colorful app-store logos as photographs.

---

# SCREENS TO GENERATE

## 0) Loading — Old-fashioned TV
Full-bleed black CRT.
Sequence implied in one still (or a single keyframe that reads as “booting”): analog static, horizontal roll, then a centered phosphor-blue readout:

```
> POWER ON
> TUNING...
> SIGNAL LOCK
[||||||||||....] 72%
```

A blinking block cursor. Scanlines and vignette. No logo photo. This is the site’s loading effect.

## 1) Home
Purpose: personal homepage hero.

Layout:
- Fixed nav, top-right: Home (active), About Me, Contact Me, Works.
- Center of the CRT, vertically and horizontally: the main greeting in large monospace type:

hello, I'm Sean

- Directly below the greeting: primary CTA button `[ CONTACT ME ]` (links to Contact Me).
- Optional one-line status under the button, muted: `> portfolio online · works / contact`
- No portrait. No background photograph. Empty space is CRT glass + scanlines.
- Do not add extra marketing sections on Home. Keep it sparse, one-screen, no scroll.

## 2) About Me
Purpose: who Sean is. Creative freedom within the geek system.

Suggested (not mandatory) layout — pick a tmux-split composition:
- Left pane: `cat ./about.md` with 3–5 short lines (developer / builder, based in [city optional], currently shipping personal work).
- Right pane: a compact skill matrix as ASCII progress bars, e.g. `react   [||||||||..]`, `node    [|||||||...]`, `linux   [||||||||.|]`
- A small “image” pane that is explicitly empty: `+--- PROFILE ---+` with `[ NO SIGNAL ]` static, not a face.
- Keep it one screen. No scroll effects.

## 3) Contact Me
Purpose: how to reach Sean.

Layout:
- Fixed nav, Contact Me active.
- Left or center: contact channels as a directory listing, not a photo grid:

```
/contact
  wechat        @sean
  github        github.com/sean
  xiaohongshu   @sean
```

Each row is a selectable pane or `> open` command. Use text handles only.
- Optional right column: a square CRT frame labeled `[ AVATAR SLOT ]` filled with TV snow or an ASCII head outline — still not a photograph.
- Optional prompt form at the bottom: `sean@inbox:~$ send --from _` with fields Name / Email / Message as terminal inputs, plus `[ SEND ]`.
- No QR-code photos, no screenshots of apps.

## 4) Works (Portfolio)
Purpose: showcase work. Creative freedom within the geek system.

Layout:
- Fixed nav, Works active.
- A grid or `ls -l` listing of 4–6 projects as bordered panes (not image cards). Each item:

```
+--- PROJECT / 0N ---+
title
one-line summary
tags: react · rest
[ OPEN ]
```

Where a thumbnail would be, use a hashed pattern, ASCII schematic, or `[ PREVIEW OFF ]`. Never a screenshot photo.
- One-screen gallery. If needed, two rows of three. No masonry of photographs.

# Output
High-fidelity desktop UI prototypes (1440×900 or 1512×982). Consistent tokens across all screens. Show the CRT bezel consistently. Mark the active nav item on each page. Remember: fade transitions, no scroll effects, TV boot as loading, black + blue geek terminal language, zero photographic imagery.
```
