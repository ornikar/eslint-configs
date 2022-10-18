/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

// Incorrect
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from '@testing-library/dom';
// eslint-disable-next-line testing-library/no-dom-import
import { fireEvent } from 'dom-testing-library';

// Correct
import { screen as Screen } from 'react-testing-library';
import { fireEvent as FireEvent } from '@testing-library/react';
