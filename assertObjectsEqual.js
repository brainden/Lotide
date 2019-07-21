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

const assertObjectsEqual = function(actual, expected) {
	const inspect = require("util").inspect;
	if (eqObjects(actual, expected)) {
		console.log(
			`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
		);
	} else {
		console.log(
			`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
		);
	}
};

assertObjectsEqual(eqObjects({ 1: 2, 2: 1 }, { 2: 1, 1: 3 }), false);

module.exports = assertObjectsEqual;
