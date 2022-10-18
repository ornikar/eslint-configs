/* eslint-disable no-undef */

// Incorrect

// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() => getByRole('button', { name: /submit/i }));
// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() => getAllByTestId('button', { name: /submit/i }));

// arrow functions with one statement, calling any sync query method
// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() => queryByLabel('button', { name: /submit/i }));
// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() => queryAllByText('button', { name: /submit/i }));

// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() => expect(getByLabel('button', { name: /submit/i })).toBeInTheDocument());
// eslint-disable-next-line testing-library/prefer-find-by
await waitFor(() => expect(getByLabel('button', { name: /submit/i })).not.toBeFalsy());

// Correct
await waitForElementToBeRemoved(() => findAllByRole('button'));
await waitForElementToBeRemoved(() => queryAllByLabel('my label'));
await waitForElementToBeRemoved(document.querySelector('foo'));

await waitFor(() => {
  foo();
  return getByText('name');
});

function myCustomFunction() {
  foo();
  return getByText('name');
}
await waitFor(myCustomFunction);

await waitFor(() => {
  baz();
  return queryAllByText('foo');
});

await waitFor(() => myCustomFunction());

await waitFor(() => expect(getByText('bar')).toBeDisabled());
await waitFor(() => expect(getAllByText('bar')).toBeDisabled());
