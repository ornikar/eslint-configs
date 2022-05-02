/* eslint-disable import/no-unresolved */
// Incorrect uses
import incorrectUtils from '@testing-library/react';
import correctUtils from 'any-other-library';

// eslint-disable-next-line testing-library/no-manual-cleanup
afterEach(() => incorrectUtils.cleanup());

// Correct uses

correctUtils.cleanup();
