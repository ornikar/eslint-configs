/* eslint-disable import/no-extraneous-dependencies */

'use strict';

const assert = require('assert');
const typescriptEslintRules = Object.keys(require('@typescript-eslint/eslint-plugin/dist/rules').default);
const typescriptEslintRecommendedConfig = require('@typescript-eslint/eslint-plugin/dist/configs/recommended').rules;
const typescriptEslintRecommendedRequiringTypeCheckingConfig =
  require('@typescript-eslint/eslint-plugin/dist/configs/recommended-requiring-type-checking').rules;
const typescriptEslintConfig = require('../@ornikar/eslint-config-typescript/rules/typescript-eslint').rules;

const typescriptEslintRecommendedRules = Object.keys(typescriptEslintRecommendedConfig);
const typescriptEslintRecommendedRequiringTypeCheckingRules = Object.keys(
  typescriptEslintRecommendedRequiringTypeCheckingConfig,
);
const typescriptEslintConfigRules = Object.keys(typescriptEslintConfig).filter(
  (rule) => !rule.startsWith('@typescript-eslint'),
);

typescriptEslintConfigRules.forEach((rule) => {
  if (!typescriptEslintRules.includes(rule.slice('@typescript-eslint/'.length))) {
    throw new Error(`Rule "${rule}" does not exists`);
  }
});

Object.entries(typescriptEslintRecommendedConfig).forEach(([rule, value]) => {
  if (typescriptEslintConfig[rule]) {
    assert.notDeepStrictEqual(
      typescriptEslintConfig[rule],
      value,
      `Rule "${rule}" has same value as recommended config`,
    );
  }
});

Object.entries(typescriptEslintRecommendedRequiringTypeCheckingConfig).forEach(([rule, value]) => {
  if (typescriptEslintConfig[rule]) {
    assert.notDeepStrictEqual(
      typescriptEslintConfig[rule],
      value,
      `Rule "${rule}" has same value as recommended-requiring-type-checking config`,
    );
  }
});

typescriptEslintRules.forEach((rule) => {
  const fullRuleName = `@typescript-eslint/${rule}`;
  if (
    !typescriptEslintRecommendedRules[fullRuleName] &&
    !typescriptEslintRecommendedRequiringTypeCheckingRules[fullRuleName] &&
    !typescriptEslintConfig[fullRuleName]
  ) {
    console.warn(`Missing rule config ${fullRuleName}`);
  }
});
