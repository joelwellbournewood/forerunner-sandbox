import test from 'node:test';
import assert from 'node:assert/strict';
import { lineLengthFor } from './lines.js';

test('line length per size in metres', () => {
  assert.equal(lineLengthFor('small'), 20);
  assert.equal(lineLengthFor('medium'), 30);
  assert.equal(lineLengthFor('large'), 40);
});

test('rejects unknown sizes', () => {
  assert.throws(() => lineLengthFor('huge'), RangeError);
  assert.throws(() => lineLengthFor('toString'), RangeError);
  assert.throws(() => lineLengthFor(undefined), RangeError);
});
