const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  function eqArrays(arr1,arr2){
      for (let i = 0 ; i < arr1.length; i++){
          console.log(arr1[i]);
              if(arr1[i] !== arr2[i]){
                  return false;
              }
            } return true;
          }
  

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3], true));