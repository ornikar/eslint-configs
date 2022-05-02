'use strict';

// Incorrect uses
// eslint-disable-next-line jest/no-disabled-tests
describe.skip('foo', () => {});
// eslint-disable-next-line jest/no-disabled-tests
it.skip('foo', () => {});
// eslint-disable-next-line jest/no-disabled-tests
test.skip('foo', () => {});

// eslint-disable-next-line jest/no-disabled-tests
it('bar');
// eslint-disable-next-line jest/no-disabled-tests
test('bar');

// Correct uses
describe('foo', () => {});
it('foo', () => {});
test('foo', () => {});
