const assert = require('chai').assert;
const middle = require('../middle');

describe("middle string", () => {
    it("returns [ 5 ] for [1,2,4,7,5,6,7,8,8]" , () => {
        assert.strictEqual(middle([1,2,4,7,5,6,7,8,8], [ 5 ]));
    });
});










// const assertArraysEqual = require('../assertArraysEqual')
// const eqArrays = require('../eqArrays');
// const middle = require('../middle');





// console.log(middle([1,2,4,7,5,6,7,8,8]));

