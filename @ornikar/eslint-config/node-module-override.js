'use strict';

/* prefer usage of .mjs files over this override */
module.exports = {
  extends: ['plugin:n/recommended-module', require.resolve('./rules/node-override')],
};
