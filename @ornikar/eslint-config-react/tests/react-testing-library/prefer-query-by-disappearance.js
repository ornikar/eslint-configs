/* eslint-disable no-undef */

// Incorrect uses
// eslint-disable-next-line testing-library/prefer-query-by-disappearance
await waitForElementToBeRemoved(() => getByText('hello'));
// eslint-disable-next-line testing-library/prefer-query-by-disappearance
await waitForElementToBeRemoved(() => findByText('hello'));

// eslint-disable-next-line testing-library/prefer-query-by-disappearance
await waitForElementToBeRemoved(getByText('hello'));

// Correct uses
await waitForElementToBeRemoved(() => queryByText('hello'));
await waitForElementToBeRemoved(queryByText('hello'));
