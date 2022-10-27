/* Type like naming */

// warning eslint
export interface IInvalidPrefixInterface {
  name: string;
}

// warning eslint
export type IInvalidPrefixType = IInvalidPrefixInterface;

// warning eslint
export interface invalidCaseInterface {
  name: string;
}

// warning eslint
export type invalidCaseType = invalidCaseInterface;

export interface ValidInterface {}
export type ValidType = ValidInterface;

/* Enum naming */

// warning eslint
export enum InvalidEnumName {}

export enum ValidEnum {}

/* Boolean */

export const isBooleanVariable = false;
// warning eslint
export const invalidIsBooleanVariable = false;

export const validObject = { isLoading: true };
// warning eslint
const invalidObject = { loading: true };

export const { loading } = invalidObject;
export const { loading: isLoading } = invalidObject;
// warning eslint
export const { loading: invalidIsLoading } = invalidObject;

export interface ExampleInterface {
  isBooleanVariable: boolean;
  $isBooleanVariable: boolean;
  // warning eslint
  invalidIsBooleanVariable: boolean;
}

export function exampleFunction(
  isValidBooleanParameter: boolean,
  $isValidBooleanParameter: boolean,
  // warning eslint
  invalidBooleanParameter: boolean,
): void {}

export const validSnakeCaseObject = {
  is_valid_variable: true,
  can_be_valid: true,
  isvalid_variable: true,
  valid_variable: true,
};
