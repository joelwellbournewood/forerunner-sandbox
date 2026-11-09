'use strict';

// Patch size for a tear: the tear plus 2 cm on each side (4 cm in total).
function patchSizeFor(tearCm) {
  if (typeof tearCm !== 'number' || !Number.isFinite(tearCm) || tearCm < 0) {
    throw new RangeError('tearCm must be a non-negative number');
  }
  return tearCm + 4;
}

module.exports = { patchSizeFor };
