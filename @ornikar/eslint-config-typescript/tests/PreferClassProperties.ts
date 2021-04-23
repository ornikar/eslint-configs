export class PreferClassProperties {
  baz = 123;

  bar: number;

  constructor() {
    // eslint-disable-next-line prefer-class-properties/prefer-class-properties
    this.bar = 123;
  }
}
