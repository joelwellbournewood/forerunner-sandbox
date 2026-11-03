# 0001: Plain static HTML

Decision: Build the hello page as a single plain `index.html` at the repository root with inline CSS, no framework, no build step and no hosting setup.

## Why

The brief asks only for a small static greeting page and a README section. A single self-contained file is the simplest thing that meets it, opens locally by double-click, and is easy to review and reverse. A framework or build tool would add moving parts with no benefit here.

## Consequences

- The page can later be served by any static host (for example GitHub Pages) without changes.
- Hosting is out of scope for now and is not planned.
- The README gains a short 'Hello page' section describing the page.
