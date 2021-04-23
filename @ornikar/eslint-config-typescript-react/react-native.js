'use strict';

module.exports = {
  extends: ['.', '@ornikar/eslint-config-react/react-native'].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.ios.ts',
          '.android.ts',
          '.web.ts',
          '.ios.tsx',
          '.android.tsx',
          '.web.tsx',
          '.d.ts',
        ],
      },
    },
  },
};
