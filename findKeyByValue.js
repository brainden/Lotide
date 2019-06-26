const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  function findKeyByValue (show, genre){
        //if genre is not defined return undefined
        //
  }

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);