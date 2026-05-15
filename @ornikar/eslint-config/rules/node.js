'use strict';

module.exports = {
  plugins: ['n'],
  extends: ['plugin:n/recommended', require.resolve('./node-override')],

  parserOptions: {
    // top level await is introduced in ecmaVersion: 2022 but supported since node 14
    ecmaVersion: 2022,
  },

  env: {
    browser: false,
    node: true,
    es6: true,
  },

  overrides: [
    {
      files: ['*.cjs'],
      extends: ['plugin:n/recommended-script', require.resolve('./node-override')],
    },
    {
      files: ['*.mjs'],
      extends: ['plugin:n/recommended-module', require.resolve('./node-override')],
      parserOptions: {
        // top level await is introduced in ecmaVersion: 2022 but supported since node 14
        ecmaVersion: 2022,
      },
    },
    {
      files: ['scripts/**'],
      rules: {
        // `n/shebang` was renamed to `n/hashbang` in eslint-plugin-n v17;
        // keep both turned off so configs targeting either version work.
        'n/shebang': 'off',
        'n/hashbang': 'off',
      },
    },
  ],
};
