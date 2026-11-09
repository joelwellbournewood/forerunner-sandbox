import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const { sparLengthFor } = createRequire(import.meta.url)('./spars.js');

test('spar runs the full span', () => {
  assert.equal(sparLengthFor(80), 80);
});

test('rejects invalid spans', () => {
  assert.throws(() => sparLengthFor(0), RangeError);
  assert.throws(() => sparLengthFor(NaN), RangeError);
});
