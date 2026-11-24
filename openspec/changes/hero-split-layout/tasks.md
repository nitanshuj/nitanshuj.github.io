# Tasks

## 1. Hero layout restructure

- [x] 1.1 In `Hero.vue`, replace the single full-width `hero-content` div with a two-column CSS grid (`grid-template-columns: 60fr 40fr; gap: 48px; align-items: center`) and verify the hero renders two side-by-side columns on a 1280px viewport.
- [x] 1.2 Move the existing status pill, `h1`, subtitle, CTA group, and impact ticker into a `hero-left` div within the left column and verify all existing content is still present and readable.
- [x] 1.3 Add a `hero-right` div containing an `img` pointing to `/portraits/Nitanshu_Joshi_4.jpg` wrapped in a `.hero-photo-card` div; verify the image renders.

## 2. Portrait card styling

- [x] 2.1 Style `.hero-photo-card` with `border: 1px solid var(--border-color)`, `border-radius: 16px`, `overflow: hidden`, and `height: 520px`; verify the card shape renders correctly in both light and dark themes.
- [x] 2.2 Style the `img` inside `.hero-photo-card` with `width: 100%; height: 100%; object-fit: cover; object-position: center top; filter: none`; verify the photo is full-color and crops to show the face.
- [x] 2.3 Add hover state on `.hero-photo-card`: `border-color: var(--accent-color); box-shadow: 0 12px 32px -8px rgba(0,0,0,0.12)`; verify the amber border appears on hover.

## 3. Mobile responsive collapse

- [x] 3.1 Add a `@media (max-width: 768px)` rule that sets `.hero-split` to `grid-template-columns: 1fr` and moves `.hero-right` to `order: -1`; verify on a 375px viewport that the portrait appears above the text content.
- [x] 3.2 Set `height: 320px` on `.hero-photo-card` within the mobile breakpoint; verify the photo does not overflow or appear cropped awkwardly on a 375px screen.

## 4. About section photo removal

- [x] 4.1 Remove the `.about-image` column div and its `<img>` tag from `About.vue`; verify no broken image or layout shift appears.
- [x] 4.2 Expand the `.about-text` column from `grid-column: span 8` to `grid-column: span 10` (or `span 12`) and verify the About text reads comfortably at full width.

## 5. Section padding reduction

- [x] 5.1 In `Hero.vue` scoped styles, add `padding-bottom: 80px` to `.hero-section` (overriding the global 120px); verify the gap between the hero and About section is visibly reduced.
- [x] 5.2 Add `section { padding: 90px 0; }` overrides in scoped styles for `About.vue`, `Experience.vue`, and `Education.vue`; verify spacing looks consistent.
- [x] 5.3 Add `section { padding: 80px 0; }` overrides in scoped styles for `Projects.vue`, `VibeProducts.vue`, `Articles.vue`, and `Contact.vue`; verify card-heavy sections feel denser without crowding.

## 6. Build verification and QA

- [x] 6.1 Run `npm run build` and verify the build exits with code 0 and no warnings about unused CSS or missing assets.
- [ ] 6.2 Check the hero at 1440px, 1280px, and 768px viewport widths and verify the split, portrait card, and content alignment look correct at each breakpoint.
- [ ] 6.3 Toggle light and dark theme and verify the portrait card border, section backgrounds, and all text remain legible (no contrast regressions).

## Workflow follow-up

- Run `/openspec-sync-specs` to merge the delta specs into the main `portfolio-showcase` and `hero-layout` specs.
- Archive the change with `/openspec-archive-change hero-split-layout` after review.
