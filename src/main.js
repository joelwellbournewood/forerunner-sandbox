#!/usr/bin/env node
// [stand-in model] Build the first working version in src/main.js
const fs = require("fs");
const file = process.argv[2];
const text = file ? fs.readFileSync(file, "utf8") : fs.readFileSync(0, "utf8");
console.log(text.split(/\s+/).filter(Boolean).length);
