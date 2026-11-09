'use strict';

const LINE_LENGTHS_M = { small: 20, medium: 30, large: 40 };

function lineLengthFor(size) {
  if (!Object.prototype.hasOwnProperty.call(LINE_LENGTHS_M, size)) {
    throw new RangeError('unknown size: ' + String(size));
  }
  return LINE_LENGTHS_M[size];
}

exports.lineLengthFor = lineLengthFor;
