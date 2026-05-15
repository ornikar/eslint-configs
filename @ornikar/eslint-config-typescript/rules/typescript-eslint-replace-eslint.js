'use strict';

const { rules: ornikarStyleRules } = require('@ornikar/eslint-config/rules/style');
const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseErrorsRules } = require('eslint-config-airbnb-base/rules/errors');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');

// `@typescript-eslint` v8 removed all formatting/style rules
// (brace-style, comma-dangle, comma-spacing, func-call-spacing, indent,
// keyword-spacing, lines-between-class-members, object-curly-spacing,
// padding-line-between-statements, quotes, semi, space-before-function-paren,
// space-infix-ops). Prettier covers them. Their entries are removed here.
//
// `@typescript-eslint/no-throw-literal` was renamed to
// `@typescript-eslint/only-throw-error` in v8 — keep parity by enabling the
// new name with the same airbnb-base value.

module.exports = {
  /* Replace enabled rules in Airbnb by typescript-eslint rules */
  rules: {
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': baseBestPracticesRules['default-param-last'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': baseVariablesRules['init-declarations'],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': baseBestPracticesRules['no-invalid-this'],

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': baseErrorsRules['no-loss-of-precision'],

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': baseES6Rules['no-restricted-imports'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

    // renamed from `@typescript-eslint/no-throw-literal` in v8
    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': baseBestPracticesRules['no-throw-literal'],

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ornikarStyleRules['no-unused-vars'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

    'require-await': 'off',
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

    'no-return-await': 'off',
    '@typescript-eslint/return-await': baseBestPracticesRules['no-return-await'],
  },
};
