'use strict';

module.exports = {
  extends: ['eslint-config-airbnb-base', './_shared', './rules/prettier'].map(require.resolve),

  parserOptions: {
    sourceType: 'script',
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
