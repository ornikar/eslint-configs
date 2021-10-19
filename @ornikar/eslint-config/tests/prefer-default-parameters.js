'use strict';

// Incorrect uses

// eslint-disable-next-line no-unused-vars
function abc(foo) {
  // eslint-disable-next-line no-param-reassign, unicorn/prefer-default-parameters
  foo = foo || 'bar';
}
// eslint-disable-next-line no-unused-vars
function def(foo) {
  // eslint-disable-next-line no-unused-vars, unicorn/prefer-default-parameters
  const bar = foo || 'bar';
}

// Correct uses

// eslint-disable-next-line no-unused-vars
function ghi(foo = 'bar') {}

// eslint-disable-next-line no-unused-vars
function jkl(foo) {
  // eslint-disable-next-line no-param-reassign, no-undef
  foo = foo || bar();
}
