'use strict';

const pairs = {};

// eslint-disable-next-line unicorn/no-array-reduce, unicorn/prefer-object-from-entries
const newObj = pairs.reduce((object, [key, value]) => ({ ...object, [key]: value }), {});

exports.object = newObj;
