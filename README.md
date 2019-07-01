# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first value of an array
* `function2(tail)`: returns the value of an arry after index[0]
* `function3(middle)`: returns the middle values of an arry, if the array length is a even number, two numbers are returned
* `function4(countLetters)`: counts how many times a letter occurs in a string
* `function5(countOnly)`: counts how many times a value occurs
* `function6(eqArrays)`: compares two arrays to return a boolean
* `function7(findKey)`: returns a key with first description with a true value
* `function8(findKeyByValue)`: check if a value matches the second variable
* `function9(flatten)`: takes arrays within arrays and returns its values
* `function10(letterPositions)`: shows the index of ever letter in the array 
* `function11(map)`: returns the value of a certin index in an array 
* `function12(assertEquals)`: checks if two values are equal
* `function13(assertArraysEquals)`: checks if two arrays are completely equal
* `function14(without)`: takes out certain value of the array and returns the new array
* `function15(takeUnitl)`: returns value of an array until condition is met
