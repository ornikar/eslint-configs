'use strict';

module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/prefer-called-with': 'error',
  },
};
