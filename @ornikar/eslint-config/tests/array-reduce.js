'use strict';

const array = [];

// Incorrect uses

const reducer = () => {};

// eslint-disable-next-line unicorn/no-array-reduce
array.reduce(reducer, 0);

// Correct uses

array.reduce((a, b) => a + b, 0);
