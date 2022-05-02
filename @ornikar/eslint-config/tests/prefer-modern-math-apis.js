'use strict';

const bar = 0;

// Incorrect uses

// eslint-disable-next-line unicorn/prefer-modern-math-apis
exports.foo = Math.log(bar) * Math.LOG10E;

// eslint-disable-next-line unicorn/prefer-modern-math-apis
exports.foo = Math.LOG2E * Math.log(bar);

// eslint-disable-next-line unicorn/prefer-modern-math-apis
exports.foo = Math.log(bar) / Math.LN10;

// eslint-disable-next-line unicorn/prefer-modern-math-apis
exports.foo = Math.log(bar) / Math.LN2;

// Correct uses

Math.log(bar);

Math.log10(bar);

Math.LOG2E(bar);
