/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

// Incorrect uses

const { debug } = render(<Hello />);
// eslint-disable-next-line testing-library/no-debugging-utils
debug();

const utils = render(<Hello />);
// eslint-disable-next-line testing-library/no-debugging-utils
utils.debug();

// eslint-disable-next-line testing-library/no-debugging-utils
test.debug();
