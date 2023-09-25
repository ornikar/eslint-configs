'use strict';

const { RuleTester } = require('eslint');
const rule = require('./forbid-fetch-import');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('forbid-fetch-import', rule, {
  valid: [
    {
      code: `
      fetch('https://example.com');
    `,
    },
  ],
  invalid: [
    {
      code: `
      import fetch from 'node-fetch';
      fetch('https://example.com');
    `,
      errors: [
        {
          messageId: 'forbidden',
          data: { value: 'node-fetch' },
        },
      ],
    },
  ],
});
