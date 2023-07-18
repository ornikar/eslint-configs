// Incorrect uses

// eslint-disable-next-line import/no-unresolved, import/extensions
import defaultExport from './foo';
// eslint-disable-next-line unicorn/prefer-export-from, import/no-default-export
export default defaultExport;
