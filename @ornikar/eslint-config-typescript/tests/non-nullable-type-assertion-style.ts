const maybe: string | undefined = '';

// this is the test
// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
const definitelyBad = maybe as string;

// this disable rule is allowed in cases.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const definitelyGood = maybe!;

export { definitelyBad, definitelyGood };
