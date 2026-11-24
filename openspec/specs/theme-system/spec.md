# Theme System Specification

## Purpose

Provides a cohesive theme switching system implementing Palette C (Warm Technical Press) with persistent light and dark modes.

## Requirements

### Requirement: Theme Selection and Persistence
The system SHALL provide a theme switcher allowing users to toggle between Warm Light mode and Deep Charcoal Dark mode, and SHALL persist the user's preference in localStorage.

#### Scenario: User toggles theme
- **WHEN** user clicks the theme toggle button in the navigation bar
- **THEN** the system toggles the `data-theme` attribute between `light` and `dark` and saves the selection to localStorage

#### Scenario: User returns to site
- **GIVEN** user has previously selected dark mode
- **WHEN** user loads any page on the website
- **THEN** the system automatically applies the dark theme before initial rendering

### Requirement: Palette C Color Token Conformance
The theme system SHALL define and apply Palette C CSS custom properties across all interface elements.

#### Scenario: Warm light theme active
- **WHEN** the light theme is active
- **THEN** the root background color is set to `#fdfcf9`, text is `#1a1a1a`, and accent highlights use amber `#d97706`

#### Scenario: Deep dark theme active
- **WHEN** the dark theme is active
- **THEN** the root background color is set to `#141412`, surface cards are `#1e1e1b`, and accent highlights use amber `#f59e0b`

### Requirement: Vendor Framework Theme Synchronization
The theme system SHALL synchronize `data-bs-theme` alongside `data-theme` on the root document element and map framework background and text variables to custom design tokens to eliminate contrast conflicts.

#### Scenario: Dark theme vendor synchronization
- **WHEN** dark theme is activated
- **THEN** both `data-theme` and `data-bs-theme` on the root HTML element are set to `dark`, and `--bs-body-bg` matches the dark background color `#141412`
