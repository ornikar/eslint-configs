'use strict';

// Incorrect uses

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-index-of
const index1 = foo.findIndex((x) => x === 'foo');

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-index-of, yoda
const index2 = foo.findIndex((x) => 'foo' === x);

// eslint-disable-next-line no-unused-vars, no-undef, unicorn/prefer-array-index-of
const index3 = foo.findIndex((x) => {
  return x === 'foo';
});

// Correct uses

// eslint-disable-next-line no-unused-vars, no-undef
const index4 = foo.indexOf('foo');

// eslint-disable-next-line no-unused-vars, no-undef, eqeqeq
const index5 = foo.findIndex((x) => x == undefined);

// eslint-disable-next-line no-unused-vars, no-undef
const index6 = foo.findIndex((x) => x !== 'foo');

// eslint-disable-next-line no-unused-vars, no-undef
const index7 = foo.findIndex((x, index) => x === index);

// eslint-disable-next-line no-unused-vars, no-undef
const index8 = foo.findIndex((x) => x === 'foo' && isValid());

// eslint-disable-next-line no-unused-vars, no-undef
const index9 = foo.findIndex((x) => y === 'foo');

// eslint-disable-next-line no-unused-vars, no-undef
const index10 = foo.findIndex((x) => y.x === 'foo');

// eslint-disable-next-line no-unused-vars, no-undef
const index11 = foo.findIndex((x) => {
  // eslint-disable-next-line no-undef
  const bar = getBar();
  return x === bar;
});
