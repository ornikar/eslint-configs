'use strict';

exports.getTime = function getTime() {
  // eslint-disable-next-line unicorn/prefer-date-now
  return new Date().getTime();
};
