# Design

## Context

The portfolio is built with Vue 3 and Vite, styled via vanilla CSS custom properties in `src/assets/main.css` and scoped component styles. Currently, `:root` defines pure monochrome values (`#ffffff` and `#000000`), with an incomplete `[data-theme="dark"]` block that only affects the navbar. Project data is centrally exported from `src/data.js`.

See `proposal.md` for background and user positioning goals.

## Goals / Non-Goals

**Goals:**
- Implement Palette C (Warm Technical Press: Cream `#fdfcf9`, Deep Charcoal `#141412`, Amber `#d97706`/`#f59e0b`, and Monospace accents).
- Implement a zero-FOUC (Flash of Unstyled Content) theme switcher with `localStorage` and system preference detection.
- Extend `src/data.js` to support the `agentic-products` category, build velocity, agent stack, and live demo URLs.
- Add Hero impact metrics banner and prominent Resume download CTA.

**Non-Goals:**
- Migrating to a different frontend framework (e.g. Nuxt, React, or Astro).
- Setting up a cloud backend or database (all data remains static and client-side).

## Decisions

### Decision 1: CSS Custom Properties via `:root` and `[data-theme="dark"]`
- **Choice**: Extend existing CSS variable architecture in `src/assets/main.css` rather than adopting Tailwind or CSS-in-JS.
- **Rationale**: Minimal bundle footprint, zero build step changes, seamless integration with existing scoped component styles.
- **Tokens**:
  - *Light Mode*: `--bg-color: #fdfcf9; --card-bg: #ffffff; --text-color: #1a1a1a; --text-muted: #6b6964; --accent-color: #d97706; --border-color: #e8e6e1;`
  - *Dark Mode*: `--bg-color: #141412; --card-bg: #1e1e1b; --text-color: #f4f3ef; --text-muted: #9e9c96; --accent-color: #f59e0b; --border-color: #2b2a26;`

### Decision 2: Zero-FOUC Theme Initialization in `index.html`
- **Choice**: Place an inline synchronous script in `index.html` `<head>`:
  ```javascript
  const saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', saved);
  ```
- **Rationale**: Prevents white screen flash on page refresh when the user prefers dark mode.

### Decision 3: Typography & Monospace Pairing
- **Choice**: Retain `Inter` for primary headers and prose, import `JetBrains Mono` from Google Fonts for badges, metrics counters, tags, and timestamps.
- **Rationale**: Balances editorial elegance with tangible developer/engineering aesthetics.

### Decision 4: Backward-Compatible Data Model with Sample Agentic Projects
- **Choice**: Extend project objects in `src/data.js` with optional fields (`velocity`, `agentStack`, `liveDemo`) and add 3 initial hardcoded agentic projects:
  1. **Indie Coffee Hub**: Discovery platform for specialty cafes with automated vibe matching (`velocity: "Built & Deployed in 3 days"`, `agentStack: ["Claude Code", "FastAPI", "Vue 3"]`).
  2. **Arxiv Audio Digest**: Multi-agent paper-to-podcast generator converting arXiv preprints into dual-voice audio (`velocity: "Weekend Hackathon MVP"`, `agentStack: ["Claude 3.7", "Antigravity"]`).
  3. **KnowledgeGraph RAG Assistant**: Personal research engine converting reading lists into an interactive semantic graph (`velocity: "Shipped in 24 hours"`, `agentStack: ["Cursor", "Claude Code"]`).
- **Rationale**: Gives immediate substance and visual polish to the new category during evaluation before linking individual live production deployments.

## Risks / Trade-offs

- **Risk**: Flash of Unstyled Content (FOUC) when loading dark mode.  
  &rarr; **Mitigation**: Inline `<head>` script executed prior to DOM paint guarantees theme is set before first render.
- **Risk**: Visual clashes between existing project images and warm background colors.  
  &rarr; **Mitigation**: Standardize card image wrappers with subtle 1px border frames and consistent aspect ratio containers.
