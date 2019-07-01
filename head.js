const assertEqual = require('./assertEqual');

function head(numbers){
    return numbers[0];
} 

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
