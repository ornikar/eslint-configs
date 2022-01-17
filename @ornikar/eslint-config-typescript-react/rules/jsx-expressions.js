'use strict';

module.exports = {
  plugins: ['jsx-expressions'],
  rules: {
    // https://github.com/hpersson/eslint-plugin-jsx-expressions/blob/master/docs/rules/strict-logical-expressions.md
    'jsx-expressions/strict-logical-expressions': 'warn',
  },
};
