// eslint-disable-next-line camelcase
const invalid_camelcase = 1;

const UNSAFE_method = (value: number): number => {
  return value;
};

UNSAFE_method(invalid_camelcase);
