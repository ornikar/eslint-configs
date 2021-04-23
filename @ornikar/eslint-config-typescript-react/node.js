'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',
    '@ornikar/eslint-config/rules/node',
    './_shared',
    '@ornikar/eslint-config/rules/node-override',
    '@ornikar/eslint-config/rules/prettier',
  ].map(require.resolve),
};
