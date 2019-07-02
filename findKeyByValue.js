const findKeyByValue = function(object, value) {
  return Object.keys(object).find((item => object[item] === value));
};

 

module.exports = findKeyByValue;