'use strict';

const { RuleTester } = require('eslint');
const rule = require('./forbid-fetch-import');

// ESLint 9 RuleTester expects flat-config shape: parserOptions moved into languageOptions.
const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
});

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
