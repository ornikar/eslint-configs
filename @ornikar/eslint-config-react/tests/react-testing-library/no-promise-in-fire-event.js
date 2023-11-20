/* eslint-disable testing-library/await-async-queries */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-await */

import { fireEvent, screen } from '@testing-library/react';

// Incorrect uses

// eslint-disable-next-line testing-library/no-promise-in-fire-event
fireEvent.click(screen.findByRole('button'));

// eslint-disable-next-line testing-library/no-promise-in-fire-event
fireEvent.click(new Promise(jest.fn()));

// usage of references to unhandled promises
const promise = new Promise();
// eslint-disable-next-line testing-library/no-promise-in-fire-event
fireEvent.click(promise);

const anotherPromise = screen.findByRole('button');
// eslint-disable-next-line testing-library/no-promise-in-fire-event
fireEvent.click(anotherPromise);

// Correct uses

// usage of getBy queries
fireEvent.click(screen.getByRole('button'));

// usage of references to handled promises
const promise2 = new Promise();
const element = async () => await promise2;
fireEvent.click(element);

const anotherPromise2 = screen.findByRole('button');
const button = async () => await anotherPromise2;
fireEvent.click(button);
