const countLetters = function(words){
  results = {};
  for(let i of words){
    if(!results[i]){
      results[i] = 1;
    } else{
      results[i] += 1
    }
  }console.log(results);
}

module.exports = countLetters;

  // console.log(countLetters("hello!"))