'use strict';

module.exports = {
  plugins: ['testing-library'],
  rules: {
    'testing-library/await-async-query': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-await-sync-events': 'error',
    'testing-library/no-debugging-utils': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/prefer-explicit-assert': 'error',
  },
};
