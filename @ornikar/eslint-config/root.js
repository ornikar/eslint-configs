'use strict';

module.exports = {
  extends: ['./node'].map(require.resolve),

  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    // Allow non-literal fs filename for dev scripts
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-require': 'off',
  },
};
