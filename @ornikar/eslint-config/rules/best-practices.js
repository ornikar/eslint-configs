'use strict';

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',

    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ['error', { terms: ['fixme', 'xxx', 'console.'], location: 'start' }],

    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['warn', 6],
  },
};
