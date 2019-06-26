
  
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
    }
};

function eqArrays(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0 ; i < arr1.length; i++){
         if(arr1[i] !== arr2[i]){
            return false;
        }
    } return true;
}

function without(source, itemsToRemove){
    let newArr = [];
    for(let i=0; i< source.length ; i++){
        if(source[i] === itemsToRemove[i]){
            
            source.slice(source[i])
        }else if(source[i] !== itemsToRemove[i]){
            
            newArr.push(source[i]);
        }
    }return newArr;
}

console.log(without([1,2,3,4,5], [1,2,3]));