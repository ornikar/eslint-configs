'use strict';

const foo = {};
const getListener = () => {};
const listener = 'bar';
// Incorrect uses

// eslint-disable-next-line unicorn/no-invalid-remove-event-listener
foo.removeEventListener('click', () => {});
// eslint-disable-next-line unicorn/no-invalid-remove-event-listener , prefer-arrow-callback
foo.removeEventListener('click', function bar() {});

// Correct uses
foo.removeEventListener('click', getListener());
foo.removeEventListener('click', listener);
