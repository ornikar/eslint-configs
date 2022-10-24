'use strict';

module.exports = {
  extends: ['./rules/react', './rules/react-testing-library-base', './rules/security'].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },

  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['js'] }],
  },
};
