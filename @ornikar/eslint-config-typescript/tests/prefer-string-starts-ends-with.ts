// Incorrect uses
let foo: string;

// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo[0] === 'b';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo.charAt(0) === 'b';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo.indexOf('bar') === 0;
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo.slice(0, 3) === 'bar';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions, unicorn/prefer-string-slice
foo.substring(0, 3) === 'bar';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions, @typescript-eslint/prefer-regexp-exec
foo.match(/^bar/) != null;
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, unicorn/prefer-string-starts-ends-with
/^bar/.test(foo);

// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo[foo.length - 1] === 'b';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo.charAt(foo.length - 1) === 'b';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo.lastIndexOf('bar') === foo.length - 3;
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions
foo.slice(-3) === 'bar';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions, unicorn/prefer-string-slice
foo.substring(foo.length - 3) === 'bar';
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, @typescript-eslint/no-unused-expressions, @typescript-eslint/prefer-regexp-exec
foo.match(/bar$/) != null;
// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with, unicorn/prefer-string-starts-ends-with
/bar$/.test(foo);

// Correct uses

foo.startsWith('bar');
foo.endsWith('bar');
