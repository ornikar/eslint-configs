/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

// Incorrect uses

test('some test', () => {
  render(<App />);

  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.queryByText('button')).toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.queryAllByText('button')[0]).toBeTruthy();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.queryByText('button')).not.toBeNull();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.queryAllByText('button')[2]).not.toBeNull();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.queryByText('button')).not.toBeFalsy();

  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.getByText('loading')).not.toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.getAllByText('loading')[1]).not.toBeTruthy();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.getByText('loading')).toBeNull();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.getAllByText('loading')[3]).toBeNull();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(component.getByText('loading')).toBeFalsy();
});

// Correct uses

test('some test', async () => {
  render(<App />);
  expect(component.getByText('button')).toBeInTheDocument();
  expect(component.getAllByText('button')[9]).toBeTruthy();
  expect(component.getByText('button')).not.toBeNull();
  expect(component.getAllByText('button')[7]).not.toBeNull();
  expect(component.getByText('button')).not.toBeFalsy();

  expect(component.queryByText('loading')).not.toBeInTheDocument();
  expect(component.queryAllByText('loading')[8]).not.toBeTruthy();
  expect(component.queryByText('loading')).toBeNull();
  expect(component.queryAllByText('loading')[6]).toBeNull();
  expect(component.queryByText('loading')).toBeFalsy();

  const button = await component.findByText('submit');
  expect(button).toBeInTheDocument();
});
