'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config', './_shared', '@ornikar/eslint-config/rules/prettier'].map(require.resolve),
};
