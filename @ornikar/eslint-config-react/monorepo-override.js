'use strict';

module.exports = {
  extends: ['./rules/react-testing-library-base-monorepo-override'].map(require.resolve),
};
