
  

// //Implement the function findKey which takes in an object and a callback.
//  It should scan the object and return the first key for which the callback returns a truthy value. 
//  If no key is found, then it should return undefined.

const findKey = function(obj, callB){
    for(let x in obj){
        if(callB(obj[x])){
            return x;
        }
    }
}



// const obj = {  
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }} 


// console.log(
// findKey(obj,  x => x.stars === 2)
// )
    

module.exports = findKey;