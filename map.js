const words = ["ground", "control", "to", "major", "tom"];


const map = function(array , callback) {
  results = [];
  for (let item of array) {
    results.push(callback(item));
  }


  return results;

};

module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);


console.log(assertArraysEqual(eqArrays, map));