/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

// Incorrect uses
// eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary, no-unneeded-ternary
const fail = foo ? foo : bar;

// eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary
const fail2 = foo.bar ? foo.bar : foo.baz;

// eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary
const fail3 = foo?.bar ? foo.bar : baz;

// eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary
const fail4 = !bar ? foo : bar;

// Correct uses
const success = foo ?? bar;

const success2 = foo || bar;

const success3 = foo ? bar : baz;

const success4 = foo.bar ?? foo.baz;

const success5 = foo?.bar ?? baz;
