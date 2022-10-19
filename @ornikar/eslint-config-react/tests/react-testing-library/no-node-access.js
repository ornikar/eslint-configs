/* eslint-disable no-unused-vars, import/no-unresolved, no-undef, react/jsx-no-undef */
import { render, screen, within } from '@testing-library/react';

// Incorrect
// eslint-disable-next-line testing-library/no-node-access
screen.getByText('Submit').closest('button');

// eslint-disable-next-line testing-library/no-node-access
expect(buttons[1].lastChild).toBeInTheDocument();

// eslint-disable-next-line testing-library/no-node-access
const buttonIncorrect = buttonText.closest('button');

// Correct
const buttonCorrect = screen.getByRole('button');
expect(buttonCorrect).toHaveTextContent('submit');

const { getByLabelText } = render(<MyComponent />);
const signinModal = getByLabelText('Sign In');
expect(within(signinModal).getByPlaceholderText('Username'));
