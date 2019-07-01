// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// function findKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);

// }

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
  
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// HAVE TO SEE IF second variable IS EQUAL TO object value RETURN object key

function findKeyByValue(object, value) {
return Object.keys(object).find((item => object[item] === value));
}

 

module.exports = findKeyByValue;

//return the key if it matches with the value