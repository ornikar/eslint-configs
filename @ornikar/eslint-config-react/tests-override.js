'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/tests-override', './rules/react-testing-library'].map(require.resolve),
  plugins: ['testing-library'],

  rules: {
    'testing-library/consistent-data-testid': 'off',
  },
};
