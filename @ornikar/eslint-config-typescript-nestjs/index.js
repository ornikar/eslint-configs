'use strict';

module.exports = {
  plugins: ['eslint-plugin-tsdoc', 'prefer-arrow-functions'],
  extends: [
    '@ornikar/eslint-config-typescript/node',
    './rules/typescript-eslint',
    '@ornikar/eslint-config/rules/prettier',
  ].map(require.resolve),
  rules: {
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        returnStyle: 'implicit',
      },
    ],
    'tsdoc/syntax': 'warn',
  },
};
