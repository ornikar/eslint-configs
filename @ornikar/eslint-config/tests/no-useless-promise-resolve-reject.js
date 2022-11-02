'use strict';

const result = 'Test result';
const error = 'Test error';
const FancyError = 'Test fancy error';
const promise = new Promise();
const awaitablePromise = new Promise();

// Incorrect uses
// eslint-disable-next-line no-unused-vars
const incorrectMain = async (foo) => {
  if (foo > 4) {
    // eslint-disable-next-line no-unused-vars
    const res = await awaitablePromise();
    // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
    return Promise.reject(new Error('🤪'));
  }
  // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
  return Promise.resolve(result);
};
// eslint-disable-next-line no-unused-vars
async function* incorrectGenerator() {
  // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
  yield Promise.resolve(result);
  // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
  yield Promise.reject(error);
}

promise
  .then((x) => {
    if (x % 2 === 0) {
      // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
      return Promise.resolve(x / 2);
    }

    // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
    return Promise.reject(new Error('odd number'));
  })
  // eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
  .catch((error_) => Promise.reject(new FancyError(error_)));

// eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
promise.finally(() => Promise.reject(new Error('oh no')));

// Correct uses

// eslint-disable-next-line no-unused-vars
const correctMain = async (foo) => {
  // eslint-disable-next-line no-unused-vars
  const res = await awaitablePromise();
  if (foo > 4) {
    throw new Error('🤪');
  }

  return res;
};

// eslint-disable-next-line no-unused-vars
async function* correctGenerator() {
  yield result;
  throw error;
}

promise
  .then((x) => {
    if (x % 2 === 0) {
      return x / 2;
    }

    throw new Error('odd number');
  })
  .catch((error_) => {
    throw new FancyError(error_);
  });

promise.finally(() => {
  throw new Error('oh no');
});
