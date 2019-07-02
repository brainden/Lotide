
const assertEqual = require('./assertEqual');


const letterPositions = function(sentence) {
  let results = {};
  for(let index = 0; index < sentence.length; index++){
    const letter = sentence[index];
    if(!results[letter]){
      results[letter] = [index];
    } else {
      results[letter].push(index);
    } 
   console.log( results)
  }
}



module.exports = letterPositions;