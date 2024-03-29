'use strict';

module.exports = {
  plugins: ['testing-library'],
  rules: {
    // Allows consistent data-testid and testID
    // Format is: sectionName.pageName?.FileName.uniqueIdentifier
    'testing-library/consistent-data-testid': [
      'error',
      {
        // ([a-z][a-zA-Z]+\\.){1,2}: section + optional subsection
        // {fileName}: component name
        // ([a-z][a-zA-Z]+)+: suffix representing the testId key
        testIdPattern: '^([a-z][a-zA-Z]+\\.){1,2}{fileName}\\.([a-z][a-zA-Z]+)+$',
        testIdAttribute: ['data-testid', 'testID'],
      },
    ],
  },
};
