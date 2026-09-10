# Changelog

All notable changes to this portfolio are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-09-10

### Added

- City-Dispatch: an 8-service Go delivery dispatch system, with Redis, Kafka, gRPC and Prometheus badges to match.
- TailorMyApplication to the projects list.
- Recommendations section on the About page.
- Dates on every previous role.
- This changelog, plus a version number in the footer that links to it.

### Changed

- SquaredUp moved from current to previous now that the placement has ended.
- Projects lay out in two columns on large screens, staying single-column on mobile and tablet.
- Projects without a screenshot now show a subtle initials tile instead of a light placeholder image.

### Removed

- Retired projects: Triagely, Questo, Unmasked, Resistly, Events REST API, Social App Backend, Resumatch.ai, Passenga, JavaScript Formatter and Media Stack.

## [0.6.0] - 2026-08-03

### Added

- Self-hosted Docker deployment for the site.
- Live screenshots for the project cards.
- `AGENTS.md` describing how the repo should be worked on.

### Changed

- Modernized dependencies and tooling across the board.
- Workflows modularized behind a reusable `ci.yml`.
- Deployments now run from a hosted runner over Tailscale SSH, with a reachability retry before shipping.

### Fixed

- Black page background restored under Tailwind v4.

## [0.5.0] - 2026-02-01

### Added

- MDX blog with post styling, tag filtering, sorting and a table of contents.
- Example blog post templates.
- Triagely added to projects.

### Changed

- CI now runs on feature branches too.

## [0.4.0] - 2026-01-01

### Added

- Footer with social links.
- Sub-bullets for the Brunel Talent Marketplace role.
- Unit tests for the component library, a label-check workflow and a pull request template.
- Husky pre-commit hooks enforcing typecheck and tests.

### Changed

- Rewritten as a minimal, single non-scrollable page with a redesigned About section.
- Projects became a single vertical list with a search box.
- Upgraded to Next.js 16 and swapped npm for bun.
- Mobile-friendly home and project components, hidden scrollbars and a background pattern.
- Moved to a clean folder structure with reusable components.

## [0.3.0] - 2025-03-13

### Added

- Boxed-grid home feed with animated technologies, experiences, education and projects sections.
- Blog page scaffolding.

### Changed

- Full reset and rebuild of the site.

## [0.2.0] - 2024-12-22

### Added

- Landing, expertise, projects and experiences pages driven by real data.
- Technologies section, social links and a reusable section title component.

### Changed

- Responsive design pass across home, navbar and experiences.

## [0.1.0] - 2024-04-28

### Added

- First portfolio: layout, navbar, sidebar, footer, archive page and a validated contact form.
- Responsive styling and analytics.
