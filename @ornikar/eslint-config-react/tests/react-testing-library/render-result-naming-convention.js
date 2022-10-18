/* eslint-disable no-undef, no-unused-vars, react/jsx-no-undef */

// Incorrect
// eslint-disable-next-line testing-library/render-result-naming-convention
const wrapper = render(<SomeComponent />);
// eslint-disable-next-line testing-library/render-result-naming-convention
const component = render(<SomeComponent />);
// eslint-disable-next-line testing-library/render-result-naming-convention
const somethingElse = render(<SomeComponent />);

// Correct
const { unmount, rerender } = render(<SomeComponent />);
const view = render(<SomeComponent />);
const utils = render(<SomeComponent />);
