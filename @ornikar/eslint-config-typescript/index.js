'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  extends: [
    require.resolve('@ornikar/eslint-config-babel-use'),
    'plugin:import/typescript',
    require.resolve('./plugins/typescript-eslint'),
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
    'import/extensions': ['.ts', '.d.ts', '.js'],
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
};
