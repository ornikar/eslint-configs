'use strict';

const forbidComponentsProps = [
  { propName: 'data-testid', message: 'Use testID for native components' },
  { propName: 'data-test', message: 'Use data-testid' },
  { propName: 'data-test-id', message: 'Use data-testid' },
  { propName: 'data-test-class', message: 'Use data-testid' },
];

module.exports = {
  env: {
    browser: true,
  },

  globals: {
    __DEV__: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },

  rules: {
    'react/prefer-stateless-function': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', "'", '}'],
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-component-props': [
      'error',
      {
        forbid: forbidComponentsProps,
      },
    ],
  },
};
