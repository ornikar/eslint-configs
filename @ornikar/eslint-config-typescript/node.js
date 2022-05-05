'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/node', './_shared', '@ornikar/eslint-config/rules/prettier'].map(require.resolve),

  rules: {
    // disable no-unsupported-features when using babel
    'n/no-unsupported-features': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
  },
};
