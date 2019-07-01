const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');



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
        console.log(newArr);
    }
}


console.log(middle([1,2,4,7,5,6,7,8,8]));

module.exports = middle;