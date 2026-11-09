import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const { patchSizeFor } = createRequire(import.meta.url)('./patch.js');

test('adds 2 cm on each side of the tear', () => {
  assert.equal(patchSizeFor(10), 14);
  assert.equal(patchSizeFor(0), 4);
});

test('rejects invalid tear sizes', () => {
  assert.throws(() => patchSizeFor(-1), RangeError);
  assert.throws(() => patchSizeFor('5'), RangeError);
});
