# hero-layout Specification

## Purpose

Defines the split-screen hero section layout: a 60/40 two-column structure that pairs textual identity content on the left with a prominent full-color portrait card on the right.

## Requirements

### Requirement: Split-screen hero column structure
The hero section SHALL render as a two-column horizontal layout with the left column occupying 60% of the available width and the right column occupying 40%, collapsing to a single stacked column on viewports narrower than 768px.

#### Scenario: Desktop split renders
- **WHEN** a user views the portfolio on a viewport 768px or wider
- **THEN** the hero section displays two side-by-side columns with text content on the left and the portrait card on the right

#### Scenario: Mobile collapse
- **WHEN** a user views the portfolio on a viewport narrower than 768px
- **THEN** the hero section stacks to a single column with the portrait appearing above the text content

### Requirement: Full-color portrait card in right column
The hero section SHALL display the portrait photograph `Nitanshu_Joshi_4.jpg` in full color (no grayscale filter) inside a bordered card in the right column, with the card vertically centered relative to the left column.

#### Scenario: Portrait displays full-color
- **WHEN** a user views the hero section in either light or dark theme
- **THEN** the portrait photograph renders without grayscale or desaturation filters

#### Scenario: Portrait card border and shape
- **WHEN** the portrait card is rendered
- **THEN** it displays a 1px border using the active border-color token, 16px border radius, and an amber accent border on hover

#### Scenario: Portrait vertical alignment
- **WHEN** the left column is taller than the portrait card
- **THEN** the portrait card is vertically centered within the right column

### Requirement: Left column content order
The hero left column SHALL present content in the following vertical order: status pill, name heading, subtitle, CTA links, impact metrics ticker.

#### Scenario: Content order preserved
- **WHEN** a user reads the hero section left column top to bottom
- **THEN** content appears in the order: availability status pill, name, subtitle paragraph, navigation CTAs, impact ticker cards
