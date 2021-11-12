'use strict';

module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
