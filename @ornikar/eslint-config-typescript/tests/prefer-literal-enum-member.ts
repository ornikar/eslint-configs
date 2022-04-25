/* eslint-disable @typescript-eslint/no-unused-vars */
// ❌ Incorrect uses with this rule
const str = 'Test';
enum Invalid {
  // eslint-disable-next-line @typescript-eslint/prefer-literal-enum-member
  A = str, // Variable assignment
  // eslint-disable-next-line @typescript-eslint/prefer-literal-enum-member
  B = {}, // Object assignment
  C = 'A template literal string', // Template literal
  // eslint-disable-next-line @typescript-eslint/prefer-literal-enum-member
  D = new Set(1, 2, 3), // Constructor in assignment
  // eslint-disable-next-line @typescript-eslint/prefer-literal-enum-member
  E = 2 + 2, // Expression assignment
}

// ✅ Correct uses with this rule
enum Valid {
  A,
  B = 'TestStr', // A regular string
  C = 4, // A number
  D = null,
  E = /some_regex/,
}
