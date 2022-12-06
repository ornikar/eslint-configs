'use strict';

/* prefer usage of .mjs files over this override */
module.exports = {
  extends: ['plugin:n/recommended-module', require.resolve('./rules/node-override')],
  parserOptions: {
    // top level await is introduced in ecmaVersion: 2022 but supported since node 14
    ecmaVersion: 2022,
  },
};
