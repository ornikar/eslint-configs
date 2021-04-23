'use strict';

module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.d.ts'],
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

    /* issues */

    /* some exported type doesnt work. tsc check that anyway */
    'import/named': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    /* Avoid default exports: https://docs.google.com/presentation/d/1dNwYuXio0f4AcqMNdGqgkvfd_LxFoEnHTQemJD6L_S8/edit#slide=id.gbb0b5a8f06_0_1661 */
    'import/no-default-export': ['warn'],
  },
};
