'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/ornikar',
    './rules/imports',
    './rules/style',
    './rules/sort-imports-exports',
    './rules/security',
    './rules/unicorn',
  ].map(require.resolve),
};
