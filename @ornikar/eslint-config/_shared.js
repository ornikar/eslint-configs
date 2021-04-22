'use strict';

module.exports = {
  extends: ['./rules/best-practices', './rules/style', './rules/filenames', './rules/unicorn'].map(require.resolve),
};
