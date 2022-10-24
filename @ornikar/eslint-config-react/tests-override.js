'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/tests-override', './rules/react-testing-library-tests'].map(require.resolve),
};
