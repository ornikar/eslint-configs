'use strict';

// Incorrect uses

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-some
const foo = array.filter((element) => isUnicorn(element)).length > 0;

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-some, unicorn/explicit-length-check
const bar = array.filter((element) => isUnicorn(element)).length !== 0;

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/explicit-length-check
const baz = array.filter((element) => isUnicorn(element)).length >= 1;

// eslint-disable-next-line no-undef, unicorn/prefer-array-some
if (array.find((element) => isUnicorn(element))) {
  // …
}

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-some
const bla = array.find((element) => isUnicorn(element)) ? toto : tata;

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-some
const buz = array.find((element) => isUnicorn(element)) !== undefined;

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-some
const bor = array.find((element) => isUnicorn(element)) != null;

// Correct uses

// eslint-disable-next-line no-unused-vars, no-undef
const bol = array.some((element) => isUnicorn(element));

// eslint-disable-next-line no-undef
if (array.some((element) => isUnicorn(element))) {
  // …
}

// eslint-disable-next-line no-unused-vars, no-undef
const bal = array.find((element) => isUnicorn(element)) || tutu;
