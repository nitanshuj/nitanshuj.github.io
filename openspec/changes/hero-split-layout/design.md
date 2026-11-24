# Design

## Context

See proposal.md — Why.

The hero currently uses a full-width `grid-layout` (12-column CSS grid) with all content in a single `hero-content` div spanning all 12 columns. The right portion of the viewport is empty. The `About.vue` section already displays a portrait at `Nitanshu_Joshi_5.jpg` in grayscale at max-width 300px.

Section padding is currently a single global rule in `main.css`: `section { padding: 120px 0; }`. This applies uniformly to all sections.

## Goals / Non-Goals

**Goals:**
- Convert hero to a 60/40 two-column layout within the existing 12-column CSS grid
- Display `Nitanshu_Joshi_4.jpg` full-color in a bordered card, vertically centered in the right column
- Reduce section padding from uniform 120px to per-section values (80–90px range)
- Keep the About section functional — remove the portrait or replace with a skills/stack visual

**Non-Goals:**
- Changing the data layer, routing, or build pipeline
- Reworking any section other than Hero, About, and the global padding rule
- Animating the portrait or adding parallax effects
- Changing the navbar or footer

## Decisions

### D1: CSS Grid vs Flexbox for the split

**Decision:** Use `display: grid; grid-template-columns: 60fr 40fr;` inside `.hero-content` (or directly on the section's inner container), consistent with the existing 12-column `grid-layout` pattern already used in `About.vue`.

**Alternative considered:** Flexbox (`display: flex`). Rejected because the project already uses CSS grid for section layouts; using grid maintains consistency and handles alignment more cleanly.

### D2: Portrait card sizing

**Decision:** Right column portrait card at `height: 520px` on desktop with `object-fit: cover; object-position: center top` to focus on the face. Card uses `border-radius: 16px` to match the existing card system (Projects/VibeProducts use `14px`; slightly larger here emphasizes the hero's hero-ness).

**Alternative considered:** `aspect-ratio: 3/4` instead of fixed height. Rejected because a fixed height ties the photo to the left column's predictable content height, avoiding layout shift.

### D3: About section photo handling

**Decision:** Remove the grayscale portrait from `About.vue` entirely. The hero now shows a larger, colored portrait — keeping it in About too creates redundancy. The About image column (`span 4`) will be removed and the text column expanded to `span 12` or `span 10`.

**Alternative considered:** Replace it with a tech stack / skills grid. Deferred — that's a larger content change outside this change's scope.

### D4: Section padding strategy

**Decision:** Override the global `section { padding: 120px 0 }` rule with component-scoped padding via `<style scoped>` in each Vue component that needs a different value, rather than changing the global rule. This avoids touching all components and allows each section to independently tune its padding.

| Section | Padding |
|---|---|
| Hero (bottom only, top stays at 140px for navbar) | `padding-bottom: 80px` |
| About | `padding: 90px 0` |
| Projects / VibeProducts / Articles | `padding: 80px 0` |
| Experience / Education | `padding: 90px 0` |
| Contact | `padding: 80px 0` |

**Alternative considered:** Changing `main.css` global rule to `80px` and adding extra padding to sections that need it. Rejected because it would require touching every component and risks cascading unintended changes.

## Risks / Trade-offs

- **Portrait crop on different screen sizes** → Mitigation: `object-position: center top` keeps the face in frame; test at 768px breakpoint and 1440px.
- **About section feels sparse without the photo** → Mitigation: Accepted for now; a skills grid or timeline can be added in a follow-up change.
- **Scoped padding overrides specificity** → Mitigation: Vue scoped styles have higher specificity than the global rule by design; this is reliable behavior.

## Migration Plan

No data migration needed. The change is purely presentational:
1. Update `Hero.vue` layout and styles
2. Update `About.vue` to remove portrait
3. Update section-scoped padding in `Projects.vue`, `VibeProducts.vue`, `Articles.vue`, `Experience.vue`, `Education.vue`, `Contact.vue`, `About.vue`
4. Run `npm run build` to verify no compile errors
5. Visual QA on desktop (1280px+) and mobile (375px)

Rollback: revert the Vue component files; no infrastructure change.
