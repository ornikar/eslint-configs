// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface FooInterface {
  [key: string]: unknown;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style, @typescript-eslint/consistent-type-definitions
export type FooType = {
  [key: string]: unknown;
};

export type FooRecord = Record<string, unknown>;
