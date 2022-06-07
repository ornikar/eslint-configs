'use strict';

const foo = [];
const bar = () => {};

// Incorrect uses

foo.push(1);
// eslint-disable-next-line unicorn/no-array-push-push
foo.push(2, 3);

// Correct uses

exports.length = foo.push(1);

foo.push(1);
bar();
foo.push(2);
