'use strict';

module.exports = {
  extends: ['.', './node'].map(require.resolve),

  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
