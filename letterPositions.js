const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  let results = {};

  sentence.split('').forEach((letter, index) => {
    if (results.letter) {
      results[letter].push(index)
    } else {
      results[letter] = [index]
    }
  })

  sentence.split('').reduce((results, letter, index) => {
    return {
      ...results,
      [letter]: results[letter] ? [...results[letter], index] : [index],
    }
  }, {})

  for(let index = 0; index < sentence.length; index++){
    console.log(sentence[index]);
    const letter = sentence[index];
    if(!results[letter]){
      results[letter] = [index];
    } else {
      results[letter].push(index);
    } 
    console.log(results);
  }
}


console.log(letterPositions("hello"));