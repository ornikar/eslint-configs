'use strict';

const forbidComponentsProps = [{ propName: 'data-testid', message: 'Use testID for native components' }];

module.exports = {
  plugins: ['react-native'],

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
    'react/no-unescaped-entities': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-component-props': [
      'error',
      {
        forbid: forbidComponentsProps,
      },
    ],
    'react-native/no-raw-text': [
      2,
      {
        skip: [
          'Typography.Text',
          'Typography.Paragraph',
          'Typography.Header1',
          'Typography.Header2',
          'Typography.Header3',
          'Typography.Header4',
          'Typography.Header5',
          'Typography.Header6',
          'Typography.h1',
          'Typography.h2',
          'Typography.h3',
          'Typography.h4',
          'Typography.h5',
          'Button',
        ],
      },
    ],
  },
};
