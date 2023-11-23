/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable unicorn/prefer-native-coercion-functions */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* Incorrect */

function head<T>(items: T[]): void {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (items) {
    /* empty */
  }
}

function foo(arg: 'bar' | 'baz'): void {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (arg) {
    /* empty */
  }
}

function bar<T>(arg: string): number {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return arg?.length;
}

[
  [1, 2],
  [3, 4],
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
].filter((t) => t);

/* Correct */

function headCorrect<T>(items: T[]): void {
  if (items.length) {
    /* empty */
  }
}

function fooCorrect(arg: string): void {
  if (arg) {
    /* empty */
  }
}

function barCorrect(arg?: string | null): number | undefined {
  return arg?.length;
}

[0, 1, 2, 3].filter((t) => t); // number can be truthy or falsy
