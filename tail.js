const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    }
  };
function tail1(arr2){ 

for(let i=0; i < arr2.length; i++){
  let newArr = [];
  if(arr2[i] !== arr2[0]){
    newArr.push(arr2[i]);
  } 
  
console.log(newArr);
}
}

console.log(tail1([1,2,3,4,5,6]));