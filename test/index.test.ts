


import {map, multiple, reduce, sum, sumArr} from '../src/index';

const intArr = [1,2,3];
const add = (x) => x+1;

test('sum', () => {
  expect(sum(2,2)).toBe(4);
});

test('multiple', () => {
  expect(multiple(2,3)).toBe(6);
});

test('map', () => {
  expect(map(intArr, add)).toEqual([2, 3, 4]);
});

test('reduce', () => {
  expect(reduce(sum, 0, intArr)).toBe(6);
});

test('sumArr', () => {
  expect(sumArr(intArr)).toBe(6);
});