/* eslint-disable @typescript-eslint/no-namespace, max-classes-per-file */

// Incorrect uses

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface Foo1 {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class Foo1 {}

// Correct uses

export interface Foo2 {}
export class Bar implements Foo2 {}

export namespace BazEnum {}
export namespace BazEnum {}
export enum BazEnum {}

export namespace Qux {}
export function Qux(): void {}
