'use strict';

// Incorrect uses

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/no-useless-fallback-in-spread
const object1 = { ...(foo || {}) };

// Correct uses

// eslint-disable-next-line no-unused-vars, no-undef
const object2 = { ...foo };

// eslint-disable-next-line no-unused-vars, no-undef
const object3 = { ...(foo && {}) };

// eslint-disable-next-line no-unused-vars, no-undef
const array1 = [...(foo || [])];
