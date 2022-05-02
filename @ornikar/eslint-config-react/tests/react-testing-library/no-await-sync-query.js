/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

const foo = async () => {
  // eslint-disable-next-line testing-library/no-await-sync-query
  const rows = await queryAllByRole('row');
};

const bar = async () => {
  // eslint-disable-next-line testing-library/no-await-sync-query
  const button = await test.getByText('submit');
};

// Correct uses

const foo2 = () => {
  const rows = queryAllByRole('row');
};

const bar2 = () => {
  const button = test.getByText('submit');
};
