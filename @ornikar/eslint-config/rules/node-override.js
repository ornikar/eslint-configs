'use strict';

const airbnbStyleRules = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  rules: {
    // already checked by import plugin
    'n/no-unpublished-require': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-extraneous-require': 'off',
    'n/no-extraneous-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-missing-import': 'off',

    // Use for-of instead of for
    'unicorn/no-for-loop': 'error',

    // allow process.exit, disallowed when not used in script via https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
    'no-process-exit': 'off',
    'n/no-process-exit': 'off',

    // Allow for-of, now supported by node 6
    'no-restricted-syntax': [
      'error',
      ...airbnbStyleRules.rules['no-restricted-syntax']
        .slice(1)
        .filter(({ selector }) => selector !== 'ForOfStatement'),
    ],

    'unicorn/prefer-at': 'error',
  },
};
