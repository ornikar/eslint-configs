'use strict';

const firstElement = 'foo';
const secondElement = 'bar';
const thirdElement = 'baz';

// eslint-disable-next-line no-unused-vars, unicorn/no-useless-spread
const array = [firstElement, ...[secondElement], thirdElement];

const firstProperty = 'foo';
const secondProperty = 'bar';
const thirdProperty = 'baz';

// eslint-disable-next-line no-unused-vars, unicorn/no-useless-spread
const object = { firstProperty, ...{ secondProperty }, thirdProperty };

const iterable = ['foo', 'bar', 'baz'];

// eslint-disable-next-line unicorn/no-useless-spread
const set = new Set([...iterable]);

// // eslint-disable-next-line no-unused-vars, unicorn/no-useless-spread
// const results = await Promise.all([...iterable]);

// eslint-disable-next-line no-unused-vars, no-restricted-syntax, unicorn/no-useless-spread
for (const foo of [...set]);

// eslint-disable-next-line no-unused-vars
const validArray = [firstElement, secondElement, thirdElement];

// eslint-disable-next-line no-unused-vars
const validObject = { firstProperty, secondProperty, thirdProperty };
