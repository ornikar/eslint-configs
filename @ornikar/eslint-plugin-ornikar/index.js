'use strict';

const allRulesEnabledConfig = require('./configs/all');
const loadRules = require('./loadRules');

const recommendedConfig = allRulesEnabledConfig;

module.exports = {
  rules: {
    ...loadRules(),
  },
  configs: {
    recommended: recommendedConfig,
    all: allRulesEnabledConfig,
  },
};
