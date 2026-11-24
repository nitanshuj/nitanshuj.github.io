# Tasks

## 1. Typography & Theme System Foundations

- [x] 1.1 Add JetBrains Mono font link and inline theme initialization script to `index.html` to prevent FOUC, and verify DOM reflects initial `data-theme` on page load
- [x] 1.2 Update `src/assets/main.css` with Palette C CSS tokens (`--bg-color`, `--card-bg`, `--text-color`, `--text-muted`, `--accent-color`, `--border-color`) for both `:root` and `[data-theme="dark"]`, and verify color shifts when toggling attribute
- [x] 1.3 Implement persistent theme switcher button (Sun / Moon) in `src/components/Navbar.vue` with `localStorage` sync, and verify toggle updates `<html>` attributes and persists across page reloads

## 2. Data Schema & Agentic Products Showcase

- [x] 2.1 Extend `src/data.js` with `agentic-products` category, velocity, agentStack, and liveDemo attributes, and populate 3 sample hardcoded agentic projects (Indie Coffee Hub, Arxiv Audio Digest, and KnowledgeGraph RAG Assistant); verify data exports correctly
- [x] 2.2 Update `src/components/Projects.vue` to include "Agentic Apps" in category filters, render "Live Demo" CTA buttons alongside GitHub links, and display velocity badges; verify filtering isolates agentic cards

## 3. Hero & Recruiter Conversion Enhancements

- [x] 3.1 Add the quantified impact metrics ticker banner to `src/components/Hero.vue` (highlighting -$5,000/mo SwissRe savings, 500+ GradMeet acquisitions, 6,000+ IU genes), and verify responsive grid layout
- [x] 3.2 Add a Resume / CV download CTA button in `src/components/Navbar.vue` and `src/components/Hero.vue`, and verify click targets open or download the document

## 4. Verification & Polish

- [x] 4.1 Run `npm run build` to verify clean production compilation without bundling or syntax errors
- [x] 4.2 Validate mobile menu toggle and theme switcher responsiveness across viewport breakpoints


