/* eslint-disable @typescript-eslint/no-unused-vars */
// ❌ Incorrect uses
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
interface FooAny<T extends any> { }
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
interface FooUnknown<T extends unknown> { }

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const QuuxAny = <T extends any>(): void => { };
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const QuuxUnknown = <T extends unknown>(): void => { };


// ✅ Correct uses
interface Foo<T> { }

const Quux = <T>(): void => { };
