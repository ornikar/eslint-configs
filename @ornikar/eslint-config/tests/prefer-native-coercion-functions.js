'use strict';

const array = [];
const foo = 'foo';

// Incorrect uses

// eslint-disable-next-line unicorn/prefer-native-coercion-functions
exports.toBoolean = (value) => Boolean(value);

// eslint-disable-next-line unicorn/prefer-native-coercion-functions
function toNumber(value) {
  return Number(value);
}

if (toNumber(foo) === 1) {
  console.log(foo);
}

// eslint-disable-next-line unicorn/prefer-native-coercion-functions
exports.hasTruthyValue = array.some((element) => element);

// Correct uses

exports.toBoolean = Boolean;

if (Number(foo) === 1) {
  console.log(foo);
}

exports.hasTruthyValue = array.some(Boolean);

exports.toStringObject = String;
