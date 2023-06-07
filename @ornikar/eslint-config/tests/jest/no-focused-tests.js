'use strict';

// Incorrect uses
// eslint-disable-next-line jest/no-focused-tests
describe.only('foo', () => {});
// eslint-disable-next-line jest/no-focused-tests
it.only('foo', () => {});
// eslint-disable-next-line jest/no-focused-tests
describe.only('bar', () => {});
// eslint-disable-next-line jest/no-focused-tests
it.only('bar', () => {});
// eslint-disable-next-line jest/no-focused-tests
test.only('foo', () => {});
// eslint-disable-next-line jest/no-focused-tests
test.only('bar', () => {});
// eslint-disable-next-line jest/no-focused-tests
fdescribe('foo', () => {});
// eslint-disable-next-line jest/no-focused-tests
fit('foo', () => {});
// eslint-disable-next-line jest/no-focused-tests
fit.each`
  table
`('foo', () => {});

// Correct uses
describe('foo', () => {});
it('foo', () => {});
test('foo', () => {});
it.each()('foo', () => {});
it.each`
  table
`('foo', () => {});
test.each()('foo', () => {});
test.each`
  table
`('foo', () => {});
