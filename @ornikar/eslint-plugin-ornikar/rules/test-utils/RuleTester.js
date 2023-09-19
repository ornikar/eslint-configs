'use strict';

// eslint-disable-next-line import/no-unresolved -- waiting for node 18
const { after, describe, it } = require('node:test');
// eslint-disable-next-line import/no-unresolved, import/order -- missing main field
const { RuleTester } = require('@typescript-eslint/rule-tester');

RuleTester.afterAll = after;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

exports.RuleTester = RuleTester;
