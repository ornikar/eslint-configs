'use strict';

module.exports = {
  extends: ['./rules/react'].map(require.resolve),

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
