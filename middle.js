
  
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


function middle(arr1){
    if(arr1.length <= 2){
        return [];
    }
   
    else if(arr1.length % 2 === 0 ){
        
      return arr1.slice(arr1.length/2-1, arr1.length/2+1)

    } else {
        let newArr = [];
        let middleInd = Math.round(arr1.length / 2);
    
        newArr.push(arr1[middleInd-1]);
        return newArr;
    }
}


console.log(middle([1,2,4,7,5,6,7,8,8]));