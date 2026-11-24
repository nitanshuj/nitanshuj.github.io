# Proposal

## Why

Nitanshu's current portfolio uses a stark monochrome style and lacks visible proof of modern agentic engineering ("vibe coding") and production impact metrics ($5k/mo token optimization at SwissRe, vector search recommendations, and GNN biological models). Introducing a refined "Warm Technical Press" aesthetic (Palette C: cream, charcoal, and amber) with a first-class dark mode toggle and dedicated Agentic Engineered project showcase elevates his positioning from a generalist to a high-impact Senior Data Scientist and AI Systems Engineer.

## What Changes

- **Theme System & Palette C**: Implement a "Warm Technical Press" palette (Warm Paper Cream `#fdfcf9`, Deep Charcoal `#141412`, Amber `#d97706`/`#f59e0b`, and monospace font accents) with a persistent Dark/Light mode toggle in the navigation bar.
- **Agentic Engineered / Vibe-Coded Category**: Add a new project category (`agentic-products`) in the portfolio filter tabs to showcase end-to-end applications built rapidly with AI coding agents (Claude Code, Antigravity, Cursor).
- **Enriched Project Metadata**: Extend project data schema with build velocity (e.g. "Concept to Production in 48 hrs"), agent tool stack, live demo URLs, and expandable case study problem/architecture notes.
- **Hero Impact Metrics Banner**: Introduce a prominent quantified impact readout in the Hero/About section highlighting real-world production achievements.
- **Recruiter Conversion CTAs**: Add direct Resume/CV PDF download button and elevated contact links.

## Capabilities

### New Capabilities
- `theme-system`: Full theme switching engine providing Palette C (light/dark modes), CSS custom properties, and persistent state management.
- `portfolio-showcase`: Project filtering, agentic product taxonomy, case study breakdowns, and hero impact metrics display.

### Modified Capabilities
*(None - this is the initial specification set for the portfolio).*

## Impact

- **Frontend Components**:
  - `src/components/Navbar.vue`: Theme toggle button and Resume link.
  - `src/components/Hero.vue`: Impact metrics ticker and updated typography.
  - `src/components/Projects.vue`: Category filter updates (`agentic-products`), enhanced card layouts, and live demo CTAs.
  - `src/assets/main.css`: CSS variables for Palette C, dark mode overrides, and typography rules.
  - `src/data.js`: Project data model extensions with agentic apps and metrics.
- **External Dependencies**:
  - Optional Google Font import for developer monospace (e.g., JetBrains Mono).
