'use strict';

module.exports = {
  env: {
    jest: true,
  },

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
