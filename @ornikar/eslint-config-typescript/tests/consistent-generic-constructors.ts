// Incorrect uses

// eslint-disable-next-line @typescript-eslint/consistent-generic-constructors
export const var1: Map<string, number> = new Map();

// eslint-disable-next-line @typescript-eslint/consistent-generic-constructors
export const var2: Set<string> = new Set();

// Correct uses

export const var3 = new Map<string, number>();

export const var4 = new Set<string>();

export const var5 = new Set();

export const var6: Set<string> = new Set<string>();
