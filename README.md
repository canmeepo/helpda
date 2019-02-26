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
|  | compute based on custom function and output the final value | [reduce](#reduce)
|  | flatten return a one-dimensional array, remove nesting | [flatten](#flatten)
| [Object](#Object) | change every value | map
| [Functions](#Functions) | memoize | memoize
|  | revers function args | [flip](#flip)
| [Logic](#Logic) | | 
| [Math](#Math) | sum two numbers | [sum](#sum)
|  | subtract two numbers | [subtract](#subtract)
|  | multiple two numbers | [multiple](#multiple)
|  | divide two numbers | [divide](#divide)
|  | increment number | [inc](#inc)
|  | decrement number | [dec](#dec)
|  | negate number | [negate](#negate)
|  | get random number between two args | [randomN](#randomN)
|  | sum all number in array | [sumArr](#sumArr)

## API

- ## Array

### map

Map each element of array using a passed callback function.

```js
import { map } from 'helpda'

const array = [1, 2, 3];
const mutiple = x => x * 2;

map(array, mutiple) //[2, 4, 6]

```

### reduce

Reduce compute based on custom function and output the final value.

```js
import { reduce } from 'helpda'

const array = [1, 2, 3];
const sum = (a, b) => a + b

reduce(sum, 0, array) // 6

```

### flatten

flatten return a new one-level array from nested array

```js
import { flatten } from 'helpda'

const array = [1, 2, 3, [4, 5, [6]]];

flatten(array)) // [1, 2, 3, 4, 5, 6]

```

- ## Object

- ## Functions

### flip

return a new function with two reversed args

```js
import { flip } from 'helpda'

const divide = (a, b) = a / b)
const flipped = flip((a, b) => a / b);

divide(12, 3) // 4
flipped(12, 3) // 0.25

```

- ## Logic

- ## Math

### sum 

sum two numbers

```js
import { sum } from 'helpda'

sum(2, 2) // 4
```

### subtract

subtract second arg from first

```js
import { subtract } from 'helpda'

subtract(4, 2) // 2
```

### multiple

multiple two numbers

```js
import { multiple } from 'helpda'

multiple(2, 3) // 6
```

### divide

divide two numbers

```js
import { divide } from 'helpda'

divide(12, 3) // 4
```

### inc

increment number

```js
import { inc } from 'helpda'

inc(13) // 14
```

### dec

decrement number

```js
import { dec } from 'helpda'

dec(13) // 12
```

### negate

negate number

```js
import { dec } from 'helpda'

negate(13) // -13
```

### sumArr

sum all number in an array of numbers

```js
import { sumArr } from 'helpda'

const array = [1, 2, 3, 4, 5];

sumArr(array) // 15
```


### randomN

get random number

```js
import { randomN } from 'helpda'

const min = 0;
const max = 100;

randomN(min, max) // 12..85..3..?
```



