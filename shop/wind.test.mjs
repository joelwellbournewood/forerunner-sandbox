import test from 'node:test';
import assert from 'node:assert/strict';
import { goodForKites } from './wind.js';

test('true at both edges and in the middle', () => {
  assert.equal(goodForKites(10), true);
  assert.equal(goodForKites(25), true);
  assert.equal(goodForKites(40), true);
});

test('false outside 10 to 40', () => {
  assert.equal(goodForKites(9.9), false);
  assert.equal(goodForKites(40.1), false);
  assert.equal(goodForKites(0), false);
});
