'use strict';

const foo = {};

// Incorrect uses

// eslint-disable-next-line unicorn/no-useless-fallback-in-spread
exports.object1 = { ...(foo || {}) };

// Correct uses

exports.object2 = { ...foo };

exports.object3 = { ...(foo && {}) };

exports.array1 = [...(foo || [])];
