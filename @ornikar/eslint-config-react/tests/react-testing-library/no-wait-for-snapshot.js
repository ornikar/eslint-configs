/* eslint-disable no-unused-vars, no-undef */

// Incorrect
const foo = async () => {
  // eslint-disable-next-line testing-library/no-wait-for-snapshot
  await waitFor(() => expect(container).toMatchSnapshot());
};

const bar = async () => {
  // eslint-disable-next-line testing-library/no-wait-for-snapshot
  await waitFor(() => expect(container).toMatchInlineSnapshot());
};

// Correct
const by = () => {
  expect(container).toMatchSnapshot();
};

const bi = () => {
  expect(container).toMatchInlineSnapshot();
};
