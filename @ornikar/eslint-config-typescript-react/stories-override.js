'use strict';

module.exports = {
  extends: ['@ornikar/eslint-config-react/stories-override'].map(require.resolve),
  rules: {
    /* In stories we don't need to be as strict as when we write source code */

    // We don't need to explicitly return the type of a function or react component
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
