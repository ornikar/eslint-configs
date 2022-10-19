'use strict';

module.exports = {
  plugins: ['testing-library'],
  rules: {
    // Allows consistent data-testid and testID
    // Format is: sectionName.pageName?.FileName.uniqueIdentifier
    'testing-library/consistent-data-testid': [
      'error',
      {
        testIdPattern: '^([a-z][a-zA-Z]+\\.)+{fileName}\\.([a-z][a-zA-Z]+)+$',
        testIdAttribute: ['data-testid', 'testID'],
      },
    ],
  },
};
