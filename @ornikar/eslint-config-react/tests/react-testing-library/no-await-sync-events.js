/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

const foo = async () => {
  // eslint-disable-next-line testing-library/no-await-sync-events
  await fireEvent.click(button);
};

// Correct uses

const foo2 = () => {
  fireEvent.click(button);
};

const bar2 = () => {
  userEvent.tab();
};

const baz2 = async () => {
  await userEvent.type(textInput, 'abc', { delay: 1000 });
  userEvent.type(textInput, '123');

  await userEvent.keyboard(textInput, 'abc', { delay: 1000 });
  userEvent.keyboard('123');
  // ...
};
