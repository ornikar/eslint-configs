// Incorrect

export enum Incorrect1 {
  A = 0,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  B = 0,
}

export enum Incorrect2 {
  A = 'A',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  B = 'A',
}

// Correct
export enum Correct1 {
  A = 0,
  B = 1,
}

export enum Correct2 {
  A = 'A',
  B = 'B',
}
