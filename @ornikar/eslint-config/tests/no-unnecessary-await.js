'use strict';

const promise = new Promise();
const promise1 = new Promise();
const promise2 = new Promise();

// Incorrect uses

const myFunc = async () => {
  // eslint-disable-next-line unicorn/no-unnecessary-await
  await await promise;
  // eslint-disable-next-line unicorn/no-unnecessary-await
  await [promise1, promise2];
};

// Correct uses

const myFunc2 = async () => {
  await promise;
  await Promise.allSettled([promise1, promise2]);
};

module.exports = {
  myFunc,
  myFunc2,
};
