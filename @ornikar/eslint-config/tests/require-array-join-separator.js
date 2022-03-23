'use strict';

const array = [];

// Incorrect uses

// eslint-disable-next-line unicorn/require-array-join-separator
exports.foo = array.join();

// eslint-disable-next-line unicorn/require-array-join-separator
exports.bar = Array.prototype.join.call(array);

// eslint-disable-next-line unicorn/require-array-join-separator
exports.baz = [].join.call(array);

// Correct uses

exports.bla = array.join(',');

exports.buz = array.join('|');

exports.bor = Array.prototype.join.call(array, '');

exports.bol = [].join.call(array, '\n');
