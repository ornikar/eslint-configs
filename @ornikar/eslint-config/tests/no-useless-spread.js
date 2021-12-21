'use strict';

const firstElement = 'foo';
const secondElement = 'bar';
const thirdElement = 'baz';

// eslint-disable-next-line unicorn/no-useless-spread
const array = [firstElement, ...[secondElement], thirdElement];

const firstProperty = 'foo';
const secondProperty = 'bar';
const thirdProperty = 'baz';

// eslint-disable-next-line unicorn/no-useless-spread
const object = { firstProperty, ...{ secondProperty }, thirdProperty };

const iterable = ['foo', 'bar', 'baz'];

// eslint-disable-next-line unicorn/no-useless-spread
const set = new Set([...iterable]);

// eslint-disable-next-line no-unused-vars, no-restricted-syntax, unicorn/no-useless-spread
for (const foo of [...set]);

const validArray = [firstElement, secondElement, thirdElement];

const validObject = { firstProperty, secondProperty, thirdProperty };

exports = {
  array,
  object,
  validArray,
  validObject,
};
