# Proposal

## Why

The hero section currently presents as a flat left-aligned text stack that leaves the right half of the viewport empty, creating a visually weak first impression. Section padding is uniform at 120px throughout, generating excessive dead space between content areas and making the page feel sparse rather than editorial.

## What Changes

- **Hero layout** becomes a 60/40 horizontal split: left column holds the name, subtitle, CTAs, and impact ticker; right column holds a large, full-color portrait photo in a bordered card.
- **Photo** switches from `/portraits/Nitanshu_Joshi_5.jpg` (B&W, About section) to `/portraits/Nitanshu_Joshi_4.jpg` (full-color, hero section).
- **Photo treatment**: bordered card (`1px solid var(--border-color)`, `border-radius: 16px`, amber accent on hover, `object-fit: cover`), vertically centered in the right column.
- **Impact ticker** remains in the left column beneath the CTAs (no layout change needed).
- **Section padding** is reduced from uniform `120px 0` to context-aware values: hero `80px` bottom, card-heavy sections (Projects, Products, Articles) `80px`, text-heavy sections (About, Experience, Education) `90px`, Contact `80px`.
- **About section photo** is removed (redundant with the hero portrait) or replaced with a skills/stack visual to avoid repetition.

## Capabilities

### New Capabilities

- `hero-layout`: Defines the split-screen hero structure — 60/40 column split, right-column portrait card, full-color photo, centered alignment, and left-column content order.

### Modified Capabilities

- `portfolio-showcase`: The hero section requirement (status pill + impact metrics) now also specifies that the hero SHALL present a full-color portrait photograph in a right-column bordered card alongside the textual content.

## Impact

- `src/components/Hero.vue` — primary layout change; CSS grid/flex split, photo card styles, responsive collapse to single column on mobile.
- `src/assets/main.css` — section padding reduced from uniform `120px` to per-section values.
- `src/components/About.vue` — portrait photo removed or replaced; layout adjusted if the image column disappears.
- Photo file: `public/portraits/Nitanshu_Joshi_4.jpg` (already present, no new asset needed).
- No changes to data layer, routing, or build configuration.
