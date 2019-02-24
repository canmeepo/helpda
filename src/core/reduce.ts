const reduce = <T, U>(fn: (init: U, val: T, i: number, a: T[]) => U, iv: U, arr: T[]): U => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    iv = fn(iv, item, i, arr);
  }

  return iv;
};

export default reduce;
