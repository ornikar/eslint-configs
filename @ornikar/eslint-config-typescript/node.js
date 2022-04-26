'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/node', './_shared', '@ornikar/eslint-config/rules/prettier'].map(require.resolve),

  rules: {
    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
