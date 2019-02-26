


import {dec, divide, flatten, inc, map, multiple, negate, reduce, subtract, sum, sumArr,} from '../src/index';

const intArr = [1,2,3];
const add = (x) => x+1;

// arr

test('map', () => {
  expect(map(intArr, add)).toEqual([2, 3, 4]);
});

test('reduce', () => {
  expect(reduce(sum, 0, intArr)).toBe(6);
});

test('flatten', () => {
  expect(flatten([1, 2, 3, [4, 5, [6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});

// function


// math

test('sum', () => {
  expect(sum(2,2)).toBe(4);
});
test('subtract', () => {
  expect(subtract(2,2)).toBe(0);
});
test('multiple', () => {
  expect(multiple(2,3)).toBe(6);
});
test('divide', () => {
  expect(divide(12,3)).toBe(4);
});
test('dec', () => {
  expect(dec(13)).toBe(12);
});
test('inc', () => {
  expect(inc(13)).toBe(14);
});
test('negate', () => {
  expect(negate(14)).toBe(-14);
});
test('sumArr', () => {
  expect(sumArr(intArr)).toBe(6);
});
