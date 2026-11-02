#!/bin/sh
# Checks index.html is well formed and self-contained, and README.md describes it.
fail=0
check() { # description, command...
  d=$1; shift
  if "$@" >/dev/null 2>&1; then echo "PASS: $d"; else echo "FAIL: $d"; fail=1; fi
}
[ -f index.html ] || { echo "FAIL: index.html missing"; exit 1; }
[ -f README.md ] || { echo "FAIL: README.md missing"; exit 1; }
check "doctype" grep -qi '^[[:space:]]*<!doctype html>' index.html
check "html lang attribute" grep -qiE '<html[^>]*[[:space:]]lang="[^"]+"' index.html
check "non-empty title" grep -qiE '<title>[^<]+</title>' index.html
check "h1" grep -qiE '<h1[ >]' index.html
if grep -nE 'https?://' index.html; then echo "FAIL: external http(s) reference"; fail=1; else echo "PASS: no http(s) references"; fi
check "README has Hello page heading" grep -qiE '^#+[[:space:]]+Hello page' README.md
# section body mentions index.html
if awk 'BEGIN{IGNORECASE=1} /^#+[ \t]+Hello page/{s=1;next} /^#/{s=0} s&&/index\.html/{f=1} END{exit !f}' README.md; then echo "PASS: Hello page section mentions index.html"; else echo "FAIL: Hello page section mentions index.html"; fail=1; fi
exit $fail
