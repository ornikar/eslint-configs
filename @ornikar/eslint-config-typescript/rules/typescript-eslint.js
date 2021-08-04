'use strict';

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],

  rules: {
    /* Enabled */
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    /* Enabled as 'warn' in recommended, changed to 'error' */
    '@typescript-eslint/no-non-null-assertion': 'error',

    /* Changed */
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Omit: 'Prefer `Except` from type-fest. https://github.com/sindresorhus/type-fest/blob/master/source/except.d.ts',
        },
      },
    ],

    // type annotations are allowed on the variable of a function expression rather than on the function directly
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#allowtypedfunctionexpressions
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/issues/201
    // private is coming in js world and no-public will be the most common way to read a js file (and probably ts)
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],

    /* Disabled */

    // interface can be used for empty props
    '@typescript-eslint/no-empty-interface': 'off',
    // too much errors on existing code
    '@typescript-eslint/unbound-method': 'off',

    // issue when is used to remove undefined
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    /* in recommended, disabled but to enable */
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
  },
};
