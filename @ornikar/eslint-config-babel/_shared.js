'use strict';

module.exports = {
  extends: ['./rules/prefer-class-properties'].map(require.resolve),

  parserOptions: {
    sourceType: 'module',
    // as we use babel, we can use latest ecma features
    ecmaVersion: 2022,
  },

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // disallow require when using babel
    'import/no-commonjs': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/no-extraneous-dependencies.md
    // override default airbnb exceptions
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
  },
};
