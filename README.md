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
import { mutilple, sum, map, reduce, sumArr } from 'helpda'

multiple(2, 3) // 6
sum(2, 2) // 4

map([1,2,3], (x) => x + 1) //[2,3,4]
reduce([1,2,3], (x) => x + 1) //[2,3,4]
sumArr([2,4,6]) // 12
```

## Documentation

| Type | Action | Function
| --- | --- | --- |
| Array | change every value | map
|  | compute based on custom function and output the final value | reduce
| Object | change every value | map
| Functions | memoize | memoize
| Math | sum two numbers | sum
|  | multiple two numbers | mutiple
|  | sum all number in array | sumArr
