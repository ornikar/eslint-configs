'use strict';

const { enableIfVSCode } = require('@ornikar/eslint-config/utils');

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
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',

    /* Enabled as 'warn' in recommended, changed to 'error' */
    '@typescript-eslint/no-non-null-assertion': 'error',

    /* Changed */
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Omit: 'Prefer `Except` from type-fest. https://github.com/sindresorhus/type-fest/blob/main/source/except.d.ts',
        },
      },
    ],

    // type annotations are allowed on the variable of a function expression rather than on the function directly
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#allowtypedfunctionexpressions
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

    /* Warning */

    '@typescript-eslint/no-unsafe-argument': 'warn',

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

    /* Naming convention */
    '@typescript-eslint/naming-convention': [
      enableIfVSCode('warn'),
      // enforce that boolean are prefixed with an allowed verb
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'property',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', '$is', '$should', '$has', '$can', '$did', '$will'],
      },
      {
        selector: 'parameterProperty',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'parameter',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
    ],
  },
};
