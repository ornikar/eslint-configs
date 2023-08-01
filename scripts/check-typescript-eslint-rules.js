'use strict';

const assert = require('assert');
// eslint-disable-next-line import/no-unresolved
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintConfig = require('../@ornikar/eslint-config-typescript/rules/typescript-eslint').rules;

const typescriptEslintRules = Object.keys(
  // eslint-disable-next-line import/no-unresolved
  require('@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules').default,
);

const typescriptEslintRecommendedConfig = typescriptEslintPlugin.configs.recommended.rules;
const typescriptEslintRecommendedRequiringTypeCheckingConfig =
  typescriptEslintPlugin.configs['recommended-type-checked'].rules;

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
      `Rule "${rule}" has same value as recommended-type-checked config`,
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
