# Kite repair notes

Run the tests: `node --test shop/patch.test.mjs shop/spars.test.mjs`

## patchSizeFor(tearCm)

Returns the patch size in cm: the tear plus 2 cm on each side (tear + 4).

```js
const { patchSizeFor } = require('./patch.js');
patchSizeFor(10); // 14
```

Throws `RangeError` for negative or non-numeric input.

## sparLengthFor(spanCm)

Returns the spar length in cm. The brief gave no formula, so the spar is assumed to run the full span; change this one function if the shop uses another rule.

```js
const { sparLengthFor } = require('./spars.js');
sparLengthFor(80); // 80
```

Throws `RangeError` for zero, negative or non-numeric input.
