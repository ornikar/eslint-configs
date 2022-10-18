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

const baz = async () => {
  await wait(() => {
    // eslint-disable-next-line testing-library/no-wait-for-snapshot
    expect(container).toMatchSnapshot();
  });
};

// Correct
const by = () => {
  expect(container).toMatchSnapshot();
};

const bi = () => {
  expect(container).toMatchInlineSnapshot();
};
