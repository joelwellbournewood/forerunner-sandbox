import test from 'node:test';
import assert from 'node:assert/strict';
import { kmhToKnots } from './units.js';

test('zero stays zero', () => {
  assert.equal(kmhToKnots(0), 0);
});

test('1.852 km/h is one knot', () => {
  assert.ok(Math.abs(kmhToKnots(1.852) - 1) < 1e-9);
});

test('40 km/h is about 21.6 knots', () => {
  assert.ok(Math.abs(kmhToKnots(40) - 21.598) < 0.001);
});
