'use strict';

// eslint-disable-next-line import/no-extraneous-dependencies
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['tsx'],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'error',
      {
        noSortAlphabetically: true,
        requiredFirst: false,
        callbacksLast: true,
        checkTypes: true,
      },
    ],

    // overrides camelcase rule to allow UNSAFE_* commonly used in react libraries
    camelcase: ['error', { ...baseStyleRules.camelcase[1], allow: ['^UNSAFE_'] }],
  },
};
