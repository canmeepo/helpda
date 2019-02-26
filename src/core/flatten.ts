const flatten = <T>(arr: T[]): T[] =>
  arr.reduce((acc: T[], x: T) => acc.concat(Array.isArray(x) ? flatten(x) : x), []);

export default flatten;