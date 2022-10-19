'use strict';

module.exports = {
  extends: [
    '@ornikar/eslint-config-react/rules/react',
    '@ornikar/eslint-config-react/rules/react-testing-library-base',
    '@ornikar/eslint-config-react/rules/security',
    // overrides for react with typescript (mostly extensions)
    './rules/import',
    './rules/react',
  ].map(require.resolve),
};
