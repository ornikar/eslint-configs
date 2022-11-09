/* eslint-disable import/no-unresolved, import/extensions, import/order, import/no-duplicates */

import { namedFoo } from './foo';
import * as namespaceFoo from './foo';
import defaultExport, { namedBar } from './foo';
import * as namespaceBaz from './foo';

// Incorrect uses

// eslint-disable-next-line unicorn/prefer-export-from
export { namedFoo };
// eslint-disable-next-line unicorn/prefer-export-from
export { namespaceFoo };
// eslint-disable-next-line unicorn/prefer-export-from
export { namedBar, defaultExport as renamedDefault, namedBar as renamedNamed };

// Correct uses

export { namedBaz } from './foo';
export * as namespaceBar from './foo.js';
// There is no substitution
export default namespaceBaz;
