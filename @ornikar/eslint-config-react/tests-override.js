'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/tests-override', './rules/react-testing-library'].map(require.resolve),
};
