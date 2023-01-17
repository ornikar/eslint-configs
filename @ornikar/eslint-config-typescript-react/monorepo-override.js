'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config-react/rules/react-testing-library-base-monorepo-override'].map(require.resolve),
};
