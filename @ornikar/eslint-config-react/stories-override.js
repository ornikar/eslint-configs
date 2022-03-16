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

    // Allow arrow functions in stories
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
  },
};
