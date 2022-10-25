'use strict';

/* eslint-disable no-unused-vars */

let bar;
let baz;
let foo;
let isUnicorn;

// Incorrect uses

// eslint-disable-next-line unicorn/no-array-method-this-argument
foo = bar.find((element) => isUnicorn(element), baz);

foo = bar.map(function (element) {
  return this.unicorn(element);
  // eslint-disable-next-line unicorn/no-array-method-this-argument
}, baz);

// Correct uses

foo = bar.find((element) => isUnicorn(element));

// eslint-disable-next-line prefer-arrow-callback
foo = bar.map(function (element) {
  return baz.unicorn(element);
});

foo = bar.map(
  function (element) {
    return this.unicorn(element);
  }.bind(baz),
);
