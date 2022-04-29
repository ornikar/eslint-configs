'use strict';

module.exports = {
  plugins: ['testing-library'],
  rules: {
    'testing-library/await-async-query': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-await-sync-query': 'error',
  },
};
