const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

 








assertEqual(5, 5);
assertEqual("Hello", "labs");







//DO NOT CHANGE BELOW;

module.exports = assertEqual;