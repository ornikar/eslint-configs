import type { Except } from 'type-fest';

interface A {
  a: true;
  b: true;
}

interface B {
  b: true;
}

export type AWithoutB = Except<A, keyof B>;
