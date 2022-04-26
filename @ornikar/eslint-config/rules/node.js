'use strict';

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended', require.resolve('./node-override')],

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
      extends: ['plugin:node/recommended-script', require.resolve('./node-override')],
    },
    {
      files: ['*.mjs'],
      extends: ['plugin:node/recommended-module', require.resolve('./node-override')],
      parserOptions: {
        // top level await is introduced in ecmaVersion: 2022 but supported since node 14
        ecmaVersion: 2022,
      },
    },
  ],
};
