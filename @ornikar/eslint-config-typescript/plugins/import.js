'use strict';

module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
    'import/extensions': ['.js', '.ts'],
  },

  rules: {
    /* extensions configuration */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],

    // type-fest is typescript only
    'import/no-unresolved': [
      'error',
      {
        ignore: ['type-fest'],
      },
    ],

    /* issues */

    /* some exported type doesnt work. tsc check that anyway */
    'import/named': 'off',

    /* Avoid default exports: https://docs.google.com/presentation/d/1dNwYuXio0f4AcqMNdGqgkvfd_LxFoEnHTQemJD6L_S8/edit#slide=id.gbb0b5a8f06_0_1661 */
    'import/no-default-export': ['warn'],
  },
};
