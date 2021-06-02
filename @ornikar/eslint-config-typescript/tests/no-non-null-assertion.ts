interface PossiblyUndefined {
  value: string | undefined;
}

const a: PossiblyUndefined = { value: undefined };

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion
const foo: string = a.value!;
