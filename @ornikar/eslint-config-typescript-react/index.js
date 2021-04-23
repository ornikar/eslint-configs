'use strict';

module.exports = {
  extends: [
    '@ornikar/eslint-config-typescript',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/hooks',
    './_shared',
    '@ornikar/eslint-config/rules/prettier',
  ].map(require.resolve),
};
