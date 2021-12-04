const maybe = Math.random() > 0.5 ? '' : undefined;

// this is the test
// -- doesn't work since typescript-eslint 5 eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
const definitelyBad = maybe as string;

// this disable rule is allowed in cases.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const definitelyGood = maybe!;

export { definitelyBad, definitelyGood };
