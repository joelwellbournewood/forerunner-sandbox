# 0001: Plain HTML and node:test

Decision: The page is a single static file, kite/index.html, with no framework or build step, and the check is kite/footer.test.mjs run with Node's built-in node:test and no dependencies.

## Why

The brief asks for a small page, a footer and a test, and nothing else. A plain file opens in any browser and needs no tooling. node:test ships with Node, so the test adds no packages and no package.json.

## Consequences

The three tasks run in order: page, footer, test. The sunday-flying paragraph is kept general because the brief gives no times or places. Details can be added later if the club supplies them.
