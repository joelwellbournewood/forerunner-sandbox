'use strict';

// Spar length for a kite span. Assumption: the spar runs the full span.
function sparLengthFor(spanCm) {
  if (typeof spanCm !== 'number' || !Number.isFinite(spanCm) || spanCm <= 0) {
    throw new RangeError('spanCm must be a positive number');
  }
  return spanCm;
}

module.exports = { sparLengthFor };
