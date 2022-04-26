'use strict';

module.exports = {
  rules: {
    'security/detect-non-literal-fs-filename': 'off', // doesn't make sense in react on `window.open`
  },
};
