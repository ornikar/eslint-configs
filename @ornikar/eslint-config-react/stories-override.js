'use strict';

module.exports = {
  rules: {
    // Allow to use devDependencies in stories
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
