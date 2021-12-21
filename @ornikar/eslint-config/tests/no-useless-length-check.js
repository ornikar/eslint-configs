'use strict';

const emptyArray = [];

const array = ['foo', 'bar', 'baz'];

// eslint-disable-next-line unicorn/no-useless-length-check
if (emptyArray.length === 0 || emptyArray.every(Boolean));

// eslint-disable-next-line unicorn/no-useless-length-check
if (array.length > 0 && array.some(Boolean));

// eslint-disable-next-line unicorn/no-useless-length-check
const isAllTrulyOrEmpty = array.length === 0 || array.every(Boolean);

if (array.every(Boolean));

if (array.some(Boolean));

const isAllTrulyOrEmptyValid = array.every(Boolean);

const isNonEmptyAllTrulyArray = array.length > 0 && array.every(Boolean);

const isEmptyArrayOrAllTruly = array.length === 0 || array.some(Boolean);

exports = {
  isAllTrulyOrEmpty,
  isAllTrulyOrEmptyValid,
  isNonEmptyAllTrulyArray,
  isEmptyArrayOrAllTruly,
};
