import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const pagePath = fileURLToPath(new URL('./index.html', import.meta.url));

test('footer contains "Kite club, since 2026"', () => {
  const html = readFileSync(pagePath, 'utf8');
  const match = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/i);
  assert.ok(match, 'index.html has a <footer> element');
  assert.ok(
    match[1].includes('Kite club, since 2026'),
    'footer contains "Kite club, since 2026"'
  );
});
