'use strict';

// Incorrect uses
const a = 42.22222;

// eslint-disable-next-line unicorn/require-number-to-fixed-digits-argument
exports.foo = a.toFixed();

// Correct uses
exports.foo = a.toFixed(2);
