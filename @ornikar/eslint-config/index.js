'use strict';

module.exports = {
  extends: ['eslint-config-airbnb-base', './_shared', './rules/prettier'].map(require.resolve),

  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2020,
  },

  rules: {
    strict: ['error', 'safe'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },
};
