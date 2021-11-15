'use strict';

const string = 'a string';

// Incorrect uses

// eslint-disable-next-line unicorn/prefer-regexp-test
if (string.match(/unicorn/)) {
  // No content
}

// eslint-disable-next-line unicorn/prefer-regexp-test
if (/unicorn/.exec(string)) {
  // No content
}

// Correct uses

if (/unicorn/.test(string)) {
  // No content
}
