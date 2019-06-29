const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

 function eqArrays(arr1,arr2){
      for (let i = 0 ; i < arr1.length; i++){
          
              if(Array.isArray(arr1[i]) !== Array.isArray(arr2[i])){
                  return false;
              }
            } return true;
          }
  


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i of Object.keys(object1)) {
      for (let j of Object.keys(object2)) {
        if (i === j) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

};

const ab = {a :'1' , b: '1'};

const ba = {a:'1' , b: '1'};

const abc = {a : '1' , b: '2', c: '3'};
const cba = {a :['1'] ,b: ['2', '2.4'], c: '3'};

console.log(eqArrays(ab, ba));
