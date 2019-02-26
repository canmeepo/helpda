export const sum = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiple = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => a / b;
export const negate = (n: number) => -n;
export const dec = (n: number) => n - 1;
export const inc = (n: number) => n + 1;
export const sumArr = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0);
export const randomN = (a: number = 0, b: number = 100) => Math.floor(Math.random() * (a - b + 1) + a)