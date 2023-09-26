'use strict';

const fs = require('node:fs');

/* Fail */

// eslint-disable-next-line unicorn/prefer-json-parse-buffer
JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// eslint-disable-next-line unicorn/prefer-json-parse-buffer
const content = fs.readFileSync('./package.json', { encoding: 'utf8' });
JSON.parse(content);

/* Success */

JSON.parse(fs.readFileSync('./package.json'));
const content2 = fs.readFileSync('./package.json', { encoding: 'utf8', signal: new AbortController() });
JSON.parse(content2);
JSON.parse(fs.readFileSync('./file.json', 'buffer'));
JSON.parse(fs.readFileSync('./file.json', 'gbk'));
