# Portfolio Showcase Specification

## Purpose

Defines project showcase structure, dedicated sections for from-scratch work and vibe-coded products, and hero impact metrics.

## Requirements

### Requirement: Dedicated Dual Project Sections
The portfolio SHALL display two separate project sections: "Selected Work (From Scratch)" for foundational ML and data engineering pipelines, and "My End-to-end Products (Vibe Coded)" for autonomous agentic applications.

#### Scenario: Visitor navigates to Selected Work
- **WHEN** visitor views the `#projects` section
- **THEN** the system displays the "Selected Work (From Scratch)" header and category filters for ML, GenAI, and Data Engineering

#### Scenario: Visitor navigates to End-to-end Products
- **WHEN** visitor views the `#products` section
- **THEN** the system displays the "My End-to-end Products (Vibe Coded)" section with agentic engineering badges and live demo CTAs

### Requirement: Enriched Product Metadata and Live CTAs
Each product card in the Vibe Coded section SHALL display technical metadata including build velocity, agent stack, and a primary CTA linking to the live deployed application when available.

#### Scenario: Viewing an agentic product card
- **WHEN** user views an agentic product card with live URL and velocity metadata
- **THEN** the card renders a "Live Demo" button, repository link, and a build velocity badge

### Requirement: Hero Impact Metrics and Status Pill
The hero section SHALL present an active status pill stating "Available for AI Collaborations", a full-color portrait photograph of the author displayed in a right-column bordered card, and quantified impact metrics immediately below the primary introduction in the left column.

#### Scenario: Visitor views hero section
- **WHEN** visitor loads the homepage
- **THEN** the hero section displays "Available for AI Collaborations" and metric cards showing token cost optimization (-$5,000/mo), recommendation lift (500+ users), and graph modeling scale (6,000+ genes)

#### Scenario: Portrait photograph in hero
- **WHEN** a user views the hero section
- **THEN** a full-color portrait photograph is displayed in the right column in a bordered card

#### Scenario: Status pill visible
- **WHEN** a user views the hero section
- **THEN** the status pill "Available for AI Collaborations" is visible with an animated green dot

#### Scenario: Impact metrics visible
- **WHEN** a user views the hero section
- **THEN** three quantified impact metric cards are visible beneath the CTA links in the left column
