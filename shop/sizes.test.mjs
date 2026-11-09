import test from 'node:test';
import assert from 'node:assert/strict';
import { sizeFor } from './sizes.js';

test('small under 30 kg', () => {
  assert.equal(sizeFor(10), 'small');
  assert.equal(sizeFor(29.9), 'small');
});

test('medium from 30 to 60 kg', () => {
  assert.equal(sizeFor(30), 'medium');
  assert.equal(sizeFor(60), 'medium');
});

test('large above 60 kg', () => {
  assert.equal(sizeFor(60.1), 'large');
  assert.equal(sizeFor(90), 'large');
});

test('rejects invalid weights', () => {
  assert.throws(() => sizeFor(0), RangeError);
  assert.throws(() => sizeFor(-5), RangeError);
  assert.throws(() => sizeFor('40'), RangeError);
  assert.throws(() => sizeFor(NaN), RangeError);
});
