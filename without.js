const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] === itemsToRemove[i]) {
            
      source.slice(source[i]);
    } else if (source[i] !== itemsToRemove[i]) {
            
      newArr.push(source[i]);
    }
  } return newArr;
};

console.log(without([1,2,3,4,5], [1,2,3]));

module.exports = without;