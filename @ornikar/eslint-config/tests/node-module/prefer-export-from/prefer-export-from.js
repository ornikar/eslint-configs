/* eslint-disable import/no-unresolved, import/extensions, import/order, import/first, simple-import-sort/exports, import/no-duplicates */

// Incorrect uses

import { namedFoo } from './foo';
// eslint-disable-next-line unicorn/prefer-export-from
export { namedFoo };

import * as namespaceFoo from './foo';
// eslint-disable-next-line unicorn/prefer-export-from
export { namespaceFoo };

import defaultExport, { namedBar } from './foo';
// eslint-disable-next-line unicorn/prefer-export-from
export { namedBar, defaultExport as renamedDefault, namedBar as renamedNamed };

// eslint-disable-next-line import/no-default-export
export default namespaceFoo;

// Correct uses

export { namedBaz } from './foo';

export * as namespaceBar from './foo.js';
