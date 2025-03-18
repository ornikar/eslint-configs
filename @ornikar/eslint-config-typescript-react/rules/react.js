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

    // overrides camelcase rule to allow UNSAFE_* commonly used in react libraries
    camelcase: ['error', { ...baseStyleRules.camelcase[1], allow: ['^UNSAFE_'] }],
  },
};
