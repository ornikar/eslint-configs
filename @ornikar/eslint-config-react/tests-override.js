'use strict';

module.exports = {
  env: {
    jest: true,
  },

  extends: ['.', './rules/react-testing-library'].map(require.resolve),

  rules: {
    // Allow to use devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
