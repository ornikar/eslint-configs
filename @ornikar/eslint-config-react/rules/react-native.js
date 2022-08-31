'use strict';

module.exports = {
  env: {
    browser: true,
  },

  globals: {
    __DEV__: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },

  rules: {
    'react/prefer-stateless-function': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', "'", '}'] }],
  },
};
