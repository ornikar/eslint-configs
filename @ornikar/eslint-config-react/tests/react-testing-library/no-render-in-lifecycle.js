/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-lifecycle
  render(<MyComponent />);
});

beforeAll(() => {
  // eslint-disable-next-line testing-library/no-render-in-lifecycle
  render(<MyComponent />);
});

// Correct uses

it('Should have foo and bar', () => {
  render(<MyComponent />);
  expect(test.getByText('foo')).toBeInTheDocument();
  expect(test.getByText('bar')).toBeInTheDocument();
});
const setup2 = () => render(<MyComponent />);

beforeEach(() => {
  // Necessary empty comment
});

it('Should have foo and bar', () => {
  setup();
  expect(test.getByText('foo')).toBeInTheDocument();
  expect(test.getByText('bar')).toBeInTheDocument();
});
