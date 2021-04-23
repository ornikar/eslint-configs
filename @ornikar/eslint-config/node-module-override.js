'use strict';

/* prefer usage of .mjs files over this override */
module.exports = {
  extends: ['plugin:node/recommended-module', require.resolve('./rules/node-override')],
};
