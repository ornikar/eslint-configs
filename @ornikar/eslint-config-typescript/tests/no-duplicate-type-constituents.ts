type StringA = string;
type StringB = string;

type NumberB = number;

type A = 'A';
type B = 'B';
type C = 'C';

/* Incorrect */

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
export type T1 = 'A' | 'A';

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
export type T2 = A | A | B;

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
export type T3 = { a: string } & { a: string };

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
export type T4 = [1, 2, 3] | [1, 2, 3];

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
export type T5 = StringA | StringB;

/* Correct */

export type CorrectT1 = 'A' | 'B';

export type CorrectT2 = A | B | C;

export type CorrectT3 = { a: string } & { b: string };

export type CorrectT4 = [1, 2, 3] | [1, 2, 3, 4];

export type CorrectT5 = StringA | NumberB;
