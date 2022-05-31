'use strict';

module.exports = {
  env: {
    jest: true,
  },

  extends: ['.', './rules/jest'].map(require.resolve),

  rules: {
    // Allow to use devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    // Allow non-literal fs filename for tests
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-require': 'off',
  },
};
