'use strict';

const fs = require('node:fs');
const path = require('node:path');
// eslint-disable-next-line import/no-unresolved -- dev dependency
const tseslint = require('typescript-eslint');
const { RuleTester } = require('./test-utils/RuleTester');
const rule = require('./typescript-no-unused-exports');

const fixturesPath = path.join(__dirname, '../fixtures');

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: fixturesPath,
    },
  },
});

ruleTester.run('typescript-no-unused-exports', rule, {
  valid: [
    {
      filename: 'used-export.ts',
      code: fs.readFileSync(path.join(fixturesPath, 'used-export.ts'), 'utf8'),
    },
  ],
  invalid: [
    {
      filename: 'unused-export.ts',
      code: fs.readFileSync(path.join(fixturesPath, 'unused-export.ts'), 'utf8'),
      errors: [
        {
          messageId: 'unusedExport',
          data: { exportName: 'UnusedExport' },
          line: 1,
          endLine: 1,
          column: 1,
          endColumn: 7,
          suggestions: [
            {
              messageId: 'removeExport',
              data: { exportName: 'UnusedExport' },
              output: ` function UnusedExport(): void {}
`,
            },
          ],
        },
      ],
    },
  ],
});
