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
`();

// Correct uses
describe('foo', () => {});
it('foo', () => {});
test('foo', () => {});
it.each()();
it.each`
  table
`();
test.each()();
test.each`
  table
`();
