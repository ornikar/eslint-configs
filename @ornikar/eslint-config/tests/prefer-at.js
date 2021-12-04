'use strict';

const array = [];
const string = '';
let foo;

// Incorrect uses

// eslint-disable-next-line unicorn/prefer-at
foo = array[array.length - 1];
// eslint-disable-next-line unicorn/prefer-at
foo = array[array.length - 5];
// eslint-disable-next-line prefer-destructuring, unicorn/prefer-at
foo = array.slice(-1)[0];
// eslint-disable-next-line unicorn/prefer-at
foo = array.slice(-1).pop();
// eslint-disable-next-line unicorn/prefer-at
foo = array.slice(-5).shift();
// eslint-disable-next-line unicorn/prefer-at
foo = string.charAt(string.length - 5);

// Correct uses

foo = array.at(-1);
foo = array.at(-5);
// eslint-disable-next-line prefer-destructuring
foo = array[100];
// This rule is not checking this case, but `unicorn/prefer-negative-index` rule will fix it.
// eslint-disable-next-line unicorn/prefer-negative-index
foo = array.at(array.length - 1);
array[array.length - 1] = foo;
