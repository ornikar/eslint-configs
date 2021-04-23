'use strict';

module.exports = {
  extends: [
    './rules/import',
    './rules/prefer-class-properties',
    './rules/typescript-eslint',
    './rules/typescript-eslint-replace-eslint',
  ].map(require.resolve),
  parserOptions: {
    project: './tsconfig.json',
  },
};
