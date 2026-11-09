# Kite size guide

Pick the kite size from the flyer's weight. `sizeFor(weightKg)` in `sizes.js` returns the size; `lineLengthFor(size)` in `lines.js` returns the line length.

| Size   | Flyer weight      | Line length |
| ------ | ----------------- | ----------- |
| small  | under 30 kg       | 20 m        |
| medium | 30 kg to 60 kg    | 30 m        |
| large  | above 60 kg       | 40 m        |

Assumption: the brief gave no line lengths, so 20, 30 and 40 m are our own choice. Change them in `lines.js` and in this table together.

Run the tests with:

`node --test shop/sizes.test.mjs shop/lines.test.mjs`
