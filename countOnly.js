const countOnly = function(allItems) {
  const results = {};
  
  for (const item of allItems) {
    console.log(item);
  }
  
  return results;
};


//   const firstNames = [
//     "Karl",
//     "Salima",
//     "Agouhanna",
//     "Fang",
//     "Kavith",
//     "Jason",
//     "Salima",
//     "Fang",
//     "Joe"
//   ];
  
//   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

//   result1;
  
module.exports = countOnly;