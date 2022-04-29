/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { stuffThatDoesNotUseRTL } from 'somwhere-else';

// Incorrect uses

it('is incorrect', async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Example />);
  });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => screen.getByRole('button'));

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    fireEvent.click(element);
  });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.click(element);
  });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {});

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {});
});

// Correct uses

it('is correct', () => {
  act(() => {
    stuffThatDoesNotUseRTL();
  });
});
