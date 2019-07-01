
//const testData = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        } else {
            break;
        }
    }
    return result;
}



//console.log(takeUntil(testData, (num) =>  {return num >= 0}));
module.exports = takeUntil;
