/* eslint-disable no-unused-vars, class-methods-use-this,  max-classes-per-file, getter-return, no-empty-function */

'use strict';

const array = [];

// Incorrect uses

const foo = {
  // eslint-disable-next-line unicorn/no-thenable
  then() {},
};

exports.foo = {
  // eslint-disable-next-line unicorn/no-thenable
  get then() {},
};

// eslint-disable-next-line unicorn/no-thenable
foo.then = function method() {};

class Foo1 {
  // eslint-disable-next-line unicorn/no-thenable
  then() {}
}

class Foo2 {
  // eslint-disable-next-line unicorn/no-thenable
  static then() {}
}

// Correct uses

exports.foo = {
  success() {},
};

class Foo {
  success() {}
}

exports.foo2 = foo.then;
