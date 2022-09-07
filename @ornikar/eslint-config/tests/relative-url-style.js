'use strict';

const base = 'url';

// Incorrect uses

// eslint-disable-next-line unicorn/relative-url-style
exports.url = new URL('./foo', base);

// Correct uses

exports.url = new URL('foo', base);
