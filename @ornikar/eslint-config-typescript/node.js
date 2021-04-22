'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/node', './_shared', '@ornikar/eslint-config/rules/prettier'].map(require.resolve),
};
