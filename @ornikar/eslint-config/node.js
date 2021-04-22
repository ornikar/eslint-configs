'use strict';

module.exports = {
  extends: ['.', './rules/node', './rules/prettier'].map(require.resolve),
};
