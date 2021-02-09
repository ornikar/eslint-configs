'use strict';

module.exports = {
  extends: [
    '@ornikar/eslint-config-react/react-native',
    // overrides for react with typescript (mostly extensions)
    './rules/import',
    './rules/react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.ios.ts', '.android.ts', '.ios.tsx', '.android.tsx'],
      },
    },
  },
};
