'use strict';

module.exports = {
  rules: {
    /* changed rules */

    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // when a function is exported, it makes more sense to use curly braces, but with callbacks use expressions.
    // We should use eslint-plugin-proper-arrows or similar
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none', // changed after-used to none
        ignoreRestSiblings: true,
      },
    ],

    /* stricter rules */

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', caseInsensitive: false },
        'newlines-between': 'never',
        pathGroups: [
          {
            pattern: '*.module.css',
            patternOptions: { matchBase: true },
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'external', 'internal'],
      },
    ],
  },
};
