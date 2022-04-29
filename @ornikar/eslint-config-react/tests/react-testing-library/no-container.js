/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

const { container } = render(<Example />);
// eslint-disable-next-line testing-library/no-container
const button = container.querySelector('.btn');
const { container: alias } = render(<Example />);
// eslint-disable-next-line testing-library/no-container
const buttonPrimary = alias.querySelector('.btn-primary');
const view = render(<Example />);
// eslint-disable-next-line testing-library/no-container
const buttonSecondary = view.container.getElementsByClassName('.btn-secondary');

// Correct uses

render(<Example />);
test.getByRole('button', { name: /click me/i });
