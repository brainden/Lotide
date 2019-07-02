const flatten = function(arr) {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArr.push(arr[i]);
    }
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    }
  } return flattenedArr;
};
console.log(flatten([12,[2,3]]));


module.exports  = flatten;