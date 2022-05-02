// Incorrect uses

// eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, unicorn/no-array-reduce
[1, 2, 3].reduce((arr, num) => [...arr, num * 2], [] as number[]);

// eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, unicorn/no-array-reduce
['a', 'b'].reduce((accum, name) => ({ ...accum, [name]: true }), {} as Record<string, boolean>);

// Correct uses

// eslint-disable-next-line unicorn/no-array-reduce
[1, 2, 3].reduce<number[]>((arr, num) => [...arr, num * 2], []);

// eslint-disable-next-line unicorn/no-array-reduce, unicorn/prefer-object-from-entries
['a', 'b'].reduce<Record<string, boolean>>(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {},
);
