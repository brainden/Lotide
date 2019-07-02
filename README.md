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

* `head(head)`: returns the first value of an array
* `tail(tail)`: returns the value of an arry after index[0]
* `middle(middle)`: returns the middle values of an arry, if the array length is a even number, two numbers are returned
* `countLetters(countLetters)`: counts how many times a letter occurs in a string
* `countOnly(countOnly)`: counts how many times a value occurs
* `eqArrays(eqArrays)`: compares two arrays to return a boolean
* `findKey(findKey)`: returns a key with first description with a true value
* `findKeyByValue(findKeyByValue)`: check if a value matches the second variable
* `flatten(flatten)`: takes arrays within arrays and returns its values
* `letterPositions(letterPositions)`: shows the index of ever letter in the array 
* `map(map)`: returns the value of a certin index in an array 
* `assertEquals(assertEquals)`: checks if two values are equal
* `assertArraysEquals(assertArraysEquals)`: checks if two arrays are completely equal
* `without(without)`: takes out certain value of the array and returns the new array
* `takeUntil(takeUnitl)`: returns value of an array until condition is met
