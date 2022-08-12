'use strict';

const fs = require('fs');

/* Fail */

// eslint-disable-next-line unicorn/text-encoding-identifier-case
fs.readFile('path', 'UTF-8');
// eslint-disable-next-line unicorn/text-encoding-identifier-case
fs.readFile('path', 'ASCII');
// eslint-disable-next-line unicorn/text-encoding-identifier-case
Buffer.from().toString('utf-8');

/* Success */

fs.readFile('path', 'utf8');
fs.readFile('path', 'ascii');
Buffer.from().toString('utf8');
