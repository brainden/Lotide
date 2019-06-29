// //CREATE A RECURSION THAT STARTS ARE 100 AND GOES TO 200 BY INCRIMENTS OF 10


// let number = 100


// while (number <= 200){
// // //IF NUMBER += IS BEFORE CONSOLE.LOG , IT WILL NOT WRITE THE FIRST NUMBER DOWN AND WILL GO PAST LAST CONDITION BY 1 MORE ITTERATION
  
// //   console.log(number);

// // // IF NUMBER += IS AFTER CONSOLE.LOG, IT WILL WRITE THE FIRST ITTERATION AND THEN CONTINUE TO CHECK IF THE CONDITION IS MET.

// //   number += 10;
// // }

// const countToTwohundred = function(number) {
//   if(number <= 200){
//     console.log(number);
//     countToTwohundred(number +10)
//     // countToTwoHundred(number + 10) will worl as a for loop and keep reading itself until the condition [under or = 200 ] returns false;
//   }else if(number > 200){
//     console.log( "I'm a base case, and over 200!")
//   }
// }


// countToTwohundred(100);



// const count = function(arr) {
//   return arr.length;
  
 
// };



// console.log(count([1,2,3,4,5]));
// count([999]);
// count([]);


//I want to add each number with the number beside it
// I can do that from left to right using a for loop


// const sum = function(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// };

// // sum([1,2,3,4,5]);
// // sum([999]);
// // sum([]);


// // const mean = function(arr) {
// //   let total = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     total += arr[i];
// //   }
// //   return Math.round(total / arr.length);
// // };


// // console.log(mean([1,2,3,4,5]));
// // console.log(mean([1,10]));
// // console.log(mean([5]));


// const min = function(arr) {
//   return Math.min(...arr);
// };

// console.log(min([6,2,3,4,9,6,1,0,5]));

// const range = function(arr) {
 
  
//   let max = Math.max(...arr);
//   let min =  Math.min(...arr);

//   let total = max - min;
//   return total;
// };

// console.log(range([6,2,3,4,9,6,1,0,5]));

// const median = function(arr) {                         COME BACK TO THIS ONE
//   for (let i = 0 ; i < arr.length; i++){
//     let half = arr.length /2;
//     if(i % 2 === 0){
//       let result = (half[i], half[i++]);
//       return result;
//     }
//   }
// }


// console.log(median([6,2,3,4,9,6,1,0,5]));

// const mode = function(arr) {                               come back to this one
//   let most = 0;
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0 ; j < arr.length; i++){
//       if (arr[i] === arr[j]){
//         most++
//         newArr.push(arr[i]);
//         console.log(newArr)
//       }
//     }
//   }
// };


// console.log(mode([6,2,3,4,9,6,1,0,5]));


//if ...arr[i] is 2 or more push




/*function sum(fromN, toN) {
  if(fromN === toN){
    return fromN
  }
  return fromN + sum(fromN + 1, toN)
}


console.log(sum(2,4));

output should be 2+3+4 =9

ADD fromN and toN with all the numbers between them;

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1); // WHEN IT HITS 1 THE IF STATEMENT RUNS AND "RETURN N + 1"
}

console.log(sumToOne(4));
*/



/*                                PRINTS OUT ITEMS ARRAY WITH NESTED ARRAYS
function printItems(array) {
  for (let index of array) {
    if (Array.isArray(index)) {
      printItems(index);
    } else {
      console.log(index);
    }
  }
}
  
const array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);
*/


/*                                                  Taking nested arrays and taking the sum of each number in the array

function sum(a) {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result;
}

assert.equal(sum([1, -5, 100]), 96);

*/

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
// const median = function(arr) {

// }
 


/* MODE - the most frequently occurring number
*      - for this test, the provided lists will only have a single value for the mode
*
* For example:
*
*    mode([6,2,3,4,9,6,1,0,5]);
*
* Returns:
*
*    6
 
const mode = function(arr) {                    //THIS CAN COUNT HOW MANY TIMES AN VALUE EXISTS IN AN ARRY BY PUTTING IT IN OBJECTS
  let counts = {};
  let compare = 0;
  let mostFrequent;

  for (let i of arr) {
    let num = arr[i];
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num] = counts[num] + 1;
    
    }
    if (counts[num] > compare) {
      compare = counts[num];
      mostFrequent = arr[i];
    }
    return mostFrequent;
  }
};

console.log(mode([6,2,3,4,9,6,1,0,5]));

*/