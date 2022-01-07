'use strict';

const airbnbStyleRules = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  rules: {
    // already checked by import plugin
    'node/no-unpublished-require': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-missing-import': 'off',

    // Use for-of instead of for
    'unicorn/no-for-loop': 'error',

    // allow process.exit
    'no-process-exit': 'off',

    // Allow for-of, now supported by node 6
    'no-restricted-syntax': [
      'error',
      ...airbnbStyleRules.rules['no-restricted-syntax']
        .slice(1)
        .filter(({ selector }) => selector !== 'ForOfStatement'),
    ],

    // TODO [engine:node@>=16.6] .at only supported from node 16.6
    'unicorn/prefer-at': 'off',
  },
};
