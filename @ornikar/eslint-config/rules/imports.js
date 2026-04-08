'use strict';

module.exports = {
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    // Override airbnb's maxDepth: '∞' which causes exponential graph traversal.
    // Depth 3 catches virtually all real-world accidental cycles.
    'import/no-cycle': ['error', { maxDepth: 3, ignoreExternal: true }],

    /* https://ornikar.atlassian.net/wiki/spaces/TECH/pages/2670330094/Avoid+default+export */

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'error',
  },
};
