'use strict';

module.exports = {
  extends: [require.resolve('@ornikar/eslint-config-react')],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.ts', '.tsx', '.d.ts', '.js'],
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['tsx', 'js'] }],
    'react/prop-types': 'off',
  },
};
