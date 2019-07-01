const assert = require('chai').assert;
const tail = require('../tail');

describe("the number will return the tails length", () => {
    it("return a length of 5 of [1,2,3,4,5,6]", () => {
        assert.deepEqual(tail([1,2,3,4,5,6]).length, 5);
    });
});

// assertEqual(tail([1,2,3,4,5,6]).length, 5);
 