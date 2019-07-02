const findKey = function(obj, callB) {
  for (let x in obj) {
    if (callB(obj[x])) {
      return x;
    }
  }
};


 
module.exports = findKey;