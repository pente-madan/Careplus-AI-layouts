# Design System — Styling & CSS Reference
> AI Suggestion Interface · Extracted from CarePlus Website 2.0

---

## Table of Contents

1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing Scale](#3-spacing-scale)
4. [Border Radius](#4-border-radius)
5. [Shadow System](#5-shadow-system)
6. [Button Styles](#6-button-styles)
7. [hover-effects.css](#7-hover-effectscss)
8. [AOS Classes Reference](#8-aos-classes-reference)
9. [CSS Token Master Reference](#9-css-token-master-reference)

---

## 1. Color Palette

### Primitive Values

| Token | Hex | Use |
|-------|-----|-----|
| `--color-red-600` | `#C94234` | Primary brand |
| `--color-red-50` | `#FFF5F5` | Secondary background |
| `--color-red-ghost` | `rgba(201,66,52,0.05)` | Hover fill |
| `--color-red-ghost-md` | `rgba(201,66,52,0.10)` | Badge/tag bg |
| `--color-red-border` | `rgba(201,66,52,0.20)` | Hover border |
| `--color-white` | `#ffffff` | Base background |
| `--color-slate-900` | `#0f172a` | Primary text |
| `--color-slate-600` | `#475569` | Body text |
| `--color-slate-500` | `#64748b` | Muted text |
| `--color-slate-100` | `#f1f5f9` | Muted bg |
| `--color-slate-50` | `#f8fafc` | Alternate section bg |
| `--color-border` | `#e2e8f0` | Default border |

### Semantic Tokens — `theme.css`

```css
:root {
  /* Backgrounds */
  --background:             #ffffff;
  --background-alt:         #f8fafc;
  --background-muted:       #f1f5f9;

  /* Text */
  --foreground:             #0f172a;
  --text-body:              #475569;
  --text-muted:             #64748b;

  /* Brand */
  --primary:                #C94234;
  --primary-foreground:     #ffffff;
  --primary-hover:          #b03b2f;
  --primary-ghost:          rgba(201, 66, 52, 0.05);
  --primary-ghost-hover:    rgba(201, 66, 52, 0.10);

  /* Secondary */
  --secondary:              #FFF5F5;
  --secondary-foreground:   #C94234;

  /* Borders */
  --border:                 #e2e8f0;
  --border-hover:           rgba(201, 66, 52, 0.20);

  /* Transitions */
  --transition-fast:        150ms ease;
  --transition-base:        300ms ease;
  --transition-slow:        500ms ease;
  --transition-image:       700ms ease;
}
```

### Color Usage Rules

- **Section alternating bg** → white → `#f8fafc` → white (never two dark sections back-to-back)
- **Headings** → `--foreground`
- **Body copy** → `--text-body`
- **Captions, labels** → `--text-muted`
- **Brand accents, underlines, icon fills** → `--primary`
- **Never** hardcode hex inside components — always reference tokens

---

## 2. Typography

### Font Families

| Role | Font | Weights |
|------|------|---------|
| Primary UI | Plus Jakarta Sans | 300, 400, 500, 600, 700, 800 |
| Display accent | Lato | 300, 400, 700, 900 |

### Font Import — `fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
```

### Base Typography — `theme.css`

```css
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--foreground);
  background-color: var(--background);
}

h1 { font-size: 5rem;    font-weight: 500; line-height: 1.1;  }
h2 { font-size: 2.5rem;  font-weight: 500; line-height: 1.2;  }
h3 { font-size: 1.5rem;  font-weight: 500; line-height: 1.4;  }
h4 { font-size: 1rem;    font-weight: 500; line-height: 1.5;  }
p  { font-size: 1rem;    font-weight: 300; line-height: 1.7;  }
```

### Type Scale

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hero headline | `5rem` | 500 | 1.1 |
| Hero headline (mobile) | `3rem` | 500 | 1.15 |
| Section heading | `2.5rem` | 500 | 1.2 |
| Card title | `1.5rem` | 500 | 1.4 |
| Body large | `1.25rem` | 300 | 1.7 |
| Body | `1rem` | 400 | 1.6 |
| Label / eyebrow | `0.75rem` | 700 | 1.5 |
| Button text | `0.75rem` | 700 | 1.5 |

### Typography Rules

- **Eyebrow text** → `font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--primary);`
- **Italic accent** in headlines → `font-style: italic; color: var(--primary);` applied to one word only
- **Body copy** → always `font-weight: 300` or `400` — never bold body paragraphs
- **Button labels** → always `text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; font-size: 0.75rem;`

---

## 3. Spacing Scale

Base unit: **8px grid**. All padding, gap, and margin values are multiples of 4px or 8px.

| Value | rem | Common Use |
|-------|-----|-----------|
| `4px` | `0.25rem` | Icon inner gaps |
| `8px` | `0.5rem` | Tight inline gaps |
| `12px` | `0.75rem` | Compact padding |
| `16px` | `1rem` | Base padding |
| `24px` | `1.5rem` | Card internal padding |
| `32px` | `2rem` | Component spacing |
| `40px` | `2.5rem` | Content gap |
| `48px` | `3rem` | Section vertical padding |
| `64px` | `4rem` | Section outer gap |
| `80px` | `5rem` | Section padding (default) |
| `96px` | `6rem` | Hero content padding |
| `112px` | `7rem` | Section padding (desktop) |

**Section padding rule:** All full-width sections → `padding: 5rem 0` (mobile), `7rem 0` (desktop).

---

## 4. Border Radius

```css
--radius-sm:    0.375rem;   /* 6px  — badges, inputs, tags */
--radius-md:    0.5rem;     /* 8px  — small buttons */
--radius-base:  0.625rem;   /* 10px — cards (default) */
--radius-lg:    0.875rem;   /* 14px — feature panels */
--radius-xl:    1rem;       /* 16px — large cards */
--radius-2xl:   1.5rem;     /* 24px — hero elements */
--radius-full:  9999px;     /* pill  — CTA buttons, avatars, icon rings */
```

**Key rule:** Primary CTA buttons → always `border-radius: var(--radius-full)`.

---

## 5. Shadow System

```css
--shadow-sm:            0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
--shadow-md:            0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
--shadow-xl:            0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04);
--shadow-2xl:           0 25px 50px rgba(0,0,0,0.15);
--shadow-glow-white:    0 0 20px rgba(255,255,255,0.50);
--shadow-glow-primary:  0 0 30px rgba(201,66,52,0.15);
```

| Token | Use |
|-------|-----|
| `--shadow-sm` | Card resting state |
| `--shadow-md` | Hover — small cards |
| `--shadow-xl` | Hover — medium cards |
| `--shadow-2xl` | Hover — large feature cards |
| `--shadow-glow-white` | Button glow on dark/hero backgrounds |
| `--shadow-glow-primary` | Red accent glow on brand elements |

**Rule:** All shadow transitions → `transition: box-shadow var(--transition-slow);`

---

## 6. Button Styles

### Primary — Filled Red

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius-full);
  padding: 1rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: none;
  transition: background-color var(--transition-base),
              box-shadow var(--transition-base);
}
.btn-primary:hover {
  background-color: var(--primary-hover);
}
```

### Outline — On Light Background

```css
.btn-outline-light {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: var(--primary);
  border: 1px solid rgba(201, 66, 52, 0.30);
  border-radius: var(--radius-full);
  padding: 1rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: background-color var(--transition-base),
              color var(--transition-base),
              border-color var(--transition-base);
}
.btn-outline-light:hover {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-color: var(--primary);
}
```

### Outline — On Dark / Hero Background

```css
.btn-outline-dark {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(255, 255, 255, 0.10);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: var(--radius-full);
  padding: 1rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  backdrop-filter: blur(12px);
  transition: background-color var(--transition-base),
              color var(--transition-base),
              border-color var(--transition-base),
              box-shadow var(--transition-base);
}
.btn-outline-dark:hover {
  background-color: #ffffff;
  color: #0f172a;
  border-color: #ffffff;
  box-shadow: var(--shadow-glow-white);
}
```

### Arrow Icon Wrapper — shared across all button types

```css
.btn-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.20);
  border-radius: var(--radius-full);
  padding: 0.25rem;
  transition: transform var(--transition-base), color var(--transition-base);
}

.btn-primary:hover .btn-arrow,
.btn-outline-dark:hover .btn-arrow,
.btn-outline-light:hover .btn-arrow {
  transform: translateX(4px);
}
```

---

## 7. hover-effects.css

Full file — save as `src/styles/hover-effects.css`.

```css
/* ==============================================
   hover-effects.css
   AI Suggestion Interface
   Source: CarePlus Website 2.0
   ============================================== */


/* -----------------------------------------------
   1. CARD LIFT
   Usage: class="card-lift"
   Direct hover on the card wrapper
----------------------------------------------- */
.card-lift {
  transition: transform var(--transition-slow),
              box-shadow var(--transition-slow),
              border-color var(--transition-base);
}
.card-lift:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--border-hover);
}


/* -----------------------------------------------
   2. IMAGE REVEAL — grayscale to color + scale
   Usage: class="img-reveal" on <img>
   Requires parent class="group"
----------------------------------------------- */
.img-reveal {
  filter: grayscale(100%);
  transform: scale(1);
  transition: filter var(--transition-image),
              transform var(--transition-image);
}
.group:hover .img-reveal {
  filter: grayscale(0%);
  transform: scale(1.1);
}


/* -----------------------------------------------
   3. ICON FLIP — bg turns primary red
   Usage: class="icon-flip" on icon wrapper div
   Requires parent class="group"
----------------------------------------------- */
.icon-flip {
  background-color: rgba(255, 255, 255, 0.90);
  color: var(--primary);
  transition: background-color var(--transition-base),
              color var(--transition-base);
}
.group:hover .icon-flip {
  background-color: var(--primary);
  color: #ffffff;
}


/* -----------------------------------------------
   4. ICON SCALE — wrapper grows on hover
   Usage: class="icon-scale" on icon wrapper div
   Requires parent class="group"
----------------------------------------------- */
.icon-scale {
  transition: transform var(--transition-base);
}
.group:hover .icon-scale {
  transform: scale(1.1);
}


/* -----------------------------------------------
   5. ARROW SLIDE — arrow nudges right
   Usage: class="arrow-slide" on arrow icon wrapper
   Requires parent class="group"
----------------------------------------------- */
.arrow-slide {
  transition: transform var(--transition-base);
}
.group:hover .arrow-slide {
  transform: translateX(4px);
}


/* -----------------------------------------------
   6. ROW ITEM — list row fills on hover
   Usage: class="row-item"
   Direct hover
----------------------------------------------- */
.row-item {
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  transition: background-color var(--transition-base),
              border-color var(--transition-base);
}
.row-item:hover {
  background-color: var(--primary-ghost);
  border-color: var(--border-hover);
}


/* -----------------------------------------------
   7. TEXT COLOUR SHIFT — heading turns red
   Usage: class="text-hover-primary" on h3/h4
   Requires parent class="group"
----------------------------------------------- */
.text-hover-primary {
  color: var(--foreground);
  transition: color var(--transition-base);
}
.group:hover .text-hover-primary {
  color: var(--primary);
}


/* -----------------------------------------------
   8. GLOW BG — ambient red glow behind card
   Usage: class="glow-bg" as absolute div inside .group
   Requires parent class="group" + position: relative
----------------------------------------------- */
.glow-bg {
  position: absolute;
  inset: 0;
  background-color: var(--primary);
  border-radius: var(--radius-xl);
  opacity: 0;
  filter: blur(40px);
  z-index: -1;
  transition: opacity var(--transition-slow);
}
.group:hover .glow-bg {
  opacity: 0.05;
}


/* -----------------------------------------------
   9. NAV LINK — underline grows from left
   Usage: class="nav-link" on <a> in navigation
   Direct hover
----------------------------------------------- */
.nav-link {
  position: relative;
  color: var(--text-body);
  text-decoration: none;
  transition: color var(--transition-base);
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width var(--transition-base);
}
.nav-link:hover {
  color: var(--primary);
}
.nav-link:hover::after {
  width: 100%;
}


/* -----------------------------------------------
   10. GAP EXPAND — flex gap widens on hover
   Usage: class="gap-expand" on inline-flex link rows
   Direct hover
----------------------------------------------- */
.gap-expand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap var(--transition-base);
}
.gap-expand:hover {
  gap: 12px;
}


/* -----------------------------------------------
   11. BADGE DOT — animated pulse dot in pill badges
   Usage: class="badge-dot" on <span> inside badge
   Always-on animation
----------------------------------------------- */
.badge-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: var(--primary);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1;   transform: scale(1);   }
  50%       { opacity: 0.5; transform: scale(0.8); }
}


/* -----------------------------------------------
   Reduced Motion — disables all transitions
----------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .card-lift,
  .img-reveal,
  .icon-flip,
  .icon-scale,
  .arrow-slide,
  .row-item,
  .text-hover-primary,
  .glow-bg,
  .nav-link,
  .nav-link::after,
  .gap-expand {
    transition: none !important;
    animation: none !important;
  }
}
```

### Class Quick Reference

| Class | Trigger | Applied To |
|-------|---------|-----------|
| `.card-lift` | Direct hover | Card wrapper |
| `.img-reveal` | Parent `.group` hover | `<img>` |
| `.icon-flip` | Parent `.group` hover | Icon wrapper div |
| `.icon-scale` | Parent `.group` hover | Icon wrapper div |
| `.arrow-slide` | Parent `.group` hover | Arrow icon span |
| `.row-item` | Direct hover | Feature/checklist row |
| `.text-hover-primary` | Parent `.group` hover | `h3`, `h4` |
| `.glow-bg` | Parent `.group` hover | Absolute pseudo div |
| `.nav-link` | Direct hover | `<a>` in nav |
| `.gap-expand` | Direct hover | Inline-flex link |
| `.badge-dot` | Always-on | `<span>` in badge pill |

---

## 8. AOS Classes Reference

### Animation Values

| `data-aos` | Effect | Best Used For |
|-----------|--------|--------------|
| `fade-up` | Fades in, moves up | Cards, headings, paragraphs |
| `fade-down` | Fades in, moves down | Eyebrow text, navbar elements |
| `fade-left` | Enters from right | Right-column content |
| `fade-right` | Enters from left | Left-column content, feature text |
| `zoom-in` | Scales up while fading | Icons, stat numbers |
| `flip-left` | 3D flip on Y axis | AI suggestion cards, tiles |
| `fade` | Pure fade | Background overlays, subtle elements |

### Attribute Reference

```html
<!-- Basic -->
<div data-aos="fade-up">...</div>

<!-- With delay — stagger 150ms per item -->
<div data-aos="fade-up" data-aos-delay="300">...</div>

<!-- Custom duration override -->
<div data-aos="zoom-in" data-aos-duration="500">...</div>

<!-- Custom easing override -->
<div data-aos="fade-right" data-aos-easing="ease-out-back">...</div>
```

### Section Stagger Delay Pattern

```
Eyebrow badge    → data-aos-delay="0"
Section heading  → data-aos-delay="100"
Subtext          → data-aos-delay="200"
Card 1           → data-aos-delay="300"
Card 2           → data-aos-delay="450"
Card 3           → data-aos-delay="600"
```

### AOS vs hover-effects.css Rule

> **AOS** → entrance only (how elements arrive into view)
> **hover-effects.css** → interaction only (how elements respond to pointer)
> Never apply the same CSS property in both on the same element.

---

## 9. CSS Token Master Reference

All tokens defined in `theme.css`.

```css
:root {
  /* ── Backgrounds ───────────────── */
  --background:             #ffffff;
  --background-alt:         #f8fafc;
  --background-muted:       #f1f5f9;

  /* ── Text ──────────────────────── */
  --foreground:             #0f172a;
  --text-body:              #475569;
  --text-muted:             #64748b;

  /* ── Brand ─────────────────────── */
  --primary:                #C94234;
  --primary-foreground:     #ffffff;
  --primary-hover:          #b03b2f;
  --primary-ghost:          rgba(201, 66, 52, 0.05);
  --primary-ghost-hover:    rgba(201, 66, 52, 0.10);

  /* ── Secondary ─────────────────── */
  --secondary:              #FFF5F5;
  --secondary-foreground:   #C94234;

  /* ── Borders ───────────────────── */
  --border:                 #e2e8f0;
  --border-hover:           rgba(201, 66, 52, 0.20);

  /* ── Radius ────────────────────── */
  --radius-sm:              0.375rem;
  --radius-md:              0.5rem;
  --radius-base:            0.625rem;
  --radius-lg:              0.875rem;
  --radius-xl:              1rem;
  --radius-2xl:             1.5rem;
  --radius-full:            9999px;

  /* ── Shadows ───────────────────── */
  --shadow-sm:              0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md:              0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-xl:              0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04);
  --shadow-2xl:             0 25px 50px rgba(0,0,0,0.15);
  --shadow-glow-white:      0 0 20px rgba(255,255,255,0.50);
  --shadow-glow-primary:    0 0 30px rgba(201,66,52,0.15);

  /* ── Transitions ───────────────── */
  --transition-fast:        150ms ease;
  --transition-base:        300ms ease;
  --transition-slow:        500ms ease;
  --transition-image:       700ms ease;

  /* ── Typography ────────────────── */
  --font-sans:              'Plus Jakarta Sans', sans-serif;
  --font-display:           'Lato', sans-serif;
}
```

---

*Design System v1.0 — Styling & CSS Only · AI Suggestion Interface*
