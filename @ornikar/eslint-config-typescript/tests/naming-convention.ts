export const isBooleanVariable = false;
// warning eslint
export const invalidIsBooleanVariable = false;

export interface ExampleInterface {
  isBooleanVariable: boolean;
  $isBooleanVariable: boolean;
  // warning eslint
  invalidIsBooleanVariable: boolean;
}

export function exampleFunction(
  isValidBooleanParameter: boolean,
  // warning eslint
  invalidBooleanParameter: boolean) {
}
