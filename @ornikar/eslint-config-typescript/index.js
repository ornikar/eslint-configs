'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  extends: ['@ornikar/eslint-config-babel-use', './plugins/import', './plugins/typescript-eslint'].map(require.resolve),
};
