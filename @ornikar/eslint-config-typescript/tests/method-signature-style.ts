// Incorrect uses with this rule

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface T1 {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  func(arg: string): number;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/consistent-type-definitions
type T2 = {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  func(arg: boolean): void;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface T3 {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  func(arg: number): void;
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  func(arg: string): void;
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  func(arg: boolean): void;
}

// Correct uses with this rule

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface T4 {
  func: (arg: string) => number;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/consistent-type-definitions
type T5 = {
  func: (arg: boolean) => void;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface T6 {
  func: {
    (arg: number): void;
    (arg: string): void;
    (arg: boolean): void;
  };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface T7 {
  func: ((arg: number) => void) & ((arg: string) => void) & ((arg: boolean) => void);
}
