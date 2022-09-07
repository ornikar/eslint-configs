'use strict';

const bar = 0;
const baz = 0;
const getBar = () => {};

// Incorrect uses

// eslint-disable-next-line unicorn/no-unreadable-iife
exports.foo = ((bar1) => (bar1 ? bar1.baz : baz))(getBar());

// eslint-disable-next-line unicorn/no-unreadable-iife
exports.foo = ((bar1, baz1) => ({ bar1, baz1 }))(bar, baz);

// Correct uses

exports.foo = bar ? bar.baz : baz;

const getBaz = (bar1) => (bar1 ? bar1.baz : baz);
exports.foo = getBaz(getBar());

exports.foo = ((bar1) => {
  return bar1 ? bar1.baz : baz;
})(getBar());
