'use strict';

module.exports = {
  extends: [
    '@ornikar/eslint-config-react/rules/react',
    // overrides for react with typescript (mostly extensions)
    './rules/import',
    './rules/react',
  ].map(require.resolve),
};
