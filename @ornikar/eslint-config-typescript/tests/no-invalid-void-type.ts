/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-empty-function, no-void */
// ❌ Incorrect uses with this rule
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type PossibleValues = string | number | void;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type MorePossibleValues = string | ((number & any) | (string | void));

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
function logSomething(thing: void) {}
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
function printArg<T = void>(arg: T) {}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
printArg<void>(undefined);

interface Interface {
  lambda: () => void;
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  prop: void;
}

class MyClass {
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  private readonly propName!: void;
}

// ✅ Correct uses with this rule
type NoOp = () => void;

function noop(): void {}

const trulyUndefined = void 0;

async function promiseMeSomething(): Promise<void> {}

type stillVoid = void | never;
