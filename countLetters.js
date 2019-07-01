const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const countLetters = function(words){
  results = {};
  for(let i of words){
    if(!results[i]){
      results[i] = 1;
    } else{
      results[i] += 1
    }
  }console.log(results);
}


  console.log(countLetters("hello!"))