'use strict';

const { enableIfVSCode } = require('@ornikar/eslint-config/utils');

module.exports = {
  rules: {
    '@ornikar/ornikar/typescript-no-unused-exports': [
      enableIfVSCode('error'),
      {
        allowUnusedTypes: true,
      },
    ],
  },
};
