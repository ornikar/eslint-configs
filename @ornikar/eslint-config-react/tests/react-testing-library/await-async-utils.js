/* eslint-disable require-await */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

test('something incorrectly', async () => {
  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => {});

  // eslint-disable-next-line testing-library/await-async-utils
  const [usernameElement, passwordElement] = waitFor(
    () => [getByLabelText(container, 'username'), getByLabelText(container, 'password')],
    { container },
  );

  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => {}, { timeout: 100 });

  // eslint-disable-next-line testing-library/await-async-utils
  waitForElementToBeRemoved(() => document.querySelector('div.getOuttaHere'));

  const makeCustomWait = () => {
    return waitForElementToBeRemoved(() => document.querySelector('div.getOuttaHere'));
  };

  // eslint-disable-next-line testing-library/await-async-utils
  makeCustomWait();
});
// Correct uses

test('something correctly', async () => {
  await waitFor(() => getByLabelText('email'));

  const [usernameElement, passwordElement] = await waitFor(
    () => [getByLabelText(container, 'username'), getByLabelText(container, 'password')],
    { container },
  );

  waitFor(() => {}, { timeout: 100 })
    .then(() => console.log('DOM changed!'))
    .catch((err) => console.log(`Error you need to deal with: ${err}`));

  await Promise.all([
    waitFor(() => getByLabelText('email')),
    waitForElementToBeRemoved(() => document.querySelector('div.getOuttaHere')),
  ]);
});
