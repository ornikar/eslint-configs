'use strict';

const bar = 0;

// Incorrect uses

// eslint-disable-next-line no-unused-expressions, unicorn/prefer-modern-math-apis
Math.log(bar) * Math.LOG10E;

// eslint-disable-next-line no-unused-expressions, unicorn/prefer-modern-math-apis
Math.LOG2E * Math.log(bar);

// eslint-disable-next-line no-unused-expressions, unicorn/prefer-modern-math-apis
Math.log(bar) / Math.LN10;

// eslint-disable-next-line no-unused-expressions, unicorn/prefer-modern-math-apis
Math.log(bar) / Math.LN2;

// Correct uses

Math.log(bar);

Math.log10(bar);

Math.LOG2E(bar);
