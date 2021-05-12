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
    'react/prop-types': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/issues/2702
    'react/sort-prop-types': 'off',
  },
};
