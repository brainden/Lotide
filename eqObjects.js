const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i of Object.keys(object1)) {
      for (let j of Object.keys(object2)) {
        if (i === j) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

};


module.exports = eqObjects;