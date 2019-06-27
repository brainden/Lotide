const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
 
 let result = {};
 let strSplit = sentence.split('')
 for(let i= 0 ; i< strSplit.length; i++){
   
   result[strSplit[i]] =  [i];
  
   }return result;
 }


console.log(letterPositions("hello"));