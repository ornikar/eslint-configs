/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses
const foo = async () => {
  await waitFor(() => {
    expect(a).toEqual('a');
    // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
    expect(b).toEqual('b');
  });

  // or
  await waitFor(() => {
    expect(a).toEqual('a');
    // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
    expect(b).toEqual('b');
  });
};

// Correct uses

const foo2 = async () => {
  await waitFor(() => expect(a).toEqual('a'));
  expect(b).toEqual('b');

  await waitFor(() => {
    expect(a).toEqual('a');
  });
  expect(b).toEqual('b');

  await waitFor(() => {
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(b).toEqual('b');
  });
};
