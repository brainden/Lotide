const assert = require('chai').assert;
const tail = require('../tail');

describe("the number will return the tails length", () => {
    it("return a [2,3,4,5,6] of [1,2,3,4,5,6]", () => {
        assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6]);
    });
   it("return [] for [1]", () => {
       assert.deepEqual(tail([1]),[]);
   });
});