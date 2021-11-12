const str = 'foo';
const arr: string[] = [];

const fooIsInString = /foo/.test(str);

const fooIsInArray = arr.indexOf(str) !== -1;

// eslint-disable-next-line no-console
console.log({ fooIsInString, fooIsInArray });

const userDefined: {
  indexOf: (x: any) => number;
  includes: (x: any) => boolean;
} = {} as any;

// eslint-disable-next-line @typescript-eslint/prefer-includes
const value = userDefined.indexOf(1) >= 0;

console.log(value);
