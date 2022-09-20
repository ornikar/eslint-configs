/* eslint-disable no-empty, no-undef */

'use strict';

// Incorrect uses
try {
  // eslint-disable-next-line unicorn/catch-error-name
} catch (badName) {}

try {
  // eslint-disable-next-line unicorn/catch-error-name
} catch (_) {
  console.log(_);
}

// eslint-disable-next-line unicorn/catch-error-name
promise.catch((badName) => {});

// eslint-disable-next-line unicorn/catch-error-name
promise.then(undefined, (badName) => {});

// Correct uses
try {
} catch (error) {}

promise.catch((error) => {});

promise.then(undefined, (error) => {});

// `_` is allowed when it's not used
try {
} catch (_) {
  console.log(foo);
}

// Descriptive name is allowed
try {
} catch (fsError) {}

// `error_` is allowed because of shadowed variables
try {
} catch (error_) {
  // eslint-disable-next-line no-unused-vars
  const error = new Error('🦄');
}
