// Incorrect uses

// eslint-disable-next-line no-unused-vars, import/no-unresolved, import/extensions
import defaultExport, { named } from './foo';
// eslint-disable-next-line unicorn/prefer-export-from, import/no-default-export
export default defaultExport;
