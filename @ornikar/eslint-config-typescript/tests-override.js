'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config/tests-override'].map(require.resolve),

  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-test-renderer',
            importNames: ['act'],
            message: 'Please use act from @testing-library/* instead.',
          },
        ],
      },
    ],
  },
};
