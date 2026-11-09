'use strict';

function sizeFor(weightKg) {
  if (typeof weightKg !== 'number' || !Number.isFinite(weightKg) || weightKg <= 0) {
    throw new RangeError('weightKg must be a positive number');
  }
  if (weightKg < 30) return 'small';
  if (weightKg <= 60) return 'medium';
  return 'large';
}

exports.sizeFor = sizeFor;
