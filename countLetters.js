const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const countLetters = function(letters, numOfLetters){
    let results = {};

    for(const item of letters){
       
        var keys = Object.keys(results);
       
        if (keys.includes(item)) {
            results[item] += 1;
        }else {
            results[item] = 1;
        }
     
    }
    console.log(results);
}

 countLetters("hello", undefined);


  