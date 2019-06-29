const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail1 = function(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (i !== 0) {
      console.log(arr2[i]);
    }
  }
};

console.log(tail1([1,2,3,4,5,6]));