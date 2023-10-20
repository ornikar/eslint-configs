'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { RuleTester } = require('./test-utils/RuleTester');
const rule = require('./typescript-no-unused-exports');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    tsconfigRootDir: path.join(__dirname, '../fixtures'),
    project: './tsconfig.json',
  },
});

const fixturesPath = path.join(__dirname, '../fixtures');

ruleTester.run('typescript-no-unused-exports', rule, {
  valid: [
    {
      filename: path.join(fixturesPath, 'used-export.ts'),
      code: fs.readFileSync(path.join(fixturesPath, 'used-export.ts'), 'utf8'),
    },
  ],
  invalid: [
    {
      filename: path.join(fixturesPath, 'unused-export.ts'),
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
