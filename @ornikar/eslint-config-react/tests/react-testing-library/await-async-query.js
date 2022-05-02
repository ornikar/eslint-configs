/* eslint-disable testing-library/prefer-explicit-assert */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Incorrect uses

// eslint-disable-next-line testing-library/await-async-query
const rows = findAllByRole('row');
// eslint-disable-next-line testing-library/await-async-query
findByIcon('search');
// eslint-disable-next-line testing-library/await-async-query
test.findAllByPlaceholderText('name');
// eslint-disable-next-line testing-library/await-async-query
const someButton = findByIcon(); // promise unhandled here

// Correct uses

const bol = array.some((element) => isUnicorn(element));
if (array.some((element) => isUnicorn(element))) {
  // Necessary comment
}
const bal = array.find((element) => isUnicorn(element)) || tutu;
