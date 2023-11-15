/* eslint-disable no-empty */
/* Incorrect */

declare const someCondition: boolean;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
if (someCondition === true) {
}

/* Correct */

declare const someCondition2: boolean;
if (someCondition2) {
}

declare const someObjectBoolean: boolean | Record<string, unknown>;
if (someObjectBoolean === true) {
}

declare const someStringBoolean: boolean | string;
if (someStringBoolean === true) {
}
