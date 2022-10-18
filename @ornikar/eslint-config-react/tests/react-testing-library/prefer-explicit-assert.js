/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

it('is incorrect', async () => {
  // eslint-disable-next-line testing-library/prefer-explicit-assert
  getByText('foo');

  const utils = render(<Component />);
  // eslint-disable-next-line testing-library/prefer-explicit-assert
  utils.getByText('foo');

  // eslint-disable-next-line testing-library/prefer-explicit-assert
  await findByText('foo');
});

// Correct uses

it('is correct', async () => {
  expect(getByText('foo')).toBeDefined();

  const utils2 = render(<Component />);
  expect(utils2.getByText('foo')).toBeDefined();

  // even more explicit if you use `@testing-library/jest-dom` matcher
  // for checking the element is present in the document
  expect(queryByText('foo')).toBeInTheDocument();

  // Doing something with the element returned without asserting is absolutely fine
  const test2 = await findByText('foo');
  fireEvent.click(getByText('bar'));
  const quxElement = getByText('qux');

  expect(await findbyText('foo')).toBeTruthy();
  const myButton = await test.findByRole('button', { name: /Accept/ });
});
