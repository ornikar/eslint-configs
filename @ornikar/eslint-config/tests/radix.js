'use strict';

// Incorrect

// eslint-disable-next-line radix
exports.foo = parseInt('071');

// Correct

exports.bar = parseInt('071', 10);
