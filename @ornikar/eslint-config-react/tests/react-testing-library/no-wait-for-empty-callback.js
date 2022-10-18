/* eslint-disable no-unused-vars, import/no-unresolved, no-undef */
import { screen } from '@testing-library/react';

// Incorrect
const incorrect = async () => {
  // eslint-disable-next-line testing-library/no-wait-for-empty-callback
  await waitFor(() => {});
  // eslint-disable-next-line testing-library/no-wait-for-empty-callback
  await waitFor(noop);

  // eslint-disable-next-line testing-library/no-wait-for-empty-callback
  await waitForElementToBeRemoved(() => {});
  // eslint-disable-next-line testing-library/no-wait-for-empty-callback
  await waitForElementToBeRemoved(noop);
};

// Correct
const correct = async () => {
  await waitFor(() => {
    screen.queryByText(/submit/i);
  });

  const submit = screen.getByText(/submit/i);
  await waitForElementToBeRemoved(() => submit);
  // or
  await waitForElementToBeRemoved(submit);
};
