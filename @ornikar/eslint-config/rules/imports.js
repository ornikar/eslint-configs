'use strict';

module.exports = {
  rules: {
    /* https://ornikar.atlassian.net/wiki/spaces/TECH/pages/2670330094/Avoid+default+export */

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'error',
  },
};
