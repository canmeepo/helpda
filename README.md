# helpda

simple typescript utility library

[![Build Status](https://travis-ci.org/canmeepo/helpda.svg?branch=master)](https://travis-ci.org/canmeepo/helpda)
[![npm module](https://badge.fury.io/js/helpda.svg)](https://www.npmjs.org/package/helpda)

## getting started

```bash
$ npm install helpda
```
or
```bash
$ yarn add helpda
```

## Example Usage

```js
import { sum, map, reduce, sumArr } from 'helpda'

map([1, 2, 3], (x) => x + 1) //[2,3,4]
reduce(sum, 0, [1, 2, 3]) // 6
sumArr([2, 4, 6]) // 12
```

## what function should i use?

| Type | Action | Function
| --- | --- | --- |
| [Array](#Array) | change every value | [map](#map)
|  | compute based on custom function and output the final value | reduce
| Object | change every value | map
| Functions | memoize | memoize
| Logic | | 
| Math | sum two numbers | sum
|  | multiple two numbers | mutiple
|  | sum all number in array | sumArr

## API

### Array

#### map

Map each element of array using a passed callback function.

```js
import { map } from 'helpda'

const array = [1, 2, 3];
const mutiple = x => x * 2;
map(array, mutiple) //[2, 4, 6]

```


