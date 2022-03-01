'use strict';

module.exports = {
  plugins: ['formatjs'],
  rules: {
    'formatjs/blocklist-elements': 'off',
    'formatjs/enforce-description': 'off',
    'formatjs/enforce-placeholders': 'error',
    'formatjs/enforce-plural-rules': 'error',
    'formatjs/enforce-default-message': 'error',
    'formatjs/no-camel-case': 'off',
    'formatjs/no-emoji': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/no-offset': 'error',
    'formatjs/enforce-id': 'error',
    'formatjs/no-complex-selectors': 'off',
  },
};
