/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    var intArray = data;
    var highest = -Infinity;
    var secondHighest = -Infinity;
    var answer = 0;
    for (var i = 0; i < intArray.length; i++){
        if (intArray[i] > highest){
            secondHighest = highest;
            highest = intArray[i];
        }
        else if (intArray[i] === highest || intArray[i]>secondHighest){
            secondHighest = intArray[i]
        }
    }
    answer = highest + secondHighest;
    return answer;
};
  
module.exports = sumLargestNumbers;