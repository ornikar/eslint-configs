'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/imports',
    './rules/style',
    './rules/sort-imports-exports',
    './rules/security',
    './rules/unicorn',
  ].map(require.resolve),
};
