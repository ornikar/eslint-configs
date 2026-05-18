'use strict';

// eslint-disable-next-line import/no-unresolved -- dev dependency
const tseslint = require('typescript-eslint');
const rule = require('./react-function-component-return-react-node');
const { RuleTester } = require('./test-utils/RuleTester');

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run('react-function-component-return-react-node', rule, {
  valid: [
    {
      code: `
import type { ReactNode } from 'react';
export function SomeComponent(): ReactNode {
  return <div />;
}
    `,
    },
  ],
  invalid: [
    {
      code: `
import type { ReactElement } from 'react';
export function SomeComponent(): ReactElement {
  return <div />;
}`,
      errors: [
        {
          messageId: 'invalidReturnType',
          data: { value: 'ReactElement' },
          line: 3,
          column: 34,
          endColumn: 46,
          suggestions: [
            {
              messageId: 'replaceReturnType',
              data: { value: 'ReactElement' },
              output: `
import type { ReactElement } from 'react';
export function SomeComponent(): ReactNode {
  return <div />;
}`,
            },
          ],
        },
      ],
    },
  ],
});
