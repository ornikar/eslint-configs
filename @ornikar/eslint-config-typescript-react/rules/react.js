'use strict';

module.exports = {
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['tsx'],
      },
    ],

    /* disable all prop-types rules */
    'react/default-props-match-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/sort-prop-types': 'off',
  },
};
