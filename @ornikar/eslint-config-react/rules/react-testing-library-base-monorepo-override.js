'use strict';

module.exports = {
  rules: {
    // Allows consistent data-testid and testID
    // Format is: sectionName.pageName?.FileName.uniqueIdentifier
    'testing-library/consistent-data-testid': [
      'error',
      {
        // ([a-z][a-z-]+\\.): additional monorepo package name prefix
        // rest is the same as ./react-testing-library-base
        testIdPattern: '^([a-z][a-z-]+\\.)([a-z][a-zA-Z]+\\.){1,2}{fileName}\\.([a-z][a-zA-Z]+)+$',
        testIdAttribute: ['data-testid', 'testID'],
      },
    ],
  },
};
