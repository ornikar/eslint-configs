'use strict';

const foo = 0;

// Incorrect uses

// eslint-disable-next-line unicorn/prefer-switch
if (foo === 1) {
  // 1
} else if (foo === 2) {
  // 2
} else if (foo === 3) {
  // 3
} else {
  // default
}

// Correct uses

if (foo === 1) {
  // 1
} else if (foo === 2) {
  // 2
}

switch (foo) {
  case 1: {
    // 1
    break;
  }
  case 2: {
    // 2
    break;
  }
  case 3: {
    // 3
    break;
  }
  default: {
    // default
  }
}
