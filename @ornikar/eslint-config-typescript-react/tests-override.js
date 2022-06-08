'use strict';

module.exports = {
  extends: [
    '@ornikar/eslint-config-typescript/tests-override',
    '@ornikar/eslint-config-react/rules/react-testing-library',
  ].map(require.resolve),
};
