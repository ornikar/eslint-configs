'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config-typescript/app'].map(require.resolve),
  overrides: [
    {
      files: ['**/stories.{ts,tsx}', '**/stories/**/*.{ts,tsx}', '**/storybook/**/*.{ts,tsx}'],
      settings: {
        'import/core-modules': [
          '@storybook/react',
          '@storybook/addons',
          '@storybook/addon-actions',
          '@storybook/addon-knobs',
          '@storybook/addon-link',
        ],
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        'react/function-component-definition': 'warn',
      },
    },
  ],
};
