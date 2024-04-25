'use strict';

const { enableIfVSCode } = require('@ornikar/eslint-config/utils');

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-type-checked'],

  rules: {
    /* Enabled */
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
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
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

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

    /* Disabled */

    // interface can be used for empty props
    '@typescript-eslint/no-empty-interface': 'off',
    // too much errors on existing code
    '@typescript-eslint/unbound-method': 'off',

    // issue when is used to remove undefined
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // we are not ready to enable this
    '@typescript-eslint/no-explicit-any': 'warn',

    // this was overriden by the repositories using this config
    '@typescript-eslint/no-unnecessary-condition': 'warn',

    /* in recommended, disabled but to enable */

    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',

    /* in recommended, warnings to temporary check if we want to enable it */

    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    /* Naming convention */
    '@typescript-eslint/naming-convention': [
      enableIfVSCode('warn'),
      // Enforce that interface or type names are not prefixed with an I and are in PascalCase
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // Enforce that an enum is suffixed
      {
        selector: 'enum',
        format: ['PascalCase'],
        suffix: ['Enum'],
      },
    ],
  },
};
