/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

// Incorrect uses

it('is incorrect', async () => {
  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(b).toEqual('b');
  });

  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(b).toEqual('b');
  });

  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    userEvent.click(button);
    expect(b).toEqual('b');
  });

  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    userEvent.click(button);
    expect(b).toEqual('b');
  });

  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    render(<App />);
    expect(b).toEqual('b');
  });

  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    render(<App />);
    expect(b).toEqual('b');
  });
});

// Correct uses

it('is correct', async () => {
  fireEvent.keyDown(input, { key: 'ArrowDown' });
  await waitFor(() => {
    expect(b).toEqual('b');
  });

  fireEvent.keyDown(input, { key: 'ArrowDown' });
  await waitFor(() => {
    expect(b).toEqual('b');
  });

  userEvent.click(button);
  await waitFor(() => {
    expect(b).toEqual('b');
  });

  userEvent.click(button);
  await waitFor(() => {
    expect(b).toEqual('b');
  });

  render(<App />);
  await waitFor(() => {
    expect(b).toEqual('b');
  });

  render(<App />);
  await waitFor(() => {
    expect(b).toEqual('b');
  });
});
